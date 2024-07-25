import { useState } from "react";

export default function Basics() {
  const features = {
    dimension: 90,
    imageSrc: 'https://i.imgur.com/yXOvdOSs.jpg',
    name: 'Profile Photo'

  }

  let content;
  let flag = true;
  if(flag) {
    content = <p>True flag</p>
  } else {
    content = <p>False flag</p>
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const myList = products.map(item => 
      <li key={item.id}>
        {item.title}
      </li>
    );

  function MyButton() {
    let [count, setCount] = useState(0)
    function handleClick() {
      setCount(++count)
    }
    return(
      <>
        <button onClick={handleClick}>Click me</button>
        <br/>
        <p>My button count: {count}</p>
      </>
    )
  }

  return(
    <div>
      {/* Nested component */} 
      <p>Welcome to my react app ✔</p>
      <MyButton/>
      <br/>
      <MyButton/>
      <br/>
      ---------------------------------------------------------------------------------

      {/* Binding variable */}
      <h1>{features.name}</h1>
      <img
      src={features.imageSrc}
      style={{
        width: features.dimension,
        height: features.dimension
      }}
      ></img>
      <br/>
      ---------------------------------------------------------------------------------

      {/* If-else condition */}
      {/*One way*/}
      {content}

      {/*Inline If-Else block*/}
      {flag ? (
        <p>Inline if block</p>
      ) : (
        <p>Inline else block</p>
      )}

      {/*Inline If block without else*/}
      {
        flag && <p>Only if block</p>
      }
      ---------------------------------------------------------------------------------

      {/*For loop*/}
      <ul>
        {myList}
      </ul>

    </div>
  )
}