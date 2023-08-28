import { Box, useTheme } from "@mui/material";

import { tokens } from "../../theme";


import Header from "../../components/Header";

const Trajets = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
   <Box m="20px">
      <Header title="Trajets" subtitle="Liste des Trajets" />
      </Box>
    )

};

export default Trajets;