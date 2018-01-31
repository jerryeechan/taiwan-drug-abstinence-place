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
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown";
import { TimeTable } from './TimeTable';

export class DoctorForm extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="form-container">
        <Dropdown selection options={this.props.doctorNameOptions} onChange={this.props.handleDoctorNameOptionsChange} value={this.props.id}/>
        <Form>
          <Grid>
            <Grid.Row style={nopadding}>
              <Grid.Column>
                <Grid celled verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={4} computer={4}>
                      <div style={{crop}}>
                        <Image id='img-rounded'
                          style={cropImg}
                          src={this.props.src}
                        />
                      </div>
                      <Container style={link}>
                        <a style={{display:"block", color: "#fff", "textAlign": "center", margin:"auto"}} role="button" id="aa">
                          更換照片
                          <input style={{height:"20px", width:"100%", right: "0", position: "absolute"}}
                            id="oi"
                            type="file"
                            accept="image/*"
                            onChange={this.props.previewFile}
                          />
                        </a>
                      </Container>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={12} computer={12}>
                      <Form.Field>
                        <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>姓名</label>
                        <input
                          placeholder="First Name"
                          value={this.props.name}
                          onChange={this.props.handleNameChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>電話</label>
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
                        <label style={{textAlign: "left",fontSize: "1.5em",padding: "10px"}}>簡介</label>
                        <textarea style={{width:"98%", margin:"5px"}} placeholder="tell us more" onChange={this.props.handleChange} value={this.props.intro}/>
                      </Form.Field>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                      <TimeTable OKtime={this.props.OKtime} handleTimeClick={this.props.handleTimeClick}/>
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

  // previewFile() {
  //   var preview: any = document.getElementById("img-rounded");
  //   var input: any = document.querySelector("input[type=file]");
  //   var file = input.files[0];
  //   var reader = new FileReader();

  //   reader.addEventListener(
  //     "load",
  //     function() {
  //       preview.src = reader.result;
  //     },
  //     false
  //   );

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }

  componentDidMount() {
    // console.log(this.props.OKtime)
    // let buttons = document.getElementsByTagName("button");
    // for (let i = 0; i <= 20; ++i) {
    //   buttons[i].style.visibility = "visible";
    // }
    let aElem: any = document.getElementById('aa');
    aElem.onmouseover = ()=>{
      aElem.style.color = "#46A3FF";
    }
    aElem.onmouseout = ()=>{
      aElem.style.color='#fff';
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
  opacity: "0",
  visibility: "visible"
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