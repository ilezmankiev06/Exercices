type Draw = number[]

export function lottery_draw(): Draw {
    const array: Draw = [0, 1, 2, 3, 4, 5];
    const newArray = array.map((number) => {
        number = Math.floor(Math.random() * 100)
        return number;
    });
    return newArray;
}

