import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';

import NavBar from '../../components/Navbar';

const LandingPage = () => {
  return (
    <>
      <NavBar/>
      <Box sx={{ paddingTop: '64px' }}>
        <Box
          sx={{
            height: 'calc(100vh - 64px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/bg-tecnirem.webp"
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
              // color: '#fff',
            }}
          >
          <div
          style={{
            display: 'block',
            position: 'relative',
            width: '30em',
            height: '10em',
            marginRight: '1em',
            marginBottom: "-1.5em"
          }}
        >
          <Image
            fill
            src="/tecnirem-logo-dark.svg"
            quality={100}
            alt="Tecnirem Logo"
          />
        </div>
            <Typography color="black" variant="h5" component="p" gutterBottom>
                Adecuación Y Remodelación De Ambientes
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
    </>
  );
}

export default LandingPage;