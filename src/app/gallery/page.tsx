import { Metadata } from "next";
import { Image as ImageIcon, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "實績案例 | 偉勇工業社",
  description: "展示偉勇工業社多年來的精密加工成果，包含半導體設備、航太零件、汽車配件等各類型產品",
};

const categories = [
  "全部",
  "半導體設備",
  "航太零件",
  "汽車配件",
  "自動化組件",
  "氣壓缸零件",
];

const projects = [
  {
    id: 1,
    category: "半導體設備",
    title: "半導體蝕刻機關鍵零件",
    description: "高精度鈦合金零件，應用於半導體蝕刻設備",
  },
  {
    id: 2,
    category: "航太零件",
    title: "無人機螺旋槳葉片",
    description: "碳纖維複合材料加工，輕量化設計",
  },
  {
    id: 3,
    category: "汽車配件",
    title: "引擎傳動齒輪組",
    description: "精密齒輪加工，符合汽車工業標準",
  },
  {
    id: 4,
    category: "自動化組件",
    title: "機器人關節軸承",
    description: "工業機器人關節專用高精度軸承",
  },
  {
    id: 5,
    category: "氣壓缸零件",
    title: "高壓液壓缸活塞桿",
    description: "表面硬化處理，耐磨耗設計",
  },
  {
    id: 6,
    category: "半導體設備",
    title: "真空腔體組件",
    description: "半導體真空系統關鍵密封件",
  },
  {
    id: 7,
    category: "航太零件",
    title: "航太鋁合金結構件",
    description: "6061-T6鋁合金，符合航太規範",
  },
  {
    id: 8,
    category: "自動化組件",
    title: "線性滑軌固定座",
    description: "CNC加工線性滑軌定位座",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6">
              實績案例
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)]">
              多年累積的精密加工經驗，為各產業客戶打造優質零件
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <Filter className="w-4 h-4" />
              篩選分類：
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    category === "全部"
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-[var(--color-accent)] opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-[var(--color-primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">查看詳情</span>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 border border-[var(--color-border-strong)] text-[var(--color-text-primary)] font-medium rounded-lg hover:bg-[var(--color-surface)] transition-colors">
              載入更多案例
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "1000+", label: "完成專案" },
              { value: "50+", label: "合作客戶" },
              { value: "20+", label: "加工設備" },
              { value: "98%", label: "準時交貨" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-bold text-[var(--color-accent)] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
