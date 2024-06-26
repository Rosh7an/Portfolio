import { mode } from "@chakra-ui/theme-tools";
const Card = {
  baseStyle: (props) => ({
    p: "10px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    borderRadius: "20px",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: mode("secondaryGray.400", "navyBlue.300")(props),
    backgroundClip: "border-box",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
  })
};

export const CardComponent = {
  components: {
    Card
  }
};
