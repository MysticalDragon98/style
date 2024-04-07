import { resolve } from "path";

export default function getThemePath (theme: string) {
    return resolve(__dirname, `../../../.styles/${theme}.json`);
}