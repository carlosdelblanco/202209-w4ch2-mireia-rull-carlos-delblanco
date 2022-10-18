import "./Result.css";

const Result = () => {
  const winner = true;
  return (
    <section className="game-result">
      {winner ? "You win" : "You're dead"}
    </section>
  );
};

export default Result;
