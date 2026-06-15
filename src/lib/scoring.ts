import { Vector } from "./questions";

export type OutcomeId = 
  | "THE_HYPER_DRIVE_ENGINE" 
  | "THE_DEPLETED_BATTERY" 
  | "THE_STAGNANT_CIRCUIT" 
  | "THE_FRICTION_POINT_PROFILE" 
  | "THE_FRAGILE_EQUILIBRIUM";

export function calculateOutcome(answers: Vector[]): OutcomeId {
  if (answers.length !== 12) {
    throw new Error("Must answer exactly 12 questions.");
  }

  const counts: Record<Vector, number> = { HD: 0, FP: 0, SC: 0, DB: 0, FE: 0 };
  answers.forEach((v) => counts[v]++);

  // 1. OVERRIDE - Depleted Battery
  if (counts.DB >= 5) {
    return "THE_DEPLETED_BATTERY";
  }

  // Find the highest score
  let maxCount = -1;
  let tiedVectors: Vector[] = [];

  const vectors: Vector[] = ["HD", "FP", "SC", "DB", "FE"];
  
  vectors.forEach((v) => {
    if (counts[v] > maxCount) {
      maxCount = counts[v];
      tiedVectors = [v];
    } else if (counts[v] === maxCount) {
      tiedVectors.push(v);
    }
  });

  // 3. Flat-profile catch
  // If no single track reaches 4 (points are scattered)
  if (maxCount < 4) {
    return "THE_FRAGILE_EQUILIBRIUM";
  }

  let finalLeader: Vector;

  if (tiedVectors.length === 1) {
    finalLeader = tiedVectors[0];
  } else {
    // 4. Tie-breaks (deterministic)
    // Any tie that includes DB -> resolve to DB
    if (tiedVectors.includes("DB")) {
      finalLeader = "DB";
    } else {
      // Q12 choice
      const q12Answer = answers[11];
      if (tiedVectors.includes(q12Answer)) {
        finalLeader = q12Answer;
      } else {
        // Q5 choice
        const q5Answer = answers[4];
        if (tiedVectors.includes(q5Answer)) {
          finalLeader = q5Answer;
        } else {
          // Final fallback priority order: FE > FP > HD > SC
          // Note: DB is already checked above.
          if (tiedVectors.includes("FE")) finalLeader = "FE";
          else if (tiedVectors.includes("FP")) finalLeader = "FP";
          else if (tiedVectors.includes("HD")) finalLeader = "HD";
          else finalLeader = "SC";
        }
      }
    }
  }

  // 2. Leading track mapping
  if (finalLeader === "DB") return "THE_DEPLETED_BATTERY";
  if (finalLeader === "FE") return "THE_FRAGILE_EQUILIBRIUM";
  if (finalLeader === "HD") return "THE_HYPER_DRIVE_ENGINE";
  if (finalLeader === "FP") return "THE_FRICTION_POINT_PROFILE";
  if (finalLeader === "SC") return "THE_STAGNANT_CIRCUIT";

  return "THE_FRAGILE_EQUILIBRIUM"; // Fallback
}
