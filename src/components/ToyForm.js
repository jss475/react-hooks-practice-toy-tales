import React, {useState} from "react";

function ToyForm({handleToySubmit}) {

  const [name, setName] = useState('')
  const [url, setURL] = useState('')

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleURLChange(e){
    setURL(e.target.value)
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit = {(e)=>{
        e.preventDefault()
        handleToySubmit({name: name, image: url})
        }}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNameChange}
          value = {name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange = {handleURLChange}
          value = {url}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
