import PropTypes from "prop-types";
import MKBox from "../../MKBox";
import MKTypography from "../../MKTypography";

function RotatingCardBack({ color, image, title, meta, schedules }) {
  const dayOrder = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const joinDaysES = (days) => {
    if (!days || days.length === 0) return "";
    if (days.length === 1) return days[0];
    if (days.length === 2) return `${days[0]} y ${days[1]}`;
    return `${days.slice(0, -1).join(", ")} y ${days[days.length - 1]}`;
  };

  const groupedSchedules = (() => {
    const map = new Map();

    (schedules || []).forEach((s) => {
      const key = `${s.time}||${s.teacher || ""}||${s.note || ""}`;
      if (!map.has(key)) {
        map.set(key, { ...s, days: [s.day] });
      } else {
        map.get(key).days.push(s.day);
      }
    });

    // ordenar días dentro de cada grupo
    const groups = Array.from(map.values()).map((g) => ({
      ...g,
      days: [...new Set(g.days)].sort(
        (a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b),
      ),
    }));

    // ordenar grupos por el primer día (y si querés por hora también)
    groups.sort(
      (a, b) => dayOrder.indexOf(a.days[0]) - dayOrder.indexOf(b.days[0]),
    );

    return groups;
  })();

  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      coloredShadow={color}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundImage: ({
          palette: { gradients },
          functions: { linearGradient, rgba },
        }) =>
          `${linearGradient(
            rgba(
              gradients[color] ? gradients[color].main : gradients.warning.main,
              0.55,
            ),
            rgba(
              gradients[color] ? gradients[color].main : gradients.warning.main,
              0.15,
            ),
          )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <MKBox
        position="absolute"
        inset={0}
        sx={{ backgroundColor: "rgba(255, 197, 35, 0.38)" }}
      />

      <MKBox
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={2}
        py={2}
        textAlign="center"
        height="100%"
        position="relative"
        zIndex={2}
        sx={{
          width: "100%",
          maxWidth: 360,
          background: {
            xs: "rgba(10, 10, 12, 0.55)", // ✅ más opaco en mobile
            md: "rgba(10, 10, 12, 0.40)", // ✅ más liviano en desktop
          },
          backdropFilter: { xs: "none", md: "blur(6px)" }, // ✅ sin blur en mobile
          WebkitBackdropFilter: { xs: "none", md: "blur(6px)" },
          border: "1px solid rgba(255,255,255,0.20)",
          borderRadius: "16px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
          px: 2,
          py: 2,
        }}
      >
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>

        {meta ? (
          <MKTypography
            variant="body2"
            color="white"
            opacity={0.9}
            sx={{ mb: 1 }}
          >
            {meta}
          </MKTypography>
        ) : null}

        {/* Lista de horarios */}
        <MKBox
          sx={{
            width: "100%",
            maxWidth: 320,
            display: "flex",
            flexDirection: "column",
            gap: 0.75,
            mt: 1,

            maxHeight: 160, // ✅ ajustá 150-180 según cuánto quieras mostrar
            overflowY: "auto", // ✅ scroll interno
            pr: 0.5, // ✅ aire para que el scroll no tape

            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255,255,255,0.35)",
              borderRadius: "10px",
            },
          }}
        >
          {groupedSchedules.map((s, idx) => (
            <MKBox
              key={`${s.day}-${s.time}-${idx}`}
              sx={{
                background: "rgba(15,11,12,0.25)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "10px",
                px: 1.2,
                py: 0.9,
                textAlign: "left",
              }}
            >
              <MKTypography
                variant="body2"
                color="white"
                sx={{ fontWeight: 700, lineHeight: 1.2 }}
              >
                {joinDaysES(s.days)} — {s.time}hs
              </MKTypography>

              {s.teacher ? (
                <MKTypography
                  variant="caption"
                  color="white"
                  opacity={0.9}
                  sx={{ display: "block" }}
                >
                  Profe: {s.teacher}
                </MKTypography>
              ) : null}

              {s.note ? (
                <MKTypography
                  variant="caption"
                  color="white"
                  opacity={0.75}
                  sx={{ display: "block" }}
                >
                  {s.note}
                </MKTypography>
              ) : null}
            </MKBox>
          ))}
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

RotatingCardBack.defaultProps = { color: "warning" };

RotatingCardBack.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  meta: PropTypes.node,
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      teacher: PropTypes.string,
      note: PropTypes.string,
    }),
  ),
};

export default RotatingCardBack;
