import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Card from './Components/Card';




const App = ()=>
{
  //initial arrImage
  const [images, setImages] = useState([
    {  url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`},
    {  url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`},
    {  url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`},
    {  url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`},
    {  url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`},
    {  url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`}
  ]) ;

// function that add image to list
  const addImage = ()=>{
    setImages([...images,  {  url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`}] );
  }
  const removeImage = ()=>{
    setImages(images.slice(0,-1))
  }

  return (
    <section className = "hero">
      <div className="cardContainer">
      <Card  images ={images} />
      </div>

      <div className="btnContainer">
        <button onClick={removeImage}> Remove</button>
        <button onClick={addImage}>Add</button>
      </div>
    </section>

  );
}

export default App;
