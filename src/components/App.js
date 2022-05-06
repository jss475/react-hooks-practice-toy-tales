import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const  [allToyCards, setAllToyCards] = useState([])
  
  //make a fetch request to get the toy data
  useEffect(()=> {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(data => {
      setAllToyCards(data)
      })
    },[])

  function handleToySubmit({name,image}){
    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'image': image,
        'likes': 0
      })
    }
    fetch('http://localhost:3001/toys',configObj)
    .then(resp => resp.json())
    .then(data => setAllToyCards([...allToyCards,data]))
  }
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete(id){

    let configObj = {
      method: 'DELETE'
    }

    fetch(`http://localhost:3001/toys/${id}`,configObj)
      .then(resp => resp.json())
      .then(data => {
        console.log('deleted')
        let filteredData = allToyCards.filter(toy => {
          return toy.id !== id
        })

        setAllToyCards(filteredData)
      })
  }

  function handleLike(id, likes){
    let newLikes = +likes +1
    let configObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'likes': newLikes 
      })
    }

    fetch(`http://localhost:3001/toys/${id}`, configObj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        debugger
        let filteredData = allToyCards.map(toy => {
          if(toy.id === id){
         
            return toy = data
          }else{
     
            return toy
          }
        })

        setAllToyCards(filteredData)
      })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleToySubmit={handleToySubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer allToyCards = {allToyCards} handleDelete = {handleDelete} handleLike = {handleLike}/>
    </>
  );
}

export default App;
