import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Contributed <strong className="purple">days</strong>
      </h1>
      <GitHubCalendar
        username="mwantony"
        blockSize={15}
        blockMargin={5}
        color="#3195FF"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
