// import { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import styled from "@emotion/styled";
// import { useInView } from 'react-intersection-observer';

const DiagonalBox = styled.div`
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 1) 50%
    );
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const DescriptionBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const DiagonalSection = ({ imageUrl, description }) => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//   });

//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (inView) {
//       setIsVisible(true);
//     }
//   }, [inView]);

  return (
    <DiagonalBox sx={{ width: '100%', height: '100vh' }}>
      <ImageBox
        sx={{
          backgroundImage: `url(${imageUrl})`,
          // opacity: isVisible ? 1 : 0,
          // transform: isVisible ? 'none' : 'translateY(20px)',
          transition: 'opacity 1s, transform 1s',
        }}
      />
      <DescriptionBox>
        <Typography
          variant="h4"
          sx={{
            // opacity: isVisible ? 1 : 0,
            // transform: isVisible ? 'none' : 'translateY(-20px)',
            transition: 'opacity 1s, transform 1s',
          }}
        >
          {description}
        </Typography>
      </DescriptionBox>
    </DiagonalBox>
  );
};
 
export default DiagonalSection;