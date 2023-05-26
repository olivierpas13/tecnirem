import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";

import LeftCarouselSection from "../global/LeftCarouselSection";
import LeftImageSection from "../global/LeftImageSection";
import RightImageSection from "../global/RightImageSection";
import { mainTheme } from "@/utils/Pallete";

const ServicePage = ({
  mainTitle,
  carouselImgsSrcs,
  mainText,
  subtitle,
  sections,
  callToActionText,
  callToActionBtn,
}) => {
  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: "#eee",
            display: "inline-block",
            width: "100vw",
            padding: "1.5em 20em",
            borderRadius: "1em",
            margin: "0.8em auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              textAlign: "center",
              margin: "0 auto",
              letterSpacing: "0.05em",
            }}
          >
            {mainTitle.toUpperCase()}
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        columns={{ xs: 1, md: 12 }}
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
          height: "100%",
          marginTop: "1%",
        }}
      >
        <LeftCarouselSection
          bigDescription={true}
          description={mainText}
          imageSrcs={carouselImgsSrcs}
        />
      </Grid>
      <Box sx={{ display: "flex", marginY: "3em" }}>
        <Box
          sx={{
            backgroundColor: "#eee",
            display: "inline-block",
            width: "100vw",
            padding: "0.5em 20em",
            borderRadius: "0.3em",
            margin: "0 auto",
          }}
        >
                  <Typography
          variant="h4"
          sx={{
            fontSize: "2.5em",
            fontWeight: 700,
            lineHeight: 1,
            textAlign: "center",
            my: "1em",
            color: mainTheme.palette.primary.main,
          }}
        >
          {subtitle}
        </Typography>
        </Box>
      </Box>
      <Grid
        container
        columns={{ xs: 1, md: 12 }}
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
          height: "100%",
          marginTop: "1%",
        }}
      >
        {sections.map((section) => {
          if (section.orientation === "right") {
            return <RightImageSection key={section.mainTitle} bigDescription={true} {...section} />;
          } else {
            return <LeftImageSection key={section.mainTitle} bigDescription={true} {...section} />;
          }
        })}
        <Box
          sx={{
            margin: "3em auto",
            backgroundColor: mainTheme.palette.primary.main,
            borderRadius: "5em",
            padding: "0.2em",
            paddingX: "10em",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#fff",
              fontSize: "1.7em",
              padding: "1em",
            }}
            variant="h5"
          >
            {callToActionText}
          </Typography>
          <Fab variant="extended" color="white" sx={{ padding: "1em 4em" }}>
            {callToActionBtn}
          </Fab>
        </Box>
      </Grid>
    </Box>
  );
};

export default ServicePage;
