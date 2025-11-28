// GitHub 儲存功能
// 使用 GitHub API 將許願清單儲存到 GitHub Gist

let githubConfig = {
    token: '',
    gistId: '',
    enabled: false
};

// 載入設定
function loadGitHubConfig() {
    try {
        const saved = localStorage.getItem('githubConfig');
        if (saved) {
            githubConfig = JSON.parse(saved);
        }
    } catch (error) {
        console.error('載入 GitHub 設定失敗:', error);
    }
}

// 儲存設定
function saveGitHubConfig() {
    try {
        localStorage.setItem('githubConfig', JSON.stringify(githubConfig));
    } catch (error) {
        console.error('儲存 GitHub 設定失敗:', error);
    }
}

// 初始化
loadGitHubConfig();

// 儲存許願清單到 GitHub Gist
async function saveToGitHub(wishlist) {
    if (!githubConfig.enabled || !githubConfig.token) {
        throw new Error('GitHub 功能未啟用或未設定 Token');
    }
    
    const data = {
        wishlist: wishlist,
        timestamp: new Date().toISOString(),
        total: wishlist.reduce((sum, item) => sum + item.price, 0),
        count: wishlist.length
    };
    
    const content = JSON.stringify(data, null, 2);
    const filename = 'wishlist.json';
    
    const gistData = {
        description: `瓦城許願清單 - ${new Date().toLocaleString('zh-TW')}`,
        public: false,
        files: {
            [filename]: {
                content: content
            }
        }
    };
    
    let url;
    let method;
    
    if (githubConfig.gistId) {
        // 更新現有的 Gist
        url = `https://api.github.com/gists/${githubConfig.gistId}`;
        method = 'PATCH';
    } else {
        // 建立新的 Gist
        url = 'https://api.github.com/gists';
        method = 'POST';
    }
    
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Authorization': `token ${githubConfig.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify(gistData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP ${response.status}`);
        }
        
        const result = await response.json();
        
        // 儲存 Gist ID（如果是新建立的）
        if (!githubConfig.gistId && result.id) {
            githubConfig.gistId = result.id;
            saveGitHubConfig();
        }
        
        return result;
    } catch (error) {
        console.error('GitHub API 錯誤:', error);
        throw error;
    }
}

// 從 GitHub Gist 載入許願清單
async function loadFromGitHub() {
    if (!githubConfig.enabled || !githubConfig.token || !githubConfig.gistId) {
        throw new Error('GitHub 功能未啟用或未設定');
    }
    
    try {
        const response = await fetch(`https://api.github.com/gists/${githubConfig.gistId}`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const gist = await response.json();
        const file = Object.values(gist.files)[0];
        
        if (file && file.content) {
            const data = JSON.parse(file.content);
            return data.wishlist || [];
        }
        
        return [];
    } catch (error) {
        console.error('載入 GitHub Gist 失敗:', error);
        throw error;
    }
}

// 設定 GitHub Token 和 Gist ID
function setGitHubConfig(token, gistId = '') {
    githubConfig.token = token;
    githubConfig.gistId = gistId;
    githubConfig.enabled = !!token;
    saveGitHubConfig();
}

// 取得 GitHub 設定
function getGitHubConfig() {
    return { ...githubConfig };
}

// 測試 GitHub 連線
async function testGitHubConnection() {
    if (!githubConfig.token) {
        throw new Error('未設定 GitHub Token');
    }
    
    try {
        const response = await fetch('https://api.github.com/user', {
            headers: {
                'Authorization': `token ${githubConfig.token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const user = await response.json();
        return {
            success: true,
            username: user.login,
            name: user.name
        };
    } catch (error) {
        throw new Error('GitHub 連線失敗：' + error.message);
    }
}

