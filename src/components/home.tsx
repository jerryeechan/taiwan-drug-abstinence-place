import * as React from "react";
import { observer } from "mobx-react";
import {
  Header,
  Segment,
  Container,
  Menu,
  Item,
  Button,
  Icon,
  Form,
  Input,
  Select,
  Dropdown
} from "semantic-ui-react";
const genderOptions = [
  { key: "m", text: "男", value: "male" },
  { key: "f", text: "女", value: "female" }
];
const drugOptions = [
  { key: "morphine", text: "嗎啡、海洛因", value: "morphine" },
  {
    key: "amphetamine",
    text: "安非他命類(安非他命及甲基安非他命)",
    value: "amphetamine"
  },
  { key: "ecstasy", text: "搖頭丸(MDMA及MDA)", value: "ecstasy" },
  { key: "ecstasy", text: "大麻代謝物(THC)", value: "Ecstasy" },
  { key: "ketamine", text: "愷他命類(愷他命及原愷他命)", value: "ketamine" },
  { key: "other", text: "其他", value: "other" }
];
const zoneOptions = [
  { key: "none", text: "---", value: "none" },
  { key: "north", text: "北部", value: "north" },
  { key: "westm", text: "西部", value: "west" },
  { key: "south", text: "南部", value: "south" },
  { key: "east", text: "東部", value: "east" },
  { key: "kp", text: "高屏區", value: "kp" }
];
const religionOptions = [
  { key: "none", text: "無或不排斥", value: "none" },
  { key: "christian", text: "基督教", value: "christian" },
  { key: "catholicism", text: "天主教", value: "catholicism" },
  { key: "buddhism", text: "佛教", value: "buddhism" },
  { key: "taoism", text: "道教", value: "taoism" },
  { key: "nosupport", text: "排斥宗教性協助", value: "nosupport" }
];

export class Home extends React.Component<any, any> {
  scrollToSearch() {
    // TODO : scroll down
  }

  recommendFacility() {
    // TODO
  }

  render() {
    return (
      <div>
        <Segment inverted vertical textAlign="center" className="masthead">
          <Container>
            <Menu pointing secondary inverted>
              <Item
                as="a"
                href="https://docs.google.com/spreadsheets/d/1dtw1b7XKx6y8VdusKTvCZd4Fp19yMZWTHO9t1QJQ5SE/edit#gid=838766286"
              >
                協助編輯戒毒場所資訊
              </Item>
            </Menu>
          </Container>
          <Container text>
            <Header as="h1" inverted>
              戒毒好所在
            </Header>
            <h2>
              協助成癮者或觀護人、家屬、個案管理師一起為成癮者找到適合戒毒的協助機構
            </h2>
            <Button
              primary
              size="huge"
              onClick={() => {
                this.scrollToSearch();
              }}
            >
              尋求協助<Icon className="right arrow" />
            </Button>
          </Container>
        </Segment>
        <Segment>
          <Container text>
            <Form>
              <Header as="h3" dividing>
                成癮患者資料填寫
              </Header>
              <Form.Field>
                <Form.Input label="暱稱" placeholder="暱稱" />
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Input label="年齡" placeholder="年齡" />
                <Form.Input
                  control={Select}
                  options={genderOptions}
                  label="性別"
                  placeholder="性別"
                />
              </Form.Group>
              <Form.Group>
                <Dropdown
                  label="使用毒品"
                  options={drugOptions}
                  search
                  selection
                  fluid
                  multiple
                  allowAdditions
                />
              </Form.Group>
              <Form.Group width="equal">
                <Form.Input
                  control={Select}
                  options={zoneOptions}
                  label="居住地區"
                  placeholder="--"
                />
                <Form.Input
                  control={Select}
                  options={religionOptions}
                  label="宗教信仰"
                  placeholder="--"
                />
              </Form.Group>
            </Form>
            <Button
              primary
              size="huge"
              onClick={() => {
                this.recommendFacility();
              }}
            >
              推薦我協助單位<Icon className="right arrow" />
            </Button>
          </Container>
        </Segment>
        <Segment />
      </div>
    );
  }
}
