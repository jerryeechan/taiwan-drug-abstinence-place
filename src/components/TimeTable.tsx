import * as React from 'react';

import {
  Icon,
  Table,
  Button
} from "semantic-ui-react";
export class TimeTable extends React.Component<any,any> {
  constructor(props){
    super(props);
  }

  render(){
    return (
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
    )
  }
}

const nopadding = {
  padding: "0px"
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
