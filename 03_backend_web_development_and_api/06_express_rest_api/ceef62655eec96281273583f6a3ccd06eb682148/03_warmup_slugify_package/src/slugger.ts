import slugify from "slugify"
export function slugger(text: string): string {
  return slugify(text, "-")
}
export function sluggerWithUnderscores(text: string): string {
    return slugify(text, "_")
  }
