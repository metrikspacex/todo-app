/* eslint-disable n/no-missing-import */
import { HelloController } from "@components/hello.controller";
import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Module({
  controllers: [HelloController],
  exports: [],
  imports: [],
  providers: [],
})
export class RootModule {}

if (import.meta.env.PROD) {
  console.log(import.meta.env.VITE_HOST);
  console.log(import.meta.env.VITE_PORT);
  const bootstrap = async () => {
    const application = await NestFactory.create(RootModule);
    application.setGlobalPrefix(import.meta.env.VITE_GLOBAL_PREFIX);
    await application.listen(
      import.meta.env.VITE_PORT,
      import.meta.env.VITE_HOST,
      () => {
        console.log("Hello");
      }
    );
  };
  bootstrap().catch((error) => {
    console.error(error);
  });
}
export const viteNodeApp = NestFactory.create(RootModule);
