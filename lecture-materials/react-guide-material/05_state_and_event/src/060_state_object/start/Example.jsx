import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };

  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };
  const changeAge = (e) => {
    setPerson({ ...person, age: e.target.value });
  };

  const clearInputs = () => {
    setPerson({ name: "", age: "" });
  };

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <button onClick={clearInputs}>リセット</button>
    </>
  );
};

export default Example;
