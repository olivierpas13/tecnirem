// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// import { black, mainTheme } from "@/utils/Pallete";

// const ServiceCard = ({
//   smallDevice,
//   imageSrc,
//   title,
//   description,
//   buttonText,
// }) => {
//   return (
//     <Card
//       style={{  
//         backgroundImage: `url(${imageSrc})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center center",
//       }}
//     >
//         <div style={{backdropFilter: "blur(3px)", display: "flex", flexDirection: "column"}}>
//       <CardContent>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 400,
//             lineHeight: 1.7,
//             textShadow: "black 0px 0px",
//             letterSpacing: "1px",
//             color: mainTheme.palette.primary.main,
//             padding: "0.5em",
//             textAlign: "center"
//           }}
//         >
//           {title}
//         </Typography>
//         {/* <Typography variant="subtitle2" sx={{ fontWeight: 300, lineHeight: 2 }}>
//           {description}
//         </Typography> */}
//       </CardContent>
//       <CardActions
//         sx={{ display: "flex", justifyContent: "center"}}
//       >
//         {buttonText && (
//           <Button
//             size="large"
//             color="primary"
//             sx={{
//             //   color: mainTheme.palette.secondary.dark,
//               "&:hover": {
//                 backgroundColor: mainTheme.palette.secondary.main,
//                 color: "primary"
//               },
//             }}
//             variant="contained"
//             style={{ margin: "1.5em" }}
//           >
//             {buttonText}
//           </Button>
//         )}
//       </CardActions>
//       </div>
//     </Card>
//   );
// };

// export default ServiceCard;
