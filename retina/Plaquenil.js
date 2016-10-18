// Plaquenil.js
// a node command line utility for determining the risk of Plaquenil toxicity

// I'm aware of the code redundancy here.
// I couldn't get prompt to play nicely with a switch or if...else.
// If anyone more experienced wants to tidy it up, I'll gladly take a PR.

'use strict'

const prompt = require('prompt')
const colors = require('colors')

const schema = {

  properties: {

    preferredHeightUnit: {
      description: 'Preferred height unit (enter \'cm\' for centimeters or \'in\' for inches)'.yellow,
      pattern: /^(cm|in)$/,
      message: 'Please enter either \'cm\' or \'in\'.'
    },

    patientGender: {
      description: 'Patient gender (enter \'m\' for male and \'f\' for female)'.yellow,
      pattern: /^(m|f)$/,
      message: 'Please enter either \'m\' or \'f\'.',
      required: true
    },

    patientHeightInInches: {
      description: 'Patient height (inches)'.yellow,
      ask: () => prompt.history('preferredHeightUnit').value === 'in',
      pattern: /^[6-9][0-9]$/,
      message: 'Please enter an integer height in inches (60-99).\nThis calculator is not valid for patients under 60 inches in height',
      required: true
    },

    patientHeightInCentimeters: {
      description: 'Patient height (centimeters)'.yellow,
      ask: () => prompt.history('preferredHeightUnit').value === 'cm',
      pattern: /^(15[2-9]|1[6-9]\d|2[0-4]\d|250)$/,
      message: 'Please enter an integer height in centimeters (152-250).\nThis calculator is not valid for patients under 152 cm in height',
      required: true
    },

    dailyDoseOfPlaquenilInMilligrams: {
      description: 'Daily dose of Plaquenil (mg)'.yellow,
      pattern: /^\d{1,3}$/,
      message: 'Please enter an integer dose of Plaquenil in milligrams (000-999).\nThis calculator is not valid for patients on more than 1 g of Plaquenil per day.',
      required: true
    },

    durationOfTherapyInYears: {
      description: 'Duration of therapy (years)'.yellow,
      pattern: /^\d{1,2}$/,
      message: 'Please enter an integer for the number of years of therapy (0-99).\nIf the patient has been taking Plaquenil for less than 1 year, enter 1.',
      required: true
    }

  }

}

prompt.message = ''
prompt.delimiter = ':'.yellow

prompt.start()

prompt.get(schema, function (err, result) {
  if (result.preferredHeightUnit === 'in') {
    const RobinsonIBW = (gender, heightInInches) => {
      if (heightInInches < 60) {
        console.log('This calculator is only valid for patient heights over 60 inches.')
      } else {
        if (gender === 'm') {
          return (heightInInches - 60) * 1.9 + 52
        } else if (gender === 'f') {
          return (heightInInches - 60) * 1.7 + 49
        } else {
          console.log('There was a problem with the gender for RobinsonIBW...')
        }
      }
    }

    const MillerIBW = (gender, heightInInches) => {
      if (heightInInches < 60) {
        console.log('This calculator is only valid for patient heights over 60 inches.')
      } else {
        if (gender === 'm') {
          return (heightInInches - 60) * 1.41 + 56.2
        } else if (gender === 'f') {
          return (heightInInches - 60) * 1.36 + 53.1
        } else {
          console.log('There was a problem with the gender for MillerIBW...')
        }
      }
    }

    const meanIBW = (
      RobinsonIBW(result.patientGender, result.patientHeightInInches) +
      MillerIBW(result.patientGender, result.patientHeightInInches)
      ) / 2
    const PlaquenilToxicityDose = result.dailyDoseOfPlaquenilInMilligrams / meanIBW

    if (PlaquenilToxicityDose >= 6.5) {
      console.log(`\nCurrent dose: ${PlaquenilToxicityDose.toFixed(1).red} mg/kg(IBW)/d\n(This calculator uses the average of the Robinson and Miller IBW formulas.)`)
      console.log(`\nThis patient's dose ${'exceeds'.red} 6.5 mg/kg(IBW)/d (monitor closely).`)
    } else if (PlaquenilToxicityDose < 6.5) {
      console.log(`\nCurrent dose: ${PlaquenilToxicityDose.toFixed(1).green} mg/kg(IBW)/d\n(This calculator uses the average of the Robinson and Miller IBW formulas.)`)
      console.log(`\nThis patient's dose ${'falls below'.green} 6.5 mg/kg(IBW)/d (monitor less intensively).`)
    }

    if (result.durationOfTherapyInYears >= 5) {
      console.log(`\nDuration: > 5 years (${'higher risk'.red}).\n`)
    } else if (result.durationOfTherapyInYears < 5) {
      console.log(`\nDuration: < 5 years (${'lower risk'.green}).\n`)
    }
  } else if (result.preferredHeightUnit === 'cm') {
    const RobinsonIBW = (gender, heightInCentimeters) => {
      if (heightInCentimeters < 152) {
        console.log('This calculator is only valid for patient heights over 152 centimeters.')
      } else {
        if (gender === 'm') {
          return (heightInCentimeters - 152) * 0.75 + 52
        } else if (gender === 'f') {
          return (heightInCentimeters - 152) * 0.67 + 49
        } else {
          console.log('There was a problem with the gender for RobinsonIBW...')
        }
      }
    }

    const MillerIBW = (gender, heightInCentimeters) => {
      if (heightInCentimeters < 152) {
        console.log('This calculator is only valid for patient heights over 152 centimeters.')
      } else {
        if (gender === 'm') {
          return (heightInCentimeters - 152) * 0.56 + 56.2
        } else if (gender === 'f') {
          return (heightInCentimeters - 152) * 0.54 + 53.1
        } else {
          console.log('There was a problem with the gender for MillerIBW...')
        }
      }
    }

    const meanIBW = (
      RobinsonIBW(result.patientGender, result.patientHeightInCentimeters) +
      MillerIBW(result.patientGender, result.patientHeightInCentimeters)
      ) / 2
    const PlaquenilToxicityDose = result.dailyDoseOfPlaquenilInMilligrams / meanIBW

    if (PlaquenilToxicityDose >= 6.5) {
      console.log(`\nCurrent dose: ${PlaquenilToxicityDose.toFixed(1).red} mg/kg(IBW)/d\n(This calculator uses the average of the Robinson and Miller IBW formulas.)`)
      console.log(`\nThis patient's dose ${'exceeds'.red} 6.5 mg/kg(IBW)/d (monitor closely).`)
    } else if (PlaquenilToxicityDose < 6.5) {
      console.log(`\nCurrent dose: ${PlaquenilToxicityDose.toFixed(1).green} mg/kg(IBW)/d\n(This calculator uses the average of the Robinson and Miller IBW formulas.)`)
      console.log(`\nThis patient's dose ${'falls below'.green} 6.5 mg/kg(IBW)/d (monitor less intensively).`)
    }

    if (result.durationOfTherapyInYears >= 5) {
      console.log(`\nDuration: > 5 years (${'higher risk'.red}).\n`)
    } else if (result.durationOfTherapyInYears < 5) {
      console.log(`\nDuration: < 5 years (${'lower risk'.green}).\n`)
    }
  } else {
    console.log('There was a problem with preferredHeightUnit.')
  }
})
