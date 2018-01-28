import * as React from "react";
import * as ReactDOM from "react-dom";
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
  Radio
} from "semantic-ui-react";

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
      otherResourceNum: 1,
      moneyNum: 1,
      otherPeopleNum: 1,
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
      isSupplementory: false
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
  };

  addOtherPeopleNum = () => {
    var origin = this.state.otherPeopleNum;
    this.setState({
      otherPeopleNum: origin + 1
    });
  };

  formDataChange = (e, { name, value }) => {
    console.log(name + ": " + value);
    this.setState({ [name]: value });
  };

  textAreaChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  formDataChecked = (e, data) => {
    console.log(data);
    this.setState({ [data.name]: data.checked });
  };

  formDataRadioChecked = (e, data) => {
    console.log(data);
    this.setState({ [data.name]: data.value });
    console.log(this.state);
  };

  resourceContentChange = (e, { name, value }) => {
    var elementName = name.split("_")[0];
    var sequence = name.split("_")[1];
    console.log(elementName + ": " + sequence);

    var origin = this.state.resources;
    origin[sequence] = value;
    this.setState({ ["resources"]: origin });
    console.log(this.state.resources);
  };

  makeAddressThesame = (e, data) => {
    console.log(data);
    if (data.checked) {
      this.setState({
        settleAddress: this.state.address
      });
    }
  };

  render() {
    var otherResourceRows = [];
    var moneyRows = [];
    var otherPeopleRows = [];
    for (var i = 0; i < this.state.otherResourceNum; i++) {
      var elementName = "resources_" + i.toString();
      otherResourceRows.push(
        <Input
          type="text"
          name={elementName}
          onChange={this.resourceContentChange}
        />
      );
    }
    for (var i = 0; i < this.state.moneyNum; i++) {
      moneyRows.push(
        <Table.Row>
          <Table.Cell>
            <Input />
          </Table.Cell>
          <Table.Cell>
            <Input />
          </Table.Cell>
          <Table.Cell>
            <Input style={shortInput} type="number" />
          </Table.Cell>
          <Table.Cell>
            <Input style={shortInput} type="number" />
          </Table.Cell>
          <Table.Cell>
            <Input style={shortInput} type="number" />
          </Table.Cell>
        </Table.Row>
      );
    }
    for (var i = 0; i < this.state.otherPeopleNum; i++) {
      otherPeopleRows.push(
        <Form.Group>
          <Form.Field inline>
            <Input size="mini" type="text" placeholder="職稱" />
            <br />
            <label>專任</label>
            <input type="number" /> 人，
            <label htmlFor="">兼任</label>
            <input type="number" />人
          </Form.Field>
        </Form.Group>
      );
    }

    return (
      <Container>
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
                name="name"
                placeholder="機構名稱"
                onChange={this.formDataChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>電話 (請加註區域碼，若需撥打分機，亦請註明)</label>
              <Input
                id="phone"
                name="phone"
                placeholder="電話"
                onChange={this.formDataChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>機構地址</label>
              <Input
                id="address"
                name="address"
                placeholder="地址"
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
              <Checkbox label="同機構地址" onChange={this.makeAddressThesame} />
            </Form.Field>
            <Form.Field required>
              <label>電子信箱</label>
              <Input
                id="email"
                name="email"
                placeholder="email"
                onChange={this.formDataChange}
              />
            </Form.Field>
            <Form.Field>
              <label>網站（請提供有安置機構介紹之網址）</label>
              <Input
                id="url"
                name="url"
                placeholder="http://google.com.tw"
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
                onChange={this.formDataChecked}
              />
              <Checkbox
                label="鴉片類(如海洛因、鴉片、嗎啡)"
                name="opium"
                onChange={this.formDataChecked}
              />
              <Checkbox
                label="中樞神經興奮劑(如古柯鹼、安非他命...)"
                name="stimulant"
                onChange={this.formDataChecked}
              />
              <Checkbox
                label="其他(如凱他命、大麻、新興成癮物質…)"
                name="otherDrug"
                onChange={this.formDataChecked}
              />
            </Form.Group>

            <Form.Group inline>
              <label>性別</label>
              <Checkbox
                label="男"
                name="isMale"
                onChange={this.formDataChecked}
              />
              <Checkbox
                label="女"
                name="isFemale"
                onChange={this.formDataChecked}
              />
            </Form.Group>
            <Form.Group inline>
              <label>年齡</label>
              <Checkbox
                label="成年"
                name="isAdult"
                onChange={this.formDataChecked}
              />
              <Checkbox
                label="未成年"
                name="isChild"
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
                    onChange={this.formDataChange}
                    value={this.state.servereDisease}
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
                  onChange={this.formDataChecked}
                />
              </Form.Field>
              <Form.Field>
                <label>女性成年</label>
                <Input
                  name="femaleAdultBed"
                  type="number"
                  label={{ basic: true, content: "床" }}
                  labelPosition="right"
                  onChange={this.formDataChecked}
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
                  onChange={this.formDataChecked}
                />
              </Form.Field>
              <Form.Field>
                <label>女性未成年</label>
                <Input
                  name="femaleTeenBed"
                  type="number"
                  label={{ basic: true, content: "床" }}
                  labelPosition="right"
                  onChange={this.formDataChecked}
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
          <fieldset style={fieldset}>
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
                  label="說明"
                  control="textarea"
                  rows="3"
                  name="feeTypeDescription"
                  onChange={this.textAreaChange}
                  value={this.state.feeTypeDescription}
                />
              )}
              <Form.Radio
                label="部分輔助"
                value="part"
                name="feeType"
                onChange={this.formDataRadioChecked}
                checked={this.state.feeType === "part"}
              />
              {this.state.feeType === "part" && (
                <Form.Field
                  label="說明（補助條件及補助額度）"
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
                  label="說明"
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
                  label="說明"
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
                <Input type="number" /> 人，
                <label htmlFor="">兼任</label>
                <Input type="number" /> 人
              </Form.Field>
            </Form.Group>
            <h3>處遇人員</h3>
            <Form.Group>
              <Form.Field inline>
                <h4>醫師</h4>
                <label>專任</label>
                <input type="text" /> 科
                <input type="number" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" /> 科
                <input type="number" /> 人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>臨床心理師</h4>
                <label>專任</label>
                <input type="number" /> 人，
                <label htmlFor="">兼任</label>
                <input type="number" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>諮商心理師</h4>
                <label>專任</label>
                <input type="number" /> 人，
                <label htmlFor="">兼任</label>
                <input type="number" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>社會工作師/社工員</h4>
                <label>專任</label>
                <input type="number" /> 人，
                <label htmlFor="">兼任</label>
                <input type="number" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>職能治療師</h4>
                <label>專任</label>
                <input type="number" /> 人，
                <label htmlFor="">兼任</label>
                <input type="number" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>護理師/護士</h4>
                <label>專任</label>
                <input type="number" /> 人，
                <label htmlFor="">兼任</label>
                <input type="number" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>過來人</h4>
                <label>專任</label>
                <input type="number" /> 人，
                <label htmlFor="">兼任</label>
                <input type="number" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>保全人員</h4>
                <label>專任</label>
                <input type="number" /> 人，
                <label htmlFor="">兼任</label>
                <input type="number" />人
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
            />
          </fieldset>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">安置單位服務狀況</legend>
            <Form.Group>
              <Form.Field inline>
                每年約提供安置
                <Input
                  type="number"
                  name="settlePeopleAmount"
                  onChange={this.formDataChange}
                />
                人次 （注意：每次入住，無論住多久，若未中斷，則算１人次）
              </Form.Field>
            </Form.Group>
          </fieldset>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">
              外部合作或連結資源（請條例具體說明合作單位或連結之資源，及使用情況）
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
                />
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
                  onChange={this.formDataChecked}
                />
              </Form.Field>
              {this.state.isSelfRaise && (
                <Form.Field inline>
                  <Input
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
                  onChange={this.formDataChecked}
                />
                {this.state.isSupplementory && (
                  <Table celled structured>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell rowSpan="2">
                          輔助單位
                        </Table.HeaderCell>
                        <Table.HeaderCell rowSpan="2">
                          申請輔助項目
                        </Table.HeaderCell>
                        <Table.HeaderCell colSpan="3">
                          每年輔助金額(元)
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
                        />
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
          <Button type="submit" size="massive" floated="right">
            儲存
          </Button>
        </Form>
      </Container>
    );
  }
}
