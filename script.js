// 許願清單資料結構
let wishlist = [];
let currentCategory = 'all';
let searchQuery = '';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadWishlist();
    setupEventListeners();
    updateWishCount();
    renderMenu();
});

// 設定事件監聽器
function setupEventListeners() {
    // 菜單項目點擊事件
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            toggleWish(this);
        });
    });

    // 分類篩選
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            renderMenu();
        });
    });

    // 搜尋功能
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase().trim();
        renderMenu();
    });

    // 清除搜尋
    document.getElementById('clearSearch').addEventListener('click', function() {
        searchInput.value = '';
        searchQuery = '';
        renderMenu();
    });

    // 查看統整結果
    document.getElementById('viewSummary').addEventListener('click', function() {
        showSummary();
    });

    // 快速匯出 Excel
    document.getElementById('quickExport').addEventListener('click', function() {
        exportToExcel();
    });

    // 確認提交
    document.getElementById('confirmSubmit').addEventListener('click', function() {
        submitWishlist();
    });

    // 模態框關閉
    const modal = document.getElementById('summaryModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 模態框內的按鈕
    document.getElementById('exportExcel').addEventListener('click', function() {
        exportToExcel();
    });

    document.getElementById('clearWishlist').addEventListener('click', function() {
        if (confirm('確定要清空許願清單嗎？')) {
            clearWishlist();
        }
    });
}

// 切換許願狀態
function toggleWish(itemElement) {
    const itemName = itemElement.getAttribute('data-name');
    const itemPrice = parseInt(itemElement.getAttribute('data-price'));
    
    const index = wishlist.findIndex(item => item.name === itemName);
    
    if (index > -1) {
        // 移除許願
        wishlist.splice(index, 1);
        itemElement.classList.remove('wished');
    } else {
        // 加入許願
        wishlist.push({
            name: itemName,
            price: itemPrice
        });
        itemElement.classList.add('wished');
    }
    
    saveWishlist();
    updateWishCount();
}

// 更新許願數顯示
function updateWishCount() {
    const count = wishlist.length;
    document.getElementById('wishCount').textContent = `許願數: ${count}`;
    
    // 更新所有菜單項目的許願狀態
    document.querySelectorAll('.menu-item').forEach(item => {
        const itemName = item.getAttribute('data-name');
        const isWished = wishlist.some(w => w.name === itemName);
        if (isWished) {
            item.classList.add('wished');
        } else {
            item.classList.remove('wished');
        }
    });
}

