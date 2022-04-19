import { Box } from "@mui/material";
import CheckBox from "../CheckBox";
import HeadingText from "../Heading";


export default function BrandComp() {
    return(
        <Box>
            <HeadingText
                title={'Brand'}
            />
            <CheckBox
                name={'One Plus'}
            />
            <CheckBox
                name={'Apple'}
            />
            <CheckBox
                name={'Xiamoi'}
            />
            <CheckBox
                name={'Samsung'}
            />
            <CheckBox
                name={'Redmi'}
            />
            <CheckBox
                name={'Nokia'}
            />
            <CheckBox
                name={'Oppo'}
            />
        </Box>
    )
}