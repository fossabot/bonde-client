import React from 'react'
import PropTypes from 'prop-types'
import { ControlLabel } from 'bonde-styleguide'

const FormField = ({ input, meta, label, renderField: InputComponent }) => (
  <div>
    {label && <ControlLabel>{label}</ControlLabel>}
    <InputComponent {...input} />
  <div>
)

FormField.propTypes = {
  label: PropTypes.string,
  renderField: PropTypes.any.isRequired
}

export default FormField
