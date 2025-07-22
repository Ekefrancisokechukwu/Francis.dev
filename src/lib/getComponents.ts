import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDate, parseISO } from "date-fns";

export type Article = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const compoenntsDir = path.join(process.cwd(), "src/content/components/");

export function getAllComponents() {
  const files = fs.readdirSync(compoenntsDir);

  const components = files.map((filename) => {
    const filePath = path.join(compoenntsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(".mdx", ""),
      date: formatDate(parseISO(data.date), "MMM dd, yyyy"),
    } as Article;
  });

  return components.sort(
    (a, b) => new Date(b.date).getDate() - new Date(a.date).getDate()
  );
}

export function getComponentBySlug(slug: string) {
  const filePath = path.join(compoenntsDir, `${slug}.mdx`);
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
