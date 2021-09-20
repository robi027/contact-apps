import React, { Component } from 'react';
import { View } from "react-native";
import HomeBridge from './HomeBridge';

class HomeNewBridge extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("HomeNewBridge");
        console.log(typeof HomeBridge);
    }

    render() {
        return <HomeBridge/>
    }
}

export default HomeNewBridge;