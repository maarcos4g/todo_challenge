import { 
    Container, ImageBackground, 
    ImageToggle, ToggleButton, 
    TextToggle 
} from './styles'

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import iconLight from '../../assets/images/icon-sun.svg'
import iconDark from '../../assets/images/icon-moon.svg'

import imageLight from '../../assets/images/bg-desktop-light.jpg'
import imageDark from '../../assets/images/bg-desktop-dark.jpg'

type Props = {
    onClick: () => void;
}

export function Header(props: Props) {

    const { title } = useContext(ThemeContext)

    return (
        <Container>
            <ImageBackground src={title === 'light' ? imageLight : imageDark} />

            <TextToggle>TODO</TextToggle>

            <ToggleButton onClick={props.onClick}>
                <ImageToggle src={title === 'light' ? iconLight : iconDark} alt="ImageLight" />
            </ToggleButton>
        </Container>
    );
}