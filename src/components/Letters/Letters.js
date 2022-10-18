import "./Letters.css";

const Letters = ({ getLetterOnClick }) => {
  const alphabet = "abcdefghijklmnñopqrstuvwxyz";

  const getLetterClick = (event) => {
    event.preventDefault();
    getLetterOnClick(event.target.textContent);
  };

  return (
    <ul className="letters">
      {alphabet.split("").map((letter, key) => (
        <li key={key} className="letter">
          <a href={letter} onClick={getLetterClick}>
            {letter.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
