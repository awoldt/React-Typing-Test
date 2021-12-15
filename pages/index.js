import { Container } from "react-bootstrap";
import RandomWordsBox from "../components/RandomWordsBox";
import randomWords from "random-words";
import Head from "next/head";
import MobileRandomWordsBox from "../components/MobileRandomWordsBox";
import isMobile from "ismobilejs";

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
        <Container
          style={{ backgroundColor: "rgb(51, 162, 255)", padding: "0px" }}
          fluid
        >
          <a href={"/"} style={{ color: "white", textDecoration: "none" }}>
            {" "}
            <h1 className="text-center" style={{ marginBottom: "25px" }}>
              Typesnap
            </h1>
          </a>

          <p className="text-center">
            Type as many words as possible in 1 minute
          </p>

          <RandomWordsBox wordsData={words} wordsSpellings={splitWords} />

          <Container style={{ backgroundColor: "white" }} fluid>
            <Container style={{ paddingTop: "50px" }}>
              <hr style={{ maxWidth: "800px" }}></hr>
              <p style={{ maxWidth: "800px" }}>
                Speed typing tests measure the accuracy of words typed correctly
                within a given time limit. The test above randomly generates 100
                different words for you to type as fast as possible. A light
                grey box will hover over the current word to be spelled, and as
                you type the screen will indicate if you&apos;ve spelled
                anything wrong. After hitting space once each words is spelled,
                it will be green if correct or red with a line through it if
                incorrect.
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
