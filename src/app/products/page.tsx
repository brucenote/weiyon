import { Metadata } from "next";
import { Cog, Zap, Users, Plane, Car, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "產品服務 | 偉勇工業社",
  description: "提供CNC精密加工、半導體設備零件、機器人自動化組件、無人機航太零件、氣壓缸零件及汽車配件等專業加工服務",
};

const services = [
  {
    icon: Cog,
    title: "CNC 精密加工",
    description: "高精度 CNC 車床、銑床加工，適用於各種複雜幾何形狀的零件製造",
    features: [
      "CNC 車床加工（最大加工直徑 300mm）",
      "CNC 銑床加工（多軸連動）",
      "線切割加工（EDM）",
      "內外徑研磨加工",
      "雷射雕刻與刻印",
    ],
  },
  {
    icon: Zap,
    title: "半導體設備零件",
    description: "半導體製程設備關鍵零件加工，符合高科技產業嚴格標準",
    features: [
      "半導體製程腔體零件",
      "真空系統關鍵組件",
      "離子植入機零件",
      "蝕刻機關鍵零件",
      "化學氣相沉積設備零件",
    ],
  },
  {
    icon: Users,
    title: "機器人自動化組件",
    description: "工業機器人關節、自動化組件加工，助力智能製造升級",
    features: [
      "機器人關節軸承",
      "自動化傳動齒輪",
      "線性滑軌組件",
      "伺服馬達零件",
      "感測器固定座",
    ],
  },
  {
    icon: Plane,
    title: "航太零件",
    description: "無人機關鍵航太零件加工，满足輕量化與高精度要求",
    features: [
      "無人機機身結構件",
      "起落架關鍵組件",
      "螺旋槳葉片",
      "航太級鋁合金零件",
      "鈦合金精密零件",
    ],
  },
  {
    icon: Car,
    title: "氣壓缸零件",
    description: "各類氣壓缸核心零件，耐用性與密封性兼顧",
    features: [
      "氣壓缸活塞桿",
      "液壓缸缸筒",
      "高壓閥門零件",
      "密封槽加工",
      "表面硬化處理",
    ],
  },
  {
    icon: Settings,
    title: "汽車配件",
    description: "汽車引擎、傳動系統零件加工，品質符合車廠標準",
    features: [
      "引擎精密零件",
      "傳動齒輪組",
      "煞車系統零件",
      "懸吊系統組件",
      "電子控制系統零件",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-16 lg:py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6">
              產品與服務
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)]">
              從傳統加工到高科技領域，提供全方位的精密製造解決方案
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[var(--color-accent)]" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-[var(--color-accent)] rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                          <Cog className="w-3 h-3 text-white" />
                        </span>
                        <span className="text-[var(--color-text-secondary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <service.icon className="w-20 h-20 text-[var(--color-accent)] mx-auto mb-4 opacity-20" />
                        <p className="text-[var(--color-text-muted)] text-sm">{service.title}示意圖</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
              加工流程
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              標準化的作業流程，確保品質與交期
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              { step: "01", title: "需求確認", desc: "了解客戶需求與規格" },
              { step: "02", title: "製程規劃", desc: "設計加工方案" },
              { step: "03", title: "樣品製作", desc: "先行打樣確認" },
              { step: "04", title: "量產加工", desc: "依訂單量產" },
              { step: "05", title: "品質檢驗", desc: "出貨前檢測把關" },
            ].map((item) => (
              <div key={item.step} className="p-4 lg:p-6 bg-white rounded-xl border border-[var(--color-border)] text-center">
                <span className="text-3xl lg:text-4xl font-bold text-[var(--color-accent)]/30 block mb-2">
                  {item.step}
                </span>
                <h3 className="font-bold text-[var(--color-primary)] mb-1">{item.title}</h3>
                <p className="text-xs lg:text-sm text-[var(--color-text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            有特殊需求？
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            我們提供客製化服務，歡迎來電或來信詢問詳細規格與報價
          </p>
          <a
            href="mailto:agesmyth@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-medium rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
          >
            立即詢問
          </a>
        </div>
      </section>
    </>
  );
}
