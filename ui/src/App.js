import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppTable from "./components/table";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class App extends React.Component {
  state = {
    maleusers: [],
    femaleusers: [],
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:1234/getusers",
    }).then((res) => {
      this.setState({ maleusers: res.data });
    });
    axios({
      method: "get",
      url: "http://localhost:1234/getusersfe",
    }).then((res) => {
      this.setState({ femaleusers: res.data });
    });
  }
  onAdd = (event) => {
    event.preventDefault();
    axios({
      method: "get",
      url: "https://randomuser.me/api/",
    }).then((res) => {
      // console.log(res.data.results[0].gender);
      // console.log(this.state.femaleusers);
      if (res.data.results[0].gender == "male") {
        axios({
          method: "post",
          url: "http://localhost:1234/adduser",
          data: {
            gender: res.data.results[0].gender,
            nat: res.data.results[0].nat,
            age: res.data.results[0].dob.age,
          },
        }).then((res) => {
          this.setState({ gender: "", nat: "", age: "", success: true });
        });
      } else {
        axios({
          method: "post",
          url: "http://localhost:1234/adduser",
          data: {
            gender: res.data.results[0].gender,
            nat: res.data.results[0].nat,
            age: res.data.results[0].dob.age,
          },
        }).then((res) => {
          this.setState({ gender: "", nat: "", age: "", success: true });
        });
      }
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AppTable
                  maleusers={this.state.maleusers}
                  femaleusers={this.state.femaleusers}
                />
                <br />
                <Button onClick={this.onAdd}>Add User</Button>
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}
const linkbutton = {
  textDecoration: "none",
  background: "blue",
  color: "white",
  border: "none",
  padding: "7px 15px",
  borderRadius: "5px",
};
export default App;
