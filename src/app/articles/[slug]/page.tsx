import { getArticleBySlug } from "@/lib/getArticles";
// import { useMDXComponent } from "next/mdx";
import { useMDXComponents } from "@/mdx-components";
import { Undo2 } from "lucide-react";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default async function Article({ params }: Props) {
  const { slug } = params;
  const { mdxSource, metadata } = await getArticleBySlug(slug);

  return (
    <main className=" mx-auto max-w-[50rem] py-10 px-4">
      <div className="flex items-center justify-between">
        <Link
          href={"/"}
          className="bg-stone-800 p-2 active:scale-110 transition-all  rounded-lg"
        >
          <Undo2 size={18} />
        </Link>
      </div>

      <section className="mt-[4rem]">
        <h1 className="text-3xl font-bold mb-4">{metadata.title}</h1>
        <p className="text-gray-500 text-sm mb-8">{metadata.date}</p>
        <article className="prose prose-lg">
          <article className="prose prose-lg dark:prose-invert">
            <MDXRemote {...mdxSource} />
          </article>
        </article>
      </section>
    </main>
  );
}
