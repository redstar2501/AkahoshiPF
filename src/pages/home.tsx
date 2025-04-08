import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Development from "../assets/images/webdevelopment.webp";
import Webdesign from "../assets/images/webdesign.webp";
import { useInView } from "react-intersection-observer";
const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Reduce loading duration
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer hooks for fade-in effect
  const { ref: profileRef, inView: profileInView } = useInView();
  const { ref: strengthsRef, inView: strengthsInView } = useInView();
  const { ref: aboutRef, inView: aboutInView } = useInView();

  return (
    <>
      {/* オープニングアニメーション */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen bg-red-400 flex justify-center items-center z-[1000]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }} // Simplified animation
          >
            <motion.span
              className="text-white text-4xl font-bold"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }} // Pulsating effect
            >
              Loading...
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ホームの内容（アニメーションが終わったら表示） */}
      {!loading && (
        <div className="grid gap-y-32">
          <div className="flex w-full h-screen justify-center items-center bg-red-400 flex-col text-center">
            <h1 className="text-white text-base sm:text-base md:text-4xl lg:text-4xl font-bold">
              AKAHOSHI&nbsp;
              <br className="block sm:hidden" />
              MOMOKA
            </h1>
            <h3 className="text-red-400 text-2xl mt-4 font-bold text-shadow">
              CODING&nbsp;+&nbsp;MARKUP<br></br>DESIGN
            </h3>
          </div>

          <section
            ref={profileRef}
            className={`w-5/6 m-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 text-center transition-opacity duration-1000 ${
              profileInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="col-auto sm:col-span-2 lg:col-span-2 text-2xl text-left font-bold">
              Akahoshi&nbsp;Momoka
            </h3>
            <p className="text-blue-400 col-auto sm:col-span-2 lg:col-span-2 text-left text-lg">
              Coder
            </p>
            <p className="col-auto sm:col-span-2 lg:col-span-2 text-left mt-4 text-lg">
              学校法人赤塚学園タラデザイン専門学校卒業後、グラフィックデザイナーやマークアッ
              プエンジニア及びコーダーとして主に紙媒体のデザインや記事のサムネイル作成や
              WordpressでのWEBサイトの新規製作・保守運用及び、Shopifyを用いたECサイトの
              制作・保守やサムネイルやバナー作成に携わっておりました。
              <br />
              現在は、React+Typescriptを使用したフロントエンドの開発に
              興味を持ち、日々勉強を続けています。特に、デザインとコーディングの両方に
              興味があり、ユーザーにとって使いやすく魅力的なWebデザインの作成に取り組んで
              います。HTMLやCSS、Javascriptを駆使して、レスポンシブで視覚的に魅力的なデザインを
              実現することを得意としています。
            </p>
          </section>

          <section
            ref={strengthsRef}
            className={`w-5/6 m-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 text-center transition-opacity duration-1000 ${
              strengthsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="col-auto sm:col-span-2 lg:col-span-2 text-left font-bold mb-8 px-4 py-2 bg-red-400 text-white break-normal w-fit rounded-tl-[0.8rem] rounded-tr-[0.8rem] rounded-br-none rounded-bl-[0.8rem]">
              Strengths
            </h1>
            <ul className="col-auto sm:col-span-2 lg:col-span-2 text-left mt-4 text-lg list-disc list-inside">
              <li>
                ウェブ開発：HTML、CSS、JavaScript、WordPressにおける専門知識。
              </li>
              <li>
                デザイン：レスポンシブで視覚的に魅力的なデザインを作成するスキル。
              </li>
              <li>問題解決：複雑な課題に取り組むための強力な分析スキル。</li>
              <li>
                チーム協力：効果的なコミュニケーションとチームワーク能力。
              </li>
            </ul>
          </section>

          <section
            ref={aboutRef}
            className={`bg-amber-50 transition-opacity duration-1000 ${
              aboutInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-5/6 m-auto py-[8rem]">
              <h1 className="col-auto sm:col-span-2 lg:col-span-2 text-left font-bold px-4 py-2 bg-red-400 text-white break-normal w-fit rounded-tl-[0.8rem] rounded-tr-[0.8rem] rounded-br-none rounded-bl-[0.8rem]">
                About
              </h1>
              <div className="grid gap-y-8 items-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 text-left">
                <img
                  src={Development}
                  className="w-auto h-auto object-cover mb-4"
                  alt="Icon 1"
                  width={100}
                  height={100}
                />
                <div className="text-lg col-auto sm:col-span-2 lg:col-span-2">
                  <h3 className="font-bold">コーディング</h3>
                  <p className="text-lg">
                    HTML、CSS、JavaScriptを基盤に、主にWordPressを使用したWebサイトの保守・運用・構築に取り組んでいます。ユーザー体験を向上させるデザインやパフォーマンス最適化にも注力し、継続的なスキルアップを心がけています。
                  </p>
                </div>
              </div>
              <div className="grid gap-y-8 items-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 text-left">
                <img
                  src={Webdesign}
                  className="w-auto h-auto object-cover mb-4"
                  alt="Icon 1"
                  width={100}
                  height={100}
                />
                <div className="text-lg col-auto sm:col-span-2 lg:col-span-2">
                  <h3 className="font-bold">デザイン</h3>
                  <p className="text-lg">
                    ユーザーにとって使いやすく魅力的なWebデザインの作成に取り組んでいます。HTMLやCSSを駆使して、レスポンシブで視覚的に魅力的なデザインを実現することを得意としています。また、FigmaやAdobe
                    XDを使用してデザインのプロトタイピングを行い、効率的なWebサイト制作を目指しています。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Home;
