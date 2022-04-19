import { Box } from "@mui/material";
import CheckBox from "../CheckBox";
import HeadingText from "../Heading";



export default function InternalMemoryComp(){
    return(
        <Box>
            <HeadingText
            title={'Internal Memory'}/>
            <CheckBox
                name={'Less then 3.9 GB'}
            />
            <CheckBox
                name={'4 GB'}
            />
            <CheckBox
                name={'8 GB'}
            />
            <CheckBox
                name={'16 GB'}
            />
             <CheckBox
                name={'32 GB'}
            />

            <CheckBox
                name={'128 GB'}
            />
            <CheckBox
                name={'256 GB & above'}
            />
        </Box>
    )
}