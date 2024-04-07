import executeShCommand from "./executeShCommand";

export default async function exec (command: string, cwd?: string) {
    return await executeShCommand(command, { cwd });
}
