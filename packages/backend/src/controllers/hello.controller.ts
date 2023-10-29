import { Controller, Get } from "@nestjs/common";

@Controller("hello")
export class HelloController {
  @Get()
  public index(): string {
    return "This action returns all catss";
  }
}
