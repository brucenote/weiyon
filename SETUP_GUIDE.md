# Supabase 設定指南

## 步驟 1: 建立 Supabase 帳號

1. 前往 [supabase.com](https://supabase.com)
2. 點擊 "Start your project"
3. 使用 GitHub 帳號登入
4. 建立新專案（選擇免費方案即可）
5. 設定密碼，等待專案建立（約2分鐘）

## 步驟 2: 取得 API 設定值

1. 在 Supabase 專案中，點擊左側 "Settings"
2. 點擊 "API"
3. 複製以下資訊：
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public** key: `eyJhbGci...`

## 步驟 3: 設定資料庫 Schema

1. 在 Supabase，左側點擊 "SQL Editor"
2. 點擊 "New Query"
3. 複製 `supabase/schema.sql` 的內容貼上
4. 點擊 "Run" 執行

## 步驟 4: 設定環境變數

建立 `.env.local` 檔案：

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 步驟 5: 本地端測試

```bash
npm run dev
```

---

## 已建立的檔案

| 檔案 | 說明 |
|------|------|
| `src/lib/supabase.ts` | Supabase 用戶端設定 |
| `src/app/api/contact/route.ts` | 聯絡表單 API |
| `src/app/api/blog/route.ts` | 部落格列表 API |
| `src/app/api/blog/[slug]/route.ts` | 部落格文章 API |
| `supabase/schema.sql` | 資料庫 Schema |
| `.env.example` | 環境變數範例 |
