import { Box } from "@mui/material";
import CheckBox from "../CheckBox";
import HeadingText from "../Heading";


export default function ScreenSizeComp(){
    return(
        <Box>
            <HeadingText
            title={'Screen Size '}
            />
            <CheckBox 
                name={'Up to 3.9 in'}
            />
            <CheckBox
                name={'4 to 4.4 in'}
            />
            <CheckBox
                name={'5.5 in & above'}
            />

        </Box>
    )
}