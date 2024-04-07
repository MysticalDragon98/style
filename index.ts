//* Imports

import initCLI from "./plugins/cli/initCLI";

async function main () {
    await Promise.all([
        //* Main
    ]);

    await initCLI({});
}

main();

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);