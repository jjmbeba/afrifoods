import { expect, test } from "bun:test";

const DEFAULT_ANSWER = 4;

test("2 + 2", () => {
  expect(2 + 2).toBe(DEFAULT_ANSWER);
});
