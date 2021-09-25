import React, { Component } from "react";

export const withSplitter = (component) => {
    const MyComponent = (props) => component();
    return (props) => {
        return <MyComponent {...props}/>
    };
};