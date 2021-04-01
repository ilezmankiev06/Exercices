export function rectangle(width: number, height: number): string { 

    const result: string[] = [];
    let res: string = "";

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        res += "*";
    }
    result.push(res);
    res = "";
    }
    return result.join("\n");
}