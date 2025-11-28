@echo off
chcp 65001 >nul
echo ========================================
echo 瓦城許願菜單 - 推送到 GitHub
echo ========================================
echo.

REM 檢查是否為 git 儲存庫
if not exist .git (
    echo 初始化 Git 儲存庫...
    git init
    git branch -M main
)

REM 檢查遠端設定
git remote -v >nul 2>&1
if errorlevel 1 (
    echo 設定遠端儲存庫...
    git remote add origin https://github.com/willes/menu.git
) else (
    echo 更新遠端儲存庫 URL...
    git remote set-url origin https://github.com/willes/menu.git
)

echo.
echo 加入所有檔案...
git add .

echo.
echo 提交變更...
git commit -m "Update: Wishlist menu website" --allow-empty

echo.
echo ========================================
echo 準備推送到 GitHub...
echo ========================================
echo.
echo 注意：接下來會要求輸入認證資訊
echo - 用戶名：輸入你的 GitHub 用戶名
echo - 密碼：輸入 Personal Access Token（不是 GitHub 密碼）
echo.
echo 如果還沒有 Personal Access Token：
echo 1. 前往 https://github.com/settings/tokens
echo 2. 點擊 "Generate new token (classic)"
echo 3. 勾選 repo 權限
echo 4. 產生並複製 token
echo.
pause

echo.
echo 正在推送...
git push -u origin main --force

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ 推送成功！
    echo ========================================
    echo.
    echo 接下來請啟用 GitHub Pages：
    echo 1. 前往：https://github.com/willes/menu/settings/pages
    echo 2. Source 選擇：Deploy from a branch
    echo 3. Branch 選擇：main，資料夾選擇：/ (root)
    echo 4. 點擊 Save
    echo 5. 等待幾分鐘後，網站網址：
    echo    https://willes.github.io/menu/
) else (
    echo.
    echo ========================================
    echo ❌ 推送失敗
    echo ========================================
    echo.
    echo 可能的原因：
    echo 1. 儲存庫不存在或沒有權限
    echo 2. 認證資訊錯誤
    echo 3. 網路連線問題
    echo.
    echo 請檢查：
    echo - 儲存庫是否存在：https://github.com/willes/menu
    echo - Personal Access Token 是否正確
)

echo.
pause

