const AuthAPI = {
  authenticate: (jwtToken) => new Promise((resolve, reject) => {
    window.localStorage.setItem('jwtToken', jwtToken)
    return resolve(jwtToken)
  }),
  
  logout: () => new Promise((resolve, reject) => {
    window.localStorage.removeItem('jwtToken')
    return resolve()
  }),

  isAuthenticated: () => window.localStorage.jwtToken !== undefined
}

export default AuthAPI
