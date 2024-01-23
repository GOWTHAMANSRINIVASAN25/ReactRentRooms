import React,{useState} from 'react'
import data from './data'



function FormComponent(){
const[img,setImg]=useState('');
const[title,setTitle]=useState('');
const[prevPrice,setPrevPrice]=useState('');
const[newPrice,setNewPrice]=useState('');
const[noofrooms,setNoofrooms]=useState('');
const[category,setCategory]=useState('');
function h1(event){
  event.preventDeault();
  setImg(event.target.value);
}
function h2(event){
  event.preventDeault();
  setTitle(event.target.value);
}
function h3(event){
  event.preventDeault();
  setPrevPrice(event.target.value);
}
function h4(event){
  event.preventDeault();
  setNewPrice(event.target.value);
}
function h5(event){
  event.preventDeault();
  setNoofrooms(event.target.value);
}
function h6(event){
  event.preventDeault();
  setCategory(event.target.value);
}
function handleSubmit(){
data.push(
  {
    img:img,
    title:title,
    prevPrice:prevPrice,
    newPrice:newPrice,
    noofrooms:noofrooms,
    category:category
  }
)
}
return(
  <>
<form onSubmit={handleSubmit}>
  <input value={img} type='text' onChange={h1}>Image</input>
  <input value={title} type='text' onChange={h2}>Title</input>
  <input value={prevPrice} type='text' onChange={h3}>prevPrice</input>
  <input value={newPrice} type='text' onChange={h4}>newPrice</input>
  <input value={noofrooms} type='text' onChange={h5}>noofrooms</input>
  <input value={category} type='text' onChange={h6}>Category</input>
  <button >Submit</button>
</form>  
  
  </>

);
}
export default FormComponent;