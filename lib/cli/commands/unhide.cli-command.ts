import { ok } from "assert";
import { log } from "termx";
import transformVSCodeSettings from "../../modules/vscode/transformVSCodeSettings";

interface IOptions {

}

export default async function unhideREPLCommand ([ file ]: string[], options: IOptions) {
    ok(file, "Usage: style hide <path>");

    await transformVSCodeSettings(settings => ({
        ...settings,
        ["files.exclude"]: {
            ...settings["files.exclude"],
            [file]: undefined
        }
    }));

    log("Successfully unhidden: ", file);
}