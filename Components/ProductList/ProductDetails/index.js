import { Box } from "@mui/material";
import {styles} from './styles'

export default function ProductDetails({ title, price, discription, date }){
    return(

            <Box>
                <h1 style={styles.text}> {title}</h1>
                <h1  style={styles.price}>  {price}</h1>
                <p style={styles.disc}>{discription}</p> 
                <h1 style={styles.date}>{date}</h1>
            </Box>
       
    )
}