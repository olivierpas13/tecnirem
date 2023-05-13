import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { mainTheme } from "@/utils/Pallete";

const LeftImageSection = ({ title, description, imageUrl, buttontext }) => {
  return (
    <>
      <Grid
        sx={{
          height: "70vh",
          display: { xs: "none", md: "flex" },
          backgroundImage: `url(${imageUrl})`,
        }}
        item
        xs={1}
        md={7}
      ></Grid>
      <Grid style={{ padding: "3em" }} item xs={1} md={5}>
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
          variant="subtitle2"
          sx={{ fontWeight: 300, lineHeight: 2.2 }}
        >
          {description}
        </Typography>
        {buttontext && (
          <Button variant="outlined" style={{ margin: "1.5em" }}>
            Conoce el proceso
          </Button>
        )}
      </Grid>
    </>
  );
};

export default LeftImageSection;
