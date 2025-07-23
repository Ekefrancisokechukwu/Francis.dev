import type { MDXComponents } from "mdx/types";
import {
  SpeedometerChart,
  BlurTiltCard,
  SharedLayoutModal,
} from "@/components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    SharedLayoutModal,
    BlurTiltCard,
    SpeedometerChart,
    ...components,
  };
}
