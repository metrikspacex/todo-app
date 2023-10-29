import "@styles/tailwind.scss";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from "vitest";

describe("dom setup", () => {
  it("afterAll", () => {
    afterAll(() => {
      console.log("--afterAll [dom] hook--");
    });
  });
  it("afterEach", () => {
    afterEach(() => {
      console.log("--afterEach [dom] hook--");
      cleanup();
    });
  });
  it("beforeAll", () => {
    beforeAll(() => {
      console.log("--beforeAll [dom] hook--");
    });
  });
  it("beforeEach", () => {
    beforeEach(() => {
      console.log("--beforeEach [dom] hook--");
    });
  });
});
