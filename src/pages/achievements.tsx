import React, { useState } from "react";
import { motion } from "framer-motion";

interface Achievement {
  company: string;
  title: string;
  description: string;
  date: string;
  url?: string;
  team?: string;
  skills: string[];
}

const achievements: Achievement[] = [
  {
    date: "2024-6~2025-1",
    company: "株式会社アップドラフト",
    title: "美容外科の公式HP",
    description:
      "HTML・CSS・SCSS・JavaScript・jQuery・PHPを使用し、レスポンシブ対応の公式サイトを保守・運用を担当。コラムのブロックエディタを活用したコーディングや症例の更新、画像やテキストの差し替え、カスタムフィールドやプラグインを用いたコンテンツの追加・変更を担当しました。",
    url: "https://www.garden-senbi.jp/",
    team: "チーム制作（デザイナー1名、コーダー2名）",
    skills: ["WordPress", "HTML", "CSS", "SCSS", "JavaScript", "jQuery", "PHP"],
  },
  {
    date: "2024-6~2025-1",
    company: "株式会社アップドラフト",
    title: "美容外科のLP",
    description:
      "HTML・CSS・SCSS・JavaScript・jQuery・PHPを使用し、レスポンシブ対応のLPを新規で構築。既存LPを引用したコーディングや、文言・画像・コンテンツの差し替えも行いました。",
    team: "チーム制作（デザイナー1名、コーダー2名）",
    skills: ["WordPress", "HTML", "CSS", "SCSS", "JavaScript", "jQuery", "PHP"],
  },
  {
    date: "2024-6~2025-1",
    company: "株式会社アップドラフト",
    title: "審美歯科のLP",
    description:
      "HTML・CSS・SCSS・JavaScript・jQuery・PHPを使用し、レスポンシブ対応のLPを新規構築。既存LPの引用や文言・画像の差し替えを行い、クライアントの要望に応じた調整を実施しました。",
    team: "チーム制作（デザイナー1名、コーダー2名）",
    skills: ["WordPress", "HTML", "CSS", "SCSS", "JavaScript", "jQuery", "PHP"],
  },
  {
    date: "2024-6~2025-1",
    company: "株式会社アップドラフト",
    title: "審美歯科のインプラント名医紹介サイト",
    description:
      "HTML・CSS・SCSS・JavaScript・jQuery・PHPを用いた保守業務を担当。カスタムフィールドやプラグインを活用し、医師詳細ページの機能追加、トップページの更新、画像・文言の差し替え、SP向けJavaScript機能やプルダウンの実装を行いました。",
    url: "https://takumi-implant.com/",
    team: "チーム制作（デザイナー1名、コーダー2名）",
    skills: ["WordPress", "HTML", "CSS", "SCSS", "JavaScript", "jQuery", "PHP"],
  },

  {
    company: "株式会社ウェブライフ",
    title: "自社サービスのHP",
    description:
      "WordPressを使用し、HTML・CSS・SCSS・JavaScript・jQuery・PHPを用いたレスポンシブ対応のコーディングや機能実装を担当。TOP・導入事例のリニューアル及び機能実装、カスタムフィールドやプラグインを活用し、コンテンツの追加・削除を行いました。",
    date: "2023-04~2024-04",
    url: "https://bindec.jp/",
    team: "チーム制作（デザイナー2名）",
    skills: ["WordPress", "HTML", "CSS", "SCSS", "JavaScript", "jQuery", "PHP"],
  },
  {
    company: "株式会社ウェブライフ",
    title: "自社サービスHPのコラム用サムネイル",
    description:
      "Illustratorを使用し、マーケターの意見を基にコラム内容に合わせたサムネイルを作成。視覚的に魅力的なデザインを心掛け、イラストやアイコンを活用しました。",
    date: "2023-04~2024-04",
    url: "https://bindec.jp/media/555953128937/",
    team: "デザイナー1名",
    skills: ["Illustrator", "Photoshop"],
  },

  {
    company: "株式会社ウェブライフ",
    title: "ラスク販売のECサイト",
    description:
      "Shopifyを使用し、TOPページや商品一覧ページの静的コーディングを担当。テーマのカスタマイズやアプリ導入、運用・保守を行い、ECサイトの機能性とデザイン性を向上させました。",
    date: "2022-10~2023-01",
    url: "https://www.tokyorusk.co.jp/",
    team: "チーム制作（ディレクター1名、営業1名、バックエンドエンジニア、マークアップエンジニア1名）",
    skills: ["Shopify", "HTML", "CSS", "JavaScript", "GitHub", "figma"],
  },
  {
    company: "株式会社ウェブライフ",
    title: "アパレルブランドのECサイト",
    description:
      "Shopifyを使用し、テーマのカスタマイズ、アプリ導入、運用・保守を担当。サイト公開前の動作確認を行い、全体の品質向上に貢献しました。",
    date: "2022-4~2022-7",
    team: "チーム制作（ディレクター1名、営業1名、バックエンドエンジニア、マークアップエンジニア1名）",
    skills: ["Shopify", "HTML", "CSS", "JavaScript", "GitHub", "figma"],
  },
  {
    company: "株式会社ウェブライフ",
    title: "Tシャツ販売のECサイト",
    description:
      "組み込み前の静的コーディング・期間限定販売機能実装を担当。TOPページ・ABOUTページなど主要ページの制作を中心に行いました。",
    date: "2022-02~2022-3",
    url: "https://t-od.jp/",
    team: "チーム制作（ディレクター1名、営業1名、バックエンドエンジニア、マークアップエンジニア1名）",
    skills: ["Shopify", "HTML", "CSS", "JavaScript", "GitHub", "figma"],
  },

  {
    company: "株式会社ネットウェーブ",
    title: "自社HPリニューアル",
    description:
      "WordPressを使用し、新規テーマ作成からコーディングを担当。ワイヤーフレームやデザインカンプ作成、レスポンシブ対応、HTML・CSS・Bootstrap・JavaScript・jQuery・PHPを用いたコーディングを行いました。",
    date: "2021-6~2021-12",
    url: "https://www.k-netwave.co.jp/",
    team: "コーダー1名",
    skills: [
      "WordPress",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "PHP",
      "Adobe XD",
    ],
  },
  {
    company: "株式会社ネットウェーブ",
    title: "助産院のHP",
    description:
      "WordPressでの新規テーマ作成からコーディングを担当。ワイヤーフレーム・デザインカンプ制作から、HTML・CSS・Bootstrap・JavaScript・jQuery・PHPを用いたレスポンシブ対応の実装まで一貫して行いました。",
    date: "2021-05~2021-06",
    url: "https://tumugu-jyosanin.com/",
    team: "コーダー1名",
    skills: [
      "WordPress",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "PHP",
      "Adobe XD",
    ],
  },
  {
    company: "株式会社ネットウェーブ",
    title: "動物病院のHP",
    description:
      "WordPressでの新規テーマ作成からコーディングを担当。ワイヤーフレーム・デザインカンプ制作から、HTML・CSS・Bootstrap・JavaScript・jQuery・PHPを用いたレスポンシブ対応の実装まで一貫して行いました。",
    date: "2021-02~2021-04",
    url: "https://ain-nekoinu.com/",
    team: "コーダー1名",
    skills: [
      "WordPress",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "PHP",
      "Adobe XD",
    ],
  },
  {
    company: "株式会社ネットウェーブ",
    title: "不動産情報紙のデザイン",
    description:
      "自社発行の不動産情報紙の紙面デザインを担当。間取りや価格帯を考慮し、視認性と信頼感を意識したレイアウト設計を行いました。",
    date: "2019-04~2021-1",
    url: "https://iekago.com/estate/renet/",
    team: "デザイナー5名のチーム制作",
    skills: ["Illustrator", "Photoshop"],
  },
];

