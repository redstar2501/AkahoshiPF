import React, { useState } from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  category: string;
  description: string;
  icon: string;
};

const skills: Skill[] = [
  {
    name: "HTML",
    category: "Front-end",
    description:
      "HTMLは、ウェブサイトの基盤を構成するマークアップ言語です。適切なセマンティックHTMLを意識し、SEOやアクセシビリティに配慮したコーディングを心掛けています。",
    icon: "/src/assets/images/html.svg",
  },
  {
    name: "CSS",
    category: "Front-end",
    description:
      "CSSを使用して、レスポンシブデザインやアニメーションを実装し、ユーザーエクスペリエンスを向上させるスタイリングを提供します。SCSSやCSSモジュールの活用も得意です。",
    icon: "/src/assets/images/css.svg",
  },
  {
    name: "SCSS",
    category: "Front-end",
    description:
      "Sassを活用して、効率的なスタイリングを行い、メンテナンス性の高いCSS設計を実現します。変数、ミックスイン、ネストを適切に活用しています。",
    icon: "/src/assets/images/sass.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Front-end",
    description:
      "Tailwind CSSを使用して、効率的なスタイリングを行い、メンテナンス性の高いCSS設計を実現します。コンポーネント志向のスタイリングを実現し、スピーディーな開発を実現します。",
    icon: "/src/assets/images/tailwindcss.svg",
  },
  {
    name: "TypeScript",
    category: "Development",
    description:
      "型安全性を確保し、コードの可読性と保守性を向上させるため、TypeScriptを積極的に活用しています。",
    icon: "/src/assets/images/ts.svg",
  },
  {
    name: "GitHub",
    category: "Development",
    description:
      "GitHubを使用して、コードのバージョン管理やチーム開発を効率化します。プルリクエストやブランチ戦略を活用し、スムーズな共同作業を実施します。",
    icon: "/src/assets/images/github-mark.svg",
  },
  {
    name: "PHP",
    category: "CMS",
    description:
      "WordPressの運用・保守を行う際に必要になる最低限の知識を有しております。",
    icon: "/src/assets/images/php.svg",
  },
  {
    name: "JavaScript",
    category: "Development",
    description:
      "JavaScriptを用いて、DOM操作やアニメーションの実装が出来ます。ES6以降の構文を積極的に活用し、コードの可読性と保守性を向上させます。",
    icon: "/src/assets/images/javascript.svg",
  },
  {
    name: "React",
    category: "Frameworks",
    description:
      "ポートフォリオ作成時のフレームワークとして使用、Reactを使用して、コンポーネントベースのモダンなフロントエンド開発を行います。React Hooksを用いて、状態管理を実現します。",
    icon: "/src/assets/images/react.svg",
  },
  {
    name: "Node.js",
    category: "Development",
    description:
      "Node.js プロジェクトの開発環境構築において、ESLint や Prettier の導入・設定を行い、コード品質の維持とフォーマットの統一を実現しています。pnpm を用いた依存関係の管理を行い、効率的なパッケージインストール・更新にも対応しています。",
    icon: "/src/assets/images/node.svg",
  },
  {
    name: "Vite",
    category: "Build Tools",
    description:
      "ポートフォリオ作成時のフロントエンド開発用のサーバーとして使用、Viteを用いた高速な開発環境を構築し、最新のフロントエンド技術をスムーズに導入しています。軽量かつ効率的なビルドプロセスを実現します。",
    icon: "/src/assets/images/vite.svg",
  },
  {
    name: "Photoshop",
    category: "Design Tools",
    description:
      "photoshopを使用してのチラシ作成やバナー作成、photoshopを使用したデザインカンプをもとにしたコーディングも可能。",
    icon: "/src/assets/images/photoshop.svg",
  },
  {
    name: "illustrator",
    category: "Design Tools",
    description:
      "illustratorを使用してのチラシ作成やバナー作成、WEBサイトのサムネイルの作成を行ってきました。",
    icon: "/src/assets/images/illustrator.svg",
  },
  {
    name: "XD",
    category: "Design Tools",
    description:
      "ワイヤーフレームやカンプの作成も行って来たので、デザイナーの方からXDデータを頂いた場合でも、問題なくデザインをコーディングすることができます。",
    icon: "/src/assets/images/xd.svg",
  },
  {
    name: "Figma",
    category: "Design Tools",
    description:
      "Figmaを使用して、ワイヤーフレームやカンプの作成も行って来たので、デザイナーの方からデータを頂いた場合でも、問題なくデザインをコーディングすることができます。",
    icon: "/src/assets/images/figma.svg",
  },
];

const SkillList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", ...new Set(skills.map((skill) => skill.category))];

  const filteredSkills =
    selectedCategory === "ALL"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <article className="">
      <div className="w-full h-30 sm:h-80 md:h-80 text-left bg-red-400 flex justify-center items-center">
        <h1 className="text-xs sm:text-lg md:text-2xl font-bold mb-4 text-white">
          Skills
        </h1>
      </div>
      <div className="w-5/6 m-auto pt-[8rem] pb-[8rem]">
        <h1 className="text-xs sm:text-2xl font-bold mb-8 text-left">
          Skill LIST
        </h1>
        <div className="grid grid-cols-4 gap-4 mb-32">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded border-solid border bg-white border-black ${
                selectedCategory === category
                  ? "bg-blue-500 border border-black text-black"
                  : "bg-gray-200 border border-black text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <ul className="grid col-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.li
              key={skill.name}
              className="rounded shadow-sm bg-white"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Pass the index to the variants
            >
              <div className="flex items-center border-b-1 px-3 pt-2 pb-1">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 mr-2"
                />
                <h2 className="font-bold">{skill.name}</h2>
              </div>
              <p className="text-sm text-left p-3 text-gray-600">
                {skill.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SkillList;
