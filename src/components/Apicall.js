import React from "react";
import axios from "axios";

const url = "https://api.github.com/users/mdsadiq";

class Apicall extends React.Component {
  state = {
    username: "mdsadiq",
    followers: 0,
    followersList: [],
    isLoading: false
  };

  getuser = () => {
    let self = this;
    axios
      .get("https://api.github.com/users/mdsadiq")
      .then(function(response) {
        console.log(response);
        console.log(response.data.followers);
        self.setState({
          followers: response.data.followers
        });
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  getFollowers = () => {
    this.setState({
      isLoading: true
    });
    let self = this;
    axios.get(`${url}/followers`).then(function(response) {
      self.setState({
        followersList: response.data,
        isLoading: false
      });
      console.log(response);
    });
  };

  componentDidMount() {
    this.getuser();
  }
  handleShow = e => {
    this.getFollowers();
  };

  render() {
    const { isLoading, followers, followersList } = this.state;
    return (
      <div>
        <h2>Api</h2>
        <h4>Sadiq</h4>
        fllowers: {followers}
        <div className="button-yeelow" onClick={this.handleShow}>
          {isLoading ? "...Loading" : "Show Followers"}
        </div>
        {followersList.map(single => (
          <h4>{single.login}</h4>
        ))}
      </div>
    );
  }
}

export default Apicall;
