import { greet } from "./index";
test("Hello Francis in uperCase", () => {
  
    expect(greet()).toBe("Hello WORLD!");
    expect(greet("Francis")).toBe("Hello FRANCIS!");
}); 