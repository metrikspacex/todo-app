import type { RequestHandler } from "msw";
import { setupServer } from "msw/node";

export const handlers: RequestHandler[] = [];
export const server = setupServer(...handlers);
