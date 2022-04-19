import { Box } from "@mui/material"



export default function HeadingText({title}){
    return(
        <Box
            style={{
                width: 300,
                height: 30,
                marginTop: 20,
                marginLeft: 10
            }}
        >
            <h4>
                <b>{title}</b>
            </h4>
        </Box>
    )
}