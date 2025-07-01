import { clsx } from "@koine/utils";
import { parseISO, format } from "date-fns";
import { it } from "date-fns/locale";

/**
 * Groups schedule entries by day, and by group if applicable.
 */
function groupEntriesByDayAndGroup(data: ScheduleData): GroupedSchedule {
  const grouped: GroupedSchedule = {};

  for (const entry of data.entries) {
    const startDate =
      typeof entry.start === "string" ? parseISO(entry.start) : entry.start;
    const dayKey = format(startDate, "yyyy-MM-dd", { locale: it });

    // Initialize day group
    if (!grouped[dayKey]) {
      grouped[dayKey] = {};
    }

    const dayGroup = grouped[dayKey] as Record<string, ScheduleDataEntry[]>;

    if (entry.group) {
      if (!dayGroup[entry.group]) {
        dayGroup[entry.group] = [];
      }
      dayGroup[entry.group].push(entry);
    } else {
      if (!dayGroup["default"]) {
        dayGroup["default"] = [];
      }
      dayGroup["default"].push(entry);
    }
  }

  return grouped;
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
  [day: string]:
    | {
        [group: string]: ScheduleDataEntry[];
      }
    | {
        default: ScheduleDataEntry[];
      };
};

export type ScheduleProps = React.PropsWithChildren<{
  data: ScheduleData;
  className?: string;
}>;

export const Schedule = (props: ScheduleProps) => {
  const { data: raw, children, className, ...rest } = props;
  const data = groupEntriesByDayAndGroup(raw);

  return (
    <div className={clsx(className, "space-y-12")} {...rest}>
      {Object.entries(data).map(([day, groups]) => (
        <div key={day} className="pb-6">
          <time
            className={clsx(
              "text-3xl lg:text-6xl font-mono font-semibold block mb-5 uppercase",
              "max-lg:px-5",
              "text-red-500"
            )}
            dateTime={day}
          >
            {format(parseISO(day), "EEEE dd MMMM", { locale: it })}
          </time>

          <div className="space-y-10 max-w-4xl">
            {Object.entries(groups).map(([group, entries]) => (
              <div key={group} className={clsx(
                group == "default" ? "bg-gray-100" : "bg-red-100"
              )}>
                {group !== "default" && (
                  <h3
                    className={clsx("text-xl p-4 font-bold", "text-red-800")}
                  >
                    {group}
                  </h3>
                )}

                <ul className="space-y-4">
                  {entries.map((entry, idx) => (
                    <li
                      key={idx}
                      className={clsx(
                        "flex content-around items-center gap-10",
                        "p-3 lg:p-5 border-4",
                        "border-transparent hover:border-gray-900"
                      )}
                    >
                      <time
                        className={clsx(
                          "text-2xl lg:text-5xl font-light font-mono",
                          "text-gray-400"
                        )}
                      >
                        {format(parseISO(entry.start.toString()), "HH:mm")}
                        {entry.end &&
                          ` – ${format(
                            parseISO(entry.end.toString()),
                            "HH:mm"
                          )}`}
                      </time>
                      <div>
                        <h4 className={clsx("text-lg font-semibold")}>
                          {entry.title}
                        </h4>
                        {entry.description && (
                          <p className={clsx("mt-1", "text-gray-600")}>
                            {entry.description}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
