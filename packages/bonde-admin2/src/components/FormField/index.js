import React from 'react'
import PropTypes from 'prop-types'
import { ControlLabel } from 'bonde-styleguide'

const FormField = ({ input, meta, label, renderField: InputComponent, ...extraInputProps }) => (
  <React.Fragment>
    {label && <ControlLabel>{label}</ControlLabel>}
    <InputComponent {...input} {...extraInputProps} />
  </React.Fragment>
)

FormField.propTypes = {
  label: PropTypes.string,
  renderField: PropTypes.any.isRequired
}

export default FormField
