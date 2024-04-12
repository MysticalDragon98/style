import mapObject from "../../modules/utils/mapObject";
import readVSCodeSettings from "../../modules/vscode/readVSCodeSettings";
import transformVSCodeSettings from "../../modules/vscode/transformVSCodeSettings";

interface IOptions {
    all: boolean;
}

export default async function toggleREPLCommand ([...files]: string[], options: IOptions) {
    const settings = await readVSCodeSettings();
    const excludedFiles = settings["files.exclude"];

    if (options.all) {
        const isHidden = Object.values(excludedFiles).find(hidden => hidden);

        await transformVSCodeSettings(settings => ({
            ...settings,
            ["files.exclude"]: mapObject(settings["files.exclude"], (path, hidden) => !isHidden)
        }));

        console.log(isHidden ? "All files are visible now" : "All files are hidden now");
        return;
    }

    await transformVSCodeSettings(settings => ({
        ...settings,
        ["files.exclude"]: mapObject(excludedFiles, (path, hidden) => {
            if (files.includes(path)) {
                return !hidden;
            }
            return hidden;
        })
    }));
}