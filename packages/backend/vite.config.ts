/// <reference types="vitest" />
import { resolve } from "node:path";
import { cwd } from "node:process";
import { fileURLToPath } from "node:url";
import type { AliasOptions, ConfigEnv, UserConfig } from "vite";
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import tsconfigPaths from "vite-tsconfig-paths";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const __alias: AliasOptions = {
  "@controllers/": resolve(__dirname, "src", "assets"),
  "@services": resolve(__dirname, "src", "components"),
  "@src/": resolve(__dirname, "src"),
};

const base = "/todo-app/api";

const coveragePattern = "**/*.?(c|m)[jt]s?(x)";
const coverageIncludes = [`${resolve(__dirname, "src")}/${coveragePattern}`];

const port = 3100;

const testingPattern = "**/*.{test,spec}.?(c|m)[jt]s?(x)";
const testingIncludes = [
  `${resolve(__dirname, "vitest", "e2e")}/${testingPattern}`,
  `${resolve(__dirname, "vitest", "intergrations")}/${testingPattern}`,
  `${resolve(__dirname, "vitest", "units")}/${testingPattern}`,
];

export default defineConfig(
  ({ command, mode: _mode, ssrBuild: _ssrBuild }: ConfigEnv): UserConfig => {
    return {
      appType: "custom",
      base,
      build: {
        assetsDir: resolve(__dirname, "src", "assets"),
        copyPublicDir: true,
        emptyOutDir: true,
        outDir: resolve(__dirname, "dist"),
      },
      clearScreen: true,
      envDir: resolve(__dirname, "environments"),
      envPrefix: "VITE_",
      esbuild: {},
      logLevel: "error",
      plugins: [
        tsconfigPaths({
          projects: [
            resolve(__dirname, "tsconfig.json"),
            resolve(__dirname, "tsconfig.node.json"),
            resolve(__dirname, "tsconfig.vitest.json"),
          ],
          root: cwd(),
        }),
        ...VitePluginNode({
          adapter: "nest",
          appPath: resolve(__dirname, "src", "main.ts"),
          exportName: "viteNodeApp",
          swcOptions: {
            jsc: {
              parser: {
                decorators: true,
                syntax: "typescript",
              },
              target: "es2019",
              transform: {
                decoratorMetadata: true,
                legacyDecorator: true,
              },
            },
          },
          tsCompiler: "esbuild",
        }),
      ],
      preview: {
        // Doesn't work, find solution other than vite-node call
        port,
        strictPort: true,
      },
      publicDir: resolve(__dirname, "public"),
      resolve: {
        alias: __alias,
      },
      root: cwd(),
      server: {
        port,
        strictPort: true,
      },
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
        environment: "node",
        globals: true,
        include: testingIncludes,
        passWithNoTests: true,
      },
    };
  }
);
