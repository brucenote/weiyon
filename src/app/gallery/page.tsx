import { Metadata } from "next";
import { Image as ImageIcon, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "製作実績 | 偉勇工業社",
  description: "偉勇工業社多年來的精密加工成果，展示半導體設備、航太零件、汽車配件等各類型產品案例",
};

const works = [
  { id: 1, year: "2026", title: "半導體蝕刻機關鍵零件", category: "半導體設備" },
  { id: 2, year: "2026", title: "無人機螺旋槳葉片", category: "航太零件" },
  { id: 3, year: "2025", title: "引擎傳動齒輪組", category: "汽車配件" },
  { id: 4, year: "2025", title: "機器人關節軸承", category: "自動化組件" },
  { id: 5, year: "2025", title: "高壓液壓缸活塞桿", category: "氣壓缸零件" },
  { id: 6, year: "2025", title: "半導體真空腔體組件", category: "半導體設備" },
  { id: 7, year: "2025", title: "航太鋁合金結構件", category: "航太零件" },
  { id: 8, year: "2025", title: "線性滑軌固定座", category: "自動化組件" },
  { id: 9, year: "2024", title: "精密光學鏡座", category: "光學零件" },
  { id: 10, year: "2024", title: "醫療器械關鍵零件", category: "醫療設備" },
  { id: 11, year: "2024", title: "通訊基地台零件", category: "通信設備" },
  { id: 12, year: "2024", title: "真空泵轉子", category: "真空設備" },
  { id: 13, year: "2024", title: "航空液壓閥門", category: "航太零件" },
  { id: 14, year: "2023", title: "自動化傳動齒輪組", category: "自動化組件" },
  { id: 15, year: "2023", title: "半導體離子植入機零件", category: "半導體設備" },
  { id: 16, year: "2023", title: "精密模具零件", category: "模具零件" },
  { id: 17, year: "2023", title: "鈦合金關節植入物", category: "醫療設備" },
  { id: 18, year: "2022", title: "衛星通訊天線零件", category: "航太零件" },
  { id: 19, year: "2022", title: "印刷機械精密零件", category: "一般機械" },
  { id: 20, year: "2022", title: "氣壓缸閥門組件", category: "氣壓缸零件" },
  { id: 21, year: "2021", title: "汽車煞車系統零件", category: "汽車配件" },
  { id: 22, year: "2021", title: "光纖通信連接器", category: "通信設備" },
  { id: 23, year: "2021", title: "環境監測感測器外殼", category: "環境設備" },
  { id: 24, year: "2020", title: "CNC加工中心機零件", category: "一般機械" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-12 lg:py-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
              製作実績
            </h1>
            <p className="text-[var(--color-text-secondary)]">
              深耕產業 40 年，累積豐富的加工經驗與實績
            </p>
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {works.map((work) => (
              <a
                key={work.id}
                href="#"
                className="group block"
              >
                <div className="aspect-[279/186] rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-[var(--color-accent)] opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-[var(--color-primary)]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">View Details</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>{work.year}</span>
                    <span>•</span>
                    <span>{work.category}</span>
                  </div>
                  <h3 className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {work.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "1000+", label: "完成案件" },
              { value: "40+", label: "年產業經驗" },
              { value: "500+", label: "服務客戶" },
              { value: "50+", label: "加工項目" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--color-accent)] mb-1">
                  {stat.value}
                </p>
                <p className="text-xs lg:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
            歡迎來電或來信詢問
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-6">
            無論是圖面諮詢、估價請求或參觀工廠，我們都很樂意為您服務
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)] transition-colors"
          >
            聯絡我們
          </a>
        </div>
      </section>
    </>
  );
}
