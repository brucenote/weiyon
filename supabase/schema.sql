-- Supabase Database Schema for Weiyon Industry Website
-- Run this in the Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Blog Posts Table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  category TEXT DEFAULT '技術分享',
  image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Submissions Table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Blog Posts (Public read)
CREATE POLICY "Public can read blog posts" ON blog_posts
  FOR SELECT USING (true);

-- RLS Policies for Contact Submissions (Authenticated insert only)
CREATE POLICY "Anyone can submit contact form" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, category, published_at) VALUES
(
  'CNC加工技術在航太產業的應用與展望',
  'cnc-machining-aerospace-industry',
  '隨著航太產業對零件精度要求日益提升，CNC精密加工技術成為關鍵製造能力。本文探討航太零件加工的技術挑戰與解決方案。',
  '航太產業對零件的要求極為嚴苛，不僅需要高精度，還需要優異的表面品質和材料特性。隨著飛機和太空載具設計的演進，CNC加工技術持續扮演關鍵角色...',
  '技術分享',
  '2026-04-15'
),
(
  '半導體設備零件的表面處理技術',
  'semiconductor-equipment-surface-treatment',
  '半導體設備零件需要優異的耐磨耗與耐腐蝕性能，表面處理技術的選擇至關重要。本文介紹幾種常用的表面處理方法。',
  '在半導體製程中，設備零件往往暴露於惡劣的環境中，包括高溫、腐蝕性氣體和等離子體衝擊。因此，表面處理技術的選擇成為確保設備壽命的關鍵...',
  '技術分享',
  '2026-03-28'
),
(
  '金屬材料知識：鋁合金與鈦合金的特性比較',
  'aluminum-vs-titanium-alloy-comparison',
  '鋁合金與鈦合金是工業製造中最常用的兩種金屬材料，本文分析兩者的特性差異及各自適合的應用場景。',
  '鋁合金和鈦合金各有其獨特的優勢和應用場景。鋁合金具有輕量化和良好加工性的優勢，而鈦合金則以其優異的強度重量比和耐腐蝕性能著稱...',
  '知識庫',
  '2026-02-20'
);
