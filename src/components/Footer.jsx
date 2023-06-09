import { BottomNavigation, Tab, Typography , Box} from "@mui/material";

const Footer = () => {
    return(
        <Box>
        <BottomNavigation  sx = {{background : "black" , color : "white"}}>
            <Typography sx={{color : "#0A4D68"}}>
                <Tab label="made with ❤ by chetu"></Tab>
            </Typography>
        </BottomNavigation>
        </Box>
    );
}

export default Footer;