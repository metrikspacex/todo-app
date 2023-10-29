import type { Command } from "commander";

declare type ActionFunction = (...arguments_: any[]) => void | Promise<void>;
declare type Description = string;
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

export declare interface ActionCreatorOptions {
  actionFunction: ActionFunction;
  argumentType: ArgumentType;
  description?: string;
  name: Name;
  program: Command;
}
export declare interface ActionThrowOptions extends ActionCreatorOptions {
  description?: string;
  name: NameType;
  program: Command;
  type: "string";
}
