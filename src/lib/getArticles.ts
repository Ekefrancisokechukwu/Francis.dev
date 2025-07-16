import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Article = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const articlesDir = path.join(process.cwd(), "src/articles/");

export function getAllArticles() {
  const files = fs.readdirSync(articlesDir);

  return files.map((filename) => {
    const filePath = path.join(articlesDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return { ...data, slug: filename.replace(".mdx", "") } as Article;
  });
}

export function getArticleBySlug(slug: string) {
  const filePath = path.join(articlesDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  return {
    content,
    metadata: data as {
      title: string;
      description: string;
      date: string;
      slug: string;
    },
  };
}
