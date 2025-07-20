import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Article = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const compoenntsDir = path.join(process.cwd(), "src/content/components/");

export function getAllComponents() {
  const files = fs.readdirSync(compoenntsDir);

  return files.map((filename) => {
    const filePath = path.join(compoenntsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return { ...data, slug: filename.replace(".mdx", "") } as Article;
  });
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
