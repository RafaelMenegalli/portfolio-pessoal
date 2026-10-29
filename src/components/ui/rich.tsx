import { Fragment } from "react";
import { cn } from "@/lib/utils";

/** Renders **bold** segments of a dictionary string. */
export function Rich({ text, strongClassName }: { text: string; strongClassName?: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={cn("font-semibold", strongClassName)}>
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export const gradientText =
  "bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-300 bg-clip-text text-transparent";
