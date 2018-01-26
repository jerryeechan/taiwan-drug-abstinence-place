import * as React from "react";
import * as ReactDOM from "react-dom";
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
  Radio
} from "semantic-ui-react";

const shortInput = {
  width: 100
};

const fieldset = {
  marginTop: 20,
  marginBottom: 15
};

export class OtherSocialService extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      otherResourceNum: 1,
      moneyNum: 1,
      otherPeopleNum: 1,
      otherServiceNum: 0
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

  addOtherServiceNum = () => {
    var origin = this.state.otherServiceNum;
    this.setState({
      otherServiceNum: origin + 1
    });
  };

  render() {
    var otherResourceRows = [];
    var moneyRows = [];
    var otherPeopleRows = [];
    var otherServiceRows = [];
    for (var i = 0; i < this.state.otherResourceNum; i++) {
      otherResourceRows.push(<input type="text" />);
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
            <Input style={shortInput} />
          </Table.Cell>
          <Table.Cell>
            <Input style={shortInput} />
          </Table.Cell>
          <Table.Cell>
            <Input style={shortInput} />
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
            <input type="text" /> 人，
            <label htmlFor="">兼任</label>
            <input type="text" />人
          </Form.Field>
        </Form.Group>
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
              此處之心理社會復健與復歸社會服務，係指特別針對施用毒品個案或藥癮者，依其個人需求（如就學、就業、就醫、居住、職業訓練、親職教育、家庭關係修復、人際關係改善、支持系統重建…等），提供協助或所需資源連結，以減少其復發危險因子，增加保護因子，促其維持停止施用毒品，進而改善身心健康、提升生活品質及預防復發為目標之專業服務
            </li>
            <li>
              盤點範圍 (針對提供毒品施用者心理社會復健與復歸社會服務，且<b>
                非屬醫療或醫事機構，及非居住型服務
              </b>之下述二類民間組織進行盤點)
            </li>
            <ul>
              <li>機構之服務項目載明有藥癮或物質濫用者</li>
              <li>
                機構之服務項目雖未敘明藥癮或物質濫用，惟該機構有實際於社區接受他單位轉介施用毒品或藥癮個案，提供促進個案維持停止施用毒品，改變生活型態之心理社會復健與復歸社會服務者
              </li>
            </ul>
          </ul>
        </Message>
        <Form>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">基本資料</legend>
            <Form.Field required>
              <label>機構名稱 (請填寫立案之機構全名)</label>
              <Input name="name" placeholder="機構名稱" />
            </Form.Field>
            <Form.Field required>
              <label>電話 (請加註區域碼，若需撥打分機，亦請註明)</label>
              <Input id="phone" placeholder="電話" />
            </Form.Field>
            <Form.Field required>
              <label>地址</label>
              <Input id="address" placeholder="地址" />
              {/* TODO : 防呆 */}
            </Form.Field>
            <Form.Field required>
              <label>電子信箱</label>
              <Input id="email" placeholder="email" />
            </Form.Field>
            <Form.Field required>
              <label>網站</label>
              <input id="url" placeholder="http://google.com.tw" />
            </Form.Field>
          </fieldset>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">個案屬性</legend>
            <Form.Group inline>
              <label>成癮物質</label>
              <Checkbox label="酒精" />
              <Checkbox label="鴉片類(如海洛因、鴉片、嗎啡)" />
              <Checkbox label="中樞神經興奮劑(如古柯鹼、安非他命...) " />
              <Checkbox label="其他(如凱他命、大麻、新興成癮物質…)" />
            </Form.Group>

            <Form.Group inline>
              <label>性別</label>
              <Form.Radio label="男" value="man" />
              <Form.Radio label="女" value="female" />
            </Form.Group>
            <Form.Group inline>
              <label>年齡</label>
              <Form.Radio label="成年" value="adult" />
              <Form.Radio label="未成年" value="teen" />
            </Form.Group>
            <Form.Group inline>
              <label>是否排除重大身體疾病或精神疾病個案</label>
              <Form.Radio label="是" value="disease" />
              <Form.Radio label="否" value="" />
              <Form.Field>
                <label>請說明排除之疾病</label>
                <Input id="excuse" placeholder="名稱" />
              </Form.Field>
            </Form.Group>
            <Form.Group inline>
              <label>是否接受法院裁定或地檢署轉介之個案</label>
              <Form.Radio
                label="是"
                value="courtTransfer"
                // checked={value === "courtTransfer"}
              />
              <Form.Radio
                label="否"
                value="nocourtTransfer"
                // checked={value === "courtTransfer"}
              />
            </Form.Group>
            <Form.TextArea
              label="其他特殊服務(請說明，如可攜子同住、愛滋個案…等)"
              placeholder="其他特殊服務"
            />
          </fieldset>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">
              服務項目與服務量能(可複選)
            </legend>
            <Form.Radio label="家屬支持服務方案" value="" />
            <Form.Group inline>
              每年約可服務<Form.Input type="number" />個家庭，一年共約<Form.Input type="number" />人次
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="居家關懷服務方案" value="" />
            <Form.Group inline>
              每年約可服務<Form.Input type="number" />個家庭，一年共約<Form.Input type="number" />人次
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="個案家屬自助團體" value="" />
            <Form.Group inline>
              每年約可服務<Form.Input type="number" />團，每團<Form.Input type="number" />人，共約<Form.Input
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
              每年約可服務<Form.Input type="number" />團，每團<Form.Input type="number" />人，共約<Form.Input
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
            <Form.Radio label="個案自立生活服務及租屋津貼方案" value="" />
            <Form.Group inline>
              每年約可服務<Form.Input type="number" />人
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="職業訓練方案" value="" />
            <Form.Group inline>
              每年約可培訓<Form.Input type="number" />人
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="支持或陪伴就業服務方案" value="" />
            <Form.Group inline>
              每年約可服務<Form.Input type="number" />人
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="就業培力方案" value="" />
            <Form.Group inline>
              每年約可協助<Form.Input type="number" />人 穩定就業
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="創業輔導方案" value="" />
            <Form.Group inline>
              每年約可協助<Form.Input type="number" />人 順利創業
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="課後輔導方案" value="" />
            <Form.Group inline>
              每年約可服務<Form.Input
                type="number"
              /> 人
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
            <Form.Radio label="福利服務、經濟扶助或急難救助" value="" />
            <Form.Group inline>
              扶助額度<Form.Input type="number" />元/人，約<Input type="number" />人/年
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
          <fieldset style={fieldset}>
            <legend className="ui dividing header">服務費用收取方式</legend>
            <Form.Field>
              <Form.Radio label="完全自費" value="settleLimit" />
              <Form.Field label="說明" control="textarea" rows="3" />
              <Form.Radio label="部分輔助" value="settleLimit" />
              <Form.Field
                label="說明（補助條件及補助額度）"
                control="textarea"
                rows="3"
              />
              <Form.Radio label="全部免費" value="settleLimit" />
              <Form.Field label="說明" control="textarea" rows="3" />
              <Form.Radio label="其他" value="settleLimit" />
              <Form.Field label="說明" control="textarea" rows="3" />
            </Form.Field>
          </fieldset>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">專業人力配置</legend>
            <h3>行政人員</h3>
            <Form.Group>
              <Form.Field inline>
                <label>專任</label>
                <input type="text" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" />人
              </Form.Field>
            </Form.Group>
            <h3>處遇人員</h3>
            <Form.Group>
              <Form.Field inline>
                <h4>醫師</h4>
                <label>專任</label>
                <input type="text" /> 科
                <input type="text" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" /> 科
                <input type="text" /> 人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>臨床心理師</h4>
                <label>專任</label>
                <input type="text" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>諮商心理師</h4>
                <label>專任</label>
                <input type="text" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>社會工作師/社工員</h4>
                <label>專任</label>
                <input type="text" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>職能治療師</h4>
                <label>專任</label>
                <input type="text" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>護理師/護士</h4>
                <label>專任</label>
                <input type="text" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>過來人</h4>
                <label>專任</label>
                <input type="text" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" />人
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field inline>
                <h4>保全人員</h4>
                <label>專任</label>
                <input type="text" /> 人，
                <label htmlFor="">兼任</label>
                <input type="text" />人
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
            <legend className="ui dividing header">
              外部合作或連結資源（請說明合作單位或連結之資源，及使用情況或量能）
            </legend>
            <Form.Group>
              <Form.Field>
                <h4>範例：有固定就業協力廠商____家，每年提供____個職缺）</h4>
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
              <Form.Radio label="自籌(包括募款)" value="self" />
              <Form.Field inline>
                <input type="text" /> 元
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field>
                <Form.Radio
                  label="向公部門申請補助(請提供近3年補助單位及受補助額度)"
                  value="self"
                />
                <Table celled structured>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell rowSpan="2">輔助單位</Table.HeaderCell>
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