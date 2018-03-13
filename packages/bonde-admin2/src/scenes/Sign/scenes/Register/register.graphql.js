import gql from 'graphql-tag'

export default gql`
  mutation Register($user: RegisterInput!) {
    register (input: $user) {
      jwtToken
    }
  }
`
