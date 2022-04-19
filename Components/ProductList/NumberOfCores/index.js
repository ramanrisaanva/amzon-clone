import { Box } from "@mui/material"
import CheckBox from "../CheckBox"
import HeadingText from "../Heading"


export default function NumberOfCores(){
    return(
        <Box>
            <HeadingText
             title={'Number of Cores'}
             />

            <CheckBox
             name={'Single Core'}
            />
            <CheckBox
             name={'Quad Core'}
             />
            <CheckBox
                name={'Hexa Core'}
            />
            <CheckBox
                name={'Octa Core'}
            />
        </Box>
    )
}