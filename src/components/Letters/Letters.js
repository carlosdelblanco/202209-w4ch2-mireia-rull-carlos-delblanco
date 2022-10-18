import "./Letters.css";

const Letters = ({ onLetterClick }) => {
  const alphabet = "abcdefghijklmnñopqrstuvwxyz";

  const getLetterClick = (event) => {
    event.preventDefault();
    onLetterClick(event.target.textContent);
  };

  return (
    <ul className="letters">
      {alphabet.split("").map((letter, key) => (
        <li key={key} className="letter">
          <a href={letter} action={getLetterClick}>
            {letter}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
