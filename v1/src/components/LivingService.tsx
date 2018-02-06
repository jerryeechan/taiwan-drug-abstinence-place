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
  Table,
  Icon,
  Dropdown,
  Checkbox,
  Message,
  Radio,
  Modal
} from "semantic-ui-react";

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

const shortInput = {
  width: 100
};

const fieldset = {
  marginTop: 20,
  marginBottom: 15
};

export class LivingService extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      uid: firebase.auth().currentUser.uid,
      otherResourceNum: 1,
      moneyNum: 1,
      money: [{ agency: "", subject: "", four: null, five: null, six: null }],
      otherPeopleNum: 1,
      otherPeople: [{ name: "", pro: null, part: null }],
      // formData
      name: "",
      phone: "",
      address: "",
      settleAddress: "",
      email: "",
      url: "",
      alchohol: false,
      opium: false,
      stimulant: false,
      otherDrug: false,
      isMale: false,
      isFemale: false,
      isAdult: false,
      isChild: false,
      isIgnoreServere: false,
      servereDisease: "",
      isWithdral: false,
      isCourtTransfer: false,
      specialService: "",
      //
      maleAdultBed: null,
      femaleAdultBed: null,
      maleTeenBed: null,
      femaleTeenBed: null,
      isSettle: false,
      settleTime: "",
      feeType: "",
      feeTypeDescription: "",
      settlePeopleAmount: null,
      resources: [""],
      isSelfRaise: false,
      selfRaisaAmount: null,
      isSupplementory: false,
      // 人員
      doctorProType: null,
      doctorPro: null,
      doctorPartType: null,
      doctorPart: null,
      clinicalPsyPro: null,
      clinicalPsyPart: null,
      conselorPro: null,
      conselorPart: null,
      socialWorkerPro: null,
      socialWorkerPart: null,
      functionalTherapistPro: null,
      functionalTherapistPart: null,
      nursePro: null,
      nursePart: null,
      pastPro: null,
      pastPart: null,
      securityPro: null,
      securityPart: null
    };
  }

  componentDidMount() {
    let iElems: any = document.getElementsByClassName("add-button");
    [...iElems].forEach(iElem => {
      iElem.onmouseover = () => {
        iElem.style.opacity = 1.0;
      };
      iElem.onmouseout = () => {
        iElem.style.opacity = 0.5;
      };
    });

    var user = firebase.auth().currentUser;
    if (user) {
      db
        .collection("LivingServices")
        .doc(this.props.id)
        .get()
        .then(doc => {
          if (doc.exists) {
            let data = doc.data();
            this.setState(data);
          }
        });
    }
  }

  addOtherResourceNum = () => {
    var origin = this.state.otherResourceNum;
    this.setState({
      otherResourceNum: origin + 1
    });
    var origin = this.state.resources;
    origin.push("");
    this.setState({ ["resources"]: origin });
  };

  addMoneyNum = () => {
    var origin = this.state.moneyNum;
    this.setState({
      moneyNum: origin + 1
    });
    var origin = this.state.money;
    origin.push({ agency: "", subject: "", four: null, five: null, six: null });
    this.setState({ ["money"]: origin });
  };

  addOtherPeopleNum = () => {
    var origin = this.state.otherPeopleNum;
    this.setState({
      otherPeopleNum: origin + 1
    });

    var origin = this.state.otherPeople;
    origin.push({ name: "", pro: null, part: null });
    this.setState({ ["otherPeople"]: origin });
  };

  formDataChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  textAreaChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formDataChecked = (e, data) => {
    this.setState({ [data.name]: data.checked });
  };

  formDataRadioChecked = (e, data) => {
    this.setState({ [data.name]: data.value });
  };

  resourceContentChange = (e, { name, value }) => {
    var elementName = name.split("_")[0];
    var sequence = name.split("_")[1];

    var origin = this.state.resources;
    origin[sequence] = value;
    this.setState({ ["resources"]: origin });
  };

  otherPeopleChange = (e, { name, value }) => {
    let elementName = name.split("_")[0];
    let subjectName = name.split("_")[1];
    let sequence = name.split("_")[2];

    let origin = this.state.otherPeople;
    origin[sequence][subjectName] = value;
    this.setState({ ["otherPeople"]: origin });
  };

  moneyChange = (e, { name, value }) => {
    let elementName = name.split("_")[0];
    let subjectName = name.split("_")[1];
    let sequence = name.split("_")[2];

    let origin = this.state.money;
    origin[sequence][subjectName] = value;
    this.setState({ ["money"]: origin });
  };

  makeAddressThesame = (e, data) => {
    if (data.checked) {
      this.setState({
        settleAddress: this.state.address
      });
    }
  };

  handleSubmit = e => {
    var user = firebase.auth().currentUser;

    let uid = user.uid;

    var data = this.state;
    try {
      db
        .collection("LivingServices")
        .doc(this.props.id)
        .set(data);
    } catch (err) {
      console.log(err);
      alert("系統錯誤，請稍後在試");
      return;
    }
    alert("儲存成功");
  };

  render() {
    var otherResourceRows = [];
    var moneyRows = [];
    var otherPeopleRows = [];
    for (var i = 0; i < this.state.otherResourceNum; i++) {
      let elementName = "resources_" + i.toString();
      otherResourceRows.push(
        <Input
          type="text"
          name={elementName}
          value={this.state.resources[i]}
          onChange={this.resourceContentChange}
        />
      );
    }
    for (var i = 0; i < this.state.moneyNum; i++) {
      let agencyName = "money_agency_" + i.toString();
      let subjectName = "money_subject_" + i.toString();
      let fourName = "money_four_" + i.toString();
      let fiveName = "money_five_" + i.toString();
      let sixName = "money_six_" + i.toString();

      moneyRows.push(
        <Table.Row>
          <Table.Cell>
            <Input
              name={agencyName}
              value={this.state.money[i].agency}
              onChange={this.moneyChange}
            />
          </Table.Cell>
          <Table.Cell>
            <Input
              name={subjectName}
              value={this.state.money[i].subject}
              onChange={this.moneyChange}
            />
          </Table.Cell>
          <Table.Cell>
            <Input
              style={shortInput}
              type="number"
              name={fourName}
              value={this.state.money[i].four}
              onChange={this.moneyChange}
            />
          </Table.Cell>
          <Table.Cell>
            <Input
              style={shortInput}
              type="number"
              name={fiveName}
              value={this.state.money[i].five}
              onChange={this.moneyChange}
            />
          </Table.Cell>
          <Table.Cell>
            <Input
              style={shortInput}
              type="number"
              name={sixName}
              value={this.state.money[i].six}
              onChange={this.moneyChange}
            />
          </Table.Cell>
        </Table.Row>
      );
    }
    for (var i = 0; i < this.state.otherPeopleNum; i++) {
      let jobName = "otherPeople_name_" + i.toString();
      let proName = "otherPeople_pro_" + i.toString();
      let partName = "otherPeople_part_" + i.toString();

      otherPeopleRows.push(
        <Form.Group>
          <Form.Field inline>
            <Input
              size="mini"
              type="text"
              placeholder="職稱"
              name={jobName}
              value={this.state.otherPeople[i].name}
              onChange={this.otherPeopleChange}
            />
            <br />
            <label>專任</label>
            <Input
              type="number"
              name={proName}
              value={this.state.otherPeople[i].pro}
              onChange={this.otherPeopleChange}
            />
            人，
            <label htmlFor="">兼任</label>
            <Input
              type="number"
              name={partName}
              value={this.state.otherPeople[i].part}
              onChange={this.otherPeopleChange}
            />人
          </Form.Field>
        </Form.Group>
      );
    }

    return (
      <Modal trigger={<Button>編輯</Button>}>
        <Modal.Header>{this.state.name}</Modal.Header>
        <Modal.Content>
          <Message positive>
            <Message.Header>填表說明</Message.Header>
            <ul>
              <li>盤點範圍</li>
              <ul>
                <li>
                  機構立案之宗旨或任務，原即以施用毒品者為主要服­務對象，且提供有安置及各類有助個案戒毒或復歸社會之處遇服務者（僅有安置（housing）不列入）
                </li>
                <li>
                  機構立案之宗旨或任務，雖非以施用毒品者為主要服務對象，惟其實務運作上，有收置施用毒品個案，且針對施用毒品個案，設計或提供有協助其復歸社會之服務方案
                </li>
              </ul>
              <li>盤點注意事項</li>
              <ul>
                <li>
                  同一機構，若設有多處安置處所，請依處所位置分別盤點。如沐恩之家有伯特利家園、多加家園、亞當學園等，則分別盤點
                </li>
              </ul>
            </ul>
          </Message>
          <Form>
            <fieldset style={fieldset}>
              <legend className="ui dividing header">機構基本資料</legend>
              <Form.Field required>
                <label>
                  機構名稱 (請填寫立案之機構全名+安置單位名稱)
                  (範例：財團法人屏東縣私立基督教沐恩之家+亞當學園)
                </label>
                <Input
                  required
                  name="name"
                  placeholder="機構名稱"
                  value={this.state.name}
                  onChange={this.formDataChange}
                />
              </Form.Field>
              <Form.Field required>
                <label>電話 (請加註區域碼，若需撥打分機，亦請註明)</label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="電話"
                  value={this.state.phone}
                  onChange={this.formDataChange}
                />
              </Form.Field>
              <Form.Field required>
                <label>機構地址</label>
                <Input
                  id="address"
                  name="address"
                  placeholder="地址"
                  value={this.state.address}
                  onChange={this.formDataChange}
                />
              </Form.Field>
              <Form.Field required>
                <label>安置單位地址</label>
                <Input
                  id="settleAddress"
                  name="settleAddress"
                  value={this.state.settleAddress}
                  placeholder="安置單位地址"
                  onChange={this.formDataChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="同機構地址"
                  onChange={this.makeAddressThesame}
                />
              </Form.Field>
              <Form.Field required>
                <label>電子信箱</label>
                <Input
                  id="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.formDataChange}
                />
              </Form.Field>
              <Form.Field>
                <label>網站（請提供有安置機構介紹之網址）</label>
                <Input
                  id="url"
                  name="url"
                  placeholder="http://google.com.tw"
                  value={this.state.url}
                  onChange={this.formDataChange}
                />
              </Form.Field>
            </fieldset>
            <fieldset style={fieldset}>
              <legend className="ui dividing header">收置個案屬性</legend>
              <Form.Group inline>
                <label>成癮物質</label>
                <Checkbox
                  label="酒精"
                  name="alchohol"
                  checked={this.state.alchohol}
                  onChange={this.formDataChecked}
                />
                <Checkbox
                  label="鴉片類(如海洛因、鴉片、嗎啡)"
                  name="opium"
                  checked={this.state.opium}
                  onChange={this.formDataChecked}
                />
                <Checkbox
                  label="中樞神經興奮劑(如古柯鹼、安非他命...)"
                  name="stimulant"
                  checked={this.state.stimulant}
                  onChange={this.formDataChecked}
                />
                <Checkbox
                  label="其他(如凱他命、大麻、新興成癮物質…)"
                  name="otherDrug"
                  checked={this.state.otherDrug}
                  onChange={this.formDataChecked}
                />
              </Form.Group>

              <Form.Group inline>
                <label>性別</label>
                <Checkbox
                  label="男"
                  name="isMale"
                  checked={this.state.isMale}
                  onChange={this.formDataChecked}
                />
                <Checkbox
                  label="女"
                  name="isFemale"
                  checked={this.state.isFemale}
                  onChange={this.formDataChecked}
                />
              </Form.Group>
              <Form.Group inline>
                <label>年齡</label>
                <Checkbox
                  label="成年"
                  name="isAdult"
                  checked={this.state.isAdult}
                  onChange={this.formDataChecked}
                />
                <Checkbox
                  label="未成年"
                  name="isChild"
                  checked={this.state.isChild}
                  onChange={this.formDataChecked}
                />
              </Form.Group>
              <Form.Group inline>
                <label>是否排除重大身體疾病或精神疾病個案</label>
                <Form.Radio
                  label="是"
                  value="true"
                  name="isIgnoreServere"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.isIgnoreServere === "true"}
                />
                <Form.Radio
                  label="否"
                  name="isIgnoreServere"
                  value="false"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.isIgnoreServere === "false"}
                />
                {this.state.isIgnoreServere === "true" && (
                  <Form.Field>
                    <label>請說明排除之疾病</label>
                    <Input
                      name="servereDisease"
                      placeholder="名稱"
                      value={this.state.servereDisease}
                      onChange={this.formDataChange}
                    />
                  </Form.Field>
                )}
              </Form.Group>

              <Form.Group inline>
                <label>是否有生理戒斷處遇</label>
                <Form.Radio
                  label="是"
                  value="true"
                  name="isWithdral"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.isWithdral === "true"}
                />
                <Form.Radio
                  label="否"
                  value="false"
                  name="isWithdral"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.isWithdral === "false"}
                />
              </Form.Group>
              <Form.Group inline>
                <label>是否接受法院裁定或地檢署轉介之個案</label>
                <Form.Radio
                  label="是"
                  value="true"
                  name="isCourtTransfer"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.isCourtTransfer === "true"}
                />
                <Form.Radio
                  label="否"
                  value="false"
                  name="isCourtTransfer"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.isCourtTransfer === "false"}
                />
              </Form.Group>
              <Form.TextArea
                label="其他特殊服務(請說明，如可攜子同住、愛滋個案…等)"
                placeholder="其他特殊服務"
                name="specialService"
                value={this.state.specialService}
                onChange={this.formDataChange}
              />
            </fieldset>
            <fieldset style={fieldset}>
              <legend className="ui dividing header">服務量能</legend>
              <Form.Group>
                <Form.Field>
                  <label>男性成年</label>
                  <Input
                    name="maleAdultBed"
                    type="number"
                    label={{ basic: true, content: "床" }}
                    labelPosition="right"
                    value={this.state.maleAdultBed}
                    onChange={this.formDataChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>女性成年</label>
                  <Input
                    name="femaleAdultBed"
                    type="number"
                    label={{ basic: true, content: "床" }}
                    labelPosition="right"
                    value={this.state.femaleAdultBed}
                    onChange={this.formDataChange}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field>
                  <label>男性未成年</label>
                  <Input
                    name="maleTeenBed"
                    type="number"
                    label={{ basic: true, content: "床" }}
                    labelPosition="right"
                    value={this.state.maleTeenBed}
                    onChange={this.formDataChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>女性未成年</label>
                  <Input
                    name="femaleTeenBed"
                    type="number"
                    label={{ basic: true, content: "床" }}
                    labelPosition="right"
                    value={this.state.femaleTeenBed}
                    onChange={this.formDataChange}
                  />
                </Form.Field>
              </Form.Group>
            </fieldset>
            <fieldset style={fieldset}>
              <legend className="ui dividing header">
                安置時間：是否有限制每次入住之安置時間？
              </legend>
              <Form.Group>
                <Form.Field inline>
                  <Radio
                    label="是"
                    name="isSettle"
                    value="true"
                    onChange={this.formDataRadioChecked}
                    checked={this.state.isSettle === "true"}
                  />
                  {this.state.isSettle === "true" && (
                    <span>
                      ，限制安置時間為
                      <Input
                        name="settleTime"
                        type="number"
                        label={{ basic: true, content: "月" }}
                        labelPosition="right"
                        onChange={this.formDataChange}
                        value={this.state.settleTime}
                      />
                    </span>
                  )}
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <Radio
                    label="否"
                    name="isSettle"
                    value="false"
                    onChange={this.formDataRadioChecked}
                    checked={this.state.isSettle === "false"}
                  />
                  {this.state.isSettle === "false" && (
                    <span>
                      ，每次安置處遇的期程預設為
                      <Input
                        name="settleTime"
                        type="number"
                        label={{ basic: true, content: "月" }}
                        labelPosition="right"
                        onChange={this.formDataChange}
                        value={this.state.settleTime}
                      />
                    </span>
                  )}
                </Form.Field>
              </Form.Group>
            </fieldset>
            <fieldset>
              <legend className="ui dividing header">服務費用收取方式</legend>
              <Form.Field>
                <Form.Radio
                  label="完全自費"
                  value="total"
                  name="feeType"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.feeType === "total"}
                />
                {this.state.feeType === "total" && (
                  <Form.Field
                    required
                    label="請說明收費項目及費用"
                    control="textarea"
                    rows="3"
                    name="feeTypeDescription"
                    onChange={this.textAreaChange}
                    value={this.state.feeTypeDescription}
                  />
                )}
                <Form.Radio
                  label="部分補助"
                  value="part"
                  name="feeType"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.feeType === "part"}
                />
                {this.state.feeType === "part" && (
                  <Form.Field
                    required
                    label="請說明補助條件及補助額度"
                    control="textarea"
                    rows="3"
                    name="feeTypeDescription"
                    onChange={this.textAreaChange}
                    value={this.state.feeTypeDescription}
                  />
                )}
                <Form.Radio
                  label="全部免費"
                  value="free"
                  name="feeType"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.feeType === "free"}
                />
                {this.state.feeType === "free" && (
                  <Form.Field
                    required
                    label="請說明費用來源"
                    control="textarea"
                    rows="3"
                    name="feeTypeDescription"
                    onChange={this.textAreaChange}
                    value={this.state.feeTypeDescription}
                  />
                )}
                <Form.Radio
                  label="其他"
                  value="other"
                  name="feeType"
                  onChange={this.formDataRadioChecked}
                  checked={this.state.feeType === "other"}
                />
                {this.state.feeType === "other" && (
                  <Form.Field
                    required
                    label="請說明收費方式及費用"
                    control="textarea"
                    rows="3"
                    name="feeTypeDescription"
                    onChange={this.textAreaChange}
                    value={this.state.feeTypeDescription}
                  />
                )}
              </Form.Field>
            </fieldset>
            <fieldset style={fieldset}>
              <legend className="ui dividing header">專業人力配置</legend>
              <h3>行政人員</h3>
              <Form.Group>
                <Form.Field inline>
                  <label>專任</label>
                  <Input
                    type="number"
                    name="adminPro"
                    value={this.state.adminPro}
                    onChange={this.formDataChange}
                  />
                  人，
                  <label htmlFor="">兼任</label>
                  <Input
                    type="number"
                    name="adminPart"
                    value={this.state.adminPart}
                    onChange={this.formDataChange}
                  />
                  人
                </Form.Field>
              </Form.Group>
              <h3>處遇人員</h3>
              <Form.Group>
                <Form.Field inline>
                  <h4>醫師</h4>
                  <label>專任</label>
                  <Input
                    type="text"
                    name="doctorProType"
                    value={this.state.doctorProType}
                    onChange={this.formDataChange}
                  />
                  科
                  <Input
                    type="number"
                    name="doctorPro"
                    value={this.state.doctorPro}
                    onChange={this.formDataChange}
                  />
                  人，
                  <label htmlFor="">兼任</label>
                  <Input
                    type="text"
                    name="doctorPartType"
                    value={this.state.doctorPartType}
                    onChange={this.formDataChange}
                  />
                  科
                  <Input
                    type="number"
                    name="doctorPart"
                    value={this.state.doctorPart}
                    onChange={this.formDataChange}
                  />
                  人
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <h4>臨床心理師</h4>
                  <label>專任</label>
                  <Input
                    type="number"
                    name="clinicalPsyPro"
                    value={this.state.clinicalPsyPro}
                    onChange={this.formDataChange}
                  />
                  人，
                  <label htmlFor="">兼任</label>
                  <Input
                    type="number"
                    name="clinicalPsyPart"
                    value={this.state.clinicalPsyPart}
                    onChange={this.formDataChange}
                  />人
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <h4>諮商心理師</h4>
                  <label>專任</label>
                  <Input
                    type="number"
                    name="conselorPro"
                    value={this.state.conselorPro}
                    onChange={this.formDataChange}
                  />
                  人，
                  <label htmlFor="">兼任</label>
                  <Input
                    type="number"
                    name="conselorPart"
                    value={this.state.conselorPart}
                    onChange={this.formDataChange}
                  />人
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <h4>社會工作師/社工員</h4>
                  <label>專任</label>
                  <Input
                    type="number"
                    name="socialWorkerPro"
                    value={this.state.socialWorkerPro}
                    onChange={this.formDataChange}
                  />
                  人，
                  <label htmlFor="">兼任</label>
                  <Input
                    type="number"
                    name="socialWorkerPart"
                    value={this.state.socialWorkerPart}
                    onChange={this.formDataChange}
                  />人
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <h4>職能治療師</h4>
                  <label>專任</label>
                  <Input
                    type="number"
                    name="functionalTherapistPro"
                    value={this.state.functionalTherapistPro}
                    onChange={this.formDataChange}
                  />
                  人，
                  <label htmlFor="">兼任</label>
                  <Input
                    type="number"
                    name="functionalTherapistPart"
                    value={this.state.functionalTherapistPart}
                    onChange={this.formDataChange}
                  />人
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <h4>護理師/護士</h4>
                  <label>專任</label>
                  <Input
                    type="number"
                    name="nursePro"
                    value={this.state.nursePro}
                    onChange={this.formDataChange}
                  />
                  人，
                  <label htmlFor="">兼任</label>
                  <Input
                    type="number"
                    name="nursePart"
                    value={this.state.nursePart}
                    onChange={this.formDataChange}
                  />人
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <h4>過來人</h4>
                  <label>專任</label>
                  <Input
                    type="number"
                    name="pastPro"
                    value={this.state.pastPro}
                    onChange={this.formDataChange}
                  />
                  人，
                  <label htmlFor="">兼任</label>
                  <Input
                    type="number"
                    name="pastPart"
                    value={this.state.pastPart}
                    onChange={this.formDataChange}
                  />人
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field inline>
                  <h4>保全人員</h4>
                  <label>專任</label>
                  <Input
                    type="number"
                    name="securityPro"
                    value={this.state.securityPro}
                    onChange={this.formDataChange}
                  />
                  人，
                  <label htmlFor="">兼任</label>
                  <Input
                    type="number"
                    name="securityPart"
                    value={this.state.securityPart}
                    onChange={this.formDataChange}
                  />人
                </Form.Field>
              </Form.Group>
              <h3>其他</h3>
              {otherPeopleRows}
              <Icon
                onClick={this.addOtherPeopleNum}
                name="add circle"
                size="big"
                className="add-button"
                style={{ opacity: 0.5 }}
              />請點選"+"，新增說明內容
            </fieldset>
            <fieldset style={fieldset}>
              <legend className="ui dividing header">安置單位服務狀況</legend>
              <Form.Group>
                <Form.Field inline>
                  每年約提供安置
                  <Input
                    type="number"
                    name="settlePeopleAmount"
                    value={this.state.settlePeopleAmount}
                    onChange={this.formDataChange}
                  />
                  人次 （注意：每次入住，無論住多久，若未中斷，則算１人次）
                </Form.Field>
              </Form.Group>
            </fieldset>
            <fieldset style={fieldset}>
              <legend className="ui dividing header">
                外部合作或連結資源（請條列說明合作單位或連結之資源，及使用情況）
              </legend>
              <Form.Group>
                <Form.Field>
                  <h4>
                    範例一：OO泌尿科診所：每週三帶機構內安置個案看診或每週三診所醫師至本機構駐診1小時。）
                  </h4>
                  <h4>
                    範例二：OO法院（地檢署）：每年協助安置裁定安置之少年O人。
                  </h4>
                  <h4>
                    範例三：OO更生保護會：每年為安置個案申請生活補助費2,000元/人/月。
                  </h4>
                  {otherResourceRows}
                  <Icon
                    onClick={this.addOtherResourceNum}
                    name="add circle"
                    size="big"
                    className="add-button"
                    style={{ opacity: 0.5 }}
                  />請點選"+"，新增說明內容
                </Form.Field>
              </Form.Group>
            </fieldset>
            <fieldset style={fieldset}>
              <legend className="ui dividing header">機構經費來源</legend>
              <Form.Group>
                <Form.Field>
                  <Checkbox
                    label="自籌(包括募款)"
                    name="isSelfRaise"
                    checked={this.state.isSelfRaise}
                    onChange={this.formDataChecked}
                  />
                </Form.Field>
                {this.state.isSelfRaise && (
                  <Form.Field inline required>
                    每年約新台幣<Input
                      type="number"
                      name="selfRaisaAmount"
                      onChange={this.formDataChange}
                      value={this.state.selfRaisaAmount}
                    />
                    元
                  </Form.Field>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Field>
                  <Checkbox
                    label="向公部門申請補助(請提供近3年補助單位及受補助額度)"
                    name="isSupplementory"
                    checked={this.state.isSupplementory}
                    onChange={this.formDataChecked}
                  />
                  {this.state.isSupplementory && (
                    <Table celled structured>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell rowSpan="2">
                            補助單位
                          </Table.HeaderCell>
                          <Table.HeaderCell rowSpan="2">
                            申請補助項目
                          </Table.HeaderCell>
                          <Table.HeaderCell colSpan="3">
                            每年補助金額(元)
                          </Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                          <Table.HeaderCell>104年</Table.HeaderCell>
                          <Table.HeaderCell>105年</Table.HeaderCell>
                          <Table.HeaderCell>106年</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      {moneyRows}
                      <Table.Row>
                        <Table.Cell>
                          <Icon
                            onClick={this.addMoneyNum}
                            name="add circle"
                            size="big"
                            className="add-button"
                            style={{ opacity: 0.5 }}
                          />點選"+"，新增說明內容
                        </Table.Cell>
                        <Table.Cell />
                        <Table.Cell />
                        <Table.Cell />
                        <Table.Cell />
                      </Table.Row>
                    </Table>
                  )}
                </Form.Field>
              </Form.Group>
            </fieldset>
            <Button
              type="submit"
              size="massive"
              floated="right"
              onClick={this.handleSubmit}
            >
              儲存
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}
