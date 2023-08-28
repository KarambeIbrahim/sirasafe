import { Box, useTheme } from "@mui/material";

import { tokens } from "../../theme";


import Header from "../../components/Header";

const Bus = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
   <Box m="20px">
      <Header title="Bus" subtitle="Liste des Bus" />
      </Box>
    )

};

export default Bus;