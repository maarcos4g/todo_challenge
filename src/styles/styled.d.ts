import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            modal: string,
            textModal: string,
            inputText: string,
            textFilter: string,
            complete: string,
            hover: string,
            white: string,
        },
    }
}