import { MagnifyingGlass } from "@phosphor-icons/react"
import { InputContainer } from "./styles"

export function SearchBox() {
    return (
        <InputContainer>
            <MagnifyingGlass size={20} />
            <input 
                type="text" 
                placeholder="Procure por um país..."
            />
        </InputContainer>
    )
}