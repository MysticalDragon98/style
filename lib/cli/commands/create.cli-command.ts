import { ok } from "assert"
import { stat, writeFile } from "fs/promises";
import { resolve } from "path";
import { log } from "termx";
import vscodeOpen from "../../modules/vscode/vscodeOpen";

interface IOptions {

}

export default async function createREPLCommand (args: string[], options: IOptions) {
    const [name] = args
    
    ok(name, 'Usage: style create <name>');

    const path = resolve(__dirname, "../../../.styles/" + name + ".json");
    // If file exists, display error
    try {
        await stat(name)
        log(`Theme ${name} already exists`)
    } catch (error) {
        await writeFile(path, JSON.stringify({
            name,
            peacock: {
                color: ""
            }
        }, null, 2));
        await vscodeOpen(path);
    }
}