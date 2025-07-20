import type { MDXComponents } from "mdx/types";
import { SpeedometerChart } from "@/components/ui/SpeedometerChart";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    SpeedometerChart,
    ...components,
  };
}
