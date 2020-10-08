import '@riotjs/hot-reload'
import { component, install } from 'riot'
import App from './app.riot'
import Nav from './nav.riot'
import registerGlobalComponents from './register-global-components'
install(comp => {


    })
    // register
registerGlobalComponents()

// mount the root tag

component(App)(document.getElementById('root'))