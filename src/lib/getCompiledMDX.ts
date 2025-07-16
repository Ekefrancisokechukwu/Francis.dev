// // lib/compileMDX.ts
// import { compile } from "@mdx-js/mdx";
// import * as runtime from "react/jsx-runtime";
// import matter from "gray-matter";

// export async function compileMDX(source: string) {
//   const { content, data } = matter(source);

//   const compiled = await compile(content, {
//     outputFormat: "function-body",
//     providerImportSource: "@mdx-js/react",
//   });

//   const MDXContent = new Function(String(compiled))(runtime);

//   return {
//     content: <MDXContent />,
//     metadata: data,
//   };
// }
