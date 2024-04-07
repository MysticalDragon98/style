import { readFile, writeFile } from "fs/promises";
import ensureVSCodeSettings from "./ensureVSCodeSettings";
import { join } from "path";

export default async function transformVSCodeSettings (workdir: string, transform: (settings: any) => any) {
    const settingsPath = join(workdir, '.vscode', 'settings.json');

    await ensureVSCodeSettings(workdir);

    const settings = await JSON.parse(await readFile(settingsPath, 'utf-8'));
    
    const newSettings = transform(settings);
    
    await writeFile(settingsPath, JSON.stringify(newSettings, null, 4));
}