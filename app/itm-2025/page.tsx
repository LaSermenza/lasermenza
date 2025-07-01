import { Schedule } from "@/molecules";
import { Button } from "@/cells";
import scheduleData from "@/content/itm-2025/data.json";
import { clsx } from "@koine/utils";

export default function Home() {
  return (
    <main>
      <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-[32px] row-start-2 items-start">
          <span className={clsx("text-6xl lg:text-9xl")}>ITM 2025</span>
          <h2
            className={clsx(
              "text-3xl lg:text-6xl uppercase leading-[1.2em]",
              "overflow-hidden"
            )}
          >
            <span className={clsx("pr-4", "text-black")}>Val Sermenza</span>
            <br className="xl:hidden" />
            <mark
              className={clsx(
                "px-3 py-0 whitespace-nowrap",
                "bg-black text-white"
              )}
            >
              12-13-14 Settembre 2025
            </mark>
            <br />
            XXXV Edizione Incontri Tra/Montani
          </h2>
          <h1
            className={clsx(
              "text-lg lg:text-2xl font-mono lowercase max-w-3xl"
            )}
          >
            Vivere il Paesaggio:{" "}
            <span className="font-mono">
              l’Architettura Tradizionale Montana e il Valore Comunitario
              dell’Autocostruzione
            </span>
          </h1>
          <div className="flex gap-4">
            <Button
              className={
                clsx()
              }
              variant="solid"
              color="primary"
              as="a"
              href="#programma"
            >
              guarda il programma
            </Button>
            <Button
              className={
                clsx()
              }
              as="a"
              href="/content/itm-2025/ITM-2025-Locandina.pdf"
            >
              scarica la locandina
            </Button>
            <Button
              className={
                clsx()
              }
              variant="solid"
              color="accent"
              as="a"
              href="/content/itm-2025/ITM-2025-Scheda_iscrizione.pdf"
            >
              iscriviti
            </Button>
          </div>
        </div>
      </section>
      <section className="px-6 min-h-screen">
        <div
          className={clsx(
            "mx-auto max-w-5xl text-3xl lg:text-6xl uppercase leading-[1.2em] pb-10"
          )}
        >
          Il convegno
        </div>
        <div
          className={clsx(
            "text-[12px] max-w-4xl mx-auto flex flex-col gap-14 font-bold",
            ""
          )}
        >
          <p className={clsx("max-w-sm")}>
            Il convegno "Vivere il Paesaggio" si propone come un'occasione di
            riflessione e confronto sul profondo legame tra l'insediamento umano
            e l'ambiente montano. In un'epoca in cui le aree montane si trovano
            ad affrontare sfide cruciali, come lo spopolamento, la limitata
            accessibilità ai servizi e la minaccia al patrimonio culturale e
            all'equilibrio ecologico, diventa sempre più urgente promuovere uno
            sviluppo sostenibile che ne garantisca la vitalità a lungo termine.
          </p>
          <p className={clsx("max-w-sm lg:ml-auto lg:-my-[10em]")}>
            Il convegno si concentrerà sull'analisi dell'architettura
            tradizionale montana della Val Sermenza, con le sue radici nelle
            ingegnose pratiche di autocostruzione, e sul suo collegamento con i
            moderni approcci partecipativi della progettazione. L'obiettivo
            principale è quello di evidenziare i legami, spesso trascurati, tra
            questi due concetti: l'autocostruzione e la progettazione
            partecipata. Si vuole dimostrare come i principi che guidavano
            l'antica autocostruzione, uniti alle metodologie della progettazione
            partecipata contemporanea e a un uso consapevole e sostenibile dei
            materiali locali, possano rappresentare una strategia efficace per
            la rigenerazione delle aree montane fragili o spopolate, come la Val
            Sermenza.
          </p>
          <p className={clsx("max-w-sm")}>
            La scelta del titolo del convegno è tutt'altro che casuale. "Vivere"
            suggerisce un'esistenza attiva e consapevole, che va oltre il
            semplice atto di abitare. "Paesaggio", a sua volta, non è inteso
            solo come scenario visivo, ma come un complesso intreccio di
            elementi naturali e culturali che definiscono l'identità di un
            luogo. Il convegno, quindi, promuove un approccio all'edilizia e
            allo sviluppo che sia profondamente radicato nelle specificità del
            paesaggio montano e che coinvolga attivamente le comunità che lo
            abitano. L'inclusione dei concetti di "autocostruzione" e "valore
            comunitario" sottolinea come l'atto stesso di costruire, quando è
            intrapreso in modo collaborativo, contribuisca in modo significativo
            al tessuto sociale e al valore complessivo della comunità. In questo
            senso, il convegno esplorerà non solo gli aspetti tecnici della
            costruzione, ma anche le sue implicazioni sociali e culturali nel
            contesto montano.
          </p>
          <p className={clsx("max-w-sm lg:ml-auto lg:-mt-[10em]")}>
            In linea con questa visione, il convegno si propone anche di
            esplorare come un approccio integrato, che valorizzi il patrimonio
            locale e promuova la progettazione partecipata, possa agire da
            motore per lo sviluppo di una rete di servizi sociali più capillare,
            efficiente e radicata nel territorio. Questo, a sua volta, può
            contribuire a migliorare la qualità della vita delle comunità
            montane e a contrastare fenomeni preoccupanti come lo spopolamento e
            l'emarginazione sociale.
          </p>
        </div>
      </section>
      <section id="programma" className="px-6 min-h-screen">
        <div
          className={clsx(
            "mx-auto max-w-5xl text-3xl lg:text-6xl uppercase leading-[1.2em] pb-20"
          )}
        >
          Programma
        </div>
        {/* <p className={clsx("text-6xl uppercase font-bold mb-20", "text-black")}>Programma</p> */}
        <Schedule data={scheduleData} />
      </section>
    </main>
  );
}
