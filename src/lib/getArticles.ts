import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format, parseISO } from "date-fns";

export type Article = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const articlesDir = path.join(process.cwd(), "src/content/articles/");

export function getAllArticles() {
  const files = fs.readdirSync(articlesDir);

  const articles = files.map((filename) => {
    const filePath = path.join(articlesDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(".mdx", ""),
      date: format(parseISO(data.date), "MMM dd, yyyy"),
    } as Article;
  });

  return articles.sort(
    (a, b) => new Date(b.date).getDate() - new Date(a.date).getDate()
  );
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
