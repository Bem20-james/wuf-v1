import { Container, Box, Typography, Stack } from "@mui/material";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";
import { processSteps, type ProcessStep } from "./data";
import ImagePanel from "./ImagePanel";
import CustomButton from "./CustomButton";

interface ProcessRowProps {
  step: ProcessStep;
  index: number;
}

const ProgramTitle: React.FC<{ icon: React.ElementType; title: string }> = ({
  icon: Icon,
  title,
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mb: 2.5 }}>
    <Box
      sx={{
        color: COLORS.primary,
        fontSize: "1.6rem",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <Icon />
    </Box>
    <Typography
      variant="h3"
      sx={{
        fontFamily: FontFamily.primary,
        fontSize: { xs: "1.6rem", md: "2rem" },
        fontWeight: 700,
        color: COLORS.dark,
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
      }}
    >
      {title}
    </Typography>
  </Box>
);

const SectionLabel: React.FC<{ text: string }> = ({ text }) => (
  <Typography
    sx={{
      fontFamily: FontFamily.primary,
      fontSize: "0.7rem",
      fontWeight: 700,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: COLORS.primary,
      mb: 1,
    }}
  >
    {text}
  </Typography>
);

const MiniStats: React.FC<{ stats: { value: string; label: string }[] }> = ({
  stats,
}) => (
  <Box
    sx={{
      display: "flex",
      gap: "32px",
      mt: 3,
      mb: 3,
    }}
  >
    {stats.map((s) => (
      <Box key={s.label}>
        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontSize: { xs: "1.4rem", md: "1.6rem" },
            fontWeight: 700,
            color: COLORS.dark,
            lineHeight: 1,
          }}
        >
          {s.value}
        </Typography>
        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontSize: "0.75rem",
            color: COLORS.neutral ?? "#888",
            mt: 0.5,
          }}
        >
          {s.label}
        </Typography>
      </Box>
    ))}
  </Box>
);

const ProcessRow: React.FC<ProcessRowProps> = ({ step, index }) => {
  const textLeft = index % 2 === 0;

  const TextBlock = (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ProgramTitle icon={step.icon} title={step.title} />

      <SectionLabel text="The Problem" />
      <Typography
        sx={{
          fontFamily: FontFamily.accent ?? FontFamily.primary,
          fontSize: { xs: "0.95rem", md: "1rem" },
          lineHeight: 1.75,
          color: COLORS.neutral ?? "#555",
          fontStyle: "italic",
          mb: 2.5,
          maxWidth: "480px",
        }}
      >
        {step.problem}
      </Typography>

      <SectionLabel text="Strategic Approach" />
      <Typography
        sx={{
          fontFamily: FontFamily.accent ?? FontFamily.primary,
          fontSize: { xs: "0.95rem", md: "1rem" },
          lineHeight: 1.75,
          color: COLORS.secondary ?? "#333",
          mb: 0,
          maxWidth: "480px",
        }}
      >
        {step.approach}
      </Typography>

      <MiniStats stats={step.stats} />

      <Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ width: "100%", mt: 3 }}
        >
          <CustomButton
            to={"/auth/onboarding"}
            variant="filled"
            btncolor="primary"
            radius="6px"
            sx={{ width: "200px" }}
          >
            Support This Cause
          </CustomButton>
          <CustomButton
            to={"/auth/onboarding"}
            variant="outlined"
            btncolor="primary"
            radius="6px"
            onClick={() => {}}
            sx={{ width: "150px" }}
          >
            View Impact
          </CustomButton>
        </Stack>
      </Box>
    </Box>
  );

  const ImgBlock = (
    <Box sx={{ flex: 1 }}>
      <ImagePanel src={step.image} alt={step.title} step={step.step} />
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: "40px", md: "80px" },
        py: { xs: "60px", md: "90px" },
        position: "relative",
        "&:not(:last-child)::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${COLORS.secondary}18, transparent)`,
        },
      }}
    >
      {textLeft ? TextBlock : ImgBlock}
      {textLeft ? ImgBlock : TextBlock}
    </Box>
  );
};

const ProgramsSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F6F8",
        pt: { xs: "80px", sm: "100px", md: "200px" },
        pb: { xs: "80px", sm: "100px", md: "120px" },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="column"
          sx={{
            mb: 2,
            textAlign: "center",
            px: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: COLORS.accent,
              mb: 1.5,
            }}
          >
            How We Make a Difference
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              fontWeight: 600,
              color: COLORS.dark,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "1100px",
              fontFamily: FontFamily.primary,
              mb: 2,
            }}
          >
            Our Mission Pillars
          </Typography>
          <Typography
            sx={{
              color: COLORS.neutral,
              fontFamily: FontFamily.accent,
              maxWidth: 560,
              lineHeight: 1.75,
            }}
          >
            pillars driving sustainable change — from immediate relief to
            long-term community transformation across Nigeria.
          </Typography>
        </Stack>

        <Box>
          {processSteps.map((step, index) => (
            <ProcessRow key={step.step} step={step} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProgramsSection;
