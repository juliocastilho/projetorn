import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigator'

import Login from './views/login'
import Menu from './views/menu'


const MainRoutes = {
    login: {
        name: 'Login',
        screen: Login
    },

    Menu: {
        name: 'Home',
        screen: Menu

    }

}

const MainNavegatior = createSwitchNavigator( MainRoutes, { initialRouteName : 'Login' } )
export default createAppContainer(MainNavegatior)