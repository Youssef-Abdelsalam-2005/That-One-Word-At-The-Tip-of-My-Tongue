function Output({ data }) {
  return (
    <div id="output">
      {data.map((word) => (
        <div key={word.id} class="word">
          <p>{word.word}</p>
        </div>
      ))}
    </div>
  );
}
export default Output;
