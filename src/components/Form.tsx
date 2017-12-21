import * as React from "react";

import { DoctorForm } from "./DoctorForm";
import { Login } from "./Login";
import { Tab, Button } from "semantic-ui-react";
import * as firebase from "firebase";

export class Form extends React.Component<any, any> {
  // static initCount = 5;

  constructor(props) {
    super(props);

    // this.state = {
    //   count: Main.initCount,
    //   inputValue: ""
    // };

    // this.countdownId = null;
    // this.handleSet = this.handleSet.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      editorHtml:
        "A robot who has developed sentience, and is the only robot of his kind shown to be still functioning on Earth.",
      name: "Wall-E",
      location: "Earth",
      login: false
    };

    var config = {
      apiKey: "AIzaSyAYfnhC1GbxA7q-HQYDWI_6fHWNArNQ-y0",
      authDomain: "taiwan-drug-abstinence-p-2edf5.firebaseapp.com",
      databaseURL: "https://taiwan-drug-abstinence-p-2edf5.firebaseio.com",
      projectId: "taiwan-drug-abstinence-p-2edf5",
      storageBucket: "taiwan-drug-abstinence-p-2edf5.appspot.com",
      messagingSenderId: "933584242007"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          console.log("login in");
          console.log(user);
          // 用看看Redirect，不要單頁判斷
          this.setState({
            login: true
          });
        } else {
          console.log("user is not sign in");
        }
      }.bind(this)
    );

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("sign out!");
          this.setState({
            login: false
          });
        }.bind(this),
        function(error) {
          console.log("sign out error");
        }
      );
  }

  render() {
    if (this.state.login) {
      return (
        <div className="form">
          <Tab
            panes={[
              {
                menuItem: "Doctor",
                render: () => (
                  <Tab.Pane>
                    <h1>Hello Form</h1>
                    <Form />
                  </Tab.Pane>
                )
              }
            ]}
          />
          <Button onClick={() => this.signOut()}>Sign Out</Button>
        </div>
      );
    } else {
      return <Login />;
    }
  }

  /* <DoctorForm
        editorHtml={this.state.editorHtml}
        name={this.state.name}
        location={this.state.location}
        handleSubmit={this.handleSubmit}
        handleNameChange={this.handleNameChange}
        handleLocationChange={this.handleLocationChange}
        handleChange={this.handleChange}
      /> */

  handleSubmit(e) {
    var data = {
      name: this.state.name,
      location: this.state.location,
      intro: this.state.editorHtml
    };
    console.log(data);
    this.setState({
      name: "",
      location: "",
      editorHtml: ""
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  handleChange(e) {
    this.setState({
      editorHtml: e
    });
  }

  // tick() {
  //   if(this.state.count > 0){
  //     this.setState((prevState, props) => ({
  //       count: prevState.count - 0.01
  //     }));
  //   } else {
  //     clearInterval(this.countdownId);
  //     this.setState({
  //       count: 0
  //     });
  //     this.countdownId = null;
  //   }
  // }

  // handleInputChange(e) {
  //   this.setState({
  //     inputValue: e.target.value
  //   });
  // }

  // handleSet(e) {
  //   clearInterval(this.countdownId);
  //   this.setState({
  //     count: Number(this.state.inputValue),
  //     inputValue: ""
  //     }, () =>
  //     this.countdownId = setInterval(() => this.tick(), 10)
  //   );
  //   return false;
  // }

  // componentDidMount() {
  //   this.countdownId = setInterval(() => this.tick(), 10);
  // }

  // componentWillUnmount() {
  //   if(this.countdownId){
  //     clearInterval(this.countdownId);
  //   }
  // }
}
