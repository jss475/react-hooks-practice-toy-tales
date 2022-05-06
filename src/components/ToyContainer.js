import React, {useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({allToyCards, handleDelete, handleLike}) {


  let toyCardsList = allToyCards.map(toy => {
    return <ToyCard key = {toy.id} id = {toy.id} name = {toy.name} image = {toy.image} likes = {toy.likes} handleDelete={handleDelete}
    handleLike = {handleLike}
    />
  })
  
  return (
    <div id="toy-collection">{toyCardsList}</div>
  );
}

export default ToyContainer;
