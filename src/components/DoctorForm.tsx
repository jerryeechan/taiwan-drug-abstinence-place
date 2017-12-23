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
  Table
} from "semantic-ui-react";

export class DoctorForm extends React.Component<any, any> {
  static modules = {
    toolbar: [["bold", "italic", "underline", "strike"], ["link"], ["clean"]],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: true
    }
  };

  

  // static formats = [
  //   'header', 'font', 'size',
  //   'bold', 'italic', 'underline', 'strike', 'blockquote',
  //   'list', 'bullet', 'indent',
  //   'link', 'image', 'video'
  // ]

  constructor(props) {
    super(props);

    this.previewFile = this.previewFile.bind(this);
  }

  render() {
    return (
      <Container className="form-container">
        <Form>
          <Grid>
            <Grid.Row style={nopadding}>
              <Grid.Column>
                <Grid celled verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={4} computer={4}>
                      <div style={{crop}}>
                        <Image
                          style={cropImg}
                          src="http://ebil.nctu.edu.tw/wp-content/uploads/2016/11/%E7%A9%BA%E7%99%BD%E5%A4%A7%E9%A0%AD%E7%85%A7-300x300.jpg"
                        />
                      </div>
                      <Container style={link}>
                        <a style={{display:"block", color: "#fff", "textAlign": "center", margin:"auto"}} role="button">
                          Change picture
                          <input style={{height:"20px", width:"100%", right: "0", position: "absolute"}}
                            id="oi"
                            type="file"
                            accept="image/*"
                            onChange={this.previewFile}
                          />
                        </a>
                      </Container>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={12} computer={12}>
                      <Form.Field>
                        <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>Display name</label>
                        <input
                          placeholder="First Name"
                          value={this.props.name}
                          onChange={this.props.handleNameChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>Phone</label>
                        <input
                          placeholder="phone"
                          value={this.props.phone}
                          onChange={this.props.handlePhoneChange}
                        />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                      <Form.Field width={16}>
                        <label style={{textAlign: "left",fontSize: "1.5em",padding: "10px"}}>About me</label>
                        <textarea style={{width:"98%", margin:"5px"}} placeholder="tell us more" onChange={this.props.handleChange} value={this.props.editorHtml}/>
                      </Form.Field>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={8} computer={8}>
                      <Table unstackable textAlign="center">
                        <Table.Header>
                          <Table.HeaderCell />
                          <Table.HeaderCell>Sun</Table.HeaderCell>
                          <Table.HeaderCell>Mon</Table.HeaderCell>
                          <Table.HeaderCell>Tue</Table.HeaderCell>
                          <Table.HeaderCell>Wed</Table.HeaderCell>
                          <Table.HeaderCell>Thu</Table.HeaderCell>
                          <Table.HeaderCell>Fri</Table.HeaderCell>
                          <Table.HeaderCell>Sat</Table.HeaderCell>
                        </Table.Header>

                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>
                              上<br />午
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              下<br />午
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>
                              晚<br />上
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                            <Table.Cell>
                              <Icon color="green" name="checkmark" size="large">
                                <Button
                                  style={iconbtn}
                                  onClick={this.props.handleClick}
                                />
                              </Icon>
                            </Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row> 
            <Grid.Row style={nopadding}>
              <Button primary style={bb} onClick={this.props.handleSubmit}>
                Save Profile
              </Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    );
  }

  previewFile() {
    var preview: any = document.querySelector(".img-rounded");
    var input: any = document.querySelector("input[type=file]");
    var file = input.files[0];
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      function() {
        preview.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  componentDidMount() {
    let icons = document.getElementsByTagName("i");
    for (let i = 0; i <= 20; ++i) {
      icons[i].style.visibility = "hidden";
      let childElem: any = icons[i].firstElementChild;
      childElem.style.visibility = "visible";
    }
    let IElem: any = document.getElementById("oi");
    IElem.style.opacity = 0;
  }
}

const iconbtn = {
  position: "relative",
  height: "50px",
  width:  "50px",
  left: "-10px",
  top: "-35px",
  opacity: "0"
  /* background-color: gray; */
}

const bb = {
  marginLeft: "10px",
  marginBottom: "10px"
}

const link = {
  opacity: "0.7",
  backgroundColor: "#000",
  borderBottomLeftRadius: "6px",
  borderBottomRightRadius: "6px",
  bottom: "0",
  left: "0",
  paddingTop: "4px",
  paddingBottom: "4px"
}

const changeLinkInput = {
  height: "20px",
  width: "100px",
  right: "0",
  opacity: "0",
  position: "absolute"
}

const crop = {
  overflow: "hidden",
  margin: "auto"
}

const cropImg = {
  width: "inherit",
  margin: "auto"
}

const nopadding = {
  padding: "0px"
}