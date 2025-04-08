import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Work: React.FC = () => {
  const workExperience = [
    {
      title: "コーダー",
      company: "株式会社アップドラフト",
      duration: "2024年6月 - 2025年1月",
      description:
        "Wordpressを使用した自社ホームページの運用・保守及び改修、LPの新規作成・メールマガジン作成",
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "PHP",
        "WordPress",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
    },
    {
      title: "マークアップエンジニア・ウェブデザイナー",
      company: "株式会社ウェブライフ",
      duration: "2022年1月 - 2024年4月",
      description:
        "Shopifyの構築1年・前職でWordpressを使用できる点を買われ自社サイトの改修・リニューアル及び自社サイトの一部サムネイルデザインを担当",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "liquid",
        "PHP",
        "GitHub",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe XD",
        "Figma",
      ],
    },
    {
      title: "コーダー・ウェブデザイナー・グラフィックデザイナー",
      company: "株式会社ネットウェーブ",
      duration: "2019年4月 - 2021年12月",
      description:
        "紙媒体のグラフィックデザイン1年・前任者の退職による穴埋めのためWEBデザイン及びコーディング経験があるため受託案件のWordpress構築・保守及び運用や自社サイトのリニューアルやWEBデザイン、自社のコンテンツサイトのコーディング・WEBデザインを1年半担当",
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "PHP",
        "WordPress",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe XD",
        "Figma",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <article className=" bg-gray-100 ">
      <div className="w-full h-30 sm:h-80 md:h-80 text-left bg-red-400 flex justify-center items-center">
        <h1 className="text-xs sm:text-lg md:text-2xl font-bold mb-4 text-white">
          Work
        </h1>
      </div>
      <div className="min-h-screen p-8 w-5/6 m-auto pt-[8rem]  pb-[8rem]">
        <h1 className="text-3xl font-bold text-left mb-8  px-4 py-2 bg-red-400 text-white break-normal w-fit rounded-tl-[0.8rem] rounded-tr-[0.8rem] rounded-br-none rounded-bl-[0.8rem]">
          Works
        </h1>
        <motion.div
          className="grid justify-self-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {workExperience.map((work, index) => (
            <motion.div
              key={index}
              className=" bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <h2 className="text-lg justify-self-start  font-semibold">
                {work.title}
              </h2>
              <p className="text-gray-600 justify-self-start">{work.company}</p>
              <p className="text-sm text-gray-500 justify-self-start">
                {work.duration}
              </p>
              <p className="mt-4 text-left text-gray-700 justify-self-start">
                {work.description}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 text-xs text-gray-700 break-words">
                {work.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="grid items-center list-inside p-1 bg-gray-200 rounded font-medium break-words"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link
            to="/achievements"
            className="inline-block bg-red-400 text-white font-semibold px-6 py-2 rounded hover:bg-red-500 transition"
          >
            実績一覧を見る
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Work;
