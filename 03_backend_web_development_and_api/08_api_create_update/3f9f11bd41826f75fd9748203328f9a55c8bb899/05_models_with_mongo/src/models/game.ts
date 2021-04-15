import * as dotenv from "dotenv";
import { Collection } from "mongodb"

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
    private collection: Collection;
  
constructor(collection: Collection) {
    this.collection = collection;
}

getAll(): Promise<Game[]> {
  return this.collection.find().toArray()
  .then((games) => {
    return games.map((game) => {
      return {
      name: game.name,
      slug: game.slug,
      cover: game.url,
      }
    })
  })
}

findBySlug(slug: string): Promise<Game | null> {
  return this.collection.findOne({slug: slug})
}

findByPlatform(platform_slug: string): Promise<Game[]> {
  return this.collection.find().toArray()
    .then((games) => {
      return games.filter((game) => {
        if(game.platform.slug === platform_slug) {
          return {
            name: game.name,
            slug: game.slug,
          }
        }
      })
    })
}

getPlatforms(): Promise<Platform[]> {
    return this.collection.find().toArray()
    .then((games) => {
    const result: Platform[] = [];
      games.find((game) => {
        if (result.find((platform) => {
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
    });
}
}