import { educationMappings, incomeTypeMappings, occupationMappings, familyStatusMappings, houseTypeMappings } from './mappings'

interface Scores {
  score: number;
  scoreBP: number;
}

export function getAgeScore(age: number): Scores {
  let score = 0;
  let scoreBP = 0;

  if (age < 30) {
    score = 32;
    scoreBP = -3;
  } else if (age >= 30 && age < 35) {
    score = 33;
    scoreBP = -1;
  } else if (age >= 35 && age < 40) {
    score = 35;
    scoreBP = 1;
  } else if (age >= 40) {
    score = 37;
    scoreBP = 3;
  }
  
  return { score, scoreBP };
}

export function getEducationScore(education_level: string): Scores {
  const educationVal = educationMappings[education_level];
  let score = 0;
  let scoreBP = 0;

  if (educationVal < 3) {
    score = 31;
    scoreBP = -3;
  } else if (educationVal >= 3) {
    score = 43;
    scoreBP = 8;
  }
  
  return { score, scoreBP };
}

export function getOccupationScore(occupationType: string): Scores {
  const occupationVal = occupationMappings[occupationType];
  let score = 0;
  let scoreBP = 0;

  if (occupationVal < 6) {
    score = 29;
    scoreBP = -6;
  } else if (occupationVal >= 6 && occupationVal < 9) {
    score = 31;
    scoreBP = -3;
  } else if (occupationVal >= 9) {
    score = 38;
    scoreBP = 4;
  }
  
  return { score, scoreBP };
}

export function getIncomeTypeScore(incomeType: string): Scores {
  const incomeTypeVal = incomeTypeMappings[incomeType];
  let score = 0;
  let scoreBP = 0;

  if (incomeTypeVal < 4) {
    score = 33;
    scoreBP = -2;
  } else if (incomeTypeVal >= 4 && incomeTypeVal < 5) {
    score = 40;
    scoreBP = 6;
  } else if (incomeTypeVal >= 5) {
    score = 37;
    scoreBP = 3;
  }
  
  return { score, scoreBP };
}

export function getAnnualIncomeScore(annualIncome: number): Scores {
  let score = 0;
  let scoreBP = 0;

  if (annualIncome < 250000) {
    score = 34;
    scoreBP = 0;
  } else if (annualIncome >= 250000) {
    score = 35;
    scoreBP = 1;
  }
  
  return { score, scoreBP };
}

export function getDaysEmployedScore(daysEmployed: number): Scores {
  let score = 0;
  let scoreBP = 0;

  if (daysEmployed < 1000) {
    score = 28;
    scoreBP = -6;
  } else if (daysEmployed >= 1000 && daysEmployed < 1700) {
    score = 32;
    scoreBP = -2;
  } else if (daysEmployed >= 1700 && daysEmployed < 2200) {
    score = 36;
    scoreBP = 2;
  } else if (daysEmployed >= 2200 && daysEmployed < 3500) {
    score = 40;
    scoreBP = 5;
  } else if (daysEmployed >= 3500 && daysEmployed < 5000) {
    score = 43;
    scoreBP = 8;
  } else if (daysEmployed >= 5000) {
    score = 48;
    scoreBP = 13;
  }
  
  return { score, scoreBP };
}

export function getFamilyStatusScore(familyStatus: string): Scores {
  const familyStatusVal = familyStatusMappings[familyStatus];
  let score = 0;
  let scoreBP = 0;

  if (familyStatusVal < 3) {
    score = 34;
    scoreBP = 0;
  } else if (familyStatusVal >= 3) {
    score = 33;
    scoreBP = -2;
  }
  
  return { score, scoreBP };
}

export function getFamilySizeScore(familySize: number): Scores {
  let score = 0;
  let scoreBP = 0;

  if (familySize < 2) {
    score = 32;
    scoreBP = -2;
  } else if (familySize >= 2 && familySize < 3) {
    score = 34;
    scoreBP = 0;
  } else if (familySize >= 3) {
    score = 36;
    scoreBP = 1;
  }

  return { score, scoreBP };
}

export function getOwnsCarScore(ownsCar: string): Scores {
  let score = 0;
  let scoreBP = 0;

  if (ownsCar === "Y") {
    score = 39;
    scoreBP = 4;
  } else {
    score = 31;
    scoreBP = -3;
  }

  return { score, scoreBP };
}

export function getHousingTypeScore(housingType: string): Scores {
  const housingTypeVal = houseTypeMappings[housingType];
  let score = 0;
  let scoreBP = 0;

  if (housingTypeVal < 4) {
    score = 30;
    scoreBP = -4;
  } else if (housingTypeVal >= 4) {
    score = 35;
    scoreBP = 1;
  }

  return { score, scoreBP };
}

export function getSocialCircleScore(socialCircleDefaults: number): Scores {
  let score = 0;
  let scoreBP = 0;

  if (socialCircleDefaults < 1) {
    score = 35;
    scoreBP = 1;
  } else if (socialCircleDefaults >= 1) {
    score = 27;
    scoreBP = -6;
  }

  return { score, scoreBP };
}

export function getLoanTypeScore(loanType: string): Scores {
  const loanTypeVal = loanType === "Revolving loans" ? 1 : 0;
  let score = 0;
  let scoreBP = 0;

  if (loanTypeVal < 1) {
    score = 33;
    scoreBP = -1;
  } else if (loanTypeVal >= 1) {
    score = 47;
    scoreBP = 11;
  }

  return { score, scoreBP };
}

  export function getCreditAmountScore(creditAmount: number): Scores {
  let score = 0;
  let scoreBP = 0;

  if (creditAmount < 150000) {
    score = 45;
    scoreBP = 12;
  } else if (creditAmount >= 150000 && creditAmount < 200000) {
    score = 39;
    scoreBP = 5;
  } else if (creditAmount >= 200000 && creditAmount < 250000) {
    score = 37;
    scoreBP = 3;
  } else if (creditAmount >= 250000 && creditAmount < 300000) {
    score = 35;
    scoreBP = 1;
  } else if (creditAmount >= 300000) {
    score = 33;
    scoreBP = -1;
  }

  return { score, scoreBP };
}

export function getExternalSource2Score(externalSource2: number): Scores {
  let score = 0;
  let scoreBP = 0;

  if (externalSource2 < 0.14) {
    score = 4;
    scoreBP = -29;
  } else if (externalSource2 >= 0.14 && externalSource2 < 0.25) {
    score = 18;
    scoreBP = -16;
  } else if (externalSource2 >= 0.25 && externalSource2 < 0.35) {
    score = 24;
    scoreBP = -10;
  } else if (externalSource2 >= 0.35 && externalSource2 < 0.6) {
    score = 35;
    scoreBP = 0;
  } else if (externalSource2 >= 0.6) {
    score = 49;
    scoreBP = 15;
  }

  return { score, scoreBP };
}

export function getAnnuityAmountScore(annuityAmount: number): Scores {
  let score = 0;
  let scoreBP = 0;

  if (annuityAmount < 12000) {
    score = 36;
    scoreBP = 2;
  } else if (annuityAmount >= 12000 && annuityAmount < 16000) {
    score = 35;
    scoreBP = 1;
  } else if (annuityAmount >= 16000) {
    score = 34;
    scoreBP = 0;
  }

  return { score, scoreBP };
}
