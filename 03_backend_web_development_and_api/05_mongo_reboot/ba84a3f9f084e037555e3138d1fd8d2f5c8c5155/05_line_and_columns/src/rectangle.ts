import { line } from "./line";
import { column } from "./column";

export function rectangle(width: number, height: number): string {
    let rect: string = "";
    for (let i = 0; i < width; i++) {
      rect += line(height);
      rect += column(width, "*");
    }
    return rect;
  }
