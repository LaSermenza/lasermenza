import { clsx } from "@koine/utils"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-9xl">La Sermenza</h1>
        <ol className="list-inside text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Sito in costruzione...
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className={clsx(
              "border-2 border-solid flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto",
              "uppercase",
              "hover:bg-red-500 hover:text-white hover:border-red-500"
            )}
            href="/itm-2025"
          >
            Incontri Tra/Montani 2025
          </a>
        </div>
      </main>
    </div>
  );
}
