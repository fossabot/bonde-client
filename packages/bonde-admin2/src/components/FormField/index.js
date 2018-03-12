import React from 'react'
import PropTypes from 'prop-types'
import { ControlLabel, Flexbox } from 'bonde-styleguide'

const FormField = ({
  input,
  label,
  meta: { touched, error, warning },
  renderField: InputComponent,
  ...extraInputProps
}) => {
  const invalid = touched && (error || warning)

  return (
    <React.Fragment>
      {label && (
        <ControlLabel>
          <Flexbox horizontal>
            {label}
            {touched && (
              error && <span>{error}</span> ||
              warning && <span>{warning}</span>
            )}
          </Flexbox>
        </ControlLabel>
      )}
      <InputComponent
        invalid={invalid}
        {...input}
        {...extraInputProps}
      />
    </React.Fragment>
  )
}

FormField.propTypes = {
  label: PropTypes.string,
  renderField: PropTypes.any.isRequired
}

export default FormField
