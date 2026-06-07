import { Vector } from "./questions";

export type OutcomeId = 
  | "THE_HYPER_DRIVE_ENGINE" 
  | "THE_DEPLETED_BATTERY" 
  | "THE_STAGNANT_CIRCUIT" 
  | "THE_FRICTION_POINT_PROFILE" 
  | "THE_FRAGILE_EQUILIBRIUM";

export function calculateOutcome(answers: Vector[]): OutcomeId {
  if (answers.length !== 15) {
    throw new Error("Must answer exactly 15 questions.");
  }

  const counts = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((v) => counts[v]++);

  // Rule 2: The Depleted Battery (Systemic Crash Override)
  // Trigger: IF Vector A is >= 5 AND Vector B is >= 5
  if (counts.A >= 5 && counts.B >= 5) {
    return "THE_DEPLETED_BATTERY";
  }

  // Rule 3: The Fragile Equilibrium (Low-Friction Override)
  // Trigger: IF Vector D is >= 10 (or if A, B, and C are all < 5)
  if (counts.D >= 10 || (counts.A < 5 && counts.B < 5 && counts.C < 5)) {
    return "THE_FRAGILE_EQUILIBRIUM";
  }

  // Find max count for remaining (A, B, C)
  let maxCount = -1;
  let dominantVectors: Vector[] = [];

  const checkVectors: Vector[] = ["A", "B", "C"]; // D is handled or ignored unless tie-breaker
  
  checkVectors.forEach((v) => {
    if (counts[v] > maxCount) {
      maxCount = counts[v];
      dominantVectors = [v];
    } else if (counts[v] === maxCount) {
      dominantVectors.push(v);
    }
  });

  // Rule 4: Tie-Breaking Mechanism
  // If there is an exact tie, use Question 15 as tie-breaker
  let finalDominant = dominantVectors[0];
  if (dominantVectors.length > 1) {
    const q15Answer = answers[14];
    if (dominantVectors.includes(q15Answer)) {
      finalDominant = q15Answer;
    } else {
      // Fallback if Q15 isn't one of the tied vectors (rare but mathematically possible)
      finalDominant = dominantVectors[0]; 
    }
  }

  // Map to Outcome
  if (finalDominant === "A") return "THE_HYPER_DRIVE_ENGINE";
  if (finalDominant === "B") return "THE_FRICTION_POINT_PROFILE";
  if (finalDominant === "C") return "THE_STAGNANT_CIRCUIT";
  
  return "THE_FRAGILE_EQUILIBRIUM"; // Fallback, shouldn't reach here normally
}
