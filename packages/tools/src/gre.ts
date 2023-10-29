import { Command } from "commander";

import type { ActionCreatorOptions } from "../types/action-creator";

function actionThrow(program: () => Command) {
  try {
    program();
  } catch {
    throw new Error("Function not implemented.");
  }
}

const actionCreator = ({
  actionFunction: _actionFunction,
  argumentType: _type,
  description,
  name,
  program,
}: ActionCreatorOptions) => {
  actionThrow(() => {
    return program
      .argument(`${name}`, description ?? `Create a react ${name}`)
      .action((message: string) => {
        console.log(message);
      });
  });
};

export const bootstrap = async () => {
  const program: Command = new Command();
  program
    .name("Generate React Elements")
    .description(
      `
        Utility for todo - app - frontend project,
        creating react elements in a similar structure;
      `
    )
    .version("0.0.0");

  actionCreator({
    actionFunction: (message: string) => {
      console.log(message);
    },
    argumentType: "string",
    name: "component",
    program,
  });

  program.parse(process.argv);
};
