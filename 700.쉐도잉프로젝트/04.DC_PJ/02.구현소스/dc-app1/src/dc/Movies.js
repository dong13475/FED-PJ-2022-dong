// DC 무비 페이지 컴포넌트
import React from "react";
import Ban from "./modules/Ban";
import VidIntro from "./modules/VidIntro";

const Movies = () => {
  return(
    <>
      <Ban cat="MOVIES" />
      <VidIntro pg="" mm="on" />
    </>
  );
}; ////////////// Movies /////////////

export default Movies;