import { Box } from "@mui/material";
import CheckBox from "../CheckBox";
import HeadingText from "../Heading";


export default function Ram(){
    return(
        <Box>
            <HeadingText
                title={'RAM'} />
            <CheckBox
                name={'8 GB & above'}
            />
            <CheckBox
                name={'6 GB'}
            />
            <CheckBox
                name={'4 GB'}
            />
            <CheckBox
                name={'3 GB'}
            />
            <CheckBox
                name={'2 GB'}
            />

            <CheckBox
                name={'1 GB'}
            />
            <CheckBox
                name={'Less then 512 MB'}
            />
        </Box>
    )
}