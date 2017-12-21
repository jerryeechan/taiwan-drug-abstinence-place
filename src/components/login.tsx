import * as React from "react";

import { Form, Checkbox, Button } from "semantic-ui-react";
import * as firebase from "firebase";

export class Login extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {}

  handleLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
      });
    // TODO : catch exception
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>信箱</label>
          <input
            onChange={evt =>
              this.setState({
                email: evt.target.value
              })
            }
            placeholder="信箱"
          />
        </Form.Field>
        <Form.Field>
          <label>密碼</label>
          <input
            onChange={evt =>
              this.setState({
                password: evt.target.value
              })
            }
            placeholder="密碼"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" onClick={() => this.handleLogin()}>
          送出
        </Button>
      </Form>
    );
  }
}
