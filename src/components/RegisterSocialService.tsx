import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Container,
  Form,
  Grid,
  Radio,
  Button,
  Image,
  Input,
  Icon,
  Table,
  Dropdown,
  Checkbox,
  TextArea,
  Message
} from "semantic-ui-react";

const shortInput = {
  width: 100
};

const fieldset = {
  marginTop: 20,
  marginBottom: 15
};

export class RegisterSocialService extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      otherPeopleNum: 1,
      otherServiceNum: 0,
      // formData
      // 基本資料
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
      // 費用
      feeType: "",
      feeTypeDescription: "",
      otherResourceNum: 1
    };
  }

  componentDidMount() {
    let iElems: any = document.getElementsByClassName("add-button");
    [...iElems].forEach(iElem => {
      console.log(iElem);
      iElem.onmouseover = () => {
        iElem.style.opacity = 1.0;
      };
      iElem.onmouseout = () => {
        iElem.style.opacity = 0.5;
      };
    });
  }

  addOtherServiceNum = () => {
    var origin = this.state.otherServiceNum;
    this.setState({
      otherServiceNum: origin + 1
    });
  };

  addOtherPeopleNum = () => {
    var origin = this.state.otherPeopleNum;
    this.setState({
      otherPeopleNum: origin + 1
    });
  };

  addOtherResourceNum = () => {
    var origin = this.state.otherResourceNum;
    this.setState({
      otherResourceNum: origin + 1
    });
    var origin = this.state.resources;
    origin.push("");
    this.setState({ ["resources"]: origin });
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
    var otherPeopleRows = [];
    var otherServiceRows = [];
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

    for (var i = 0; i < this.state.otherServiceNum; i++) {
      otherServiceRows.push(
        <div>
          <Form.Group inline>
            <Form.Radio checked />
            <Input size="mini" placeholder="服務名稱" />
          </Form.Group>
          <Form.Group inline>
            每年約可提供<Form.Input type="number" />人次
          </Form.Group>
          <Form.Field
            label=""
            control="textarea"
            placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
            rows="4"
          />
        </div>
      );
    }

    return (
      <Container>
        <Message positive>
          <Message.Header>填表說明</Message.Header>
          <ul>
            <li>
              此處之治療或處遇，係指針對施用毒品個案，提供以協助其減少、停止施用毒品，進而改善身心健康、提升生活品質及預防復發為目標之專業服務
            </li>
            <li>盤點範圍 (謹針對以下之機構或民間組織進行盤點)</li>
            <ul>
              <li>機構之服務項目載明有藥癮或物質濫用者</li>
              <li>
                機構之服務項目雖未敘明藥癮或物質濫用，惟該機構有實際於社區接受他單位轉介施用毒品或藥癮個案，並有專為是類個案規劃、設計之療程或方案者（執行方式包括外展至社區中其他機構（不包含矯正機關）或於該機構內之諮商室、治療室或晤談室提供）
              </li>
              <li>本盤點不包含醫療機構（即醫院、診所）</li>
            </ul>
            <li>
              若民間基金會、學協會等民間組織，依法亦設有前開治療所或工作室，則亦請填寫該表
            </li>
          </ul>
        </Message>
        <Form>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">基本資料</legend>
            <Form.Field required>
              <label>
                機構或民間組織名稱 (請填寫立案之機構全名及治療所或工作室名稱)
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
              <label>治療所或工作室地址</label>
              <Input
                id="settleAddress"
                name="settleAddress"
                value={this.state.settleAddress}
                placeholder="地址"
                onChange={this.formDataChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                label="同立案機構地址"
                onChange={this.makeAddressThesame}
              />
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
              <label>網站</label>
              <Input
                id="url"
                name="url"
                placeholder="http://google.com.tw"
                onChange={this.formDataChange}
              />
            </Form.Field>
          </fieldset>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">個案屬性</legend>
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
              label="其他特殊服務(請說明：如愛滋個案、合併家暴、合併精神疾病…等)"
              placeholder="其他特殊服務"
              name="specialService"
              onChange={this.formDataChange}
            />
          </fieldset>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">
              針對施用毒品或藥癮者提供之服務項目與服務量能(可複選)
            </legend>
            <Form.Radio label="團體心理治療(諮商)" value="" />
            <Form.Group inline>
              每年約可提供<Form.Input type="number" />個團體，每團<Form.Input type="number" />共約<Form.Input
                type="number"
                disabled
              />人次
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="個別心理治療(諮商)" value="" />
            <Form.Group inline>
              每年約可提供<Form.Input type="number" />人，每人<Form.Input type="number" />共約<Form.Input
                type="number"
                disabled
              />人次
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="家族或家庭治療(諮商)" value="" />
            <Form.Group inline>
              每年約可提供<Form.Input type="number" />人(家庭)，共約<Form.Input type="number" />人(家庭)次
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio
              label="個案管理服務（包括個案需求評估、資源連結、轉介及轉介後之追蹤）"
              value=""
            />
            <Form.Group inline>
              可提供之個管案量比為１：<Form.Input type="number" />
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="家屬自助團體" value="" />
            <Form.Group inline>
              每年約可提供<Form.Input type="number" />團，每團<Form.Input type="number" />共約<Form.Input
                type="number"
                disabled
              />人次
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="毒品個案自助團體" value="" />
            <Form.Group inline>
              每年約可提供<Form.Input type="number" />團，每團<Form.Input type="number" />共約<Form.Input
                type="number"
                disabled
              />人次
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <h3>其他服務</h3>
            {otherServiceRows}
            <Icon
              onClick={this.addOtherServiceNum}
              name="add circle"
              size="big"
              className="add-button"
              style={{ opacity: 0.5 }}
            />
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
            <legend className="ui dividing header">
              機構內實際提供施用毒品或藥癮者服務之專業人力配置
            </legend>
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
            <h3>其他領有專業證照者</h3>
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
            <legend className="ui dividing header">
              外部合作或連結資源（請說明合作單位或連結之資源，及使用情況或量能）
            </legend>
            <Form.Group>
              <Form.Field>
                <h4>範例一：有固定就業協力廠商____家，每年提供____個職缺</h4>
                <h4>範例二：與地ＯＯＯ地檢署合作，辦理…………………………….</h4>
                <h4>範例三：與OOO醫院(診所)合作，建立有相互OOO轉介機制</h4>
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
          <Button type="submit" size="massive" floated="right">
            儲存
          </Button>
        </Form>
      </Container>
    );
  }
}
