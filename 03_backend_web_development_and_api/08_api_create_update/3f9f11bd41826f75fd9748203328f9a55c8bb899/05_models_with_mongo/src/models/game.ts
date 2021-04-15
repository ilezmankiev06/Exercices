import * as dotenv from "dotenv";

dotenv.config();

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

getAll(db: ): Promise<Game[]> {
    return new Promise((resolve) => {
        resolve (this.collection.map((game) => {
            return {
              name: game.name,
              slug: game.slug,
              cover: game.url,
            }
          }))
    })
  }

findBySlug(slug: string): Promise<Game | null> {
    return new Promise((resolve) => {
        const games = this.collection.find((game) => {
            if (slug === game.slug) {
              return slug;
            } 
            });
            if (games) {
              resolve(games)
            } else {
              resolve(null)
            } 
    })
}

findByPlatform(platform_slug: string): Promise<Game[]> {
    return new Promise((resolve) => {
        resolve(this.collection.filter((element) => {
            if(element.platform.slug === platform_slug){
              return {
                name: element.name,
                slug: element.slug,
              }
            }
          }))
    })
}

getPlatforms(): Promise<Platform[]> {
    return new Promise((resolve) => {
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
        resolve(result); 
    })
} 
}