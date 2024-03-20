import { useState } from "react";
import Output from "./output.js";

function Form() {
  const [meansLike, setMeansLike] = useState("");
  const [soundsLike, setSoundsLike] = useState("");
  const [spelledLike, setSpelledLike] = useState("");
  const [adjective, setAdjective] = useState("");
  const [noun, setNoun] = useState("");
  const [synonym, setSynonym] = useState("");
  const [trigger, setTrigger] = useState("");
  const [antonym, setAntonym] = useState("");
  const [kindOf, setKindOf] = useState("");
  const [general, setGeneral] = useState("");
  const [compromise, setCompromise] = useState("");
  const [partOf, setPartOf] = useState("");
  const [follower, setFollower] = useState("");
  const [predecessor, setPredecessor] = useState("");
  const [consonant, setConsonant] = useState("");

  const [result, setResult] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchWords(
      meansLike,
      soundsLike,
      spelledLike,
      adjective,
      noun,
      synonym,
      trigger,
      antonym,
      kindOf,
      general,
      compromise,
      partOf,
      follower,
      predecessor,
      consonant
    );
  };

  const fetchWords = async (
    meansLike,
    soundsLike,
    spelledLike,
    adjective,
    noun,
    synonym,
    trigger,
    antonym,
    kindOf,
    general,
    compromise,
    partOf,
    follower,
    predecessor,
    consonant
  ) => {
    const data = {
      meansLike: meansLike || " ",
      soundsLike: soundsLike || " ",
      spelledLike: spelledLike || " ",
      adjective: adjective || " ",
      noun: noun || " ",
      synonym: synonym || " ",
      trigger: trigger || " ",
      antonym: antonym || " ",
      kindOf: kindOf || " ",
      general: general || " ",
      compromise: compromise || " ",
      partOf: partOf || " ",
      follower: follower || " ",
      predecessor: predecessor || " ",
      consonant: consonant || " ",
    };
    const params = new URLSearchParams(data);
    console.log(
      `https://that-one-word-at-the-tip-of-my-tongue.onrender.com/${params.toString()}`
    );
    const response = await fetch(
      `https://that-one-word-at-the-tip-of-my-tongue.onrender.com/${params.toString()}`
    );
    const result = await response.json();
    setResult(result);
    console.log(result);
  };

  return (
    <div id="everything">
      <form onSubmit={onSubmit} id="form">
        <label>Means like:</label>
        <input
          type="text"
          value={meansLike}
          id="meansLike"
          name="meansLike"
          autoComplete="off"
          onChange={(e) => setMeansLike(e.target.value)}
        />
        <label>Sounds like:</label>
        <input
          type="text"
          value={soundsLike}
          id="soundsLike"
          name="soundsLike"
          autoComplete="off"
          onChange={(e) => setSoundsLike(e.target.value)}
        />
        <label>Spelled like/Starts with:</label>
        <input
          type="text"
          value={spelledLike}
          id="spelledLike"
          name="spelledLike"
          autoComplete="off"
          onChange={(e) => setSpelledLike(e.target.value)}
        />
        <label>Nouns described by this adjective:</label>
        <input
          type="text"
          value={adjective}
          id="adjective"
          name="adjective"
          autoComplete="off"
          onChange={(e) => setAdjective(e.target.value)}
        />
        <label>Adjectives used to describe this noun:</label>
        <input
          type="text"
          value={noun}
          id="noun"
          name="noun"
          autoComplete="off"
          onChange={(e) => setNoun(e.target.value)}
        />
        <label>Synonym:</label>
        <input
          type="text"
          value={synonym}
          id="synonym"
          name="synonym"
          autoComplete="off"
          onChange={(e) => setSynonym(e.target.value)}
        />
        <label>Word that trigger this word:</label>
        <input
          type="text"
          value={trigger}
          id="trigger"
          name="trigger"
          autoComplete="off"
          onChange={(e) => setTrigger(e.target.value)}
        />
        <label>Antonym:</label>
        <input
          type="text"
          value={antonym}
          id="antonym"
          name="antonym"
          autoComplete="off"
          onChange={(e) => setAntonym(e.target.value)}
        />
        <label>Kind of:</label>
        <input
          type="text"
          value={kindOf}
          id="kindOf"
          name="kindOf"
          autoComplete="off"
          onChange={(e) => setKindOf(e.target.value)}
        />
        <label>More general than the word:</label>
        <input
          type="text"
          value={general}
          id="general"
          name="general"
          autoComplete="off"
          onChange={(e) => setGeneral(e.target.value)}
        />
        <label>Compromises:</label>
        <input
          type="text"
          value={compromise}
          id="compromise"
          name="compromise"
          autoComplete="off"
          onChange={(e) => setCompromise(e.target.value)}
        />
        <label>Part of:</label>
        <input
          type="text"
          value={partOf}
          id="partOf"
          name="partOf"
          autoComplete="off"
          onChange={(e) => setPartOf(e.target.value)}
        />
        <label>Usually follows:</label>
        <input
          type="text"
          value={follower}
          id="follower"
          name="follower"
          autoComplete="off"
          onChange={(e) => setFollower(e.target.value)}
        />
        <label>Usually precedes:</label>
        <input
          type="text"
          value={predecessor}
          id="predecessor"
          name="predecessor"
          autoComplete="off"
          onChange={(e) => setPredecessor(e.target.value)}
        />
        <label>Consonant:</label>
        <input
          type="text"
          value={consonant}
          id="consonant"
          name="consonant"
          autoComplete="off"
          onChange={(e) => setConsonant(e.target.value)}
        />
      </form>
      <button type="submit" form="form">
        Submit
      </button>
      <Output data={result} />
    </div>
  );
}

export default Form;
