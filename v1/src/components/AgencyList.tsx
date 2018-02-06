import * as React from "react";
import * as ReactDOM from "react-dom";
import * as firebase from "firebase";
import {
  Container,
  Form,
  Grid,
  Button,
  Image,
  Input,
  Icon,
  Table,
  Dropdown,
  Checkbox,
  Message,
  Radio,
  Modal,
  Menu,
  Select
} from "semantic-ui-react";
import { Redirect } from "react-router";
import { AgencyForm } from "./AgencyForm";
import { LivingService } from "./LivingService";
import { RegisterSocialService } from "./RegisterSocialService";
import { OtherSocialService } from "./OtherSocialService";

const agencyTypes = [
  {
    key: "livingService",
    value: "livingService",
    text: "居住型藥癮服務機構(中途之家或治療性社區)"
  },
  {
    key: "registerSocialService",
    value: "registerSocialService",
    text:
      "社區藥癮(藥物濫用)治療及社會工作等專業服務（特指立案開業之心理治療所、諮商治療所、社會工作室）"
  },
  {
    key: "otherSocialService",
    value: "otherSocialService",
    text: "非居住型也非醫事或社會工作專業機構"
  },
  { key: "other", value: "other", text: "其他" }
];

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
let storageRef = firebase.storage().ref();

export class AgencyList extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      livingServicesNum: 0,
      livingServices: [],
      registerSocialServicesNum: 0,
      registerSocialServices: [],
      otherSocialServicesNum: 0,
      otherSocialServices: [],
      agencyType: ""
    };
  }

  render() {
    var user = firebase.auth().currentUser;
    var livingServiceRows = [];
    var registerSocialRows = [];
    var otherSocialServiceRows = [];

    if (this.state.agencyType === "livingService") {
      for (var i = 0; i < this.state.livingServicesNum; i++) {
        livingServiceRows.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{this.state.livingServices[i].name}</Table.Cell>
            <Table.Cell>
              <LivingService
                id={this.state.livingServices[i].id}
                disable={true}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    } else if (this.state.agencyType === "registerSocialService") {
      for (var i = 0; i < this.state.registerSocialServicesNum; i++) {
        registerSocialRows.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{this.state.registerSocialServices[i].name}</Table.Cell>
            <Table.Cell>
              <RegisterSocialService
                id={this.state.registerSocialServices[i].id}
                disable={true}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    } else if (this.state.agencyType === "otherSocialService") {
      for (var i = 0; i < this.state.otherSocialServicesNum; i++) {
        console.log(this.state.otherSocialServices[i].id);
        otherSocialServiceRows.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{this.state.otherSocialServices[i].name}</Table.Cell>
            <Table.Cell>
              <OtherSocialService
                id={this.state.otherSocialServices[i].id}
                disable={true}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    }

    if (user) {
      return (
        <div>
          <Menu inverted className="fixed">
            <Menu.Item onClick={() => this.toIndex()}>
              <Icon name="home" />
              戒毒好所在
            </Menu.Item>
            <Menu.Item onClick={() => this.toDataForm()}>
              <Icon name="edit" />
              編輯資料
            </Menu.Item>
            <Menu.Item position="right" onClick={() => this.signOut()}>
              <Icon name="sign out" />
              登出
            </Menu.Item>
          </Menu>
          <Container textAlign="center">
            <h2>請選擇類型</h2>
            <span>類型：</span>
            <Select
              placeholder="選擇類型"
              options={agencyTypes}
              onChange={this.agencyTypeChange}
            />
          </Container>
          {this.state.agencyType === "livingService" && (
            <div>
              <Container>
                <Table celled structured>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>名稱</Table.HeaderCell>
                      <Table.HeaderCell>動作</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>{livingServiceRows}</Table.Body>
                </Table>
              </Container>
            </div>
          )}
          {this.state.agencyType === "registerSocialService" && (
            <div>
              <Container>
                <Table celled structured>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>名稱</Table.HeaderCell>
                      <Table.HeaderCell>動作</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>{registerSocialRows}</Table.Body>
                </Table>
              </Container>
            </div>
          )}
          {this.state.agencyType === "otherSocialService" && (
            <div>
              <Container>
                <Table celled structured>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>名稱</Table.HeaderCell>
                      <Table.HeaderCell>動作</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>{otherSocialServiceRows}</Table.Body>
                </Table>
              </Container>
            </div>
          )}
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }

  toIndex() {
    window.location.href = "./#/";
  }

  toDataForm() {
    window.location.href = "./#/Form";
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          console.log("sign out!");
          this.setState({
            login: false
          });
          this.toIndex();
        }.bind(this),
        function(error) {
          console.log("sign out error");
        }
      );
  };

  agencyTypeChange = (e, { name, value }) => {
    this.setState({ agencyType: value });

    let user = firebase.auth().currentUser;
    if (value === "livingService") {
      var temData = new Array();
      db
        .collection("LivingServices")
        .get()
        .then(
          function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              temData.push({
                id: doc.id,
                name: doc.data().name
              });
            });
            this.setState({
              livingServicesNum: querySnapshot.size,
              livingServices: temData
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    } else if (value == "registerSocialService") {
      var temData = new Array();
      db
        .collection("RegisterSocialServices")
        .get()
        .then(
          function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              temData.push({
                id: doc.id,
                name: doc.data().name
              });
            });
            this.setState({
              registerSocialServicesNum: querySnapshot.size,
              registerSocialServices: temData
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    } else if (value === "otherSocialService") {
      var temData = new Array();
      db
        .collection("OtherSocialServices")
        .get()
        .then(
          function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              temData.push({
                id: doc.id,
                name: doc.data().name
              });
            });
            this.setState({
              otherSocialServicesNum: querySnapshot.size,
              otherSocialServices: temData
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
  };
}
