import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    // You can log the error and errorInfo here
  }

  render() {
    if (this.state.hasError) {
      // Render an error message here
      return <p>Something went wrong.</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
