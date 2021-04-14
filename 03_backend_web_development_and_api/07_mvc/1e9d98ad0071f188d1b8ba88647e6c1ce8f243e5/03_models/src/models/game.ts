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
    const result = this.collection.map(response => {
      return {
        name: response.platform.name,
        slug: response.platform.slug,
      }
    })
    const platforms = Array.from(new Set(result))
    return platforms
    // result.filter((item, index) => result.indexOf(item) === index)
    // return result;
  }
}
