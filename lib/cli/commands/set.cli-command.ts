import { ok } from "assert";
import { stat } from "fs/promises";
import { log } from "termx";
import applyTheme from "../../modules/themes/applyTheme";
import existsTheme from "../../modules/themes/existsTheme";

interface IOptions {

}

export default async function setREPLCommand (args: string[], options: IOptions) {
    const [name] = args
    
    ok(name, 'Usage: style set <name>');

    if (!await existsTheme(name)) {
        log(`Theme ${name} does not exists`)
        return;
    }

    await applyTheme(name);

    log(`Successfully applied theme: ${name}`);
}