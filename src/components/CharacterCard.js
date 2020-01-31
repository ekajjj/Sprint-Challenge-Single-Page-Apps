import React from "react";

export default function CharacterCard({name, image}) {
  return (
    <section className="charCard">
    <div>
      <img src={image} />
      <p>Name: {name}</p>
    </div>
    </section>
  );
}