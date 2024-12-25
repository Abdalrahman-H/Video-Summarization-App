import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip'; 
import { useColorScheme } from '@mui/material/styles';

export default function ColorModeToggle(props) {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} mode`}>
      <IconButton
        onClick={toggleMode}
        color="inherit"
        aria-label="toggle color mode"
        sx={{
          ...props.sx,
        }}
      >
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
