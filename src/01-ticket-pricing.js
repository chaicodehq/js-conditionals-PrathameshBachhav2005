/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  if (age < 0) {
    return -1;
  }

  let prices;

  if (age <= 12) {
    prices = 8;          
  } else if (age <= 17) {
    prices = 12;         
  } else if (age <= 59) {
    prices = 15;         
  } else {
    prices = 10;         
  }

  if (isWeekend) {
    prices += 3;
  }

  return prices;
}