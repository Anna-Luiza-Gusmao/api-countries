import { SearchBox } from "./components/SearchBox"
import { HomeContainer } from "./styles"
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from "react"

export function Home() {
    const [country, setCountry] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string)
    }

    return (
        <HomeContainer>
            <section>
                <SearchBox />

                <FormControl sx={{ width: 300 }}>
                    <InputLabel id="demo-simple-select-label">País</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={country}
                        label="País"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Brasil</MenuItem>
                        <MenuItem value={20}>Estados Unidos</MenuItem>
                    </Select>
                </FormControl>
            </section>
        </HomeContainer>
    )
}