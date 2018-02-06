import * as React from "react";

import { DoctorForm } from "./DoctorForm";
import { Login } from "./Login";
import {
  Tab,
  Button,
  Form,
  Container,
  Menu,
  Icon,
  Sidebar,
  Sticky,
  Select,
  Table
} from "semantic-ui-react";
import { Redirect } from "react-router";

import * as firebase from "firebase";
import "@firebase/firestore";
import { AgencyForm } from "./AgencyForm";
import { LivingService } from "./LivingService";
import { RegisterSocialService } from "./RegisterSocialService";
import { OtherSocialService } from "./OtherSocialService";

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

const defaultProfile =
  "https://firebasestorage.googleapis.com/v0/b/taiwan-drug-abstinence-p-2edf5.appspot.com/o/images%2Fprofile.jpg?alt=media&token=0dbce49d-03b9-4af9-83e8-63ac25598e98";

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

const defaultOKtime = {
  Sun1: { visibility: "hidden" },
  Mon1: { visibility: "hidden" },
  Tue1: { visibility: "hidden" },
  Wed1: { visibility: "hidden" },
  Thu1: { visibility: "hidden" },
  Fri1: { visibility: "hidden" },
  Sat1: { visibility: "hidden" },
  Sun2: { visibility: "hidden" },
  Mon2: { visibility: "hidden" },
  Tue2: { visibility: "hidden" },
  Wed2: { visibility: "hidden" },
  Thu2: { visibility: "hidden" },
  Fri2: { visibility: "hidden" },
  Sat2: { visibility: "hidden" },
  Sun3: { visibility: "hidden" },
  Mon3: { visibility: "hidden" },
  Tue3: { visibility: "hidden" },
  Wed3: { visibility: "hidden" },
  Thu3: { visibility: "hidden" },
  Fri3: { visibility: "hidden" },
  Sat3: { visibility: "hidden" }
};

