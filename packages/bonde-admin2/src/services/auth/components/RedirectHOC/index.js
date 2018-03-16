import React from 'react'
import { Redirect } from 'react-router-dom'

const RedirectHOC = (Component) => {
  class RedirectWrapper extends React.Component {
    constructor (props) {
      super(props)
      this.state = { redirectToReferrer: false, to: undefined }
    }

    redirect (to) {
      this.setState({ redirectToReferrer: true, to })
    }

    render () {
      if (this.state.redirectToReferrer) {
        return <Redirect to={this.state.to} />
      }

      return (
        <Component
          {...this.props}
          redirectTo={this.redirect.bind(this)}
        />
      )
    }
  }

  RedirectWrapper.displayName = `RedirectHOC(${Component.displayName || Component.name || Component})`

  return RedirectWrapper
}

export default RedirectHOC
