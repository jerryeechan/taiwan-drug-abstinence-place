import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
  Menu,
  Icon,
  Segment
} from 'semantic-ui-react';

import Home from 'components/Home.jsx';

import './Main.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <Router >
        <div className='main'>
          <Segment inverted vertical>
            <Menu>
              <Menu.Item>
                <Link to="/home">
                  <Icon name="home" />
                  戒毒好所在
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/list">機構列表</Link>  
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Link to="/home">服務機構入口</Link>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Segment>
          

          <Route path="/list" render={() => (
            <Home/>
          )}/>
          <Route path="/home" render={() => (
            <Home/>
          )}/>
        </div>
      </Router>
    );
  }

}
