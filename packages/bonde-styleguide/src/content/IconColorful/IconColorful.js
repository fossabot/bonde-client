import React from 'react'
import PropTypes from 'prop-types'
import svg from './svg'

const IconColorful = ({ name, color, size, inverted }) => {
  const IconSVG = svg[name]

  return <IconSVG color={color} size={size} inverted={inverted} />
}

const { oneOfType, string, number, bool } = PropTypes

IconColorful.propTypes = {
  /** Name of the icon. */
  name: string.isRequired,
  /** Size of the icon. */
  size: oneOfType([string, number]),
  /** Invert the icon colors. */
  inverted: bool
}

IconColorful.defaultProps = {
  size: 13,
  inverted: false
}

export default IconColorful
