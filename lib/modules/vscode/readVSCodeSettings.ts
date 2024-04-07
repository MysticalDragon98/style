import { readFile } from "fs/promises";
import { join } from "path";

export default async function readVSCodeSettings (workdir: string = process.cwd()) {
    const path = join(workdir, ".vscode/settings.json");

    try {
        return JSON.parse(await readFile(path, "utf-8"));
    } catch (error) {
        return {};
    }
}