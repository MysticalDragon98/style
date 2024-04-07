import { ok } from "assert";
import applyTheme from "../../modules/themes/applyTheme";
import { log } from "termx";
import getWorkdirCurrentTheme from "../../modules/themes/getWorkdirCurrentTheme";

interface IOptions {

}

export default async function applyREPLCommand ([]: string[], options: IOptions) {
    const currentTheme = await getWorkdirCurrentTheme();

    await applyTheme(currentTheme);

    log(`Successfully applied theme: ${currentTheme}`);
}