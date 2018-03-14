import React from 'react'
import { graphql } from 'react-apollo'

const FormWithGraphQL = ({
  mutation,
  variables
}) => (FormComponent) => graphql(mutation)(
  ({ mutate, onSuccess, onFail, ...ownProps }) => (
    <FormComponent
      onSubmit={(values) => {
        mutate({
          variables: variables(values, ownProps)
        })
        .then(onSuccess)
        .catch(onFail)
      }}
    />
  )
)

export default FormWithGraphQL
