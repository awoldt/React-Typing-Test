import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const FinalScore = ({ funcs }) => {
  return (
    <div>
      <Button
        variant="danger"
        onClick={async () => {
          const data = await axios.get("/api/new-test");
          console.log(data.data);
          funcs[0](data.data.words);
          funcs[1](0);
          funcs[2](0);
          funcs[3](data.data.words[0]);
          funcs[4](data.data.words[0].length);
          funcs[5](data.data.splitWords[0]);
          funcs[6]("");
          funcs[7]([0, 0]);
          funcs[8](false);
          funcs[9].current.value = "";
        }}
      >
        Restart
      </Button>
    </div>
  );
};

export default FinalScore;
