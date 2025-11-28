<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>瓦城許願菜單</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>🍽️ 瓦城許願菜單</h1>
            <p class="subtitle">探索美味泰式料理</p>
            <div class="header-actions">
                <button id="viewSummary" class="summary-btn">📊 查看統整結果</button>
                <button id="quickExport" class="summary-btn">📥 快速匯出 Excel</button>
                <a href="settings.html" class="summary-btn" style="text-decoration: none; display: inline-block;">⚙️ 設定</a>
                <span id="wishCount" class="wish-count">許願數: 0</span>
            </div>
        </header>

        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="搜尋菜色名稱...">
            <button id="clearSearch" class="clear-btn">清除</button>
        </div>

        <div class="category-filter">
            <button class="filter-btn active" data-category="all">全部</button>
            <button class="filter-btn" data-category="十大明星菜色">十大明星菜色</button>
            <button class="filter-btn" data-category="月亮">月亮</button>
            <button class="filter-btn" data-category="酥烤">酥烤</button>
            <button class="filter-btn" data-category="沙律">沙律</button>
            <button class="filter-btn" data-category="海鮮">海鮮</button>
            <button class="filter-btn" data-category="牛/豬/雞">牛/豬/雞</button>
            <button class="filter-btn" data-category="蔬菜">蔬菜</button>
            <button class="filter-btn" data-category="主食">主食</button>
            <button class="filter-btn" data-category="湯">湯</button>
            <button class="filter-btn" data-category="甜點">甜點</button>
            <button class="filter-btn" data-category="特色冰飲">特色冰飲</button>
            <button class="filter-btn" data-category="咖啡/熱茶">咖啡/熱茶</button>
            <button class="filter-btn" data-category="啤酒">啤酒</button>
        </div>

        <div id="menuContainer" class="menu-container">
            <!-- 十大明星菜色 -->
            <section class="menu-section" data-category="十大明星菜色">
                <h2 class="category-title">⭐ 十大明星菜色</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">原味月亮</div>
                        <div class="item-price">$398</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">檸檬清蒸魚</div>
                        <div class="item-price">$520</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">綠咖哩椰汁雞</div>
                        <div class="item-price">$320</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">冬粉鮮蝦煲</div>
                        <div class="item-price">$520</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">主廚BBQ松阪豬</div>
                        <div class="item-price">$450</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">辣炒牛肉</div>
                        <div class="item-price">$360</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">酸辣蝦湯</div>
                        <div class="item-price">$365</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">辣炒空心菜</div>
                        <div class="item-price">$225</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰式咖哩雞</div>
                        <div class="item-price">$350</div>
                    </div>
                </div>
            </section>

            <!-- 月亮 -->
            <section class="menu-section" data-category="月亮">
                <h2 class="category-title">🌙 月亮</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">原味月亮</div>
                        <div class="item-price">$398</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">香辣月亮</div>
                        <div class="item-price">$398</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">全麥月亮</div>
                        <div class="item-price">$398</div>
                    </div>
                </div>
            </section>

            <!-- 酥烤 -->
            <section class="menu-section" data-category="酥烤">
                <h2 class="category-title">🔥 酥烤</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">蝦滋圈</div>
                        <div class="item-price">$390</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">金錢蝦餅</div>
                        <div class="item-price">$360</div>
                    </div>
                </div>
            </section>

            <!-- 沙律 (涼拌) -->
            <section class="menu-section" data-category="沙律">
                <h2 class="category-title">🥗 沙律 (涼拌)</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">主廚海鮮什蔬沙律</div>
                        <div class="item-price">$395</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">原味青木瓜沙律</div>
                        <div class="item-price">$280</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">酥酥青木瓜溫沙律</div>
                        <div class="item-price">$290</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">香茅蝦沙律</div>
                        <div class="item-price">$335</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰式中卷沙律</div>
                        <div class="item-price">$380</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">大薄片沙律</div>
                        <div class="item-price">$320</div>
                    </div>
                </div>
            </section>

            <!-- 海鮮 -->
            <section class="menu-section" data-category="海鮮">
                <h2 class="category-title">🦐 海鮮</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">泰式酥炸軟殼蟹</div>
                        <div class="item-price">$580</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">辣炒海瓜子</div>
                        <div class="item-price">$435</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰味鳳梨蝦球</div>
                        <div class="item-price">$350</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">卻克里王子魚</div>
                        <div class="item-price">$520</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">檸檬清蒸魚</div>
                        <div class="item-price">$520</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">湄南跳魚</div>
                        <div class="item-price">$520</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">酸子辣汁炸鱸魚</div>
                        <div class="item-price">$520</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">冬粉鮮蝦煲</div>
                        <div class="item-price">$520</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰式鐵板香辣海鮮</div>
                        <div class="item-price">$450</div>
                    </div>
                </div>
            </section>

            <!-- 牛/豬/雞 -->
            <section class="menu-section" data-category="牛/豬/雞">
                <h2 class="category-title">🥩 牛/豬/雞</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">辣炒牛肉 (美國/澳洲)</div>
                        <div class="item-price">$360</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">鐵板牛柳 (美國牛肉)</div>
                        <div class="item-price">$360</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰北香烤牛肉</div>
                        <div class="item-price">$450</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">辣炒豬肉</div>
                        <div class="item-price">$320</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">三色糖醋排骨</div>
                        <div class="item-price">$320</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">主廚BBQ松阪豬</div>
                        <div class="item-price">$450</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">辣炒雞肉</div>
                        <div class="item-price">$320</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">風味椒麻雞</div>
                        <div class="item-price">$350</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">蝦醬雞翅</div>
                        <div class="item-price">$300</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">香葉包雞 (單個)</div>
                        <div class="item-price">$60</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰北當紅炸子雞</div>
                        <div class="item-price">$365</div>
                    </div>
                </div>
            </section>

            <!-- 蔬菜 -->
            <section class="menu-section" data-category="蔬菜">
                <h2 class="category-title">🥬 蔬菜</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">蝦醬空心菜</div>
                        <div class="item-price">$225</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">香炒燻肉高麗菜 (辣/不辣)</div>
                        <div class="item-price">$250</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">辣炒空心菜</div>
                        <div class="item-price">$195</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">蝦醬四季豆</div>
                        <div class="item-price">$240</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">蝦醬高麗菜</div>
                        <div class="item-price">$225</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰味茄子</div>
                        <div class="item-price">$195</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">什錦蔬菜</div>
                        <div class="item-price">$225</div>
                    </div>
                </div>
            </section>

            <!-- 主食 -->
            <section class="menu-section" data-category="主食">
                <h2 class="category-title">🍜 主食</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">泰式炒河粉</div>
                        <div class="item-price">$280</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">酸辣公仔麵</div>
                        <div class="item-price">$260</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">薄荷公仔麵</div>
                        <div class="item-price">$260</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">鮮蝦炒飯</div>
                        <div class="item-price">$280</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰式鳳梨鮮蝦炒飯</div>
                        <div class="item-price">$395</div>
                    </div>
                </div>
            </section>

            <!-- 湯 -->
            <section class="menu-section" data-category="湯">
                <h2 class="category-title">🍲 湯</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">酸辣蝦湯</div>
                        <div class="item-price">$365</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">酸辣海鮮湯</div>
                        <div class="item-price">$385</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">蟹肉玉米湯</div>
                        <div class="item-price">$320</div>
                    </div>
                </div>
            </section>

            <!-- 甜點 -->
            <section class="menu-section" data-category="甜點">
                <h2 class="category-title">🍰 甜點</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">金鑽鳳梨柚香荔枝冰</div>
                        <div class="item-price">$180</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">摩摩喳喳 (冰/熱)</div>
                        <div class="item-price">$120</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">芋香黑糯米 (冰/熱)</div>
                        <div class="item-price">$120</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">椰香石榴冰</div>
                        <div class="item-price">$120</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">龍眼冰</div>
                        <div class="item-price">$120</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">什錦水果冰</div>
                        <div class="item-price">$120</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">椰漿豆沙 (冰/熱)</div>
                        <div class="item-price">$120</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">椰漿西米露 (冰/熱)</div>
                        <div class="item-price">$120</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">椰香芋珍珠 (熱)</div>
                        <div class="item-price">$120</div>
                    </div>
                </div>
            </section>

            <!-- 特色冰飲 -->
            <section class="menu-section" data-category="特色冰飲">
                <h2 class="category-title">🥤 特色冰飲</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">泰式珍珠奶茶 (冰/熱)</div>
                        <div class="item-price">$145</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">柚香翡翠綠茶</div>
                        <div class="item-price">$130</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">冰鎮檸檬香綠茶</div>
                        <div class="item-price">$130</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰國奶茶 (冰/熱)</div>
                        <div class="item-price">$130</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰式珍珠綠奶茶</div>
                        <div class="item-price">$145</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰式紅寶石綠奶茶</div>
                        <div class="item-price">$155</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">柳橙汁</div>
                        <div class="item-price">$130</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">可爾必思</div>
                        <div class="item-price">$80</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">泰式綠奶茶</div>
                        <div class="item-price">$130</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">橙翠茉莉綠茶</div>
                        <div class="item-price">$145</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">椰子汁</div>
                        <div class="item-price">$130</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">芒果汁</div>
                        <div class="item-price">$130</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">檸檬汁</div>
                        <div class="item-price">$130</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">沛綠雅礦泉水</div>
                        <div class="item-price">$100</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">雪碧</div>
                        <div class="item-price">$60</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">可口可樂</div>
                        <div class="item-price">$60</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">可口可樂Zero</div>
                        <div class="item-price">$60</div>
                    </div>
                </div>
            </section>

            <!-- 咖啡/熱茶 -->
            <section class="menu-section" data-category="咖啡/熱茶">
                <h2 class="category-title">☕ 咖啡/熱茶</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">熱茶 (四種口味)</div>
                        <div class="item-price">$90</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">越南咖啡 (冰/熱)</div>
                        <div class="item-price">$99</div>
                    </div>
                </div>
            </section>

            <!-- 啤酒 -->
            <section class="menu-section" data-category="啤酒">
                <h2 class="category-title">🍺 啤酒</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <div class="item-name">泰國勝獅啤酒</div>
                        <div class="item-price">$100</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">海尼根啤酒</div>
                        <div class="item-price">$100</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">麒麟啤酒</div>
                        <div class="item-price">$100</div>
                    </div>
                    <div class="menu-item">
                        <div class="item-name">台灣金牌啤酒</div>
                        <div class="item-price">$120</div>
                    </div>
                </div>
            </section>
        </div>
        
        <!-- 確認按鈕區域 -->
        <div class="confirm-section" style="margin-top: 40px; margin-bottom: 40px; padding: 30px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
            <h2 style="color: white; margin-bottom: 20px; font-size: 24px;">完成許願了嗎？</h2>
            <button id="confirmSubmit" class="confirm-btn" style="background: white; color: #667eea; padding: 15px 50px; border: none; border-radius: 50px; font-size: 18px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.3); transition: all 0.3s;">
                ✅ 確認提交許願清單
            </button>
            <p id="submitStatus" style="margin-top: 20px; color: white; font-size: 16px; min-height: 24px;"></p>
        </div>
    </div>

    <!-- SheetJS 庫用於生成 Excel 文件 -->
    <script src="https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js"></script>
    <!-- GitHub 儲存功能 -->
    <script src="github-storage.js"></script>
    <script src="script.js"></script>
</body>
</html>

