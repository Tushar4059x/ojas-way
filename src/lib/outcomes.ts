import { OutcomeId } from "./scoring";

export interface Outcome {
  id: OutcomeId;
  title: string;
  coreState: string;
  feelsLike: string;
  hiddenPattern: string;
  strengths: string;
  vulnerabilities: string;
  needsMost: string;
  priorityAreas: string;
  immediateAction: string;
  insight: string;
}

export const outcomes: Record<OutcomeId, Outcome> = {
  THE_HYPER_DRIVE_ENGINE: {
    id: "THE_HYPER_DRIVE_ENGINE",
    title: "The Hyper-Drive Engine",
    coreState: "You are operating at high speed for extended periods of time. Your mind rarely slows down. You process information quickly, think constantly, and often carry multiple responsibilities simultaneously. From the outside, you appear productive and capable. Internally, however, your system may be running without adequate recovery. This profile is common among ambitious professionals, entrepreneurs, parents, and high performers who have become accustomed to functioning under continuous stimulation.",
    feelsLike: "Racing thoughts, difficulty switching off, feeling mentally exhausted but physically restless, constant need to stay busy, trouble being fully present, sleep that feels incomplete even after enough hours, frequent phone checking, difficulty sitting still.",
    hiddenPattern: "Your challenge is not lack of discipline. It is excess input. Your nervous system has adapted to constant stimulation and now struggles to recognize stillness as safe. As a result, rest often feels unproductive and silence feels unfamiliar.",
    strengths: "Highly driven, quick thinking, adaptable, creative, high capacity for action, strong problem-solving ability.",
    vulnerabilities: "Nervous system fatigue, sleep disruption, mental burnout, decision fatigue, reduced recovery capacity, chronic overstimulation.",
    needsMost: "Less noise. More recovery. More intentional transitions between activity and rest. Your next level of performance comes from restoration, not additional effort.",
    priorityAreas: "Sleep Rhythm, Nervous System Recovery, Digital Boundaries, Mental Stillness, Structured Recovery Time.",
    immediateAction: "Create one uninterrupted hour each day without notifications, content consumption, or multitasking. Your system needs space to process.",
    insight: "You do not need to push harder. You need to recover better."
  },
  THE_DEPLETED_BATTERY: {
    id: "THE_DEPLETED_BATTERY",
    title: "The Depleted Battery",
    coreState: "You have been giving more energy than you have been restoring. This profile often appears after prolonged periods of stress, responsibility, overwork, caregiving, or emotional strain. You continue showing up for life. But your reserves are running low. The challenge is no longer performance. The challenge is replenishment.",
    feelsLike: "Waking up tired, afternoon energy crashes, brain fog, reduced motivation, feeling drained by normal tasks, difficulty recovering from busy days, reliance on caffeine or stimulants, constant fatigue despite rest.",
    hiddenPattern: "Your body is conserving energy. Many people mistake this for laziness or lack of motivation. In reality, your system is signaling that restoration has fallen behind demand.",
    strengths: "Reliable, responsible, persistent, committed, resilient, hard-working.",
    vulnerabilities: "Chronic fatigue, burnout, low recovery capacity, reduced motivation, emotional exhaustion, declining resilience.",
    needsMost: "Recovery before optimization. Your body is not asking for more discipline. It is asking for replenishment.",
    priorityAreas: "Sleep Quality, Consistent Recovery, Nutrient-Dense Nutrition, Stress Reduction, Sustainable Energy Management.",
    immediateAction: "For the next seven days, wake up and sleep within the same 60-minute window. Consistency restores energy more effectively than occasional rest.",
    insight: "Energy is built through rhythm, not force."
  },
  THE_STAGNANT_CIRCUIT: {
    id: "THE_STAGNANT_CIRCUIT",
    title: "The Stagnant Circuit",
    coreState: "Your system is moving slower than it wants to. You may feel stuck, unmotivated, disconnected, or unable to create momentum. This is not necessarily exhaustion. It is often a loss of rhythm. Your routines, habits, and daily structure are no longer supporting your vitality.",
    feelsLike: "Low motivation, difficulty getting started, feeling emotionally flat, inconsistent habits, lack of physical movement, feeling disconnected from goals, days blending together, knowing what to do but not doing it.",
    hiddenPattern: "Your challenge is not knowledge. You likely already know what healthy habits look like. The challenge is creating enough momentum for those habits to become automatic again.",
    strengths: "Patient, thoughtful, stable, dependable, calm under pressure, loyal.",
    vulnerabilities: "Procrastination, low momentum, physical inactivity, emotional disengagement, habit inconsistency, reduced vitality.",
    needsMost: "Movement. Structure. Momentum. Small daily actions repeated consistently.",
    priorityAreas: "Daily Structure, Consistent Meal Timing, Physical Activity, Morning Rituals, Habit Rebuilding.",
    immediateAction: "Choose one daily habit and perform it at the same time every day for seven days. Consistency creates momentum.",
    insight: "Vitality often returns through small repeated actions, not dramatic change."
  },
  THE_FRICTION_POINT_PROFILE: {
    id: "THE_FRICTION_POINT_PROFILE",
    title: "The Friction-Point Profile",
    coreState: "Your system responds strongly to pressure. You are highly aware, highly responsive, and often operating with elevated internal tension. While this responsiveness can be a strength, it can also create friction in daily life when stress accumulates faster than recovery.",
    feelsLike: "Irritability, impatience, feeling overwhelmed easily, emotional intensity, difficulty relaxing, stress lingering throughout the day, frustration with inefficiency, reacting before fully processing.",
    hiddenPattern: "Your system is working hard to maintain control. When pressure builds, your internal resources become focused on responding rather than recovering. This creates a cycle of tension and reactivity.",
    strengths: "Ambitious, focused, determined, driven, decisive, action-oriented.",
    vulnerabilities: "Emotional exhaustion, irritability, stress accumulation, reduced patience, relationship strain, difficulty recovering after conflict.",
    needsMost: "Regulation. Not control. The ability to return to center quickly after stress.",
    priorityAreas: "Stress Recovery, Emotional Regulation, Breathing Practices, Boundaries, Relaxation Rituals.",
    immediateAction: "Before responding to a stressful situation, pause and take three slow breaths. Create space between stimulus and response.",
    insight: "Calm is not the absence of pressure. It is the ability to remain grounded within it."
  },
  THE_FRAGILE_EQUILIBRIUM: {
    id: "THE_FRAGILE_EQUILIBRIUM",
    title: "The Fragile Equilibrium",
    coreState: "You appear balanced on the surface. Your routines are functioning reasonably well. Your energy is relatively stable. Your stress levels are manageable. However, your resilience reserves may not be as deep as they seem. You are maintaining balance, but it may be more fragile than you realize.",
    feelsLike: "Generally functioning well, stable energy most days, good habits overall, minor stressors feel manageable, wellness feels under control. BUT: A few difficult weeks can quickly throw everything off; recovery takes longer than expected; consistency depends heavily on favorable circumstances.",
    hiddenPattern: "You are not struggling. But you are not fully resilient yet. Your challenge is protecting and strengthening the balance you have already built.",
    strengths: "Self-awareness, consistency, stability, discipline, good routines, healthy habits.",
    vulnerabilities: "Hidden stress accumulation, complacency, reduced adaptability during disruption, dependence on ideal conditions, inconsistent resilience reserves.",
    needsMost: "Preservation. Refinement. Long-term resilience building.",
    priorityAreas: "Habit Protection, Recovery Optimization, Stress Resilience, Preventive Wellness, Sustainable Lifestyle Design.",
    immediateAction: "Identify the single habit that contributes most to your well-being and protect it relentlessly. This is your anchor.",
    insight: "Balance is not something you achieve once. It is a relationship that must be renewed daily."
  }
};
