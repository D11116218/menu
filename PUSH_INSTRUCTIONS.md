# 推送到 GitHub 的步驟

## 方法 1：使用 Personal Access Token（推薦）

1. **建立 Personal Access Token**
   - 前往：https://github.com/settings/tokens
   - 點擊 "Generate new token (classic)"
   - 勾選 `repo` 權限
   - 點擊 "Generate token"
   - **複製產生的 token**（只會顯示一次！）

2. **執行推送**
   - 雙擊 `push-to-github.bat` 或在終端機執行：
   ```bash
   git push -u origin main --force
   ```
   - 當要求輸入用戶名時：輸入你的 GitHub 用戶名
   - 當要求輸入密碼時：**貼上剛才複製的 token**（不是你的 GitHub 密碼）

## 方法 2：使用 GitHub Desktop

1. 安裝 GitHub Desktop
2. 開啟 GitHub Desktop
3. 選擇 "File" → "Add Local Repository"
4. 選擇這個資料夾
5. 點擊 "Publish repository" 或 "Push origin"

## 方法 3：使用 VS Code

1. 在 VS Code 中開啟這個資料夾
2. 使用 Source Control 面板
3. 點擊 "..." → "Push" → "Force Push"

## 推送完成後，啟用 GitHub Pages

1. 前往：https://github.com/willes/menu/settings/pages
2. 在 "Source" 選擇 "Deploy from a branch"
3. 選擇分支：`main`
4. 選擇資料夾：`/ (root)`
5. 點擊 "Save"
6. 等待幾分鐘，你的網站網址會是：
   **https://willes.github.io/menu/**

