import { useAddress } from "@thirdweb-dev/react";
import React from "react";
import "./App.css";

const Card = ({ name, image, url }) => {
  return (
    <div class="card">
      <img
        src={image.replace("ipfs://", "https://ipfs.moralis.io/ipfs/")}
        style={{
          width: "fit",
        }}
        alt="Avatar"
      />
      <div class="container">
        <h4>
          <b>{name}</b>
        </h4>
        <div>
          {/* open link in blank tab */}
          <a href={url} target="_blank" rel="noreferrer">
            open sea link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
