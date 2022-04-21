
import { Box } from "@mui/material";
import ProductDetails from "../ProductDetails";


export default function Product() {
    return(
        <Box
        
            style={{
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 2
            }}
        >
            <div style={{height: 220, width: 180}}>
                <img
                    src="./iphone.jpg"
                    style={{
                        width: 160,
                        height: 200,
                    }}
                />
            </div>
            <ProductDetails
                title={'Apple iPhone 13'}
                discription={'Flat INR 5000 Off on HDFC Bank Cards'}
                price={'50000/-'}
                date={'Get it by Thursday, April 21'}
            />
            
        </Box>
    )
}