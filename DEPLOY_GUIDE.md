# 部署指南

## 步驟 1: 建立 GitHub  Repository

1. 前往 [github.com](https://github.com)
2. 點擊右上角 "+" → "New repository"
3. 設定：
   - Repository name: `weiyon-website`
   - Description: `偉勇工業社官方網站`
   - Private / Public: 自行選擇
4. **不要**勾選 "Add a README"
5. 點擊 "Create repository"

## 步驟 2: 推送程式碼到 GitHub

在專案資料夾執行：

```bash
git remote add origin https://github.com/YOUR_USERNAME/weiyon-website.git
git branch -M main
git push -u origin main
```

## 步驟 3: 連接到 Vercel

### 方式 A: 從 GitHub 匯入
1. 前往 [vercel.com](https://vercel.com)
2. 登入（可用 GitHub 帳號）
3. 點擊 "Add New..." → "Project"
4. 選擇 "Import Git Repository"
5. 找到 `weiyon-website` 專案
6. 點擊 "Import"

### 方式 B: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

## 步驟 4: 設定環境變數

在 Vercel project settings 中新增：

| Variable Name | Value |
|---------------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 您的 anon key |

## 步驟 5: 設定 Custom Domain

1. 在 Vercel 中進入專案
2. 點擊 "Settings" → "Domains"
3. 輸入 `weiyon.com`
4. 按指示設定 DNS 記錄

## 步驟 6: 設定 DNS

在您的網域註冊商設定：

| Type | Name | Value |
|------|------|-------|
| CNAME | www | `cname.vercel-dns.com` |
| CNAME | @ | `cname.vercel-dns.com` |

（或者使用 Vercel 提供的特定 DNS 設定）

---

## 完成！

部署完成後，訪問 `weiyon.com` 即可看到網站。

每次推送程式碼到 `main` branch，Vercel 都會自動部署。

---

## 專案結構

```
weiyon-website/
├── src/
│   ├── app/                    # 頁面
│   │   ├── page.tsx           # 首頁
│   │   ├── about/page.tsx      # 關於我們
│   │   ├── products/page.tsx   # 產品服務
│   │   ├── gallery/page.tsx    # 實績案例
│   │   ├── blog/page.tsx      # 部落格
│   │   ├── contact/page.tsx   # 聯絡我們
│   │   └── api/               # API 路由
│   ├── components/            # 元件
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── lib/                   # 工具函式
│       ├── supabase.ts        # Supabase 用戶端
│       └── utils.ts
├── public/                    # 靜態資源
├── supabase/
│   └── schema.sql            # 資料庫 Schema
└── .env.example              # 環境變數範例
```

---

## 本地開發

```bash
npm run dev
# 前往 http://localhost:3000
```

## 環境變數

複製 `.env.example` 為 `.env.local` 並填入實際值：
```bash
cp .env.example .env.local
```
