import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  alias: {},
  clean: true,
  declaration: true,
  entries: ["src/index"],
  hooks: {},
  outDir: "dist",
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: false,
      sourcemap: true,
      target: "node18",
    },
    inlineDependencies: true,
  },
});
