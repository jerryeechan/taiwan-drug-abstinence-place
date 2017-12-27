import * as React from "react";
import * as firebase from "firebase";
import { Redirect } from 'react-router';
import { Form, Checkbox, Button, Sidebar, Segment, Menu, Icon, Container, Header, Sticky } from 'semantic-ui-react';

export class Login extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    var config = {
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
  }

  componentDidMount() { }

  handleLogin() {
    console.log("handle login");
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        window.location.href = "./#/form";
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
        return;
      });
  }

  redirectToRegister() {
    window.location.href = "./#/register";
  }

  toIndex() {
    window.location.href = "./#/";
  }

  render() {
    return (
      <div>
        <Sticky>
          <Menu inverted>
            <Menu.Item onClick={() => this.toIndex()}>
              <Icon name='home' />
              戒毒好所在
            </Menu.Item>
          </Menu>
        </Sticky>
        <Container>
          <Form>
            <h1>登入</h1>
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
                type="password"
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
            <Button type="submit" onClick={() => this.redirectToRegister()} >
              註冊帳號
            </Button>
          </Form >
        </Container>
      </div >
    );
  }
}
