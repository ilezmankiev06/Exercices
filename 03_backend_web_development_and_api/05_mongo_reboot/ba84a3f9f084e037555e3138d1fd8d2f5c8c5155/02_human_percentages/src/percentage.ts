export function humanPercentage(percentages: number[]): string[] {
    return percentages.map((result) => `${Math.round(result * 100)}%`);
}
