// import { SpeedometerChart } from "@/components/ui/SpeedometerChart";
import { getComponentBySlug } from "@/lib/getComponents";
import { useMDXComponents } from "@/mdx-components";
import { Undo2 } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

const ComponentPage = ({ params }: Props) => {
  const { slug } = params;
  const { content, metadata } = getComponentBySlug(slug);

  return (
    <div className="max-w-[50rem] mx-auto py-10">
      <div className="flex items-center justify-between">
        <Link
          href={"/"}
          className="bg-stone-800 p-2 active:scale-110 transition-all  rounded-lg"
        >
          <Undo2 size={18} />
        </Link>
      </div>

      <div className="mt-[4rem]">
        <h1 className="text-white font-semibold text-lg capitalize">
          {metadata.title}
        </h1>
        <p>{metadata.description}</p>
      </div>

      <div className="mt-5">
        <MDXRemote source={content} components={useMDXComponents({})} />
      </div>
    </div>
  );
};
export default ComponentPage;