// 渲染菜單（根據分類和搜尋）
function renderMenu() {
    const sections = document.querySelectorAll('.menu-section');
    
    sections.forEach(section => {
        const category = section.getAttribute('data-category');
        const items = section.querySelectorAll('.menu-item');
        let visibleCount = 0;
        
        items.forEach(item => {
            const itemName = item.getAttribute('data-name').toLowerCase();
            const matchesCategory = currentCategory === 'all' || category === currentCategory;
            const matchesSearch = !searchQuery || itemName.includes(searchQuery);
            
            if (matchesCategory && matchesSearch) {
                item.style.display = '';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // 如果分類不匹配或沒有可見項目，隱藏整個區塊
        if (currentCategory !== 'all' && category !== currentCategory) {
            section.style.display = 'none';
        } else if (visibleCount === 0 && searchQuery) {
            section.style.display = 'none';
        } else {
            section.style.display = '';
        }
    });
}

// 顯示統整結果
function showSummary() {
    const modal = document.getElementById('summaryModal');
    const content = document.getElementById('summaryContent');
    
    if (wishlist.length === 0) {
        content.innerHTML = '<p style="text-align: center; color: #666; font-size: 1.2em; padding: 40px;">還沒有許願項目，快去選擇你喜歡的菜色吧！</p>';
    } else {
        let html = '';
        let total = 0;
        
        wishlist.forEach((item, index) => {
            total += item.price;
            html += `
                <div class="summary-item">
                    <span class="summary-item-name">${index + 1}. ${item.name}</span>
                    <span class="summary-item-price">$${item.price}</span>
                </div>
            `;
        });
        
        html += `
            <div class="summary-total">
                總計: $${total} (共 ${wishlist.length} 項)
            </div>
        `;
        
        content.innerHTML = html;
    }
    
    modal.style.display = 'block';
}

// 匯出 Excel
function exportToExcel() {
    if (wishlist.length === 0) {
        alert('許願清單是空的，無法匯出！');
        return;
    }
    
    // 準備資料
    const data = [
        ['序號', '菜色名稱', '價格']
    ];
    
    let total = 0;
    wishlist.forEach((item, index) => {
        data.push([index + 1, item.name, item.price]);
        total += item.price;
    });
    
    data.push(['', '總計', total]);
    data.push(['', '項目數', wishlist.length]);
    
    // 建立工作簿
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // 設定欄寬
    ws['!cols'] = [
        { wch: 10 },  // 序號
        { wch: 30 }, // 菜色名稱
        { wch: 15 }  // 價格
    ];
    
    // 加入工作表
    XLSX.utils.book_append_sheet(wb, ws, '許願清單');
    
    // 產生檔名（包含日期時間）
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
    const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '');
    const filename = `瓦城許願清單_${dateStr}_${timeStr}.xlsx`;
    
    // 下載
    XLSX.writeFile(wb, filename);
    
    // 顯示成功訊息
    const statusEl = document.getElementById('submitStatus');
    statusEl.textContent = `✅ 已成功匯出 Excel 檔案：${filename}`;
    statusEl.style.color = '#4caf50';
    
    setTimeout(() => {
        statusEl.textContent = '';
    }, 3000);
}

// 提交許願清單
function submitWishlist() {
    if (wishlist.length === 0) {
        alert('許願清單是空的，請先選擇一些菜色！');
        return;
    }
    
    const statusEl = document.getElementById('submitStatus');
    
    // 如果有 GitHub 儲存功能，使用它
    if (typeof saveToGitHub === 'function') {
        statusEl.textContent = '⏳ 正在儲存到 GitHub...';
        statusEl.style.color = 'white';
        
        saveToGitHub(wishlist)
            .then(() => {
                statusEl.textContent = '✅ 許願清單已成功提交並儲存到 GitHub！';
                statusEl.style.color = '#4caf50';
            })
            .catch(error => {
                statusEl.textContent = '❌ 儲存失敗：' + error.message;
                statusEl.style.color = '#ff6b6b';
                console.error('GitHub 儲存錯誤:', error);
            });
    } else {
        // 否則只顯示本地儲存成功
        statusEl.textContent = '✅ 許願清單已成功提交！（已儲存到本地）';
        statusEl.style.color = '#4caf50';
    }
    
    setTimeout(() => {
        statusEl.textContent = '';
    }, 5000);
}

// 清空許願清單
function clearWishlist() {
    wishlist = [];
    saveWishlist();
    updateWishCount();
    
    const modal = document.getElementById('summaryModal');
    modal.style.display = 'none';
    
    const statusEl = document.getElementById('submitStatus');
    statusEl.textContent = '🗑️ 許願清單已清空';
    statusEl.style.color = '#ff6b6b';
    
    setTimeout(() => {
        statusEl.textContent = '';
    }, 2000);
}

// 儲存許願清單到 localStorage
function saveWishlist() {
    try {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (error) {
        console.error('儲存許願清單失敗:', error);
    }
}

// 從 localStorage 載入許願清單
function loadWishlist() {
    try {
        const saved = localStorage.getItem('wishlist');
        if (saved) {
            wishlist = JSON.parse(saved);
        }
    } catch (error) {
        console.error('載入許願清單失敗:', error);
        wishlist = [];
    }
}

