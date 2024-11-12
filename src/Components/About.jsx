import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-center items-center m-1 p-3 w-80 border border-gray-900 border-solid">
        <UserClass name={"FIRST CLASS"} />
        
      </div>
    );
  }

  componentDidMount() {}
}

export default About;
