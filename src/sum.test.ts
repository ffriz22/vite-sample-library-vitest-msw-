import { expect, test } from "vitest";

import sum from "./sum";

test("sums two numbers", () => {
  expect(sum(4, 7)).toBe(11);
});
