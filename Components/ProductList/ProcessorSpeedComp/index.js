import { Box, Checkbox } from "@mui/material";
import CheckBox from "../CheckBox";
import HeadingText from "../Heading";



export default function ProcessorSpeedComp(){
    return(
        <Box>
            <HeadingText
                title={'Processor Speed'}
            />
            <CheckBox
                name={'Less than 0.99 GHz'} 
            />
            <CheckBox
                name={'1 - 1.49 GHz'}
            />
            <CheckBox
                name={'2 - 2.24 GHz'}
            />
            <CheckBox
                name={'2.5 GHz & above'}
            />
        </Box>
    )
}