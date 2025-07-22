import type { MDXComponents } from "mdx/types";
import { SpeedometerChart } from "@/components/SpeedometerChart";
import { BlurTiltCard } from "@/components/BlurTiltCard";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    BlurTiltCard,
    SpeedometerChart,
    ...components,
  };
}
