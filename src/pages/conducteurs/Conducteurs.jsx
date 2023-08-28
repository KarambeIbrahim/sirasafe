import { Box, useTheme } from "@mui/material";

import { tokens } from "../../theme";


import Header from "../../components/Header";

const Conducteurs = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
   <Box m="20px">
      <Header title="Conducteurs" subtitle="Liste des Conducteurs" />
      </Box>
    )

};

export default Conducteurs;