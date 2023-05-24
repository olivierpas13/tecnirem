import Image from 'next/image';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';

import { mainTheme } from '@/utils/Pallete';

const images = [
  {
    src: '/static/masonry/checked1.png',
    alt: 'Image 1',
    width: 150,
    height: 300,
  },
  {
    src: '/static/masonry/checked2.png',
    alt: 'Image 2',
    width: 150,
    height: 350,
  },
  {
    src: '/static/masonry/checked3.png',
    alt: 'Image 3',
    width: 150,
    height: 200,
  },
  {
    src: '/static/masonry/checked4.png',
    alt: 'Image 4',
    width: 150,
    height: 250,
  },
  {
    src: '/static/masonry/checked5.png',
    alt: 'Image 5',
    width: 150,
    height: 300,
  },
  {
    src: '/static/masonry/checked6.png',
    alt: 'Image 6',
    width: 150,
    height: 300,
  },
  {
    src: '/static/masonry/checked7.png',
    alt: 'Image 7',
    width: 150,
    height: 240,
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
