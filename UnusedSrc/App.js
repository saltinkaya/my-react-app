import { people } from "./data";
import getImageUrl from "./utils";
import './App.css';


export default function App() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everybodyElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  const chemistList = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}: </b>
        {`${person.profession} known for ${person.accomplishment}`}
        </p>
    </li>
  ));


  const everbodyElseList = everybodyElse.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}: </b>
        {`${person.profession} known for ${person.accomplishment}`}
        </p>
    </li>
  ));

  return (
    <section>
      <h1>Chemists are:</h1>
      <ul>{chemistList}</ul>
      <h1>Everybody else are:</h1>
      <ul>{everbodyElseList}</ul>
    </section>
  );
}

/*
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

*/
