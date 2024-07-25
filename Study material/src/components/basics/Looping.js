import React from "react";
import "./Looping.css";

function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

const persons = [
  {
    id: 1,
    name: "Maria Skłodowska-Curie",
    imageId: "szV5sdG",
    size: 70,
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovery: "polonium (chemical element)",
  },
  {
    id: 2,
    name: "Katsuko Saruhashi",
    imageId: "YfeOqp2",
    size: 70,
    profession: "geochemist",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovery: "a method for measuring carbon dioxide in seawater",
  },
];
// -------------------------------------------------Without using props-------------------------------------------------

// const myList = persons.map((person) => {
//   return (<section className="profile">
//     <h2>{person.name}</h2>
//     <img
//       className="avatar"
//       src={getImageUrl(person.imageId)}
//       alt={person.name}
//       width={person.size}
//       height={person.size}
//     />
//     <ul>
//       <li key={`prof-${person.imageId}`}>
//         <b>Profession: </b>
//         {person.profession}
//       </li>
//       <li key={`award-${person.imageId}`}>
//         <b>Awards: {person.awards.length} </b>
//         ({
//             person.awards.map((item, i) => i !== person.awards.length-1 ? `${item}, ` : item)
//         })
//       </li>
//       <li key={`disc-${person.imageId}`}>
//         <b>Discovered: </b>
//         {person.discovery}
//       </li>
//     </ul>
//   </section>);
// });

// function Looping() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       {myList}
//     </div>
//   );
// }


// -----------------------------------------Using props and looping within function---------------------------------------

// function Profile({ persons }) {
//   return persons.map((person) => {
//     return (
//       <section className="profile" id={person.id}>
//         <h2>{person.name}</h2>
//         <img
//           className="avatar"
//           src={getImageUrl(person.imageId)}
//           alt={person.name}
//           width={person.size}
//           height={person.size}
//         />
//         <ul>
//           <li key={`prof-${person.imageId}`}>
//             <b>Profession: </b>
//             {person.profession}
//           </li>
//           <li key={`award-${person.imageId}`}>
//             <b>Awards: {person.awards.length} </b>(
//             {person.awards.join(',')}
//             )
//           </li>
//           <li key={`disc-${person.imageId}`}>
//             <b>Discovered: </b>
//             {person.discovery}
//           </li>
//         </ul>
//       </section>
//     );
//   });
// }

// function Looping() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile persons={persons} />
//     </div>
//   );
// }


// -----------------------------------------Using props and looping within JSX---------------------------------------

function Profile({ person }) {
      return (
        <section className="profile" id={person.id}>
          <h2>{person.name}</h2>
          <img
            className="avatar"
            src={getImageUrl(person.imageId)}
            alt={person.name}
            width={person.size}
            height={person.size}
          />
          <ul>
            <li key={`prof-${person.imageId}`}>
              <b>Profession: </b>
              {person.profession}
            </li>
            <li key={`award-${person.imageId}`}>
              <b>Awards: {person.awards.length} </b>(
              {person.awards.join(',')}
              )
            </li>
            <li key={`disc-${person.imageId}`}>
              <b>Discovered: </b>
              {person.discovery}
            </li>
          </ul>
        </section>
      );
  }
  
  function Looping() {
    return (
      <div>
        <h1>Notable Scientists</h1>
        {
            persons.map(person => {
                return <Profile person={person} />
            })
        }
      </div>
    );
  }

export default Looping;
