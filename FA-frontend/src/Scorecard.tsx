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
        backgroundColor: totalScore > 540 ? '#D4EDDA' : '#F8D7DA',
      }}>
        <Typography variant="body1">
          {totalScore > 540 ?
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
              {/* <TableCell>
                <Box fontWeight="bold" sx={{ textAlign: "center" }} fontSize={16}>
                  Scaled Score
                </Box>
              </TableCell> */}
              <TableCell>
                <Box fontWeight="bold" sx={{ textAlign: "center" }} fontSize={16}>
                  Scaled Score w/ BP
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Age</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.age}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.age}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Education Level</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.education_level}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.education_level}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Occupation Type</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.occupation_type}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.occupation_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Income Type</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.income_type}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.income_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Annual Income</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.annual_income}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.annual_income}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Days Employed</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.days_employed}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.days_employed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Family Status</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.family_status}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.family_status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Family Size</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.family_size}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.family_size}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Owns Car</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.owns_car}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.owns_car}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Housing Type</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.housing_type}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.housing_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Loan Type</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.loan_type}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.loan_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Credit Amount</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.credit_amount}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.credit_amount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>External Source 2</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.external_source_2}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.external_source_2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Annuity Amount</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.annuity_amount}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.annuity_amount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Social Circle Defaults</TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}>{scores.social_circle_defaults}</TableCell> */}
              <TableCell sx={{ textAlign: "center" }}>{scoresBP.social_circle_defaults}</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: "#F8F9FA" }}>
              <TableCell><b>Aggregate Scores</b></TableCell>
              {/* <TableCell sx={{ textAlign: "center" }}><b>{Object.values(scores).reduce((a, b) => a + b, 0)}</b></TableCell> */}
              <TableCell sx={{ textAlign: "center" }}><b>{Object.values(scoresBP).reduce((a, b) => a + b, 0) + 514}</b></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" sx={{ mt: 3 }} onClick={returnHome}>Return Home</Button>
    </Box>
  );
};

export default Scorecard;
