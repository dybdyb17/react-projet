'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', p: 3, mt: 4, textAlign: 'center' }}>
      <Typography variant="body1">
        © 2026 Mon App — Tous droits réservés
      </Typography>
    </Box>
  );
}