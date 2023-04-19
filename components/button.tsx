import { HTMLProps, ReactNode } from "react";
import cx from "@/utils/cx";

export interface IButton extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

export default function Button({ children, className, ...props }: IButton) {
  return (
    <a
      target="_blank"
      className={cx(
        "flex cursor-pointer items-center gap-0.5 px-4 py-2",
        "rounded-full bg-zinc-900",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
