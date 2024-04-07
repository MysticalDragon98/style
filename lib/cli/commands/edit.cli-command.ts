import { ok } from "assert";
import { log } from "console";
import { stat } from "fs/promises";
import { resolve } from "path";
import vscodeOpen from "../../modules/vscode/vscodeOpen";
import existsTheme from "../../modules/themes/existsTheme";

interface IOptions {

}

export default async function editREPLCommand (args: string[], options: IOptions) {
    const [name] = args
    
    ok(name, 'Usage: style edit <name>');

    const path = resolve(__dirname, "../../../.styles/" + name + ".json");

    // If file exists, open it in vscode
    if (!await existsTheme(name)) {
        log(`Theme ${name} does not exists`)
        return;
    }

    await vscodeOpen(path);
}