import { Command } from "commander";
import type { ActionCreatorOptions } from "./gre.d";

function actionThrow(program: () => Command) {
  try {
    program();
  } catch (error: any) {
    throw new Error(error).message;
  }
}

const actionCreator = ({
  actionFunction: _actionFunction,
  argumentType: _type,
  description: _description,
  name: _name,
  program,
}: ActionCreatorOptions) => {
  actionThrow(() => {
    return program
      .command("component")
      .description("Generates a react component")
      .argument("<string>", "name of react component")
      .option("--n", "name of the component")
      .option("--p", "path to create the component")
      .action(() => {
        console.log("HI");
      });
  });
};

const bootstrap = async () => {
  const program = new Command();
  program
    .name("Generate React Elements")
    .description(
      `
        Utility for todo-app-frontend project,
        creating react elements in a similar structure;
      `
    )
    .version("0.0.0");

  actionCreator({
    actionFunction: (message) => {
      console.log(message);
    },
    argumentType: "string",
    name: "component",
    program,
  });
};

bootstrap().catch((error) => {
  console.trace(error);
});
