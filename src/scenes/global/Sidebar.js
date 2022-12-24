/* eslint-disable no-unused-vars */

import { useState } from 'react';
import {
  Sidebar, Menu, MenuItem, sidebarClasses, menuClasses,
} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import {
  Box, IconButton, Typography, useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { tokens } from '../../theme';

const Sidebars = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        '& .ps-sidebar-root': {
          background: `${colors.primary[400]} !important`,
        },
        '& .ps-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .ps-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .ps-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <Sidebar
        defaultCollapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.root}`]: {
            height: '100% !important',
          },
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]} !important`,
            height: '100%',
          },
        }}
      >
        <Menu
          iconShape="sqaure"
          rootStyles={{
            [`.${menuClasses.menuItemRoot}`]: {
              padding: '5px 35px 5px 20px !important',
            },
            [`.${menuClasses.menuItemRoot}:hover`]: {
              color: '#868dfb !important',
            },
            [`.${menuClasses.icon}`]: {
              backgroundColor: 'transparent !important',
            },
            [`.${menuClasses.button}:hover`]: {
              color: '#868dfb !important',
            },
            [`.${menuClasses.active}`]: {
              color: '#6870fa !important',
            },
          }}
        >

          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            rootStyles={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}

          >
            {
              !isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )
            }
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="../../assets/user.png"
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: '10px 0 0 0' }}>First User</Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebars;
