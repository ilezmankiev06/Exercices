import React from "react";
import { Platform, Game } from "../../types/Platform";

const PlatformPage: React.FC = (): JSX.Element => {
  const [platforms, setPlatforms] = React.useState<Platform[]>([]);

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", {
      headers: { accept: "application/json" },
    })
      .then((response) => response.json())
      .then((change) => {
        setPlatforms(change);
      });
  }, []);
  console.log(platforms);

  const [games, setGames] = React.useState<Game[]>([]);

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/games/", {
      headers: { accept: "application/json" },
    })
      .then((response) => response.json())
      .then((changed) => {
        setGames(changed);
      });
  }, []);
  console.log(games);
  return (
    <>
      Platforms
      <ul className="list-group">
        <li className="list-group-item" aria-current="true">
          {platforms.map((platform, index) => (
            <button onClick={() => {}} key={index}>
              {platform.slug}
            </button>
          ))}
        </li>
      </ul>
    </>
  );
};

export default PlatformPage;
