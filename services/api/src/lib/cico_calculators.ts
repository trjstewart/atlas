// Basal Metabolic Rate (BMR)
const BMR = (weight: number, height: number, age: number): number => {
  return Math.round((10 * weight) + (6.25 * height) - (5 * age) + 5)
}

// Total Daily Energy Expenditure (TDEE)
const TDEE = (bmr: number, pal: number): number => Math.round(bmr * pal)

export default {
  BMR,
  TDEE,
}