// 最新の company を取得
const latestCompany = achievements.reduce((latest, current) =>
  new Date(current.date) > new Date(latest.date) ? current : latest,
).company;

const AchievementsPage: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>(latestCompany);

  const filteredAchievements = achievements.filter(
    (achievement) => achievement.company === selectedCompany,
  );

  const handleCompanyChange = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <article className=" bg-gray-100 ">
      <div className="w-full h-30 sm:h-80 text-left bg-red-400 flex justify-center items-center">
        <h1 className="text-xs sm:text-lg md:text-2xl text-wrap font-bold text-white">
          Achievements
        </h1>
      </div>
      <div className="w-5/6 m-auto pt-32 pb-32">
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4 w-auto md:w-1/2 m-auto">
          {[
            "株式会社アップドラフト",
            "株式会社ウェブライフ",
            "株式会社ネットウェーブ",
          ].map((company) => (
            <button
              key={company}
              className={`relative overflow-hidden px-4 py-2 rounded border border-white transition-colors duration-300 group ${
                selectedCompany === company
                  ? "bg-red-400 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleCompanyChange(company)}
            >
              <span className="relative z-10 group-hover:text-white">
                {company}
              </span>
              <span className="absolute inset-0 scale-x-0 origin-left bg-red-400 transition-transform duration-300 ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-x-100"></span>
            </button>
          ))}
        </div>
        <ul className="w-auto md:w-1/2 m-auto grid grid-cols-1 md:grid-cols-1 gap-4 text-left">
          {filteredAchievements.map((achievement, index) => (
            <motion.li
              key={`${achievement.title}-${selectedCompany}`} // ← 切り替え時にアニメーション再実行
              className="p-4 rounded shadow bg-white hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-semibold">{achievement.title}</h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2 gap-0 md:gap-4">
                <p className="text-sm text-gray-500 ">
                  期間: {achievement.date}
                </p>
                <p className="text-sm text-gray-500 ">{achievement.team}</p>
              </div>
              <p className="text-gray-700 mb-2.5">{achievement.description}</p>

              {achievement.url ? (
                <a
                  href={achievement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  公開URL
                </a>
              ) : (
                <span className="text-gray-400 italic"></span>
              )}
              <ul className="flex flex-wrap gap-2 mt-4 text-xs text-gray-700 break-words">
                {achievement.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center p-1 bg-gray-200 rounded font-medium break-words"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default AchievementsPage;
