import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  alias: {},
  clean: true,
  declaration: true,
  entries: [
    {
      cleanDist: true,
      declaration: true,
      input: "src/gre",
    },
  ],
  hooks: {},
  outDir: "dist",
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: false,
      sourcemap: true,
      target: ["node18"],
    },
    inlineDependencies: true,
    output: {
      banner: "#!/usr/bin/env node",
    },
  },
});
