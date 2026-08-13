import React from 'react'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <p>Something went wrong. Please refresh the page.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
