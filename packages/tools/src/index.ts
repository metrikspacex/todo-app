import { bootstrap } from "./gre.ts";

bootstrap().catch((error) => {
  console.trace(error);
});
