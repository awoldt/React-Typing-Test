import randomWords from "random-words";

export default function handler(req, res) {
  //all the words that user must spell
  const selectedWords = randomWords(100);
  //array containing the spelling of all the generated words
  const wordsSplit = selectedWords.map((x) => {
    return x.split("");
  });

  res.json({ words: selectedWords, splitWords: wordsSplit });
}
