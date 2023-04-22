import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {
  BiMessageDetail,
  BiPen,
  BiMoneyWithdraw,
  BiPaintRoll,
} from "react-icons/bi";

export default function CustomizedTimeline() {
  return (
    <Container maxWidth={false}>
    <Timeline style={{margin: "2.5em -2em"}} position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Contacto
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <BiMessageDetail size={"1.7em"} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            ¿Listo para empezar?
          </Typography>
          <Typography>¡Contáctanos y cuéntanos tus ideas!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Planificación
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary" variant="outlined">
            <BiPen size={"1.7em"} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Diseño y planificación
          </Typography>
          <Typography>
            Realizamos un diseño personalizado para ti y planificamos el
            proceso.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Presupuesto
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <BiMoneyWithdraw size={"1.7em"} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Presupuesto
          </Typography>
          <Typography>
            Te presentamos un presupuesto detallado y transparente para que
            estés al tanto de todos los costos.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Ejecución
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot color="secondary" variant="outlined">
            <BiPaintRoll size={"1.7em"} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Ejecución
          </Typography>
          <Typography>
            ¡Es hora de poner manos a la obra! Nuestro equipo trabajará duro
            para hacer realidad tus sueños.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Container>

  );
}
