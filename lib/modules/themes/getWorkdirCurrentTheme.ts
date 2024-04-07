import readVSCodeSettings from "../vscode/readVSCodeSettings";

export default async function getWorkdirCurrentTheme (): Promise<string | null> {
    const settings = await readVSCodeSettings();

    if (settings["_.theme"]) {
        return settings["_.theme"];
    }

    return null;
}