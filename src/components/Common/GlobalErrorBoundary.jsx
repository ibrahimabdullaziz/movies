import React from "react";
import ErrorState from "../UI/ErrorState";

export class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Global Error Boundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    // Optionally reload or navigate, but resetting state allows re-render attempt
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-imdb-black flex items-center justify-center pt-20">
          <ErrorState
            message={this.state.error?.message || "An unexpected error occurred."}
            type="error"
            onRetry={this.handleRetry}
          />
        </div>
      );
    }

    return this.props.children;
  }
}
