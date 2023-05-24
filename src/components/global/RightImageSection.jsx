
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { mainTheme } from "@/utils/Pallete";
import { Button } from "@mui/material";

const RightImageSection = ({ title, description, imageUrl, buttontext, bigDescription, buttonColor }) => {
  return (
    <>
      <Grid style={{ padding: "4em" }} item xs={1} md={7}>
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
          variant= {bigDescription? "h5": "subtitle2"}
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
      <Grid
        sx={{
          height: "70vh",
          display: { xs: "none", md: "flex" },
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        item
        xs={1}
        md={5}
      ></Grid>
    </>
  );
};

export default RightImageSection;


