import React, { Component } from "react";
import { register } from "react-native-bundle-splitter";

export const withSplitter = (component) => {
    const BridgeComponent = register({ loader: () => component()});
    const MyComponent = (props) => <BridgeComponent {...props}/>
    return (props) => {
        return <MyComponent {...props}/>
    };
};