import React from 'react';
import { Button, Typography, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

interface CreditScorecardProps {
  scores: Record<string, number>;
  scoresBP: Record<string, number>;
  returnHome: () => void;
}

const Scorecard: React.FC<CreditScorecardProps> = ({ scores, scoresBP, returnHome }) => {
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0)
  const totalScoreBP = Object.values(scoresBP).reduce((a, b) => a + b, 0)

  return (
    <Box sx={{ mt: 3 }}>
      <Card sx={{
        p: 2,
        mb: 3,
        textAlign: "center",
        backgroundColor: totalScore > 518 ? '#D4EDDA' : '#F8D7DA',
      }}>
        <Typography variant="body1">
          {totalScore > 520 ?
            <><strong>Approved!</strong> Your credit score is high enough to be approved for a loan.</>
            : <><strong>Declined!</strong> Your credit score is too low to be approved for a loan.</>}
        </Typography>
      </Card>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#E4E6EB' }}>
              <TableCell>
                <Box fontWeight="bold" fontSize={16}>
                  Attribute
                </Box>
              </TableCell>
              <TableCell>
                <Box fontWeight="bold" fontSize={16}>
                  Scaled Score
                </Box>
              </TableCell>
              <TableCell>
                <Box fontWeight="bold" fontSize={16}>
                  Scaled Score w/ BP
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>{scores.age}</TableCell>
              <TableCell>{scoresBP.age}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Education Level</TableCell>
              <TableCell>{scores.education_level}</TableCell>
              <TableCell>{scoresBP.education_level}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Occupation Type</TableCell>
              <TableCell>{scores.occupation_type}</TableCell>
              <TableCell>{scoresBP.occupation_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Income Type</TableCell>
              <TableCell>{scores.income_type}</TableCell>
              <TableCell>{scoresBP.income_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Annual Income</TableCell>
              <TableCell>{scores.annual_income}</TableCell>
              <TableCell>{scoresBP.annual_income}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Days Employed</TableCell>
              <TableCell>{scores.days_employed}</TableCell>
              <TableCell>{scoresBP.days_employed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Family Status</TableCell>
              <TableCell>{scores.family_status}</TableCell>
              <TableCell>{scoresBP.family_status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Family Size</TableCell>
              <TableCell>{scores.family_size}</TableCell>
              <TableCell>{scoresBP.family_size}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Owns Car</TableCell>
              <TableCell>{scores.owns_car}</TableCell>
              <TableCell>{scoresBP.owns_car}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Housing Type</TableCell>
              <TableCell>{scores.housing_type}</TableCell>
              <TableCell>{scoresBP.housing_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Loan Type</TableCell>
              <TableCell>{scores.loan_type}</TableCell>
              <TableCell>{scoresBP.loan_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Credit Amount</TableCell>
              <TableCell>{scores.credit_amount}</TableCell>
              <TableCell>{scoresBP.credit_amount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>External Source 2</TableCell>
              <TableCell>{scores.external_source_2}</TableCell>
              <TableCell>{scoresBP.external_source_2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Annuity Amount</TableCell>
              <TableCell>{scores.annuity_amount}</TableCell>
              <TableCell>{scoresBP.annuity_amount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Social Circle Defaults</TableCell>
              <TableCell>{scores.social_circle_defaults}</TableCell>
              <TableCell>{scoresBP.social_circle_defaults}</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: "#F8F9FA" }}>
              <TableCell><b>Aggregate Scores</b></TableCell>
              <TableCell><b>{Object.values(scores).reduce((a, b) => a + b, 0)}</b></TableCell>
              <TableCell><b>{Object.values(scoresBP).reduce((a, b) => a + b, 0)}</b></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" sx={{ mt: 3 }} onClick={returnHome}>Return Home</Button>
    </Box>
  );
};

export default Scorecard;
