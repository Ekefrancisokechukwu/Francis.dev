import type { MDXComponents } from "mdx/types";
import {
  SpeedometerChart,
  BlurTiltCard,
  SharedLayoutModal,
  AnimatedMenu,
} from "@/components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    AnimatedMenu,
    SharedLayoutModal,
    BlurTiltCard,
    SpeedometerChart,
    ...components,
  };
}
