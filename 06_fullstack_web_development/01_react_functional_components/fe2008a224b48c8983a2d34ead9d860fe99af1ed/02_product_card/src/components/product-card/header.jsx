import React from "react";

const CardHeader = (props) => {
  console.log(props);
  return (
    <>
      {props.game.name}
      <div>
        {props.game.platforms.map(({ platform_logo }, index) => {
          return <img key={index} src={platform_logo.url} alt="" />;
        })}
      </div>
    </>
  );
};

export default CardHeader;
