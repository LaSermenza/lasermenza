import { clsx } from "@koine/utils";

export type ButtonProps<T extends "a" | "button" | "span"> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    variant?: "solid" | "outline";
    color?: "primary" | "accent";
  };

export const Button = <T extends "a" | "button" | "span">(
  props: ButtonProps<T>
) => {
  const { as: Component = "button", variant = "", color = "", children, className, ...rest } = props;

  return (
    // @ts-expect-error polymorphism
    <Component
      className={clsx(
        "flex items-center justify-center",
        "py-4 px-4 sm:px-5",
        "font-mono font-bold text-sm uppercase",
        "cursor-pointer",
        "border-y-2",
        color === "" && variant === "" && "border-gray-700 hover:border-b-gray-700 hover:bg-gray-200 hover:text-gray-700",
        // color === "" && variant === "outline" && "border-black hover:border-b-black hover:bg-gray-100 hover:text-black",
        color === "primary" && variant === "outline" && "border-black text-white hover:bg-black",
        color === "primary" && variant === "solid" && "bg-black text-white hover:border-b-black hover:bg-gray-100 hover:text-black",
        color === "accent" && variant === "outline" && "border-red-500 text-white hover:bg-red-500",
        color === "accent" && variant === "solid" && "bg-red-500 text-white hover:border-b-red-500 hover:bg-red-100 hover:text-red-500",

        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
