# 🧑‍💻 AMポートフォリオサイト

これは **React**, **TypeScript**, **Vite** を使って作成した個人ポートフォリオサイトです。  
パッケージマネージャーには **pnpm** を使用しています。

## 🚀 使用技術

- ⚛️ **React**: ユーザインターフェースの作成
- 🧪 **TypeScript**: 型安全なJavaScript
- ⚡ **Vite**: 高速なビルドツール
- 🎨 **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク
- 📦 **pnpm**: 高速なパッケージマネージャー
- 🔧 **ESLint**: JavaScriptおよびTypeScriptのコード品質を維持するための静的コード解析ツール
- ✨ **Prettier**: コードの整形ツールで、一貫したコードスタイルを自動で適用

## 📂 ディレクトリ構成

my-portfolio/ ├── public/ # 静的ファイル（画像、アイコンなど） │ └── vite.svg # Viteのロゴ │ ├── src/ # ソースコード │ ├── assets/ # 画像・アイコンなどのリソース │ │ └── images/ # 画像ファイル │ │ ├── cow.svg │ │ ├── css.svg │ │ ├── github-mark.svg │ │ ├── react.svg │ │ └── tailwindcss.svg │ ├── components/ # 再利用可能なコンポーネント │ │ ├── footer.tsx # フッターコンポーネント │ │ ├── header.tsx # ヘッダーコンポーネント │ │ └── waveliene.tsx # ウェーブラインコンポーネント │ ├── pages/ # 各ページのコンポーネント │ │ ├── achievements.tsx # 実績ページ │ │ ├── contact.tsx # お問い合わせページ │ │ ├── home.tsx # ホームページ │ │ ├── skill.tsx # スキルページ │ │ └── work.tsx # 作品ページ │ ├── App.tsx # アプリケーションのエントリーポイント │ ├── main.tsx # メインのエントリーポイント │ ├── index.css # グローバルスタイル │ └── vite-env.d.ts # Viteの型定義ファイル │ ├── .gitignore # Gitの無視設定 ├── README.md # プロジェクトの説明ファイル ├── tailwind.config.ts # Tailwind CSSの設定ファイル ├── tsconfig.json # TypeScriptの設定ファイル └── vite.config.ts # Viteの設定ファイル

---

### 説明：
- **`public/`**: 静的ファイルが含まれており、ブラウザで直接アクセスできるリソースです。
- **`src/`**: アプリケーションのソースコードが含まれています。`assets` には画像やアイコンなど、`components` には再利用可能なコンポーネント、`pages` には各ページのコンポーネントが格納されています。
- **`App.tsx`** と **`main.tsx`** はアプリケーションのエントリーポイントです。
- **設定ファイル**（`vite.config.ts`、`tsconfig.json`、`tailwind.config.ts`）は、プロジェクトの設定に関するファイルです。

---
## ✨ 機能概要

- **レスポンシブデザイン**: 様々なデバイスで美しく表示されるように設計されています。
- **スムーズなアニメーション**: ページ遷移や要素のアニメーションで、ユーザー体験を向上させています。
- **お問い合わせフォーム**: このプロジェクトには、**React Hook Form** と **Zod** を使用した問い合わせフォームが組み込まれています。  
  フォームの送信には **EmailJS** を利用しており、フォームデータは指定されたメールアドレスに送信されます。
- **モジュール設計**: コンポーネント指向の設計で、可読性とメンテナンス性を高めたコードです。

---

## 📬 お問い合わせ

ご質問やお仕事のご相談は以下からお気軽にどうぞ：

📧 [akahoshi19970116@gmail.com](mailto:akahoshi19970116@gmail.com)  
💼 [Contact](https://www.dev-portfolio.site/contact)

---

## 🌐 公開ページ

👉 [ポートフォリオサイト](https://www.dev-portfolio.site/)
