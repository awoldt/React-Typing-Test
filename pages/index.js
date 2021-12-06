import { Container } from "react-bootstrap";
import RandomWordsBox from "../components/RandomWordsBox";
import randomWords from "random-words";
import SocialButtons from "../components/SocialButtons";
import Head from "next/head";

export default function Home({ words, splitWords }) {
  return (
    <>
      <Head>
        <title>Typeswift | Free Online Typing Test</title>
      </Head>
      <Container>
        <h1>typing test</h1>
        <RandomWordsBox wordsData={words} wordsSpellings={splitWords} />
        <SocialButtons />
        <h2 style={{ marginTop: "50px" }}>What is a speed typing test</h2>
        <p style={{ maxWidth: "800px" }}>
          Speed typing tests measure the accuracy of words typed per minute.
          After 60 seconds, a user&apos;s WPM is calculated based on the amount
          of correct words typed divided by total words typed all within the
          timeframe.
        </p>
        <i>Words correctly spelled / Total words spelled</i>
        <h2 style={{ marginTop: "25px" }}>What is WPM</h2>
        <p style={{ maxWidth: "800px" }}>
          WPM, or better known as Words per Minute, is the percentage of words
          corretly typed over amount of words attempted. This score is to give a
          rought estiamate of how fast a user&apos;s typing skills are. The
          higher a WPM score, the more words a user can type.
        </p>
        <h2 style={{ marginTop: "25px" }}>How to Improve Typing Speeds</h2>
        <p style={{ maxWidth: "800px" }}>
          Getting better at typing is like anything else in life that requires
          practice.
        </p>
      </Container>
    </>
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
