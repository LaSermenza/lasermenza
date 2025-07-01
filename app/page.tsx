import { clsx } from "@koine/utils";
import { Button } from "@/cells";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative -mb-[40vh]">
      <div
        className={clsx(
          "max-w-5xl mx-auto",
          "flex flex-col items-start gap-10"
        )}
      >
        <img
          src="/images/associazione-la-sermenza-pittogramma--transparent.png"
          alt="associazione-la-sermenza-pittogramma"
          width="330px"
        />
        <h1
          className={clsx(
            "text-5xl md:text-6xl lg:text-8xl uppercase",
            "text-black"
            // "text-gray-100"
          )}
        >
          <span className="whitespace-nowrap">
            <span className="font-extralight">La </span>
            <span
              className={clsx(
                "font-bold",
                "text-black"
                // "text-white"
              )}
            >
              Sermenza
            </span>
          </span>
          <span className={clsx("block font-mono text-base lg:text-xl -mt-2")}>
            Associazione La Sermenza APS
          </span>
        </h1>
        <div className="flex flex-col gap-5 ml-[20%]">
          <p className="text-[12px] max-w-sm font-bold leading-4">
            Con sede a Boccioleto, in Val Sermenza, l'associazione opera da un
            decennio per la tutela e la valorizzazione del patrimonio
            architettonico e paesaggistico della valle. Il suo impegno si
            concretizza nella promozione delle tecniche costruttive
            tradizionali, nell'organizzazione di corsi di formazione e in
            attività di sensibilizzazione sul recupero edilizio sostenibile.
          </p>
        </div>
        <div className="flex w-full flex-col items-end">
          <p className="mb-2 text-sm font-mono font-bold">Prossimo evento</p>
          <Button variant="solid" color="accent" as="a" href="/itm-2025">
            Incontri Tra/Montani 2025
          </Button>
        </div>
      </div>
      {/* <img
        src="/images/foto-val_sermenza--1920x848-min.jpg"
        alt="val-sermenza"
      /> */}
    </main>
  );
}
