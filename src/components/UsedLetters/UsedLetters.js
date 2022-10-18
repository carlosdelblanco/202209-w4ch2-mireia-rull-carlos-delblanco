import "./UsedLetters.css";

const UsedLetters = ({ usedLetters }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {Array.from(usedLetters).map((letter, key, array) => (
          <li key={key} className="used-letter">
            {key === 0 ? `${letter}\xa0` : `${letter},`}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsedLetters;
