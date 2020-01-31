import React from "react";

export default function CharacterCard({name, image, gender, species, status}) {
  return (
    <section className="charCard">
    <div>
      <img src={image} />
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
    </section>
  );
}