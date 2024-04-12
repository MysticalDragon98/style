import { log } from "termx";
import { yellowBright } from "chalk";
import readVSCodeSettings from "../../modules/vscode/readVSCodeSettings";

interface IOptions {

}

export default async function hiddenREPLCommand (args: string[], options: IOptions) {
    const settings = await readVSCodeSettings();
    const excludes = settings["files.exclude"];

    for (const path in excludes) {
        if (excludes[path]) {
            console.log(yellowBright(`⁃ ${path}: hidden`));
        } else {
            console.log(`• ${path}: visible`);
        }
    }
}