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
  Checkbox
} from "semantic-ui-react";

export class AgencyForm extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="form-container">
        <Form>
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>機構名稱</label>
            <input
              placeholder="Name"
              value={this.props.name}
              onChange={this.props.handleNameChange}
            />
          </Form.Field>
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>網站</label>
            <input
              placeholder="website"
              value={this.props.website}
              onChange={this.props.handleWebsiteChange}
            />
          </Form.Field>
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>地區</label>
            <Dropdown selection placeholder="地區" options={options} onChange={this.props.handleAreaChange} value={this.props.area}/>
            {this.props.area=='N' && <Dropdown selection placeholder="縣市" options={Noptions} onChange={this.props.handleLocationChange} value={this.props.location}/>}
            {this.props.area=='E' && <Dropdown selection placeholder="縣市" options={Eoptions} onChange={this.props.handleLocationChange} value={this.props.location}/>}
            {this.props.area=='W' && <Dropdown selection placeholder="縣市" options={Woptions} onChange={this.props.handleLocationChange} value={this.props.location}/>}
            {this.props.area=='S' && <Dropdown selection placeholder="縣市" options={Soptions} onChange={this.props.handleLocationChange} value={this.props.location}/>}
            {this.props.area=='O' && <Dropdown selection placeholder="縣市" options={Ooptions} onChange={this.props.handleLocationChange} value={this.props.location}/>}
          </Form.Field>
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>地址</label>
            <input
              placeholder="address"
              value={this.props.address}
              onChange={this.props.handleAddressChange}
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
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>機構屬性</label>
            <Dropdown selection placeholder="屬性" options={Attritubeoptions} onChange={this.props.handleAttritubeChange} value={this.props.attritube}/>
          </Form.Field>
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>性別</label>
            <Checkbox label='男' onChange={this.props.handleBoyCheckboxChange} checked={this.props.boyChecked}/><Checkbox label='女' onChange={this.props.handleGirlCheckboxChange} checked={this.props.girlChecked}/>
          </Form.Field>
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>年齡</label>
            <Checkbox label='不限' onChange={this.props.handleCheckboxChange} checked={this.props.checked}/><br/>
            {!this.props.checked &&
              <div>
                <Dropdown search options={NumOptions} onChange={this.props.handleLBageChange} value={this.props.LBage}/> ～ <Dropdown search options={NumOptions} onChange={this.props.handleUBageChange} value={this.props.UBage}/>
              </div>}
          </Form.Field>
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>宗教</label>
            <Dropdown search options={religonOptions} onChange={this.props.handleReligonChange} value={this.props.religon}/>
          </Form.Field>
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>其他</label>
            <Checkbox label='更生保護法' onChange={this.props.handleE1CheckboxChange} checked={this.props.e1checked}/><br/>
            <Checkbox label='非鴉片類補助' onChange={this.props.handleE2CheckboxChange} checked={this.props.e2checked}/><br/>
            <Checkbox label='青少年' onChange={this.props.handleE3CheckboxChange} checked={this.props.e3checked}/><br/>
          </Form.Field>
          <Form.Field>
            <label style={{textAlign: "left",fontSize: "1.5em",padding: "5px"}}>處置方式及費用</label>
            <input id="ro1" style={{width:"50%"}} value="處置方式" readOnly/><input id="ro2" style={{width:"50%"}} value="費用" readOnly/>
            {this.props.method.map((name,i)=>{
              return <div id={i} key={i}><input name="first" style={{width:"50%"}} onChange={this.props.handleMethodChange} value={this.props.method[i][0]}/><input name="second" style={{width:"50%"}} onChange={this.props.handleMethodChange}value={this.props.method[i][1]}/></div>
            })}
            <Icon onClick={this.props.handleAddMethod} id="ii" size="big" name="add circle" style={{display:"block",margin:"auto"}}></Icon>
          </Form.Field>
          <Grid>
            <Table unstackable textAlign="center" style={nopadding}>
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
                    <Icon color="green" name="checkmark" size="large" id='Sun1' style={this.props.OKtime['Sun1']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Mon1' style={this.props.OKtime['Mon1']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Tue1' style={this.props.OKtime['Tue1']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Wed1' style={this.props.OKtime['Wed1']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Thu1' style={this.props.OKtime['Thu1']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Fri1' style={this.props.OKtime['Fri1']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Sat1' style={this.props.OKtime['Sat1']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    下<br />午
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Sun2' style={this.props.OKtime['Sun2']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Mon2' style={this.props.OKtime['Mon2']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Tue2' style={this.props.OKtime['Tue2']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Wed2' style={this.props.OKtime['Wed2']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Thu2' style={this.props.OKtime['Thu2']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Fri2' style={this.props.OKtime['Fri2']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Sat2' style={this.props.OKtime['Sat2']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    晚<br />上
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Sun3' style={this.props.OKtime['Sun3']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Mon3' style={this.props.OKtime['Mon3']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Tue3' style={this.props.OKtime['Tue3']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Wed3' style={this.props.OKtime['Wed3']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Thu3' style={this.props.OKtime['Thu3']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Fri3' style={this.props.OKtime['Fri3']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                  <Table.Cell>
                    <Icon color="green" name="checkmark" size="large" id='Sat3' style={this.props.OKtime['Sat3']}>
                      <Button
                        style={iconbtn}
                        onClick={this.props.handleTimeClick}
                      />
                    </Icon>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
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

  componentDidMount() {
    let iElem: any = document.getElementById('ii');
    iElem.onmouseover = ()=>{
      iElem.classList.add('huge');
      iElem.classList.remove('big');
    }
    iElem.onmouseout = ()=>{
      iElem.classList.add('big');
      iElem.classList.remove('huge');
    }
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

const options = [
  { key: 'N', value: 'N', text: '北區' },
  { key: 'W', value: 'W', text: '中區' },
  { key: 'S', value: 'S', text: '南區' },
  { key: 'E', value: 'E', text: '東區' },
  { key: 'O', value: 'O', text: '離島' }
]

const Noptions = [
  { key: 'N1', value: 'N1', text: '臺北市' },
  { key: 'N2', value: 'N2', text: '新北市' },
  { key: 'N3', value: 'N3', text: '基隆市' },
  { key: 'N4', value: 'N4', text: '桃園市' },
  { key: 'N5', value: 'N5', text: '新竹市' },
  { key: 'N6', value: 'N6', text: '新竹縣' },
  { key: 'N7', value: 'N7', text: '宜蘭縣' },
]

const Woptions = [
  { key: 'W1', value: 'W1', text: '苗栗縣' },
  { key: 'W2', value: 'W2', text: '臺中市' },
  { key: 'W3', value: 'W3', text: '彰化縣' },
  { key: 'W4', value: 'W4', text: '南投縣' },
  { key: 'W5', value: 'W5', text: '雲林縣' }
]

const Soptions =[
  { key: 'S1', value: 'S1', text: '嘉義市' },
  { key: 'S2', value: 'S2', text: '嘉義縣' },
  { key: 'S3', value: 'S3', text: '臺南市' },
  { key: 'S4', value: 'S4', text: '高雄市' },
  { key: 'S5', value: 'S5', text: '屏東縣' }
]

const Eoptions = [
  { key: 'E1', value: 'E1', text: '花蓮縣' },
  { key: 'E2', value: 'E2', text: '臺東縣' }
]

const Ooptions = [
  { key: 'O1', value: 'O1', text: '金門縣' },
  { key: 'O2', value: 'O2', text: '澎湖縣' },
  { key: 'O3', value: 'O3', text: '連江縣' }
]

const NumOptions = [
  { key: '0', value: '0', text: '0' },
  { key: '1', value: '1', text: '1' },
  { key: '2', value: '2', text: '2' },
  { key: '3', value: '3', text: '3' },
  { key: '4', value: '4', text: '4' },
  { key: '5', value: '5', text: '5' },
  { key: '6', value: '6', text: '6' },
  { key: '7', value: '7', text: '7' },
  { key: '8', value: '8', text: '8' },
  { key: '9', value: '9', text: '9' },
  { key: '10', value: '10', text: '10' },
  { key: '11', value: '11', text: '11' },
  { key: '12', value: '12', text: '12' },
  { key: '13', value: '13', text: '13' },
  { key: '14', value: '14', text: '14' },
  { key: '15', value: '15', text: '15' },
  { key: '16', value: '16', text: '16' },
  { key: '17', value: '17', text: '17' },
  { key: '18', value: '18', text: '18' },
  { key: '19', value: '19', text: '19' },
  { key: '20', value: '20', text: '20' },
  { key: '21', value: '21', text: '21' },
  { key: '22', value: '22', text: '22' },
  { key: '23', value: '23', text: '23' },
  { key: '24', value: '24', text: '24' },
  { key: '25', value: '25', text: '25' },
  { key: '26', value: '26', text: '26' },
  { key: '27', value: '27', text: '27' },
  { key: '28', value: '28', text: '28' },
  { key: '29', value: '29', text: '29' },
  { key: '30', value: '30', text: '30' },
  { key: '31', value: '31', text: '31' },
  { key: '32', value: '32', text: '32' },
  { key: '33', value: '33', text: '33' },
  { key: '34', value: '34', text: '34' },
  { key: '35', value: '35', text: '35' },
  { key: '36', value: '36', text: '36' },
  { key: '37', value: '37', text: '37' },
  { key: '38', value: '38', text: '38' },
  { key: '39', value: '39', text: '39' },
  { key: '40', value: '40', text: '40' },
  { key: '41', value: '41', text: '41' },
  { key: '42', value: '42', text: '42' },
  { key: '43', value: '43', text: '43' },
  { key: '44', value: '44', text: '44' },
  { key: '45', value: '45', text: '45' },
  { key: '46', value: '46', text: '46' },
  { key: '47', value: '47', text: '47' },
  { key: '48', value: '48', text: '48' },
  { key: '49', value: '49', text: '49' },
  { key: '50', value: '50', text: '50' },
  { key: '51', value: '51', text: '51' },
  { key: '52', value: '52', text: '52' },
  { key: '53', value: '53', text: '53' },
  { key: '54', value: '54', text: '54' },
  { key: '55', value: '55', text: '55' },
  { key: '56', value: '56', text: '56' },
  { key: '57', value: '57', text: '57' },
  { key: '58', value: '58', text: '58' },
  { key: '59', value: '59', text: '59' },
  { key: '60', value: '60', text: '60' },
  { key: '61', value: '61', text: '61' },
  { key: '62', value: '62', text: '62' },
  { key: '63', value: '63', text: '63' },
  { key: '64', value: '64', text: '64' },
  { key: '65', value: '65', text: '65' },
  { key: '66', value: '66', text: '66' },
  { key: '67', value: '67', text: '67' },
  { key: '68', value: '68', text: '68' },
  { key: '69', value: '69', text: '69' },
  { key: '70', value: '70', text: '70' },
  { key: '71', value: '71', text: '71' },
  { key: '72', value: '72', text: '72' },
  { key: '73', value: '73', text: '73' },
  { key: '74', value: '74', text: '74' },
  { key: '75', value: '75', text: '75' },
  { key: '76', value: '76', text: '76' },
  { key: '77', value: '77', text: '77' },
  { key: '78', value: '78', text: '78' },
  { key: '79', value: '79', text: '79' },
  { key: '80', value: '80', text: '80' },
  { key: '81', value: '81', text: '81' },
  { key: '82', value: '82', text: '82' },
  { key: '83', value: '83', text: '83' },
  { key: '84', value: '84', text: '84' },
  { key: '85', value: '85', text: '85' },
  { key: '86', value: '86', text: '86' },
  { key: '87', value: '87', text: '87' },
  { key: '88', value: '88', text: '88' },
  { key: '89', value: '89', text: '89' },
  { key: '90', value: '90', text: '90' },
  { key: '91', value: '91', text: '91' },
  { key: '92', value: '92', text: '92' },
  { key: '93', value: '93', text: '93' },
  { key: '94', value: '94', text: '94' },
  { key: '95', value: '95', text: '95' },
  { key: '96', value: '96', text: '96' },
  { key: '97', value: '97', text: '97' },
  { key: '98', value: '98', text: '98' },
  { key: '99', value: '99', text: '99' },
  { key: '100', value: '100', text: '100' }
]

const Attritubeoptions = [
  { key: 'A1', value: 'A1', text: '醫療' },
  { key: 'A2', value: 'A2', text: '中途之家' },
  { key: 'A3', value: 'A3', text: '心理諮商' }
]

const religonOptions = [
  { key: 'R1', value: 'R1', text: '不限'},
  { key: 'R2', value: 'R2', text: '基督教'},
  { key: 'R3', value: 'R3', text: '伊斯蘭教'},
  { key: 'R4', value: 'R4', text: '印度教'},
  { key: 'R5', value: 'R5', text: '佛教'}
]