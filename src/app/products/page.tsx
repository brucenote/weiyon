import { Metadata } from "next";

export const metadata: Metadata = {
  title: "加工品目 | 偉勇工業社",
  description: "偉勇工業社提供多樣化的精密金屬零件加工服務，從1個零件開始，包含半導體設備、航太零件、自動化組件等專業加工",
};

const categories = [
  {
    title: "加工品目",
    items: [
      "半導體製造装置部品",
      "宇宙航空関連部品（人工衛星部品）",
      "医療機器部品",
      "自動機・省力化機械部品",
      "通信機器部品",
      "精密機器部品",
      "真空機器部品",
      "電子機器部品",
      "印刷機械部品",
      "光学機器部品",
      "環境機器部品",
      "航空機部品",
      "気泡・水圧・油圧機器部品",
      "一般機械部品",
      "個人での注文もお受けしております",
    ],
  },
  {
    title: "加工技術",
    items: [
      "NC旋盤加工",
      "マシニングセンター加工",
      "数値制御成形研磨",
      "放電加工（ワイヤカット・スタレット加工）",
      "光学曲线研磨",
      "CNC研磨",
      "彫刻・刻印",
      "heat treatment",
      "表面処理",
      "プレス・板金加工",
      "粉末冶金",
      "金属粉末射出成型（MIM）",
      "3Dプリンターメーカー紹介",
      "、試作・少量生産向け3Dスキャンサービス紹介",
    ],
  },
  {
    title: "取扱材料",
    items: [
      "鋼素材（SS、S45C、SCM、SKD等）",
      "合金工具鋼",
      "アルミニウム合金（A5052、A7075等）",
      "ステンレス（SUS303、SUS304、SUS316等）",
      "钛合金（Ti-6Al-4V等）",
      "インコネル、ハステロイ",
      " copper / brass",
      " plastics（エンプラ、POM、MCポリアルセタール等）",
      " ceramics（窒化珪素、炭化珪素等）",
      "炭素材（黒鉛、超硬）",
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
              「１個からの部品製作」
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
            估價・相談的請求
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
