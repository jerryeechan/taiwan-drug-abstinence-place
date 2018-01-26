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
      otherServiceNum: 0
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

  render() {
    var otherPeopleRows = [];
    var otherServiceRows = [];
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
            每年約可提供<Form.Input type="text" />人次
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
                機構或民間組織名稱(請填寫立案之機構全名，及治療所或工作室名稱)
              </label>
              <Input name="name" placeholder="機構名稱" />
            </Form.Field>
            <Form.Field>
              <label>電話 (請加註區域碼，若需撥打分機，亦請註明)</label>
              <Input id="phone" placeholder="電話" />
            </Form.Field>
            <Form.Field>
              <label>地址</label>
              <Input id="address" placeholder="地址" />
              {/* TODO : 防呆 */}
            </Form.Field>
            <Form.Field>
              <label>電子信箱</label>
              <Input id="email" placeholder="email" />
            </Form.Field>
            <Form.Field>
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
            <Form.TextArea
              label="其他特殊服務(請說明，如可攜子同住、愛滋個案…等)"
              placeholder="其他特殊服務"
            />
          </fieldset>
          <fieldset style={fieldset}>
            <legend className="ui dividing header">
              針對施用毒品或藥癮者提供之服務項目與服務量能(可複選)
            </legend>
            <Form.Radio label="團體心理治療(諮商)" value="" />
            <Form.Group inline>
              每年約可提供<Form.Input type="text" />團，每團<Form.Input type="text" />共約<Form.Input
                type="text"
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
              每年約可提供<Form.Input type="text" />人，每人<Form.Input type="text" />共約<Form.Input
                type="text"
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
              每年約可提供<Form.Input type="text" />人(家庭)，共約<Form.Input type="text" />人(家庭)次
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
              可提供之個管案量比為１：<Form.Input type="text" />
            </Form.Group>
            <Form.Field
              label=""
              control="textarea"
              placeholder="請以300字說明療程之理論、方式、內容、對象等資訊，俾利宣導"
              rows="4"
            />
            <Form.Radio label="家屬自助團體" value="" />
            <Form.Group inline>
              每年約可提供<Form.Input type="text" />團，每團<Form.Input type="text" />共約<Form.Input
                type="text"
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
              每年約可提供<Form.Input type="text" />團，每團<Form.Input type="text" />共約<Form.Input
                type="text"
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
          <Button type="submit" size="massive" floated="right">
            儲存
          </Button>
        </Form>
      </Container>
    );
  }
}
