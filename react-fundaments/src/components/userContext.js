

import React from 'react'


//Default Value: we can set a default value to the context, pass as a parameter on the createContext method, to see this value comment the UserProvider on App.js
const UserContext = React.createContext('defult value')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

//export UseContext
export default UserContext