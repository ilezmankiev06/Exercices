import { toWords } from "./index";

test("Should return [string]", () => {
    expect(toWords("H!ello")).toBe("['H', 'ello']");
});