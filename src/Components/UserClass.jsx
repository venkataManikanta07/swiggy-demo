import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy name",
        company: "Dummy Company",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const jsonData = await data.json();

    this.setState({
      userInfo: {
        name: jsonData.name,
        company: jsonData.company,
        location: jsonData.location,
      },
    });
  }

  render() {
    const { name, company, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name is: {name}</h2>
        <h2>Company @: {company}</h2>
        <h2>{location}</h2>
        <p>From Class component of Akshay details</p>
      </div>
    );
  }
}

export default UserClass;
