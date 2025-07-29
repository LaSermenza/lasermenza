import { clsx } from "@koine/utils";

export type SectionTItleProps = React.PropsWithChildren<{
  className?: string;
}>;

export const SectionTItle = (props: SectionTItleProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={clsx(
        "mx-auto max-w-5xl text-3xl lg:text-6xl uppercase leading-[1.2em] pb-10",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SectionTItle;
