import styled from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.25rem 2.5rem;
    width: 20rem;
    background: ${props => props.theme.colors["sub-background"]};

    border-radius: 8px;
    box-shadow: ${props => props.theme.cards["box-shadow"]};

    svg {
        color: ${props => props.theme.colors.placeholder};
    }

    input {
        flex: 1;
        border: none;

        background: transparent;
        
        &::placeholder {
            color: ${props => props.theme.colors.placeholder};
        }
    }
`