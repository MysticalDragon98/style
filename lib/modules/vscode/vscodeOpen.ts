import exec from "../sh/exec";

export default async function vscodeOpen (path: string) {
    try {
        await exec(`code "${path}"`);
    } catch (error) {
    }
}
