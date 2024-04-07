import { readFile } from "fs/promises";
import getThemePath from "./getThemePath";
import IStyles from "../../interfaces/Styles.interface";

export default async function readTheme (name: string) {
    const path = getThemePath(name);

    return JSON.parse(await readFile(path, "utf-8")) as IStyles;
}