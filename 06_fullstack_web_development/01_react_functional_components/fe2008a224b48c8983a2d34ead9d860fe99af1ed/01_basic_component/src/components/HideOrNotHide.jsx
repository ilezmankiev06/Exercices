import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [buttonText, setButtonText] = React.useState(true);

  return (
    <div>
      <button onClick={() => setButtonText(!buttonText)}>{buttonText ? "Hide Content" : "Reveal Content"}</button>
      {buttonText ? <p>text</p> : null}
    </div>
  );
};
