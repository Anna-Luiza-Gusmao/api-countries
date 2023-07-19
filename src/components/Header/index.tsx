import { useState } from 'react'
import { Moon, Sun } from "@phosphor-icons/react"
import { ButtonsContainer, HeaderContainer, Title, ToggleThemeButton, TranslationButton } from "./styles"
import ptFlag from '../../assets/Translation/pt.svg'

import { darkTheme } from '../../styles/themes/dark'
import { lightTheme } from "../../styles/themes/light"

export function Header() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    let theme = darkTheme
    if( prefersDark ) {
        theme = darkTheme
    } else {
        theme = lightTheme
    }

    const [chosenTheme, setChosenTheme] = useState(theme)

    const handleTheme = () => {
        if(chosenTheme === darkTheme){
            setChosenTheme(lightTheme)
        }else{
            setChosenTheme(darkTheme)
        }
    }

    return {
        chosenTheme,
        renderHeader: (
            <HeaderContainer>
                <Title>Onde no mundo?</Title>
    
                <ButtonsContainer>
                    <ToggleThemeButton onClick={handleTheme}>
                        {
                            chosenTheme === darkTheme ? (
                                <><Sun size={24} /><p>Modo Claro</p></>
                            ) : (<><Moon size={24} /><p>Modo Escuro</p></>)
                        }
                    </ToggleThemeButton>
                    <div>
                        <TranslationButton>
                            <img src={ptFlag} alt="Ícone do país de tradução"/>
                            <p>PT</p>
                        </TranslationButton>
                        <span></span>
                    </div>
                </ButtonsContainer>
            </HeaderContainer>
        )
    }
}
