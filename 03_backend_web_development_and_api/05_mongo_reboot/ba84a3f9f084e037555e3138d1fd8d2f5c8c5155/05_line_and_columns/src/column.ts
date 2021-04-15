export function column(numberOfLines: number, lineContent: string): string {
    let result: string = "";
    for (let i = 1 ; i <= numberOfLines ; i++) {
      result += `${lineContent}\n`
    }
    return result;
}