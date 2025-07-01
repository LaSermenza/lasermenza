import { Schedule } from "@/molecules";
import scheduleData from "@/content/itm-2025/data.json";
import { clsx } from "@koine/utils";

export default function Home() {
  return (
    <main>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-[32px] row-start-2 items-start">
          <span className={clsx("text-6xl lg:text-9xl")}>ITM 2025</span>
          <h2 className={clsx("text-3xl lg:text-6xl uppercase leading-[1.2em]", "overflow-hidden")}>
            <span className={clsx("pr-4", "text-red-500")}>Val Sermenza</span>
            <br className="xl:hidden" />
            <mark className={clsx("px-3 py-0 whitespace-nowrap", "bg-red-500 text-white")}>
              12-13-14 Settembre 2025
            </mark>
            <br />
            XXXV Edizione Incontri Tra/Montani
          </h2>
          <h1 className={clsx("text-lg lg:text-2xl font-mono lowercase max-w-3xl")}>
            Vivere il Paesaggio:{" "}
            <span className="font-mono">
              l’Architettura Tradizionale Montana e il Valore Comunitario
              dell’Autocostruzione
            </span>
          </h1>
          <span
            className={clsx(
              "text-sm lg:text-base font-bold mt-20 ml-auto text-end"
              // "px-4 py-2 text-xl font-light",
              // "bg-black text-white"
            )}
          >
            pagina in costruzione, <br /> vedi il programma qui sotto
          </span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        {/* <p className={clsx("text-6xl uppercase font-bold mb-20", "text-black")}>Programma</p> */}
        <Schedule data={scheduleData} />
      </div>
    </main>
  );
}
