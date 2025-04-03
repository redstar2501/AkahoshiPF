import React from "react";
import Heroicon from "../assets/images/cow.svg";
import Github from "../assets/images/github-mark.svg";
import Development from "../assets/images/webdevelopment.png";
import Webdesign from "../assets/images/webdesign.png";
const Home: React.FC = () => {
  return (
    <>
      <div className="grid gap-y-32">
        <div className="flex w-full h-100 justify-center items-center bg-red-400">
          <img src={Heroicon} className="flex aspect-[3/2]" alt="Hero icon" />
        </div>
        <section className="w-5/6 m-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3  text-center ">
          <h3 className="col-auto sm:col-span-2 lg:col-span-2 text-2xl text-left font-bold">
            Akahoshi&nbsp;Momoka
          </h3>
          <p className="text-blue-400 col-auto sm:col-span-2 lg:col-span-2 text-left  text-lg">
            Coder
          </p>
          <p className="col-auto sm:col-span-2 lg:col-span-2 text-left mt-4 text-lg">
            学校法人赤塚学園タラデザイン専門学校卒業後、グラフィックデザイナーやマークアッ
            プエンジニア及びコーダーとして主に紙媒体のデザインや記事のサムネイル作成や
            WordpressでのWEBサイトの新規製作・保守運用及び、Shopifyを用いたECサイトの
            制作・保守やサムネイルやバナー作成に携わっておりました。
            <br></br>現在は、React+Typescriptを使用したフロントエンドの開発に
            興味を持ち、日々勉強を続けています。特に、デザインとコーディングの両方に
            興味があり、ユーザーにとって使いやすく魅力的なWebデザインの作成に取り組んで
            います。HTMLやCSS、Javascriptを駆使して、レスポンシブで視覚的に魅力的なデザインを
            実現することを得意としています。
          </p>
          <div className="flex justify-items-start space-x-4 mt-[2rem] col-auto sm:col-span-2 lg:col-span-2 ">
            <a href="">
              <img src={Github} className="w-8 h-8" alt="GitHub Mark 1" />
            </a>
            <a href="">
              <img src={Github} className="w-8 h-8" alt="GitHub Mark 2" />
            </a>
            <a href="">
              <img src={Github} className="w-8 h-8" alt="GitHub Mark 3" />
            </a>
          </div>
        </section>
        {/* Strengths */}
        <section className=" w-5/6 m-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 text-center">
        <h1 className="col-auto sm:col-span-2 lg:col-span-2  text-left font-bold px-[0.18rem] py-[0.24rem] bg-red-400 text-white break-normal w-fit rounded-tl-[0.8rem] rounded-tr-[0.8rem] rounded-br-none rounded-bl-[0.8rem]">
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
            <li>チーム協力：効果的なコミュニケーションとチームワーク能力。</li>
          </ul>
        </section>
        {/* about */}
        <section
          className=" bg-amber-50
"
        >
          <div className=" w-5/6 m-auto py-[8rem]">
            <h1 className="col-auto sm:col-span-2 lg:col-span-2  text-left font-bold px-[0.18rem] py-[0.24rem] bg-red-400 text-white break-normal w-fit rounded-tl-[0.8rem] rounded-tr-[0.8rem] rounded-br-none rounded-bl-[0.8rem]">
              About
            </h1>
            <div className="grid gap-y-8 items-center  grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 text-left">
              <img
                src={Development}
                className="w-auto h-auto object-cover mb-4"
                alt="Icon 1"
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
              />
              <div className="text-lg col-auto sm:col-span-2 lg:col-span-2">
                <h3 className="font-bold">デザイン</h3>
                <p className="text-lg">
                  ユーザーにとって使いやすく魅力的なWebデザインの作成に取り組んでいます。HTMLやCSSを駆使して、レスポンシブで視覚的に魅力的なデザインを実現することを得意としています。また、FigmaやAdobe
                  XDを使用してデザインのプロトタイピングを行い、効率的なWebサイト制作を目指しています。
                </p>
              </div>
            </div>
            <div className="grid gap-y-8 items-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 text-left">
              <img
                src={Development}
                className="w-auto h-auto object-cover mb-4"
                alt="Icon 1"
              />
              <div className="text-lg col-auto sm:col-span-2 lg:col-span-2">
                <h3 className="font-bold">開発</h3>
                <p className="text-lg">
                  ユーザーにとって使いやすく魅力的なWebデザインの作成に取り組んでいます。HTMLやCSSを駆使して、レスポンシブで視覚的に魅力的なデザインを実現することを得意としています。また、FigmaやAdobe
                  XDを使用してデザインのプロトタイピングを行い、効率的なWebサイト制作を目指しています。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
