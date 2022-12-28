import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';

const Geography = () => (
  <Box m="20px">
    <Header title="Geography Chart" subtitle="Simple Geography Cart" />
    <Box height="75vh">
      <GeographyChart />
    </Box>
  </Box>
);

export default Geography;
