import express from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import * as nunjucks from "nunjucks";

const clientWantsJson = (request: express.Request): boolean =>
  request.get("Accept") === "application/json";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  app.use("/assets", express.static("assets"));

  nunjucks.configure("views", {
    autoescape: true,
    express: app
  });

  app.set("view engine", "njk");

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      if (clientWantsJson(request)) {
        response.json(games)
      } else {
        response.render("games", { games });
      }
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).render("not-found")
      } else {
        if (clientWantsJson(request)) {
          response.json(game)
        } else {
          response.render("game_slug", { game });
        }
      }
    });
  });

  app.get("/platforms", (request, response) => {
    gameModel.getPlatforms().then((platforms) => {
      if (clientWantsJson(request)) {
        response.json(platforms)
      } else {
        response.render("platform", { platforms });
      }
    });
  });

  app.get("/platforms/:platform_slug", (request, response) => {
    gameModel
      .findByPlatform(request.params.platform_slug)
      .then((gamesForPlatform) => {
        if (clientWantsJson(request)) {
          response.json(gamesForPlatform)
        } else {
          response.render("jeuplatform", { gamesForPlatform });
        }
      });
  });

  app.get("/*", (request, response) => {
    response.status(400).render("not-found");
  });

  return app;
}
