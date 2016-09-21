import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as Paths from '../../Paths'
import * as WidgetSelectors from '../WidgetSelectors'

export class Settings extends Component {
  render() {
    const { children, ...otherProps } = this.props

    return (
      <div className="flex-auto flex flex-column bg-silver gray relative">
        {children && React.cloneElement(children, {...otherProps})}
      </div>
    )
  }
}


Settings.propTypes = {
  children: PropTypes.object,
  mobilization: PropTypes.object.isRequired,
  widget: PropTypes.object.isRequired,
  credentials: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  widget: WidgetSelectors.getWidget(state, ownProps),
  credentials: state.auth.credentials
})

export default connect(mapStateToProps)(Settings)
