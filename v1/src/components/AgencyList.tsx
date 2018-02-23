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
  Select,
  Dimmer,
  Loader
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
      "社區藥癮(藥物濫用)治療及社會工作等專業服務（特指立案開業之心理治療所、諮商治療所、社會工作師事務所）"
  },
  {
    key: "otherSocialService",
    value: "otherSocialService",
    text: "非居住型也非醫事或社會工作專業機構"
  },
  { key: "other", value: "other", text: "其他" }
];

const cityTypes = [
  // 6直轄市
  {
    key: "桃園市",
    value: "桃園市",
    text: "桃園市"
  },
  {
    key: "台北市",
    value: "台北市",
    text: "台北市"
  },
  {
    key: "新北市",
    value: "新北市",
    text: "新北市"
  },
  {
    key: "高雄市",
    value: "高雄市",
    text: "高雄市"
  },
  {
    key: "台中市",
    value: "台中市",
    text: "台中市"
  },
  {
    key: "台南市",
    value: "台南市",
    text: "台南市"
  },
  // 11縣
  {
    key: "新竹縣",
    value: "新竹縣",
    text: "新竹縣"
  },
  {
    key: "苗栗縣",
    value: "苗栗縣",
    text: "苗栗縣"
  },
  {
    key: "彰化縣",
    value: "彰化縣",
    text: "彰化縣"
  },
  {
    key: "南投縣",
    value: "南投縣",
    text: "南投縣"
  },
  {
    key: "雲林縣",
    value: "雲林縣",
    text: "雲林縣"
  },
  {
    key: "嘉義縣",
    value: "嘉義縣",
    text: "嘉義縣"
  },
  {
    key: "屏東縣",
    value: "屏東縣",
    text: "屏東縣"
  },
  {
    key: "宜蘭縣",
    value: "宜蘭縣",
    text: "宜蘭縣"
  },
  {
    key: "花蓮縣",
    value: "花蓮縣",
    text: "花蓮縣"
  },
  {
    key: "臺東縣",
    value: "臺東縣",
    text: "臺東縣"
  },
  {
    key: "澎湖縣",
    value: "澎湖縣",
    text: "澎湖縣"
  },
  // 3市
  {
    key: "基隆市",
    value: "基隆市",
    text: "基隆市"
  },
  {
    key: "新竹市",
    value: "新竹市",
    text: "新竹市"
  },
  {
    key: "嘉義市",
    value: "嘉義市",
    text: "嘉義市"
  },
  {
    key: "其他",
    value: "其他",
    text: "其他"
  }
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
      typeChangeReady: false,
      livingServicesNum: 0,
      livingServices: [],
      registerSocialServicesNum: 0,
      registerSocialServices: [],
      otherSocialServicesNum: 0,
      otherSocialServices: [],
      agencyType: "",
      citySelected: null
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
            <br />
            <span>區域：</span>
            <Select
              disabled={this.state.agencyType === ""}
              placeholder="選擇區域"
              options={cityTypes}
              onChange={this.cityChange}
              value={this.state.citySelected}
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
                  {!this.state.typeChangeReady && (
                    <Dimmer active inverted>
                      <Loader size="large">Loading</Loader>
                    </Dimmer>
                  )}
                  <Table.Body>
                    {this.state.typeChangeReady && livingServiceRows}
                  </Table.Body>
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
                  {!this.state.typeChangeReady && (
                    <Dimmer active inverted>
                      <Loader size="large">Loading</Loader>
                    </Dimmer>
                  )}
                  <Table.Body>
                    {this.state.typeChangeReady && registerSocialRows}
                  </Table.Body>
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
                  {!this.state.typeChangeReady && (
                    <Dimmer active inverted>
                      <Loader size="large">Loading</Loader>
                    </Dimmer>
                  )}
                  <Table.Body>
                    {this.state.typeChangeReady && otherSocialServiceRows}
                  </Table.Body>
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

  cityChange = (e, { name, value }) => {
    this.setState({
      citySelected: value,
      typeChangeReady: false
    });

    if (this.state.agencyType === "livingService") {
      var temData = new Array();
      db
        .collection("LivingServices")
        .where("city", "==", value)
        .get()
        .then(
          function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              let name = doc.data().name;
              if (name) {
                temData.push({
                  id: doc.id,
                  name: name
                });
              }
            });
            this.setState({
              livingServicesNum: temData.length,
              livingServices: temData,
              typeChangeReady: true
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    } else if (this.state.agencyType == "registerSocialService") {
      var temData = new Array();
      db
        .collection("RegisterSocialServices")
        .where("city", "==", value)
        .get()
        .then(
          function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              let name = doc.data().name;
              if (name) {
                temData.push({
                  id: doc.id,
                  name: name
                });
              }
            });
            this.setState({
              registerSocialServicesNum: temData.length,
              registerSocialServices: temData,
              typeChangeReady: true
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    } else if (this.state.agencyType === "otherSocialService") {
      var temData = new Array();
      db
        .collection("OtherSocialServices")
        .where("city", "==", value)
        .get()
        .then(
          function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              let name = doc.data().name;
              if (name) {
                temData.push({
                  id: doc.id,
                  name: name
                });
              }
            });
            this.setState({
              otherSocialServicesNum: temData.length,
              otherSocialServices: temData,
              typeChangeReady: true
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
  };

  agencyTypeChange = (e, { name, value }) => {
    this.setState({
      agencyType: value,
      typeChangeReady: false,
      citySelected: null
    });

    if (value === "livingService") {
      var temData = new Array();
      db
        .collection("LivingServices")
        .get()
        .then(
          function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              let name = doc.data().name;
              if (name) {
                temData.push({
                  id: doc.id,
                  name: name
                });
              }
            });
            this.setState({
              livingServicesNum: temData.length,
              livingServices: temData,
              typeChangeReady: true
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
              let name = doc.data().name;
              if (name) {
                temData.push({
                  id: doc.id,
                  name: name
                });
              }
            });
            this.setState({
              registerSocialServicesNum: temData.length,
              registerSocialServices: temData,
              typeChangeReady: true
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
              let name = doc.data().name;
              if (name) {
                temData.push({
                  id: doc.id,
                  name: name
                });
              }
            });
            this.setState({
              otherSocialServicesNum: temData.length,
              otherSocialServices: temData,
              typeChangeReady: true
            });
          }.bind(this)
        )
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
  };
}
