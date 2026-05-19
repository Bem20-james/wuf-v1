import { Box, Container, Typography, Stack } from "@mui/material";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";
import { type BoardMember, boardMembers } from "./data";

interface BoardCardProps {
  member: BoardMember;
}

const BoardCard: React.FC<BoardCardProps> = ({ member }) => (
  <Box sx={{ flex: 1, minWidth: 0 }}>
    <Box
      sx={{
        width: "100%",
        aspectRatio: "3 / 3.2",
        borderRadius: "12px",
        overflow: "hidden",
        mb: 2.5,
        backgroundColor: "#E8EDF2",
      }}
    >
      <Box
        component="img"
        src={member.image}
        alt={member.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
          transition: "transform 0.5s ease",
          "&:hover": { transform: "scale(1.04)" },
        }}
      />
    </Box>

    {/* Name */}
    <Typography
      sx={{
        fontFamily: FontFamily.primary,
        fontSize: { xs: "1.1rem", md: "1.2rem" },
        fontWeight: 700,
        color: COLORS.dark,
        lineHeight: 1.2,
        mb: 0.5,
      }}
    >
      {member.name}
    </Typography>

    <Typography
      sx={{
        fontFamily: FontFamily.primary,
        fontSize: "0.8rem",
        fontWeight: 600,
        color: member.roleColor ?? COLORS.primary,
        mb: 1.5,
      }}
    >
      {member.role}
    </Typography>

    <Typography
      sx={{
        fontFamily: FontFamily.accent ?? FontFamily.primary,
        fontSize: "0.85rem",
        lineHeight: 1.7,
        color: COLORS.neutral ?? "#666",
      }}
    >
      {member.bio}
    </Typography>
  </Box>
);

const LeadershipSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        py: { xs: "64px", sm: "80px", md: "100px" },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: "40px", md: "56px" } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 800,
              color: COLORS.dark,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              mb: 1.5,
            }}
          >
            Leadership &amp; Board of Trustees
          </Typography>
          <Typography
            sx={{
              fontFamily: FontFamily.accent ?? FontFamily.primary,
              fontSize: "0.9rem",
              color: COLORS.neutral ?? "#666",
              lineHeight: 1.6,
            }}
          >
            Led by a diverse team of professionals dedicated to institutional
            excellence.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: "40px", sm: "28px", md: "36px" }}
          sx={{
            alignItems: "flex-start",
          }}
        >
          {boardMembers.map((member) => (
            <BoardCard key={member.name} member={member} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default LeadershipSection;
