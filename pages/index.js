import { Container } from "react-bootstrap";
import RandomWordsBox from "../components/RandomWordsBox";
import randomWords from "random-words";
import Head from "next/head";
import MobileRandomWordsBox from "../components/MobileRandomWordsBox";
import isMobile from "ismobilejs";
import CustomNav from "../components/CustomNav";

export default function Home({ words, splitWords, mobile }) {
  //MOBILE
  if (mobile === true) {
    return (
      <>
        <Head>
          <title>Typesnap | Free Online Typing Test</title>
          <meta
            name="description"
            content="Test your typing skills and see how many words per minute you can type. You have 60 seconds to type all 100 randomly generated words. Optimized for mobile devices."
          ></meta>
          <meta property="og:title" content="How fast can you type?" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://typesnap.com" />
          <meta property="og:image" content="https://typesnap.com/typing.jpg" />
          <link rel="canonical" href="https://typesnap.com" />
        </Head>
        <MobileRandomWordsBox wordsData={words} wordsSpellings={splitWords} />
      </>
    );
    //DESKTOP
  } else {
    return (
      <>
        <Head>
          <title>Typesnap | Free Online Typing Test</title>
          <meta
            name="description"
            content="Test your typing skills and see how many words per minute you can type. You have 60 seconds to type all 100 randomly generated words."
          ></meta>
          <meta property="og:title" content="How fast can you type?" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://typesnap.com" />
          <meta property="og:image" content="https://typesnap.com/typing.jpg" />
          <link rel="canonical" href="https://typesnap.com" />
        </Head>

        <CustomNav />

        <Container
          style={{ backgroundColor: "rgb(51, 162, 255)", padding: "0px" }}
          fluid
        >
          <RandomWordsBox wordsData={words} wordsSpellings={splitWords} />

          <Container style={{ backgroundColor: "white" }} fluid>
            <Container style={{ paddingTop: "50px" }}>
              <h1>Typesnap</h1>
              <p style={{ maxWidth: "800px" }}>
                Speed typing tests measure the accuracy of words typed correctly
                within a given time limit. Typesnap speed typing test randomly
                generates 100 different words for you to type as fast as
                possible. A light grey box will hover over the current word to
                be spelled, and as you type the screen will indicate if
                you&apos;ve spelled anything wrong. After hitting space once
                each words is spelled, it will be green if correct or red with a
                line through it if incorrect.
                <br></br>
                <br></br>
                At the end you can view all the words you managed to type before
                the time ran out. Words spelled correctly or incorrectly will be
                labeled as such. With all the words typed, your WPM will be
                calculated and displayed. If you don&apos;t like your score, you
                can always try again!
              </p>
              <h2 style={{ marginTop: "25px" }}>What is WPM</h2>
              <p style={{ maxWidth: "800px" }}>
                WPM, or better known as Words per Minute, is the speed in which
                one can type on a keyboard. Calculating WPM is simply dividing
                how many characters were typed within 1 minute divided by 5. WPM
                formula considers 5 keystrokes as a word.
                <br></br>
                <br></br>
                <code>Total characters typed / 5</code>
                <br></br>
                <br></br>
                For example, if one was to type 546 characters within a 1 minute
                time limit, that person&apos;s WPM score would be 109.2, meaning
                they can type on average 109 words every minute.
              </p>

              <h2 style={{ marginTop: "25px" }}>Average Typing Speeds</h2>
              <p>
                On average, speed typing results can be broken down as such:{" "}
              </p>
              <ul>
                <li>
                  20-30 words per minute: <b>Slow</b>
                </li>
                <li>
                  30-40 words per minute: <b>Average</b>
                </li>
                <li>
                  40-50 words per minute: <b>Good</b>
                </li>
                <li>
                  50-60 words per minute: <b>Great</b>
                </li>
                <li>
                  60-70 words per minute: <b>Expert</b>
                </li>
              </ul>

              <h2 style={{ marginTop: "25px" }}>
                How to Improve Typing Speeds
              </h2>
              <p style={{ maxWidth: "800px" }}>
                Getting better at typing is like anything else in life that
                requires practice. Start by watching your fingers as you type.
                Notice where each key&apos;s placement is on the keybaord, and
                form a mental image in your head as your type as to where each
                letter is. Make sure to keep your back straight and posture
                upright as your type, never leaning your head too far fowards or
                backwards.
                <br></br>
                <br></br>
                Use this website as a tool to improve your typing skills
                overtime. Hit the restart button after your test ends to keep up
                the practice!
              </p>
              <div
                className="text-secondary"
                style={{ fontSize: "10px", marginBottom: "25px" }}
              >
                Icons made by{" "}
                <a
                  href="https://www.freepik.com"
                  title="Freepik"
                  style={{ textDecoration: "none" }}
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a
                  href="https://www.flaticon.com/"
                  title="Flaticon"
                  style={{ textDecoration: "none" }}
                >
                  www.flaticon.com
                </a>
              </div>
            </Container>
            <p className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-brush"
                viewBox="0 0 16 16"
              >
                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
              </svg>{" "}
              Made by{" "}
              <a
                href="https://awoldt.com"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Awoldt
              </a>
            </p>
          </Container>
        </Container>
      </>
    );
  }
}

export async function getServerSideProps({ req }) {
  const userAgent = isMobile(req.headers["user-agent"]).any; //true if mobile device false if desktop

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
      mobile: userAgent,
    },
  };
}
