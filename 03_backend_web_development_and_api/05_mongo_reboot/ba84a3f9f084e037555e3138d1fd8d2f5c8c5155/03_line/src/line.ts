export function line(numberOfStars: number): string {
    let result: string = "";
    for (let i = 1 ; i <= numberOfStars ; i++) {
        result += "*";
    }
    return result;
}
