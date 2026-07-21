import AnimalItem from "./AnimalItem";

const AnimalList = ({ animals }) => {
  if (animals.length === 0) {
    return <p>アニマルが存在しません。</p>;
  }
  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalItem animal={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;
