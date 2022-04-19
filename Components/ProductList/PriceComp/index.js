import { Box } from "@mui/material";
import HeadingText from "../Heading";


export default function PriceComp(){
    return(
        <Box
            style={{
                marginLeft: 10
            }}
        >
            <HeadingText
                title={'Price'}
            />
                Under ₹1,000<br/>
                ₹1,000 - ₹5,000<br />
                ₹5,000 - ₹10,000<br />
                ₹10,000 - ₹20,000<br />
                Over ₹20,000<br />
        </Box>
    )
}