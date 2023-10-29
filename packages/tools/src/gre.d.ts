import type { Command } from "commander";

declare type ActionFunction = (...arguments_: any[]) => void | Promise<void>;
declare type Name =
  | "component"
  | "hook"
  | "page"
  | "route"
  | "service"
  | "slice"
  | "utilitie"
  | "type";
declare type ArgumentType = "string";

declare interface ActionCreatorOptions {
  actionFunction: ActionFunction;
  argumentType: ArgumentType;
  description?: string;
  name: Name;
  program: Command;
}
declare interface ActionThrowOptions extends ActionCreatorOptions {
  description?: string;
  name: Name;
  program: Command;
  type: "string";
}

export type { ActionCreatorOptions, ActionThrowOptions };
