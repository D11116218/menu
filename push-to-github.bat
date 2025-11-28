@echo off
echo 正在推送到 GitHub...
echo.
echo 注意：如果要求輸入認證資訊：
echo - 用戶名：輸入你的 GitHub 用戶名
echo - 密碼：輸入你的 Personal Access Token（不是 GitHub 密碼）
echo.
git push -u origin main --force
echo.
echo 如果推送成功，請前往 GitHub 設定 GitHub Pages
echo 網址：https://github.com/willes/menu/settings/pages
pause

