const Example = () => {
  const clickHandler = () => {
    alert("ぼたんがくりっくされました");
  };
  const clickHandler2 = () => {
    console.log("ぼたんがくりっくされました");
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
