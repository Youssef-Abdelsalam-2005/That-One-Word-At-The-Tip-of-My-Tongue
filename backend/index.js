const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const getApiRequest = (req) => {
  let meansLike = req.params.meansLike;
  let soundsLike = req.params.soundsLike;
  let spelledLike = req.params.spelledLike;
  let adjective = req.params.adjective;
  let noun = req.params.noun;
  let synonym = req.params.synonym;
  let trigger = req.params.trigger;
  let antonym = req.params.antonym;
  let kindOf = req.params.kindOf;
  let general = req.params.general;
  let compromise = req.params.compromise;
  let partOf = req.params.partOf;
  let follower = req.params.follower;
  let predecessor = req.params.predecessor;
  let consonant = req.params.consonant;

  meansLike = meansLike.toLowerCase();
  soundsLike = soundsLike.toLowerCase();
  spelledLike = spelledLike.toLowerCase();
  if (spelledLike.length == 1 && !spelledLike.startsWith("+")) {
    spelledLike += "*";
  }
  adjective = adjective.toLowerCase();
  noun = noun.toLowerCase();
  synonym = synonym.toLowerCase();
  trigger = trigger.toLowerCase();
  antonym = antonym.toLowerCase();
  kindOf = kindOf.toLowerCase();
  general = general.toLowerCase();
  compromise = compromise.toLowerCase();
  partOf = partOf.toLowerCase();
  follower = follower.toLowerCase();
  predecessor = predecessor.toLowerCase();
  consonant = consonant.toLowerCase();

  let data = {
    ml: meansLike,
    sl: soundsLike,
    sp: spelledLike,
    rel_jja: adjective,
    rel_jjb: noun,
    rel_syn: synonym,
    rel_trg: trigger,
    rel_ant: antonym,
    rel_spc: kindOf,
    rel_gen: general,
    rel_com: compromise,
    rel_par: partOf,
    rel_bga: follower,
    rel_bgb: predecessor,
    rel_cns: consonant,
  };

  for (let key in data) {
    if (data[key] == "+") {
      delete data[key];
    }
  }
  const params = new URLSearchParams(data);
  const url = `https://api.datamuse.com/words?${params.toString()}&max=30`;
  console.log(url);
  return url;
};

app.get(
  "/meansLike=:meansLike&soundsLike=:soundsLike&spelledLike=:spelledLike&adjective=:adjective&noun=:noun&synonym=:synonym&trigger=:trigger&antonym=:antonym&kindOf=:kindOf&general=:general&compromise=:compromise&partOf=:partOf&follower=:follower&predecessor=:predecessor&consonant=:consonant",
  async (req, res) => {
    const apiRequest = getApiRequest(req);
    const response = await fetch(apiRequest);
    const data = await response.json();
    console.log(data);
    res.json(data);
  }
);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening on port 3001!");
});
