import { stat } from "fs/promises";
import getThemePath from "./getThemePath";

export default async function existsTheme (theme: string) {
    try {
        await stat(getThemePath(theme));
        
        return true;
    } catch (error) {
        if (error.code === 'ENOENT') return false;
        throw error;
    }
}