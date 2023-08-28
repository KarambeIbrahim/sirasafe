import { Box, useTheme } from "@mui/material";

import { tokens } from "../../theme";


import Header from "../../components/Header";

const Comptes = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
   <Box m="20px">
      <Header title="Compte" subtitle="Parametre du Compte" />
      </Box>
    )

};

export default Comptes;