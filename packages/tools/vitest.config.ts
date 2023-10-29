import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
// Type should come from vitest but doesnt export it..
import type { AliasOptions } from "vite";
import type { ConfigEnv, UserConfig } from "vitest/config";
import { defineConfig } from "vitest/config";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const __alias: AliasOptions = {};

const coveragePattern = "**/*.?(c|m)[jt]s?(x)";
const coverageIncludes = [`${resolve(__dirname, "src")}/${coveragePattern}`];

const testingPattern = "**/*.{test,spec}.?(c|m)[jt]s?(x)";
const testingIncludes = [
  `${resolve(__dirname, "vitest", "e2e")}/${testingPattern}`,
  `${resolve(__dirname, "vitest", "intergrations")}/${testingPattern}`,
  `${resolve(__dirname, "vitest", "units")}/${testingPattern}`,
];

export default defineConfig(
  ({ command, mode: _mode, ssrBuild: _ssrBuild }: ConfigEnv): UserConfig => {
    return {
      test: {
        alias: __alias,
        coverage: {
          all: false,
          branches: 80,
          clean: true,
          enabled: command === "serve",
          functions: 80,
          include: coverageIncludes,
          lines: 80,
          provider: "istanbul",
          reporter: ["html", "json", "lcov", "text"],
          reportsDirectory: resolve(__dirname, "vitest", "reports"),
          statements: 80,
        },
        css: true,
        environment: "jsdom",
        globals: true,
        include: testingIncludes,
        passWithNoTests: true,
        setupFiles: [
          resolve(__dirname, "vitest", "setups", "dom.ts"),
          resolve(__dirname, "vitest", "setups", "server.ts"),
        ],
      },
    };
  }
);
