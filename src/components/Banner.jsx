import React from "react";
import { MdVerified } from "react-icons/md";

function Banner({ artist }) {
  return (
    <div className="banner">
      <div>
        <img src={artist?.images[0].url} alt="" />
      </div>
      <div>
        <span>
          Verified Artist <MdVerified />
        </span>
        <h1>{artist?.name}</h1>
        <p>Folowers : {artist?.followers.total}</p>
      </div>
    </div>
  );
}

export default Banner;
