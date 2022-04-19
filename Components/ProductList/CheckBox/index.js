import { Box, Checkbox } from '@mui/material'

export default function CheckBox({check, name}) {
    return(
        <Box style={{
            width: 300,
            height: 25
        }}>
            <Checkbox/>
            {name}
        </Box>
    )
}