import * as React from "react";

import { DoctorForm } from "./DoctorForm";
import { Login } from "./Login";
import { Tab, Button, Form, Container } from "semantic-ui-react";
import { Redirect } from 'react-router';

import * as firebase from "firebase";
import '@firebase/firestore';


const config = {
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
let db = firebase.firestore();


export class DataForm extends React.Component<any, any> {
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
      editorHtml: "",
      name: "",
      phone: "",
      web: "",
      address: "",
      user: ""
    };


    this.handleDoctorSubmit = this.handleDoctorSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
      function () {
        console.log("sign out!");
        this.setState({
          login: false
        });
      }.bind(this),
      function (error) {
        console.log("sign out error");
      }
      );
  }

  handleSave = () => {
    console.log(this.state);
    var user = firebase.auth().currentUser;

    let uid = user.uid;

    let data = {
      name: this.state.name,
      web: this.state.web,
      phone: this.state.phone,
      address: this.state.address
    };
    try {
      db.collection("agency").doc(uid).set(data);
    } catch (err) {
      alert("系統錯誤，請稍後在試");
      return;
    }
    alert("儲存成功");
  }

  handleFormChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  render() {
    var user = firebase.auth().currentUser;

    if (user) {
      console.log(user);
      return (
        <Tab
          panes={[
            {
              menuItem: "Doctor",
              render: () => (
                <Tab.Pane>
                  <DoctorForm
                    editorHtml={this.state.editorHtml}
                    name={this.state.name}
                    location={this.state.location}
                    handleSubmit={this.handleDoctorSubmit}
                    handleNameChange={this.handleNameChange}
                    handlePhoneChange={this.handlePhoneChange}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                  /> 
                </Tab.Pane>
              )
            }
          ]}
        />
        // <Container>
        //   <Form>
        //     <Form.Input label='機構名稱' name="name" placeholder='' onChange={this.handleFormChange} />
        //     <Form.Input label='網站位置' name="web" placeholder='' onChange={this.handleFormChange} />
        //     <Form.Input label='電話' name="phone" placeholder='' onChange={this.handleFormChange} />
        //     <Form.Input label='地址' name="address" placeholder='Address' onChange={this.handleFormChange} />

        //     <Button onClick={this.handleSave}>送出</Button>
        //     <Button onClick={this.signOut}>Sign Out</Button>
        //   </Form >
        // </Container>
      );
    } else {
      console.log("user is not sign in");
      return (<Redirect to='/login' />);
    }
  }

  handleClick(e) {
    let parent = e.target.parentElement;
    if (parent.style.visibility == "hidden") {
      parent.style.visibility = "visible";
    } else {
      parent.style.visibility = "hidden";
    }
    e.target.style.visibility = "visible";
  }

  handleDoctorSubmit(e) {
    var data = {
      name: this.state.name,
      location: this.state.location,
      intro: this.state.editorHtml
    };
    console.log(data);
    var user = firebase.auth().currentUser;
    
    let uid = user.uid;

    try {
      db.collection("doctor").doc(uid).set(data);
    } catch (err) {
      alert("系統錯誤，請稍後在試");
      return;
    }
    alert("儲存成功");
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

  handlePhoneChange(e) {
    this.setState({
      phone: e.target.value
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
