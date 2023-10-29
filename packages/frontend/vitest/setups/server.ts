import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from "vitest";

describe("server setup", () => {
  it("afterAll", () => {
    afterAll(() => {
      console.log("--afterAll [server] hook--");
    });
  });
  it("afterEach", () => {
    afterEach(() => {
      console.log("--afterEach [server] hook--");
    });
  });
  it("beforeAll", () => {
    beforeAll(() => {
      console.log("--beforeAll [server] hook--");
    });
  });
  it("beforeEach", () => {
    beforeEach(() => {
      console.log("--beforeEach [server] hook--");
    });
  });
});
