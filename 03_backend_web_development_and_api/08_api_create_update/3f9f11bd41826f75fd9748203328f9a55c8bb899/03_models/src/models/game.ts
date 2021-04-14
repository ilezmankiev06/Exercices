export type Game = {
  name: string;
  slug: string;
  [key: string]: any
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any
};

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Game[] {
    return this.collection.map((game) => {
      return {
        name: game.name,
        slug: game.slug,
        cover: game.url,
      }
    })
  }

  findBySlug(slug: string): Game | null {
    const games = this.collection.find((game) => {
      if (slug === game.slug) {
        return slug;
      } 
    });
      if (games) {
        return games
      } else {
        return null
      }
  }

  findByPlatform(platform_slug: string): Game[] {
    return this.collection.filter((element) => {
      if(element.platform.slug === platform_slug){
        return {
          name: element.name,
          slug: element.slug,
        }
      }
    })
  }

  getPlatforms(): Platform[] {
    const result: Platform[] = [];
    this.collection.forEach((game) => {
      if (
        result.find((platform) => {
          return game.platform.slug === platform.slug;
        }) === undefined
      ) {
        result.push({
          name: game.platform.name,
          slug: game.platform.slug,
        });
      }
    });
    return result;
  }
}
