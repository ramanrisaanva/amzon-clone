
import { Box } from "@mui/material";
import ProductDetails from "../ProductDetails";
import { useRouter } from 'next/router';



export default function Product() {
    const router = useRouter();
    return(
        <Box
        
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 2,
                cursor:"pointer"
            }}
            onClick={()=>router.push("../../productdetailpage")}
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