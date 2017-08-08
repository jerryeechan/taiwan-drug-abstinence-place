import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header, Segment, Container, Menu, Item, Button, Icon } from "semantic-ui-react"

class MastHead extends React.Component<any, any>{
    scrollToSearch() {

    }
    render() {
        return (
            <Segment inverted vertical textAlign="center" className="masthead">
                <Container>
                    <Menu large pointing secondary inverted>
                        <Item as="a" href="https://docs.google.com/spreadsheets/d/1dtw1b7XKx6y8VdusKTvCZd4Fp19yMZWTHO9t1QJQ5SE/edit#gid=838766286">協助編輯戒毒場所資訊</Item>
                    </Menu>
                </Container>
                <Container text>
                    <Header as="h1" inverted>
                        戒毒好所在
                </Header>
                    <h2>協助成癮者或觀護人、家屬、個案管理師一起為成癮者找到適合戒毒的協助機構</h2>
                    <Button primary size="huge" onClick={() => { this.scrollToSearch() }}>
                        尋求協助<Icon className="right arrow"></Icon>
                    </Button>
                </Container>
            </Segment>
        )
    }
}
class SearchForm extends React.Component<any, any>
{

}
const Main = () =>
    <div>
        <MastHead />
    </div>;

ReactDOM.render(<Main />, document.getElementById("main"));