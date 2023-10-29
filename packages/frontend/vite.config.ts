/// <reference types="vitest" />
import { resolve } from "node:path";
import { cwd } from "node:process";
import { fileURLToPath } from "node:url";
import type { AliasOptions, ConfigEnv, UserConfig } from "vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const __alias: AliasOptions = {
  "@assets/": resolve(__dirname, "src", "assets"),
  "@components": resolve(__dirname, "src", "components"),
  "@hooks/": resolve(__dirname, "src", "hooks"),
  "@pages/": resolve(__dirname, "src", "pages"),
  "@routes/": resolve(__dirname, "src", "routes"),
  "@services": resolve(__dirname, "src", "services"),
  "@slices/": resolve(__dirname, "src", "slices"),
  "@src/": resolve(__dirname, "src"),
  "@styles": resolve(__dirname, "src", "styles"),
  "@testing/": resolve(__dirname, "testing"),
  "@types/": resolve(__dirname, "src", "types"),
  "@utilities/": resolve(__dirname, "src", "utilities"),
};

const base = "/todo-app/";

const coveragePattern = "**/*.?(c|m)[jt]s?(x)";
const coverageIncludes = [`${resolve(__dirname, "src")}/${coveragePattern}`];

const port = 3000;

const testingPattern = "**/*.{test,spec}.?(c|m)[jt]s?(x)";
const testingIncludes = [
  `${resolve(__dirname, "vitest", "e2e")}/${testingPattern}`,
  `${resolve(__dirname, "vitest", "intergrations")}/${testingPattern}`,
  `${resolve(__dirname, "vitest", "units")}/${testingPattern}`,
];

export default defineConfig(
  ({ command, mode: _mode, ssrBuild: _ssrBuild }: ConfigEnv): UserConfig => {
    return {
      appType: "spa",
      base,
      build: {
        assetsDir: "./src/assets",
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
        react(),
      ],
      preview: {
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
