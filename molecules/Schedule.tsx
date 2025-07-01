import { clsx } from "@koine/utils";
import { parseISO, format } from "date-fns";
import { it } from "date-fns/locale";

function groupScheduleByDayAndGroup(
  entries: ScheduleDataEntry[]
): GroupedSchedule {
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  const result: GroupedSchedule = {};

  for (const entry of sortedEntries) {
    const dayKey = format(entry.start, "yyyy-MM-dd");

    if (!result[dayKey]) result[dayKey] = [];

    const dayEntries = result[dayKey];

    const lastGroup = (() => {
      for (let i = dayEntries.length - 1; i >= 0; i--) {
        if (dayEntries[i].type === "group") return (dayEntries[i] as any).name;
      }
      return null;
    })();

    // Handle group separation
    if (entry.group) {
      if (lastGroup !== entry.group) {
        dayEntries.push({ type: "group", name: entry.group });
      }
    }

    dayEntries.push({ type: "entry", entry });
  }

  return result;
}

type ScheduleData = {
  entries: ScheduleDataEntry[];
};

type ScheduleDataEntry = {
  title: string;
  description?: string;
  group?: string;
  start: string;
  end?: string;
  showStart?: boolean;
  showEnd?: boolean;
};

type GroupedSchedule = {
  [date: string]: Array<
    | { type: "group"; name: string }
    | { type: "entry"; entry: ScheduleDataEntry }
  >;
};

type DaySectionProps = {
  date: string;
  items: GroupedSchedule[string];
};

const DaySection = (props: DaySectionProps) => {
  const { date, items } = props;
  return (
    <section className="pb-10">
      <time
        className={clsx(
          "text-3xl lg:text-4xl font-mono font-semibold block mb-5 uppercase",
        )}
        dateTime={date}
      >
        <span className={clsx("pr-4", "text-red-500")}>
          {format(parseISO(date), "EEEE", { locale: it })}
        </span>
        {format(parseISO(date), "dd", { locale: it })}
        <span className={clsx("text-sm pl-2")}>
          {format(parseISO(date), "MMMM", { locale: it })}
        </span>
      </time>
      {items.map((item, i) =>
        item.type === "group" ? (
          <h3
            key={`group-${i}`}
            className={clsx("uppercase py-4 font-bold", "text-gray-400")}
          >
            {item.name}
          </h3>
        ) : (
          <div key={`entry-${i}`} className="space-y-2">
            <ScheduleItem entry={item.entry} />
          </div>
        )
      )}
    </section>
  );
};

type ScheduleItemProps = {
  entry: ScheduleDataEntry;
};

const ScheduleItem = (props: ScheduleItemProps) => {
  const { entry } = props;
  const timeRange = [
    entry.showStart !== false ? format(entry.start, "HH:mm") : null,
    entry.end && entry.showEnd !== false ? format(entry.end, "HH:mm") : null,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div
      className={clsx(
        "flex items-center",
        "py-3 pr-3 lg:pr-6 border-y-4 break-inside-avoid",
        "border-transparent hover:border-gray-900"
      )}
    >
      {timeRange && <time
        className={clsx(
          "text-xl lg:text-2xl font-light font-mono pr-6",
          "text-gray-500"
        )}
      >
        {timeRange}
      </time>}
      <div>
        <h4 className={clsx("font-semibold")}>{entry.title}</h4>
        {entry.description && (
          <p className={clsx("text-[12px]", "text-gray-600")}>
            {entry.description}
          </p>
        )}
      </div>
    </div>
  );
};

export type ScheduleProps = React.PropsWithChildren<{
  data: ScheduleData;
  className?: string;
}>;

export const Schedule = (props: ScheduleProps) => {
  const { data: raw, children, className, ...rest } = props;
  const schedule = groupScheduleByDayAndGroup(raw.entries);
  const sortedDays = Object.keys(schedule).sort();

  return (
    <div className={clsx(className, "space-y-12")} {...rest}>
      <div className="lg:flex gap-10">
        {sortedDays.map((day) => (
          <DaySection key={day} date={day} items={schedule[day]} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
