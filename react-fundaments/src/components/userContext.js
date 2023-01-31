

import React from 'react'

//1º step create the context, a context created with React createContext method comes with a PROVIDER and a CONSUMER React Component
const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

// export Provider and Consumer components
export { UserProvider, UserConsumer }

