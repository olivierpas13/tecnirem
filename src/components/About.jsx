import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';

import MainLayout from 'src/layouts/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <Box sx={{ paddingTop: '64px' }}>
        <Box
          sx={{
            height: 'calc(100vh - 64px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/bg-about-dark.jpg"
            alt="Hero Image"
            fill
            quality={100}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
          <div
          style={{
            display: 'block',
            position: 'relative',
            // width: '28em',
            // height: '10em',
            // marginBottom: "-1.5em"
          }}
        >

      <Typography
        variant="h1"
        sx={{
          color: "#eee",
          fontSize: { xs: "4xl", sm: "5xl", md: "6xl" },
          fontWeight: 800,
          my: "0.2em"
        }}
      >            Innovamos tus ideas
          </Typography>
        </div>
            <Typography color="#fff" variant="h5" component="p" gutterBottom>
                Somos un equipo de técnicos especialistas
                en adecuaciones, remodelaciones y mantenimiento
                de espacios.
            </Typography>
            <Button style={{marginTop: "1em"}}variant="contained" color="primary">
              Conócenos
            </Button>
          </Box>
        </Box>
        <Container sx={{ marginTop: '48px' }}>
          {/* Add your content here */}
        </Container>
      </Box>
    </MainLayout>
  );
}

export default About;