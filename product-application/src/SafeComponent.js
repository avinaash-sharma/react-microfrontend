import React, { Component } from "react";

export default class SafeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(component) {}
  render() {
    if (this.state.hasError) {
      return <div><p style={{fontSize:"20px", color:'red'}}>Header Error.</p></div>;
    }
    return this.props.children;
  }
}
