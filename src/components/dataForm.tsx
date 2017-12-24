import * as React from "react";

import { DoctorForm } from "./DoctorForm";
import { Login } from "./Login";
import { Tab, Button, Form, Container } from "semantic-ui-react";
import { Redirect } from 'react-router';

import * as firebase from "firebase";
import '@firebase/firestore';
import { AgencyForm } from "./AgencyForm";


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
      website: "",
      address: "",
      area: "",
      location: "",
      user: "",
      method: [['','']],
      checked: true,
      OKtime:{
        'Sun1': {visibility: 'hidden'},
        'Mon1': {visibility: 'hidden'},
        'Tue1': {visibility: 'hidden'},
        'Wed1': {visibility: 'hidden'},
        'Thu1': {visibility: 'hidden'},
        'Fri1': {visibility: 'hidden'},
        'Sat1': {visibility: 'hidden'},
        'Sun2': {visibility: 'hidden'},
        'Mon2': {visibility: 'hidden'},
        'Tue2': {visibility: 'hidden'},
        'Wed2': {visibility: 'hidden'},
        'Thu2': {visibility: 'hidden'},
        'Fri2': {visibility: 'hidden'},
        'Sat2': {visibility: 'hidden'},
        'Sun3': {visibility: 'hidden'},
        'Mon3': {visibility: 'hidden'},
        'Tue3': {visibility: 'hidden'},
        'Wed3': {visibility: 'hidden'},
        'Thu3': {visibility: 'hidden'},
        'Fri3': {visibility: 'hidden'},
        'Sat3': {visibility: 'hidden'}
      }
    };


    this.handleDoctorSubmit = this.handleDoctorSubmit.bind(this);
    this.handleAgnecySubmit = this.handleAgnecySubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTimeClick = this.handleTimeClick.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleAddMethod = this.handleAddMethod.bind(this);
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
      // console.log(user);
      return (
        <Tab
          panes={[
            {
              menuItem: "Agency",
              render: () => (
                <Tab.Pane>
                  <AgencyForm 
                    OKtime={this.state.OKtime}
                    handleTimeClick={this.handleTimeClick}
                    name={this.state.name}
                    handleNameChange={this.handleNameChange}
                    phone={this.state.phone}
                    handlePhoneChange={this.handlePhoneChange}
                    website={this.state.website}
                    handleWebsiteChange={this.handleWebsiteChange}
                    address={this.state.address}
                    handleAddressChange={this.handleAddressChange}
                    area={this.state.area}
                    handleAreaChange={this.handleAreaChange}
                    location={this.state.location}
                    handleLocationChange={this.handleLocationChange}
                    handleSubmit={this.handleAgnecySubmit}
                    handleCheckboxChange={this.handleCheckboxChange}
                    checked={this.state.checked}
                    method={this.state.method}
                    handleAddMethod={this.handleAddMethod}
                  />
                </Tab.Pane>
              )
            },
            {
              menuItem: "Doctor",
              render: () => (
                <Tab.Pane>
                  <DoctorForm
                    editorHtml={this.state.editorHtml}
                    name={this.state.name}
                    phone={this.state.phone}
                    handleSubmit={this.handleDoctorSubmit}
                    handleNameChange={this.handleNameChange}
                    handlePhoneChange={this.handlePhoneChange}
                    handleChange={this.handleChange}
                    handleTimeClick={this.handleTimeClick}
                    OKtime={this.state.OKtime}
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

  handleTimeClick(e) {
    console.log('Handle Time Click');
    var id = e.target.parentElement.id
    var ntime = this.state.OKtime;
    if(ntime[id].visibility == 'hidden'){
      ntime[id].visibility = 'visible';
    } else {
      ntime[id].visibility = 'hidden';
    }
    this.setState({
      OKtime: ntime
    })
  }

  handleDoctorSubmit(e) {
    var data = {
      name: this.state.name,
      phone: this.state.phone,
      intro: this.state.editorHtml,
      OKtime: this.state.OKtime
    };
    console.log(data);
    var user = firebase.auth().currentUser;
    
    let uid = user.uid;

    
    try {
      db.collection("agency").doc(uid).collection("doctor").doc(this.state.name).set(data);
    } catch (err) {
      console.log(err);
      alert("系統錯誤，請稍後在試");
      return;
    }
    alert("儲存成功");
    this.setState({
      name: "",
      phone: "",
      editorHtml: ""
    });
  }

  handleAgnecySubmit(e) {
    var data = {
      name: this.state.name,
      phone: this.state.phone,
      website: this.state.website,
      address: this.state.address,
      area: this.state.area,
      location: this.state.location,
      OKtime: this.state.OKtime
    }
    console.log(data);
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
      editorHtml: e.target.value
    });
  }

  handleWebsiteChange(e){
    this.setState({
      website: e.target.value
    });
  }

  handleAddressChange(e){
    this.setState({
      address: e.target.value
    })
  }

  handleAreaChange(e, target){
    this.setState({
      area: target.value,
      location: ""
    })
  }

  handleCheckboxChange(e, target){
    this.setState({
      checked: target.checked
    })
  }

  handleLocationChange(e, target){
    this.setState({
      location: target.value
    })
  }

  handleAddMethod(e) {
    let newItem = this.state.method;
    newItem.push(['','']);
    this.setState({
      method: newItem
    })
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
