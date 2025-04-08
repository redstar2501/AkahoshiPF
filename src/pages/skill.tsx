import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      "HTMLはウェブサイトの基盤を構成するマークアップ言語です。適切なセマンティックHTMLを意識し、SEOやアクセシビリティに配慮したコーディングを心掛けています。",
    icon: "/images/html.svg",
  },
  {
    name: "CSS",
    category: "Front-end",
    description:
      "CSSを使用してレスポンシブデザインやアニメーションを実装し、ユーザーエクスペリエンスを向上させるスタイリングを提供します。SCSSやCSSモジュールの活用も得意です。",
    icon: "/images/css.svg",
  },
  {
    name: "SCSS",
    category: "Front-end",
    description:
      "SCSSを活用し、効率的なスタイリングを行い、メンテナンス性の高いCSS設計を実現します。変数、ミックスイン、ネストを適切に活用しています。",
    icon: "/images/sass.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Front-end",
    description:
      "Tailwind CSSを使用して、効率的なスタイリングとコンポーネント志向のデザインを実現し、スピーディーな開発を可能にします。",
    icon: "/images/tailwindcss.svg",
  },
  {
    name: "TypeScript",
    category: "Development",
    description:
      "型安全性を確保し、コードの可読性と保守性を向上させるため、TypeScriptを積極的に活用しています。",
    icon: "/images/ts.svg",
  },
  {
    name: "GitHub",
    category: "Development",
    description:
      "GitHubを使用してコードのバージョン管理やチーム開発を効率化します。プルリクエストやブランチ戦略を活用し、スムーズな共同作業を実施します。",
    icon: "/images/github-mark.svg",
  },
  {
    name: "PHP",
    category: "CMS",
    description: "WordPressの運用・保守に必要な基礎的な知識を有しています。",
    icon: "/images/php.svg",
  },
  {
    name: "JavaScript",
    category: "Development",
    description:
      "JavaScriptを用いてDOM操作やアニメーションを実装できます。ES6以降の構文を積極的に活用し、コードの可読性と保守性を向上させます。",
    icon: "/images/javascript.svg",
  },
  {
    name: "React",
    category: "Frameworks",
    description:
      "Reactを使用してコンポーネントベースのモダンなフロントエンド開発を行います。React Hooksを活用し、状態管理を適切に行います。",
    icon: "/images/react.svg",
  },
  {
    name: "Node.js",
    category: "Development",
    description:
      "Node.jsを使用したプロジェクトの開発環境構築を行い、ESLintやPrettierを導入・設定してコード品質を維持しています。pnpmを活用し、依存関係の管理を効率化しています。",
    icon: "/images/node.svg",
  },
  {
    name: "Vite",
    category: "Build Tools",
    description:
      "Viteを用いて高速な開発環境を構築し、最新のフロントエンド技術をスムーズに導入しています。軽量かつ効率的なビルドプロセスを実現します。",
    icon: "/images/vite.svg",
  },
  {
    name: "Photoshop",
    category: "Design Tools",
    description:
      "Photoshopを使用してチラシやバナーを作成し、デザインカンプをもとにしたコーディングも行うことができます。",
    icon: "/images/photoshop.svg",
  },
  {
    name: "Illustrator",
    category: "Design Tools",
    description:
      "Illustratorを使用してチラシやバナーを作成し、WEBサイトのサムネイルデザインなども手掛けてきました。",
    icon: "/images/illustrator.svg",
  },
  {
    name: "XD",
    category: "Design Tools",
    description:
      "ワイヤーフレームやカンプの作成経験があり、デザイナーからXDデータを受け取ってコーディングを行うことができます。",
    icon: "/images/xd.svg",
  },
  {
    name: "Figma",
    category: "Design Tools",
    description:
      "Figmaを使用してワイヤーフレームやカンプを作成した経験があり、デザイナーからデータを受け取ってコーディングすることが可能です。",
    icon: "/images/figma.svg",
  },
];
const SkillList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
    <article className="bg-gray-100">
      <div className="w-full h-30 sm:h-80 text-left bg-red-400 flex justify-center items-center">
        <h1 className="text-xs sm:text-lg md:text-2xl font-bold text-white">
          Skills
        </h1>
      </div>
      <div className="w-5/6 m-auto pt-32 pb-32">
        <h1 className="text-xs sm:text-2xl font-bold mb-8 px-4 py-2 bg-red-400 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg w-fit">
          Skill List
        </h1>
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative overflow-hidden px-4 py-2 rounded border border-white transition-colors duration-300 group ${
                selectedCategory === category
                  ? "bg-red-400 text-white"
                  : "bg-white text-black"
              }`}
            >
              <span className="relative z-10 group-hover:text-white">
                {category}
              </span>
              <span className="absolute inset-0 scale-x-0 origin-left bg-red-400 transition-transform duration-300 ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-x-100"></span>
            </button>
          ))}
        </div>

        <ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.li
              key={skill.name}
              className="rounded shadow-sm bg-white p-4 border border-gray-200 hover:shadow-lg transition-shadow"
              variants={listVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <div className="flex items-center border-b px-3 pb-2">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 mr-2"
                />
                <h2 className="font-bold text-black">{skill.name}</h2>
              </div>
              <p className="text-sm text-gray-600 mt-2">{skill.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SkillList;
