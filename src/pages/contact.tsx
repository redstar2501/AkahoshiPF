import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

// Zodスキーマの定義
const formSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "メッセージを入力してください"),
});

// フォームの型定義
type FormData = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitMail = async (data: FormData): Promise<void> => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID as
      | string
      | undefined;

    if (!publicId) {
      console.error("❌ EmailJS Public Key (User ID) が設定されていません。");
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      await emailjs.send(serviceId, templateId, data, publicId);
      console.log("✅ メール送信成功");
      setIsSubmitted(true);
    } catch (error) {
      console.error("❌ メール送信エラー: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className=" bg-gray-100 ">
      <div className="w-full h-30 sm:h-80 md:h-80 text-left bg-red-400 flex justify-center items-center">
        <h1 className="text-xs sm:text-lg md:text-2xl font-bold mb-4 text-white">
          Contact
        </h1>
      </div>
      <div className="w-80 sm:w-full max-w-3xl m-auto pt-32 pb-32">
        <h1 className="text-xs sm:text-2xl font-bold mb-8 px-4 py-2 bg-red-400 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg w-fit">
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit(submitMail)}
          className="grid grid-cols-1 gap-4 items-center bg-white shadow-md rounded-lg pt-6 p-6 hover:shadow-lg transition-shadow border border-gray-400"
        >
          <div className="grid p-4 bg-gray-100 border border-gray-300 rounded">
            <label className="font-bold text-left justify-items-start">
              お名前
            </label>
            <input
              type="text"
              {...register("name")}
              className="border rounded p-2 w-full bg-white"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="grid p-4 bg-gray-100 border border-gray-300 rounded">
            <label className="font-bold text-left justify-items-start">
              メールアドレス
            </label>
            <input
              type="email"
              {...register("email")}
              className="border rounded p-2 w-full bg-white"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="grid p-4 bg-gray-100 border border-gray-300 rounded">
            <label className="font-bold text-left justify-items-start">
              メッセージ
            </label>
            <textarea
              {...register("message")}
              className="border rounded p-2 w-full bg-white"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          <input
            type="submit"
            value={isSubmitting ? "送信中..." : "送信"}
            disabled={isSubmitting}
            className={`bg-red-500 text-white py-2 px-4 rounded hover:opacity-80 transition duration-300 cursor-pointer ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
          {isSubmitted && (
            <p className="text-green-500 text-sm mt-2">送信が完了しました！</p>
          )}
        </form>
      </div>
    </article>
  );
};

export default Contact;
