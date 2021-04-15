export function line(numberOfLine: number): string {
    let result: string = "";
    for (let i = 1 ; i <= numberOfLine ; i++) {
        result += "*"
    }
    return result;
}