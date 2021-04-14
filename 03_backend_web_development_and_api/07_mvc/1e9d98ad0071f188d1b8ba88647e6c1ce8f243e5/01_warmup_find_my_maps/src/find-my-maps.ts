type MyObject = {
  objectType: string;
  quantity: number;
  description: string;
  storedIn: string;
}

export function findMyMaps(objects: MyObject[]): MyObject[] {
  return objects.filter((word) =>
    word.objectType === "map"
)
}