export class DataForm extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      agencyType: "",
      livingServices: [],
      livingServicesNum: 0,
      registerSocialServices: [],
      registerSocialServicesNum: 0,
      otherSocialServices: [],
      otherSocialServicesNum: 0,
      id: "new",
      intro: "",
      name: "",
      phone: "",
      website: "",
      address: "",
      area: "",
      location: "",
      user: "",
      method: [{ 0: "", 1: "" }],
      checked: true,
      boyChecked: false,
      girlChecked: false,
      attritube: "",
      LBage: "",
      UBage: "",
      religon: "R1",
      src: defaultProfile,
      file: null,
      e1checked: false,
      e2checked: false,
      e3checked: false,
      doctorNameOptions: [{ key: "new", value: "new", text: "新增" }],
      OKtime: defaultOKtime
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
    this.handleBoyCheckboxChange = this.handleBoyCheckboxChange.bind(this);
    this.handleGirlCheckboxChange = this.handleGirlCheckboxChange.bind(this);
    this.handleAddMethod = this.handleAddMethod.bind(this);
    this.handleAttritubeChange = this.handleAttritubeChange.bind(this);
    this.handleLBageChange = this.handleLBageChange.bind(this);
    this.handleUBageChange = this.handleUBageChange.bind(this);
    this.handleMethodChange = this.handleMethodChange.bind(this);
    this.handleReligonChange = this.handleReligonChange.bind(this);
    this.handleE1CheckboxChange = this.handleE1CheckboxChange.bind(this);
    this.handleE2CheckboxChange = this.handleE2CheckboxChange.bind(this);
    this.handleE3CheckboxChange = this.handleE3CheckboxChange.bind(this);
    this.handleDoctorNameOptionsChange = this.handleDoctorNameOptionsChange.bind(
      this
    );
    this.handleTabChange = this.handleTabChange.bind(this);
    this.previewFile = this.previewFile.bind(this);
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

  toIndex() {
    window.location.href = "./#/";
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
      db
        .collection("agency")
        .doc(uid)
        .set(data);
    } catch (err) {
      alert("系統錯誤，請稍後在試");
      return;
    }
    alert("儲存成功");
  };

  agencyTypeChange = (e, { name, value }) => {
    this.setState({ agencyType: value });

    let user = firebase.auth().currentUser;
    if (value === "livingService") {
      var temData = new Array();
      db
        .collection("LivingServices")
        .where("uid", "==", user.uid)
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
        .where("uid", "==", user.uid)
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
        .where("uid", "==", user.uid)
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

  addAgencyNum = () => {
    let uid = firebase.auth().currentUser.uid;

    if (this.state.agencyType == "livingService") {
      var dataId;
      db
        .collection("LivingServices")
        .add({
          uid: uid
        })
        .then(function(docRef) {
          dataId = docRef.id;
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
          return;
        });
      let origin = this.state.livingServices;
      origin.push({
        id: dataId,
        name: ""
      });
      let originNum = this.state.livingServicesNum;
      this.setState({
        livingServicesNum: originNum + 1,
        livingServices: origin
      });
    } else if (this.state.agencyType == "registerSocialService") {
      var dataId;
      db
        .collection("RegisterSocialServices")
        .add({
          uid: uid
        })
        .then(function(docRef) {
          dataId = docRef.id;
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
          return;
        });
      let origin = this.state.registerSocialServices;
      origin.push({
        id: dataId,
        name: ""
      });
      let originNum = this.state.registerSocialServicesNum;
      this.setState({
        registerSocialServicesNum: originNum + 1,
        registerSocialServices: origin
      });
    } else if (this.state.agencyType == "otherSocialService") {
      var dataId;
      db
        .collection("OtherSocialServices")
        .add({
          uid: uid
        })
        .then(function(docRef) {
          dataId = docRef.id;
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
          return;
        });
      let origin = this.state.otherSocialServices;
      origin.push({
        id: dataId,
        name: ""
      });
      let originNum = this.state.otherSocialServicesNum;
      this.setState({
        otherSocialServicesNum: originNum + 1,
        otherSocialServices: origin
      });
    }
  };

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
              <LivingService id={this.state.livingServices[i].id} />
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
              <OtherSocialService id={this.state.otherSocialServices[i].id} />
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
                  <Table.Body>
                    {livingServiceRows}
                    <Table.Row>
                      <Table.Cell colSpan={2}>
                        <Icon
                          onClick={this.addAgencyNum}
                          name="add circle"
                          size="big"
                          className="add-button"
                          style={{ opacity: 0.5 }}
                        />點選"+"，新增機構
                      </Table.Cell>
                      <Table.Cell />
                    </Table.Row>
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
                  <Table.Body>
                    {registerSocialRows}
                    <Table.Row>
                      <Table.Cell colSpan={2}>
                        <Icon
                          onClick={this.addAgencyNum}
                          name="add circle"
                          size="big"
                          className="add-button"
                          style={{ opacity: 0.5 }}
                        />點選"+"，新增機構
                      </Table.Cell>
                      <Table.Cell />
                    </Table.Row>
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
                  <Table.Body>
                    {otherSocialServiceRows}
                    <Table.Row>
                      <Table.Cell colSpan={2}>
                        <Icon
                          onClick={this.addAgencyNum}
                          name="add circle"
                          size="big"
                          className="add-button"
                          style={{ opacity: 0.5 }}
                        />點選"+"，新增機構
                      </Table.Cell>
                      <Table.Cell />
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Container>
            </div>
          )}
          {this.state.agencyType === "other" && (
            <Container>
              <Tab
                onTabChange={this.handleTabChange}
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
                          boyChecked={this.state.boyChecked}
                          girlChecked={this.state.girlChecked}
                          handleBoyCheckboxChange={this.handleBoyCheckboxChange}
                          handleGirlCheckboxChange={
                            this.handleGirlCheckboxChange
                          }
                          method={this.state.method}
                          handleAddMethod={this.handleAddMethod}
                          handleMethodChange={this.handleMethodChange}
                          attritube={this.state.attritube}
                          handleAttritubeChange={this.handleAttritubeChange}
                          LBage={this.state.LBage}
                          handleLBageChange={this.handleLBageChange}
                          UBage={this.state.UBage}
                          handleUBageChange={this.handleUBageChange}
                          religon={this.state.religon}
                          handleReligonChange={this.handleReligonChange}
                          e1checked={this.state.e1checked}
                          e2checked={this.state.e2checked}
                          e3checked={this.state.e3checked}
                          handleE1CheckboxChange={this.handleE1CheckboxChange}
                          handleE2CheckboxChange={this.handleE2CheckboxChange}
                          handleE3CheckboxChange={this.handleE3CheckboxChange}
                        />
                      </Tab.Pane>
                    )
                  },
                  {
                    menuItem: "Doctor",
                    render: () => (
                      <Tab.Pane>
                        <DoctorForm
                          intro={this.state.intro}
                          name={this.state.name}
                          phone={this.state.phone}
                          handleSubmit={this.handleDoctorSubmit}
                          handleNameChange={this.handleNameChange}
                          handlePhoneChange={this.handlePhoneChange}
                          handleChange={this.handleChange}
                          handleTimeClick={this.handleTimeClick}
                          OKtime={this.state.OKtime}
                          doctorNameOptions={this.state.doctorNameOptions}
                          id={this.state.id}
                          handleDoctorNameOptionsChange={
                            this.handleDoctorNameOptionsChange
                          }
                          src={this.state.src}
                          previewFile={this.previewFile}
                        />
                      </Tab.Pane>
                    )
                  }
                ]}
              />
            </Container>
          )}
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }

  handleTimeClick(e) {
    var id = e.target.parentElement.id;
    var ntime = this.state.OKtime;
    if (ntime[id].visibility == "hidden") {
      ntime[id].visibility = "visible";
    } else {
      ntime[id].visibility = "hidden";
    }
    this.setState({
      OKtime: ntime
    });
  }

  handleDoctorSubmit(e) {
    var data = {
      name: this.state.name,
      phone: this.state.phone,
      intro: this.state.intro,
      OKtime: this.state.OKtime,
      src: this.state.src
    };

    var user = firebase.auth().currentUser;

    let uid = user.uid;

    if (this.state.file) {
      storageRef
        .child("images/" + uid + "_" + this.state.name + ".jpg")
        .put(this.state.file)
        .then(snapshot => {
          data["src"] = snapshot.downloadURL;
        });
    }

    if (this.state.id == "new") {
      try {
        db
          .collection("agency")
          .doc(uid)
          .collection("doctor")
          .add(data);
      } catch (err) {
        console.log(err);
        alert("系統錯誤，請稍後在試");
        return;
      }
      alert("儲存成功");
      this.setState({
        name: "",
        phone: "",
        intro: "",
        src: defaultProfile,
        file: null,
        id: "new",
        OKtime: defaultOKtime
      });
    } else {
      try {
        db
          .collection("agency")
          .doc(uid)
          .collection("doctor")
          .doc(this.state.id)
          .set(data);
      } catch (err) {
        console.log(err);
        alert("系統錯誤，請稍後在試");
        return;
      }
      alert("儲存成功");
      this.setState({
        name: "",
        phone: "",
        intro: "",
        src: defaultProfile,
        file: null,
        id: "new",
        OKtime: defaultOKtime
      });
    }

    let newDoctorOptions = [{ key: "new", value: "new", text: "新增" }];
    db
      .collection("agency")
      .doc(uid)
      .collection("doctor")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          newDoctorOptions.push({
            key: doc.id,
            value: doc.id,
            text: doc.data().name
          });
        });
      });
    this.setState({
      doctorNameOptions: newDoctorOptions
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
      attritube: this.state.attritube,
      OKtime: this.state.OKtime,
      method: this.state.method,
      boyChecked: this.state.boyChecked,
      girlChecked: this.state.girlChecked,
      religon: this.state.religon,
      e1checked: this.state.e1checked,
      e2checked: this.state.e2checked,
      e3checked: this.state.e3checked
    };
    if (this.state.checked) {
      data["LBage"] = 0;
      data["UBage"] = 200;
    } else {
      data["LBage"] = this.state.LBage;
      data["UBage"] = this.state.UBage;
    }

    var user = firebase.auth().currentUser;

    let uid = user.uid;
    try {
      db
        .collection("agency")
        .doc(uid)
        .set(data);
    } catch (err) {
      console.log(err);
      alert("系統錯誤，請稍後在試");
      return;
    }
    alert("儲存成功");
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
      intro: e.target.value
    });
  }

  handleWebsiteChange(e) {
    this.setState({
      website: e.target.value
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleAreaChange(e, target) {
    this.setState({
      area: target.value,
      location: ""
    });
  }

  handleCheckboxChange(e, target) {
    this.setState({
      checked: target.checked
    });
  }

  handleBoyCheckboxChange(e, target) {
    this.setState({
      boyChecked: target.checked
    });
  }

  handleGirlCheckboxChange(e, target) {
    this.setState({
      girlChecked: target.checked
    });
  }

  handleE1CheckboxChange(e, target) {
    this.setState({
      e1checked: target.checked
    });
  }
  handleE2CheckboxChange(e, target) {
    this.setState({
      e2checked: target.checked
    });
  }
  handleE3CheckboxChange(e, target) {
    this.setState({
      e3checked: target.checked
    });
  }

  handleLocationChange(e, target) {
    this.setState({
      location: target.value
    });
  }

  handleDoctorNameOptionsChange(e, target) {
    this.setState({
      id: target.value
    });
    if (target.value == "new") {
      this.setState({
        name: "",
        phone: "",
        intro: "",
        src: defaultProfile,
        OKtime: defaultOKtime
      });
      return;
    }
    var user = firebase.auth().currentUser;
    let uid = user.uid;
    try {
      db
        .collection("agency")
        .doc(uid)
        .collection("doctor")
        .doc(target.value)
        .get()
        .then(doc => {
          var data = doc.data();
          this.setState({
            OKtime: data.OKtime,
            intro: data.intro,
            name: data.name,
            phone: data.phone
          });
          if (data.src) {
            this.setState({
              src: data.src
            });
          } else {
            this.setState({
              src: defaultProfile
            });
          }
        });
    } catch {
      return;
    }
  }

  handleAddMethod(e) {
    let newItem = this.state.method;
    newItem.push({ 0: "", 1: "" });
    this.setState({
      method: newItem
    });
  }

  handleAttritubeChange(e, target) {
    this.setState({
      attritube: target.value
    });
  }

  handleLBageChange(e, target) {
    this.setState({
      LBage: target.value
    });
  }

  handleUBageChange(e, target) {
    this.setState({
      UBage: target.value
    });
  }

  handleReligonChange(e, target) {
    this.setState({
      religon: target.value
    });
  }

  handleMethodChange(e) {
    let PElem: any = e.target.parentElement;
    let i = PElem.id;
    let newMethod = this.state.method;
    if (e.target.name == "first") {
      newMethod[i][0] = e.target.value;
    } else if (e.target.name == "second") {
      newMethod[i][1] = e.target.value;
    }
    this.setState({
      method: newMethod
    });
  }

  previewFile(e) {
    // var preview: any = document.getElementById("img-rounded");
    // var input: any = document.querySelector("input[type=file]");
    var input: any = e.target;
    var file = input.files[0];
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        this.setState({
          src: reader.result,
          file: file
        });
        // preview.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleTabChange(e) {
    if (e.target.text == "Doctor") {
      this.setState({
        id: "new",
        intro: "",
        name: "",
        phone: "",
        website: "",
        address: "",
        area: "",
        location: "",
        user: "",
        method: [{ 0: "", 1: "" }],
        checked: true,
        boyChecked: false,
        girlChecked: false,
        attritube: "",
        LBage: "",
        UBage: "",
        religon: "R1",
        src: defaultProfile,
        file: null,
        e1checked: false,
        e2checked: false,
        e3checked: false,
        OKtime: defaultOKtime
      });
    } else {
      var user = firebase.auth().currentUser;
      if (user) {
        let uid = user.uid;
        db
          .collection("agency")
          .doc(uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              let data = doc.data();
              this.setState({
                id: "new",
                intro: "",
                name: data.name,
                phone: data.phone,
                website: data.website,
                address: data.address,
                area: data.area,
                location: data.location,
                user: "",
                method: data.method,
                boyChecked: data.boyChecked,
                girlChecked: data.girlChecked,
                attritube: data.attritube,
                religon: data.religon,
                src: defaultProfile,
                file: null,
                e1checked: data.e1checked,
                e2checked: data.e2checked,
                e3checked: data.e3checked,
                OKtime: data.OKtime
              });
              if (data.UBage == 200) {
                this.setState({
                  LBage: "",
                  UBage: "",
                  checked: true
                });
              } else {
                this.setState({
                  LBage: data.LBage,
                  UBage: data.UBage,
                  checked: false
                });
              }
            } else {
              this.setState({
                id: "new",
                intro: "",
                name: "",
                phone: "",
                website: "",
                address: "",
                area: "",
                location: "",
                user: "",
                method: [{ 0: "", 1: "" }],
                checked: true,
                boyChecked: false,
                girlChecked: false,
                attritube: "",
                LBage: "",
                UBage: "",
                religon: "R1",
                src: defaultProfile,
                file: null,
                e1checked: false,
                e2checked: false,
                e3checked: false,
                OKtime: defaultOKtime
              });
            }
          });
      }
    }
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user) {
      let uid = user.uid;

      let newDoctorOptions = [{ key: "new", value: "new", text: "新增" }];
      db
        .collection("agency")
        .doc(uid)
        .collection("doctor")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            newDoctorOptions.push({
              key: doc.id,
              value: doc.id,
              text: doc.data().name
            });
          });
        });
      this.setState({
        doctorNameOptions: newDoctorOptions
      });
      db
        .collection("agency")
        .doc(uid)
        .get()
        .then(doc => {
          if (doc.exists) {
            let data = doc.data();
            this.setState({
              id: "new",
              intro: "",
              name: data.name,
              phone: data.phone,
              website: data.website,
              address: data.address,
              area: data.area,
              location: data.location,
              user: "",
              method: data.method,
              boyChecked: data.boyChecked,
              girlChecked: data.girlChecked,
              attritube: data.attritube,
              religon: data.religon,
              src: defaultProfile,
              file: null,
              e1checked: data.e1checked,
              e2checked: data.e2checked,
              e3checked: data.e3checked,
              OKtime: data.OKtime
            });
            if (data.UBage == 200) {
              this.setState({
                LBage: "",
                UBage: "",
                checked: true
              });
            } else {
              this.setState({
                LBage: data.LBage,
                UBage: data.UBage,
                checked: false
              });
            }
          } else {
            this.setState({
              id: "new",
              intro: "",
              name: "",
              phone: "",
              website: "",
              address: "",
              area: "",
              location: "",
              user: "",
              method: [{ 0: "", 1: "" }],
              checked: true,
              boyChecked: false,
              girlChecked: false,
              attritube: "",
              LBage: "",
              UBage: "",
              religon: "R1",
              src: defaultProfile,
              file: null,
              e1checked: false,
              e2checked: false,
              e3checked: false,
              OKtime: defaultOKtime
            });
          }
        });
    }
  }
}
