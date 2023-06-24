import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import wpLink from '@/utils/wpLink';

const About = () => {
  return (
      <Box sx={{ paddingTop: '64px' }}>
        <Box
          sx={{
            height: 'calc(100vh - 64px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/static/about/bg-about-dark.jpg"
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
          }}
        >

      <Typography
        variant="h1"
        sx={{
          color: "#eee",
          textShadow: "gray 1px 1px",
          fontSize: { xs: "4xl", sm: "5xl", md: "6xl" },
          fontWeight: 800,
          my: "0.5em"
        }}
      >            Renovamos tus ideas
          </Typography>
        </div>
        <Typography
              sx={{
                display: "flex",
                fontWeight: "500",
                color: "#eee",
                textShadow: "black 1px 1px",
                letterSpacing: "1px",
                my: "0.3em"
              }}
              variant="h4"

            >
                Somos un equipo de técnicos especialistas con más de 15 años de experiencia
                en adecuaciones, remodelaciones y mantenimiento
                de espacios.            
                </Typography>
            <Button size='large' href={wpLink} style={{marginTop: "1em"}}variant="contained" color="primary">
              contáctanos
            </Button>
          </Box>
        </Box>
      </Box>
  );
}

export default About;