// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const tenderlyTheme = {
    dark: false,
    colors: {
        background: '#E0F2F1',
        surface: '#D4E157',
        primary: '#00695C',
        'primary-darken-1': '#00796B',
        secondary: '#DCE775',
        'secondary-darken-1': '#AFB42B',
        'accentColor': '#EEFF41',
        error: '#FF8A65',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

export default createVuetify(
    {
        theme: {
            defaultTheme: 'tenderlyTheme',
            themes: {
                tenderlyTheme,
            }
        }
    }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
