import type { Lang } from "@/config/site";
import { en } from "./en";
import { pt, type Dictionary } from "./pt";

export const dictionaries: Record<Lang, Dictionary> = { pt, en };
export type { Dictionary };
