import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserClass name={"FIRST CLASS"} />
      </div>
    );
  }

  componentDidMount() {
  }
}

export default About;
