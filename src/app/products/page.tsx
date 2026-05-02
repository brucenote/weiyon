import { Metadata } from "next";

export const metadata: Metadata = {
  title: "加工品目 | 偉勇工業社",
  description: "偉勇工業社提供多樣化的精密金屬零件加工服務，從1個零件開始，包含半導體設備、航太零件、自動化組件等專業加工",
};

const categories = [
  {
    title: "加工品目",
    items: [
      "半導體製造設備零件",
      "航太相關零件（衛星零件）",
      "醫療器材零件",
      "自動化省力機械零件",
      "通信機器零件",
      "精密機器零件",
      "真空機器零件",
      "電子機器零件",
      "印刷機械零件",
      "光學機器零件",
      "環境機器零件",
      "航空器零件",
      "氣壓液壓油壓零件",
      "一般機械零件",
      "個人少量訂製亦可接受",
    ],
  },
  {
    title: "加工技術",
    items: [
      "CNC車床加工",
      "CNC銑床加工（加工中心機）",
      "數值控制成形研磨",
      "放電加工（線切割・放電火花加工）",
      "光學曲線研磨",
      "CNC研磨加工",
      "雕刻・雷射刻印",
      "熱處理",
      "表面處理（鍍膜・硬化）",
      "沖壓・板金加工",
      "粉末冶金",
      "金屬粉末射出成型（MIM）",
      "3D列印打樣服務",
      "試作・少量生產快速提案",
    ],
  },
  {
    title: "適用材料",
    items: [
      "碳鋼素材（SS、S45C、SCM、SKD等）",
      "合金工具鋼",
      "鋁合金（A5052、A7075等）",
      "不鏽鋼（SUS303、SUS304、SUS316等）",
      "鈦合金（Ti-6Al-4V等）",
      "英高鎳合金、因康合金",
      "銅合金／黃銅",
      "工程塑膠（尼龍、POM、PEEK等）",
      "陶瓷（氮化矽、碳化矽等）",
      "石墨、超硬合金",
      "其他特殊素材",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 py-12 lg:py-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
              加工品目
            </h1>
            <p className="text-lg text-[var(--color-accent)] font-medium mb-2">
              「１個起訂，零件製造」
            </p>
            <p className="text-[var(--color-text-secondary)]">
              從1個零件開始，滿足您多樣化的加工需求
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-bold text-[var(--color-primary)] mb-6 pb-2 border-b-2 border-[var(--color-accent)]">
                  {category.title}
                </h2>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full flex-shrink-0 mt-2" />
                      <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
            估價・諮詢
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-6">
            歡迎隨時諮詢。我們會根據圖面、形狀、數量、材料等提供最好的解決方案。
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
