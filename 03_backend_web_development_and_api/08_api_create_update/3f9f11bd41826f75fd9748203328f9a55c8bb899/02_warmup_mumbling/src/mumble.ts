export function mumble(mumbled: string): string {
    const tab = []
    mumbled.split("").forEach((element, index) => {
    let letter = element
    for (let i = 0; i < index; i++) {
      letter += element
    }
    tab.push(letter);
    })
    return tab.join("-").toLowerCase();
}