import { describe, it, expect } from "vitest";
import { add } from ".";

describe("Native Addon", () => {
  describe("add function", () => {
    it("should add two positive numbers correctly", () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
    });

    it("should handle negative numbers", () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(2, -3)).toBe(-1);
      expect(add(-2, -3)).toBe(-5);
    });

    it("should handle zero", () => {
      expect(add(0, 0)).toBe(0);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
    });

    it("should handle decimal numbers", () => {
      expect(add(2.5, 3.5)).toBe(6);
      expect(add(-2.5, 3.5)).toBe(1);
    });
  });
});
