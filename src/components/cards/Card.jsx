import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

import { mainTheme } from "@/utils/Pallete";

const CardComponent = ({smallDevice, imageSrc, title, description, buttonText, buttonDestination}) => {
    
  const router = useRouter();

  return (
      <Card
        sx={
          smallDevice
            ? { display: { sx: "flex", md: "none" }, margin: "2rem auto" }
            : null
        }
      >
        <CardMedia sx={{ height: 250 }} image={imageSrc} title={title} />
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
              lineHeight: 1,
              my: "1em",
              color: mainTheme.palette.primary.main,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 300, lineHeight: 2 }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "center", margin: "1em" }}
        >
          {buttonText && <Button
            size="large"
            color="secondary"
            onClick={() => router.push(buttonDestination)}
            sx={{
              color: mainTheme.palette.secondary.dark,
              "&:hover": {
                backgroundColor: mainTheme.palette.secondary.main,
              },
            }}
            variant="outlined"
            style={{ margin: "0 1.5em " }}
          >
            {buttonText}
          </Button>}
        </CardActions>
      </Card>
    );
}
 
export default CardComponent;