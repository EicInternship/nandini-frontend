import React from "react";
import { Component } from "react";

class ErrorBoundary extends Component {
  ConstructionRounded(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Some Error in Ecommerce Website</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
