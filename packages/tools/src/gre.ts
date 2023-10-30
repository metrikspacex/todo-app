import { resolve } from "node:path";
import { cwd } from "node:process";
import { fileURLToPath } from "node:url";
import { Command } from "commander";
import fs from "fs-extra";

import type { GreMetaData } from "./gre.d";

const __currentWorkingDirectory = cwd();
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const sources = {
  components: resolve(__dirname, "../templates/components", "example.tsx"),
};
const __metadata = import(resolve(__currentWorkingDirectory, "gre.json"))
  .catch((_error) => {
    throw new Error("Mising gre.json at the root of your directory").message;
  })
  .then(async (data): Promise<GreMetaData> => {
    return (await data) as GreMetaData;
  });

const generateComponent = async (
  args: string,
  options: { dryRun: boolean; verbose: boolean }
) => {
  const componentName = `${args}.tsx`;
  const metadata = await __metadata;
  const target = resolve(
    __currentWorkingDirectory,
    metadata.component_target,
    componentName
  );

  if (options.dryRun) {
    console.log(`Component: ${componentName}`);
    console.log(`Copy:      ${sources.components}`);
    console.log(`Location:  ${target}`);
    console.log(`Result:    ${target} \n`);
  } else {
    fs.copyFileSync(sources.components, target);
  }
};

const bootstrap = () => {
  const program = new Command();
  console.clear();

  program
    .name("Generate React Elements")
    .description(
      `
        Utility for todo-app-frontend project,
        creating react elements in a similar structure;
      `
    )
    .helpOption("-h --help", "display help for command")
    .version("0.0.0");

  program
    .command("component")
    .description("create react component")
    .argument("<string>")
    .option("--dry-run", "mock creation", false)
    .option("--verbose", "log command", false)
    .action(
      async (args: string, options: { dryRun: boolean; verbose: boolean }) => {
        await generateComponent(args, options);
      }
    );

  program
    .command("hook")
    .description("create react hook")
    .action((args, options) => {});

  program
    .command("page")
    .description("create react page")
    .action((args, options) => {});

  program
    .command("route")
    .description("create react route")
    .action((args, options) => {});

  program
    .command("service")
    .description("create react service")
    .action((args, options) => {});

  program
    .command("slice")
    .description("create react slice")
    .action((args, options) => {});

  program.parse();
};

bootstrap();
