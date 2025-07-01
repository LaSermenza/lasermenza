import { clsx } from "@koine/utils";

export type FooterProps = React.PropsWithChildren<{
  className?: string;
}>;

export const Footer = (props: FooterProps) => {
  const { children, className, ...rest } = props;

  return (
    <>
      <div
        className={clsx(
          "relative w-screen aspect-[1920/848] inset-0 overflow-hidden",
          "-z-1"
          // "max-h-[66vh]"
        )}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "url('/images/foto-val_sermenza--1920x848-edges--white.jpg') no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
      </div>
      <footer
        className={clsx("max-w-5xl mx-auto", "border-t-4 max-lg:px-6 pt-1 pb-10", className)}
        {...rest}
      >
        <div className="flex gap-4 justify-between">
          <ul className="flex gap-4 text-sm">
            <li>
              <a href="/" className={clsx("font-bold")}>
                lasermenza.it
              </a>
            </li>
          </ul>
          <ul className="flex gap-4 text-sm">
            <li>
              <a
                href="https://www.instagram.com/la_sermenza/"
                target="_blank"
                className={clsx("")}
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/LaSermenza"
                target="_blank"
                className={clsx("")}
              >
                facebook
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
