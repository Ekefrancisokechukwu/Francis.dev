import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeShowcase = {
  code: string;
  language: string;
};

const CodeShowcase = ({ code, language }: CodeShowcase) => {
  return (
    <div
      className="bg-zinc-900 mx-auto  dark:bg-zinc-700/30 rounded-lg p-2  xl:w-full xl:max-w-[50rem] lg:w-[44rem]
     w-full
     overflow-auto
    max-[1027px]:w-[48rem]
    max-[822px]:w-[45rem]
    max-[802px]:w-[40rem]
    max-[692px]:w-[35rem]
    max-[562px]:w-[30rem]
    max-[480px]:w-[25rem]
    max-[411px]:w-[20rem]
    max-[332px]:w-[18rem]
    max-[842px]:w-[45rem]
    "
    >
      <SyntaxHighlighter
        wrapLines
        language={language}
        style={vscDarkPlus}
        customStyle={{
          padding: "20px",
          width: "100%",
          maxWidth: "100%",
          maxHeight: "30rem",
          borderRadius: "10px",
          display: "block",
          overflowX: "auto",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeShowcase;
