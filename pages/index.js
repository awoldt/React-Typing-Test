import { Container } from "react-bootstrap";
import RandomWordsBox from "../components/RandomWordsBox";
import randomWords from "random-words";

export default function Home({ words, splitWords }) {
  return (
    <Container>
      <h1>typing test</h1>
      <RandomWordsBox wordsData={words} wordsSpellings={splitWords} />
      <p>Free online speed typing test. Type as many words as possible before the timer runs out.</p>
    </Container>
  );
}

export async function getServerSideProps() {
  //all the words that user must spell
  const selectedWords = randomWords(100);
  //array containing the spelling of all the generated words
  const wordsSplit = selectedWords.map((x) => {
    return x.split("");
  });

  return {
    props: {
      words: selectedWords,
      splitWords: wordsSplit,
    },
  };
}
