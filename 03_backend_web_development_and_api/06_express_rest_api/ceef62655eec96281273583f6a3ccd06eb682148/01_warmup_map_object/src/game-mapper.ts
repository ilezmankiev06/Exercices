
export function gameMapper(games: GameWithALotOfData[]): Game[] {
  const result = games.map((game) => {
    return {
      name: game.name,
      slug: game.slug,
      cover: game.cover.url,
    }
  })
  return result;
}
export type Game = {
  name: string;
  slug: string;
  cover: string;
}

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  }
}
