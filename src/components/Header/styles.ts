import styled from "styled-components"

export const HeaderContainer = styled.header`
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2.25rem 6.25rem;

    background-color: ${(props) => props.theme.colors["sub-background"]};
    box-shadow: ${(props) => props.theme.cards["box-shadow"]};
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
`

export const ButtonsContainer = styled.section`
    display: flex;
    gap: 2.5rem;

    span {
        display: block;
        width: 100%;
        margin-top: 0.25rem;
        border-bottom: 1px solid ${(props) => props.theme.translationCard.line};
        border-radius: 1px;
    }
    svg {
        color: ${(props) => props.theme.colors.text};
    }
    p {
        font-size: 0.875rem;
    }
`

const BaseButton = styled.button`
    display: flex;
    align-items: center;
`

export const ToggleThemeButton = styled(BaseButton)` 
    padding: 0.25rem;
    border-radius: 6px;
    gap: 0.75rem;

    &:hover {
        background: ${(props) => props.theme.colors.background};
    }
`

export const TranslationButton = styled(BaseButton)`
    gap: 0.625rem;

    &:hover {
        background: ${(props) => props.theme.translationCard["hover-pt"]};
    }
`