import { Heading } from "@/components/ui/Heading";
import { getAllArticles } from "@/lib/getArticles";
import { SquarePen, Timer } from "lucide-react";
import Link from "next/link";

const BlogPosts = () => {
  const posts = getAllArticles();

  return (
    <div className="mt-[4rem]">
      <Heading>
        Articles <SquarePen className="text-neutral-600 size-5" />
      </Heading>

      <div className="mt-5 space-y-3">
        {posts.map((post, index) => {
          return (
            <Link
              key={index}
              href={`/articles/${post.slug}`}
              className=" p-2.5 group flex min-[535px]:flex-row flex-col gap-y-1 min-[535px]:items-center items-start justify-between transition-colors duration-500 bg-neutral-900 rounded-lg"
            >
              {" "}
              <span className="group:underline text-base font-medium underline-offset-4">
                {post.title}
              </span>
              <div className="flex items-center gap-x-2">
                <Timer size={15} />
                <span className="text-sm font-medium">Jun 12, 2025</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default BlogPosts;
