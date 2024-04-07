import { mkdir } from "fs/promises";
import { join } from "path";
import { writeFile, access, constants } from "fs/promises";

export default async function ensureVSCodeSettings (workdir = process.cwd()) {
    const dir = join(workdir, ".vscode");
    const settingsPath = join(dir, "settings.json");

    // Ensure .vscode directory
    await mkdir(dir, { recursive: true });

    // Ensure settings.json
    try {
        await access(settingsPath, constants.F_OK);
    } catch (error) {
        if (error.code === "ENOENT") {
            // File does not exist, create it with default content
            const defaultSettings = {};
            await writeFile(settingsPath, JSON.stringify(defaultSettings, null, 2));
        } else {
            throw error;
        }
    }
}