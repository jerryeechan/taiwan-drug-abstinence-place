import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactQuill from "react-quill";
import {
  Container,
  Form,
  Grid,
  Button,
  Image,
  Input,
  Label,
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
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Container className="form-container">
        <Form>
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={9} computer={9}>
                <Grid celled verticalAlign="middle">
                  <Grid.Row id="row1">
                    <Grid.Column mobile={16} tablet={4} computer={4}>
                      <div className="crop">
                        <Image
                          className="img-rounded"
                          src="http://ebil.nctu.edu.tw/wp-content/uploads/2016/11/%E7%A9%BA%E7%99%BD%E5%A4%A7%E9%A0%AD%E7%85%A7-300x300.jpg"
                        />
                      </div>
                      <Container className="link">
                        <a className="change-link" href="#" role="button">
                          Change picture
                          <input
                            type="file"
                            accept="image/*"
                            onChange={this.previewFile}
                          />
                        </a>
                      </Container>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={12} computer={12}>
                      <Form.Field>
                        <label>Display name</label>
                        <input
                          placeholder="First Name"
                          value={this.props.name}
                          onChange={this.props.handleNameChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Location</label>
                        <input
                          placeholder="place"
                          value={this.props.location}
                          onChange={this.props.handleLocationChange}
                        />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row id="row2">
                    <Form.Field width={16} className="ff">
                      <label>About me</label>
                      <ReactQuill
                        id="editor-container"
                        theme="snow"
                        value={this.props.editorHtml}
                        onChange={this.props.handleChange}
                        modules={DoctorForm.modules}
                      />
                    </Form.Field>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column
                verticalAlign="middle"
                mobile={16}
                tablet={7}
                computer={7}
              >
                <Table unstackable textAlign="center" id="t1">
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
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
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
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
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
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                      <Table.Cell>
                        <Icon color="green" name="checkmark" size="large">
                          <button
                            className="iconbtn"
                            onClick={this.handleClick}
                          />
                        </Icon>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row id="row3">
              <Button primary id="bb" onClick={this.props.handleSubmit}>
                Save Profile
              </Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    );
  }

  handleClick(e) {
    let parent = e.target.parentElement;
    if (parent.style.visibility == "hidden") {
      parent.style.visibility = "visible";
    } else {
      parent.style.visibility = "hidden";
    }
    e.target.style.visibility = "visible";
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
  }
}
