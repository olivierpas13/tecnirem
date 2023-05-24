import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { mainTheme } from "@/utils/Pallete";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";

const LeftCarouselSection = ({ title, description, imageSrcs, buttontext, bigDescription, buttonColor }) => {
    return (
    <>
      <Grid
        sx={{
          height: "70vh",
          display: { xs: "none", md: "inline-block" }
        }}
        item
        xs={1}
        md={6}
      >
        <Carousel
        >
            {imageSrcs.map(image=>{
                return(
                    <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "70vh",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  >
                </Box>
                )
            })}

        </Carousel>
      </Grid>
      <Grid style={{margin: "auto", padding: "3em"}} item xs={1} md={6}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            lineHeight: 1,
            my: "1em",
            color: mainTheme.palette.primary.main,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant= {bigDescription? "subtitle1": "subtitle2"}
          sx={{ fontWeight: 300, lineHeight: 2.5 }}
        >
          {description}
        </Typography>
        {buttontext && (
          <Button variant="outlined" color={buttonColor} style={{ margin: "1.5em", marginTop: "3em"  }}>
            {buttontext}
          </Button>
        )}
      </Grid>
    </>
  );
};

export default LeftCarouselSection;
