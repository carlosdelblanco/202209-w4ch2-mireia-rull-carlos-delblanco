import "./Letters.css";

const Letters = () => {
  const alphabet = "abcdefghijklmnñopqrstuvwxyz";

  return (
    <ul className="letters">
      {alphabet.split("").map((letter, key) => (
        <li key={key} className="letter">
          <a href={letter} action="">
            {letter}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
