export const codeSample = `
import {
  ChevronDown,
  CreditCard,
  LockKeyholeOpen,
  LucideProps,
  MapPinned,
  Repeat,
  UserRoundPen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import { cn } from "@/lib/utils";

const accordions = [
  {
    icon: UserRoundPen,
    headertext: "How do i update my account infomation",
    content:
      "To update your account information, please log in to your account and navigate to the settings section. From there, you can update your personal details, contact information, and other relevant information.",
  },
  {
    icon: CreditCard,
    headertext: "What payment methods are accepted?",
    content:
      "Major credit and debit cards like Visa, MasterCard, and American Express, as well as digital payment options like PayPal and Apple Pay.",
  },
  {
    icon: Repeat,
    headertext: "How do I get a refund?",
    content:
      "If you are not satisfied with your purchase, please contact our customer support team. We will review your request and process the refund as soon as possible.",
  },
  {
    icon: MapPinned,
    headertext: "How can I track my order?",
    content:
      "ITo track your order, please log in to your account and navigate to the order history section. You can also use the tracking number provided in your order confirmation email to track your package.",
  },
  {
    icon: LockKeyholeOpen,
    headertext: "How do I reset my password?",
    content:
      "To reset your password, please click on the forgot password link on the login page. You will be asked to enter your email address and then follow the instructions to reset your password.",
  },
];

interface IAccordion {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  headertext: string;
  content: string;
}

export const Preview = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
      <section className="w-[30rem] mx-auto space-y-2 rounded-xl grid place-items-center ">
        {accordions.map((accordion, i) => {
          const isOpen = i === expanded;
          return (
            <SingleAccordion
              isOpen={isOpen}
              accordion={accordion}
              key={i}
              toggleAccordion={() => setExpanded(isOpen ? null : i)}
            />
          );
        })}
      </section>
  );
};

interface ISingleAccordion {
  accordion: IAccordion;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const SingleAccordion = ({
  accordion,
  isOpen,
  toggleAccordion,
}: ISingleAccordion) => {
  return (
    <div className="w-full rounded-xl border">
      <button
        onClick={toggleAccordion}
        className={cn(
          "w-full cursor-default flex items-center rounded-xl py-3  transition-all duration-500 px-5  text-start text-neutral-500 gap-x-3",
          isOpen ? "" : "hover:bg-neutral-100"
        )}
      >
        <accordion.icon size={20} />{" "}
        <h1 className="font-semibold">{accordion.headertext}</h1>
        <motion.span
          initial={{ rotate: 0 }}
          animate={isOpen ? { rotate: "180deg" } : { rotate: 0 }}
          transition={{ type: "spring", duration: 0.5, damping: 8 }}
          className="grid place-items-center ms-auto"
        >
          <ChevronDown size={23} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              type: "spring",
              duration: 0.6,
              stiffness: 120,
              damping: 9,
            }}
            className="overflow-hidden"
          >
            <motion.div className="px-7 pb-5 ">
              <p className="text-neutral-500  font-semibold">
                {accordion.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

`;
