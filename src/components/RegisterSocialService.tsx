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
  TextArea
} from "semantic-ui-react";

export class RegisterSocialService extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <h1>
        社區藥癮(藥物濫用)治療及社會工作等專業服務（特指立案開業之心理治療所、諮商治療所、社會工作室）
      </h1>
    );
  }
}
