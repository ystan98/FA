import { useState } from 'react'
import { Box, Card, Typography, TextField, Grid, Button, MenuItem } from '@mui/material'

interface FormData {
  age: number | null;
  education_level: string;
  occupation_type: string;
  income_type: string;
  annual_income: number | null;
  days_employed: number | null;
  family_status: string;
  family_size: number | null;
  owns_car: string;
  loan_type: string;
  credit_amount: number | null;
  external_source_2: number | null;
  annuity_amount: number | null;
  social_circle_defaults: number | null;
}

const Scorecard = () => {
  const [formData, setFormData] = useState({
    age: null,
    education_level: '',
    occupation_type: '',
    income_type: '',
    annual_income: null,
    days_employed: null,
    family_status: '',
    family_size: null,
    owns_car: '',
    loan_type: '',
    credit_amount: null,
    external_source_2: null,
    annuity_amount: null,
    social_circle_defaults: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const generateScorecard = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    console.log(formData)
  } 

  return (
    <>
      <Card sx={{ mt: 5, p: 3 }}>
        <form onSubmit={generateScorecard}>
        <Typography variant='h4' sx={{ textAlign: "center" }}>Millenial Scorecard Application</Typography>
        <Typography variant='body1' sx={{ textAlign: "center" }}>Enter the following predictor variables</Typography>

        <Typography variant='h6' sx={{ mt: 3, color: "#1876d2" }}>Creditor's Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" required fullWidth label="Age" name="age" value={formData.age} onChange={handleChange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" select required fullWidth label="Education Level" name="education_level" value={formData.education_level} onChange={handleChange}>
              <MenuItem value="Secondary / secondary special">Secondary / secondary special</MenuItem>
              <MenuItem value="Incomplete higher">Incomplete higher</MenuItem>
              <MenuItem value="Higher education">Higher education</MenuItem>
              <MenuItem value="Lower secondary">Lower secondary</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" select required fullWidth label="Occupation Type" name='occupation_type' value={formData.occupation_type} onChange={handleChange}>
              <MenuItem value="Sales staff">Sales staff</MenuItem>
              <MenuItem value="Core staff">Core staff</MenuItem>
              <MenuItem value="Managers">Manager</MenuItem>
              <MenuItem value="High skill tech staff">High skill tech staff</MenuItem>
              <MenuItem value="Accountants">Accountant</MenuItem>
              <MenuItem value="Medicine staff">Medicine staff</MenuItem>
              <MenuItem value="Security staff">Security staff</MenuItem>
              <MenuItem value="Cooking staff">Cooking staff</MenuItem>
              <MenuItem value="Cleaning staff">Cleaning staff</MenuItem>
              <MenuItem value="Private service staff">Private service staff</MenuItem>
              <MenuItem value="Laborers">Laborer</MenuItem>
              <MenuItem value="Low-skill Laborers">Low-skill Laborers</MenuItem>
              <MenuItem value="Waiters/barmen staff">Waiters/barmen staff</MenuItem>
              <MenuItem value="Secretaries">Secretary</MenuItem>
              <MenuItem value="Realty agents">Realty agent</MenuItem>
              <MenuItem value="HR staff">HR staff</MenuItem>
              <MenuItem value="IT staff">IT staff</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" select required fullWidth label="Income Type" name="income_type" value={formData.income_type} onChange={handleChange}>
              <MenuItem value="Working">Working</MenuItem>
              <MenuItem value="Commercial associate">Commercial associate</MenuItem>
              <MenuItem value="Pensioner">Pensioner</MenuItem>
              <MenuItem value="State servant">State servant</MenuItem>
              <MenuItem value="Unemployed">Unemployed</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" required fullWidth label="Annual Total Income" name="annual_income" value={formData.annual_income} onChange={handleChange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" required fullWidth label="Days Employed" name='days_employed' value={formData.days_employed} onChange={handleChange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" select required fullWidth label="Family Status" name="family_status" value={formData.family_status} onChange={handleChange}>
              <MenuItem value="Single / not married">Single / Not married</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Civil marriage">Civil marriage</MenuItem>
              <MenuItem value="Separated">Seperated</MenuItem>
              <MenuItem value="Widow">Widow</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" required fullWidth label="Number of Family Members" name='family_size' value={formData.family_size} onChange={handleChange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" select required fullWidth label="Owns Car?" name="owns_car" value={formData.owns_car} onChange={handleChange}>
              <MenuItem value="Y">Yes</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" required fullWidth label="60d Social Circle Defaults" helperText="Number of client's social surroundings that defaulted on 60DPD (days past due)" name="social_circle_defaults" value={formData.social_circle_defaults} onChange={handleChange}/>
          </Grid>
        </Grid>

        <Typography variant='h6' sx={{ mt: 4, color: "#1876d2" }}>Loan Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" select required fullWidth label="Loan Type" name="loan_type" value={formData.loan_type} onChange={handleChange}>
              <MenuItem value="Cash loans">Cash</MenuItem>
              <MenuItem value="Revolving loans">Revolving</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" required fullWidth label="Credit Amount" name="credit_amount" value={formData.credit_amount} onChange={handleChange}/>
          </Grid>
        </Grid>

        <Typography variant='h6' sx={{ mt: 4, color: "#1876d2" }}>External Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" required fullWidth label="External Source 2" helperText="Normalized score from external data source" name="external_source_2" value={formData.external_source_2} onChange={handleChange}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="standard" required fullWidth label="Annuity Amount" helperText="Annuity of the Credit Bureau credit" name="annuity_amount" value={formData.annuity_amount} onChange={handleChange}/>
          </Grid>
        </Grid>        

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button sx={{ mt: 2 }} type="submit" variant="contained">Generate Scorecard</Button>
        </Box>
        </form>
      </Card>
    </>
  )
}

export default Scorecard
