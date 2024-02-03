import { PolymorphicComponentProp } from "@/types";
import clsx from "clsx";
import { ElementType, memo } from "react";

export interface ButtonProps {
  className?: string;
}

export const Button = memo(function Button<C extends ElementType = "button">({
  as,
  children,
  className,
  ...rest
}: PolymorphicComponentProp<C, ButtonProps>) {
  const Component = as || "button";

  return (
    <Component
      className={clsx(
        "px-4 py-2 bg-blue-500 rounded-md flex flex-row justify-center w-full min-w-12",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
});
