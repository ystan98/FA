import { useState } from 'react'
import { Box, Card, Typography, TextField, Grid, Button } from '@mui/material'

const Scorecard = () => {
  return (
    <>
      <Card sx={{ mt: 5, p: 3 }}>
        <Typography variant='h4' sx={{ textAlign: "center" }}>Scorecard Predictor</Typography>
        <Typography variant='body1' sx={{ textAlign: "center" }}>Enter the following predictor variables</Typography>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={6}>
            <TextField variant="outlined" required fullWidth label="Age" />
          </Grid>
          <Grid item xs={6}>
            <TextField variant="outlined" required fullWidth label="Income" />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button sx={{ mt: 2 }} variant="contained">Predict</Button>
        </Box>
      </Card>
    </>
  )
}

export default Scorecard