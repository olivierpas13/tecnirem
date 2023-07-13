import Image from 'next/image';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';

import { mainTheme } from '@/utils/Pallete';

const images = [
  {
    src: '/static/masonry/rem2.webp',
    alt: 'Image 2',
    width: 400,
    height: 600,
  },
  {
    src: '/static/masonry/tec26.webp',
    alt: 'Image 8',
    width: 400,
    height: 400,
  },
  {
    src: '/static/masonry/tec22.webp',
    alt: 'Image 5',
    width: 550,
    height: 450,
  },
  {
    src: '/static/masonry/tec40.webp',
    alt: 'Image 6',
    width: 400,
    height: 400,
  },
  {
    src: '/static/masonry/checked7.webp',
    alt: 'Image 7',
    width: 450,
    height: 350,
  },

  {
    src: '/static/masonry/tec27.webp',
    alt: 'Image 9',
    width: 400,
    height: 600,
  },
  {
    src: '/static/masonry/checked1.webp',
    alt: 'Image 1',
    width: 450,
    height: 350,
  },
  {
    src: '/static/masonry/est2.webp',
    alt: 'Image 4',
    width: 450,
    height: 400,
  },

];

const ImageItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export default function ProjectsMasonry() {
  return (
    <Box sx={{ width: '100%', minHeight: 500 }}>
                  <Box
            sx={{
                backgroundColor: "#eee",
                display: "flex",
                justifyContent: "center",
                width: "auto",
                textAlign: "center",
                marginBottom: "2.5em"
            }}
            >
      <Typography variant='h4' sx={{display:{xs: "flex", md: "none"}, flexDirection: "column"}} style={{padding: "1em", fontWeight: 500, textAlign: "center"}}>
      <span style={{color: mainTheme.palette.primary.main,margin: "0 0.6em"}}>INNOVACIÓN</span> 
      <span style={{color: mainTheme.palette.secondary.dark,margin: "0 0.6em"}}> DISEÑO </span>
      <span style={{color: mainTheme.palette.primary.main, margin: "0 0.6em"}}>  IDEAS </span>  
      </Typography>
      <Typography variant='h4' sx={{display:{xs: "none", md: "flex",  justifyContent: "center"}}} style={{padding: "1em", fontWeight: 500, textAlign: "center"}}>
      <span style={{color: mainTheme.palette.primary.main,margin: "0 0.6em"}}>INNOVACIÓN</span> · 
      <span style={{color: mainTheme.palette.secondary.dark,margin: "0 0.6em"}}> DISEÑO </span> ·
      <span style={{color: mainTheme.palette.primary.main, margin: "0 0.6em"}}>  IDEAS </span>
        </Typography>
        </Box>
      <Masonry columns={{ xs: 2, sm: 3 }} spacing={2} defaultHeight={450} defaultColumns={4} defaultSpacing={1}>
        {images.map((image, index) => (
          <ImageItem key={index} sx={{ height: image.height }}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
/>
          </ImageItem>
        ))}
      </Masonry>
    </Box>
  );
}
