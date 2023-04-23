import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';

const HeroSection = () => {
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
            }}
          >
          <Box
          sx={{
            display: 'block',
            position: 'relative',
            width:{sx:"10em", md:'28em'},
            height: '10em',
            marginBottom: "-1.5em"
          }}
        >
          <Image
            fill
            src="/tecnirem-logo-dark.svg"
            quality={100}
            alt="Tecnirem Logo"
          />
        </Box>
            <Typography color="black" variant="h5" component="p" gutterBottom>
                Adecuación Y Remodelación De Ambientes
            </Typography>
            <Button style={{marginTop: "1em"}}variant="contained" color="primary">
              Conócenos
            </Button>
          </Box>
        </Box>
      </Box>
    );
}
 
export default HeroSection;