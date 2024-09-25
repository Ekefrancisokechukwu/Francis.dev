const Heading = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h1
      className={`${className} dark:text-zinc-100 font-bold text-4xl  text-zinc-800 tracking-tight sm:text-5xl `}
    >
      {text}
    </h1>
  );
};
export default Heading;
