import React from "react";
import { Container } from "react-bootstrap";

const privacy = () => {
  return (
    <Container>
      <div style={{ marginBottom: "25px", marginTop: "25px" }}>
        <a style={{ paddingLeft: "0px" }} href={"/"}>
          Home
        </a>
      </div>

      <h1>Privacy Policy</h1>
      <p className="text-secondary">Last updated 3/3/2022</p>

      <p>
        This Privacy Policy document contains types of information that is
        collected and how it is used.
      </p>

      <h2>Consent</h2>

      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <h2>Information we collect</h2>
      <p>
        Information collected is from user behavior such as engagement, time
        spent on site, and technology used. Other information collected on
        users are for advertising purposes. Note that
        Typesnap does not have any access to this advertising and personally identifiable data.
      </p>

      <h2>How we use your information</h2>

      <p>We use the information collected to:</p>

      <ul>
        <li>Advertise</li>
        <li>Analyze website traffic</li>
      </ul>

      <h2>Log Files</h2>

      <p>
        Typesnap follows a standard procedure of using log files. These files
        log visitors when they visit websites. All hosting companies do this and
        a part of hosting services&apos; analytics. The information collected by
        log files include internet protocol (IP) addresses, browser type,
        Internet Service Provider (ISP), date and time stamp, referring/exit
        pages, and possibly the number of clicks. These are not linked to any
        information that is personally identifiable. The purpose of the
        information is for analyzing trends, administering the site, tracking
        user&apos;s movement on the website, and gathering demographic
        information.
      </p>

      <h2>Cookies and Web Beacons</h2>

      <p>
        Like any other website, Typesnap uses cookies. These cookies are used to
        store information including visitor&apos;s preferences, and the pages on
        the website that the visitor accessed or visited. The information is
        used to optimize the user&apos;s experience by customizing our web page
        content based on visitor&apos;s browser type and/or other information.
      </p>

      <p>
        For more general information on cookies, please read{" "}
        <a href="https://en.wikipedia.org/wiki/HTTP_cookie">this</a>.
      </p>

      <h2>Third Party Privacy Policies</h2>

      <p>
        Typesnap&apos;s Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.{" "}
      </p>

      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy?hl=en-US"
            rel="noreferrer"
            target={"_blank"}
          >
            Google
          </a>
        </li>
        <li>
          <a
            href="https://www.quantcast.com/privacy/"
            rel="noreferrer"
            target={"_blank"}
          >
            Quantcast
          </a>
        </li>
      </ul>

      <p>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browser&apos;s respective
        websites.
      </p>
    </Container>
  );
};

export default privacy;
