import React, { Component } from 'react'

export default class MyInfo extends Component {
    constructor(props){
        super(props);
        // this.name;
    }
    // const Data = {
    //     'name': 'Bhushan',
    //     'age' : 20,
    //     'gender' : 'Male'
    // }
    render() {
        // this.name;
    return (
      <div>
        {/* <h1>Data: {Data.name}</h1>
        <h1>Data: {Data.age}</h1>
        <h1>Data: {Data.gender}</h1> */}
            <h1> Data: {this.props.name}</h1>
      </div>
    )
  }
}