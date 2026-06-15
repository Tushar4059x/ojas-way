export type Vector = "HD" | "FP" | "SC" | "DB" | "FE";

export interface Option {
  text: string;
  vector: Vector;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "The first ten minutes of your morning:",
    options: [
      { text: "Your mind boots up instantly — tasks, priorities, problems — before your feet touch the floor.", vector: "HD" },
      { text: "You wake already braced and faintly warm, jaw set, ready to take on the day's friction.", vector: "FP" },
      { text: "You wake heavy and reluctant, foggy and slow to clear, even after a full night.", vector: "SC" },
      { text: "You wake already exhausted, reaching for caffeine just to reach a normal baseline.", vector: "DB" },
      { text: "You wake fine — but only if the night went exactly right. One disruption and the whole day tilts.", vector: "FE" },
    ],
  },
  {
    id: 2,
    text: "When you finally have free, unscheduled time:",
    options: [
      { text: "You \"rest productively\" — dense reading, planning, intense exercise. Stillness feels like a chore.", vector: "HD" },
      { text: "Even leisure becomes performance — you track it, optimise it, turn it into a result.", vector: "FP" },
      { text: "You sink into the couch, scrolling, snacking, sleeping — comfort that somehow adds to the weight.", vector: "SC" },
      { text: "You're too depleted to enjoy it; rest doesn't restore you and joy feels far away.", vector: "DB" },
      { text: "You can only relax inside familiar, controlled conditions — novelty drains more than it refreshes.", vector: "FE" },
    ],
  },
  {
    id: 3,
    text: "Your afternoon, roughly 1–4 PM:",
    options: [
      { text: "You hit a cliff around 3 PM and push through it with caffeine, sugar, or willpower.", vector: "HD" },
      { text: "Your patience thins; you turn sharp and critical, irritated by anything inefficient.", vector: "FP" },
      { text: "A heavy fog rolls in; you feel sluggish and want nothing more than to lie down.", vector: "SC" },
      { text: "Your brain collapses — simple decisions and basic emails feel like swimming through mud.", vector: "DB" },
      { text: "You're steady, as long as you ate on schedule; a skipped or late meal quietly derails you.", vector: "FE" },
    ],
  },
  {
    id: 4,
    text: "Your sleep, honestly:",
    options: [
      { text: "Light and easily disrupted; your mind won't hold still long enough to drop deep.", vector: "HD" },
      { text: "You run hot at night, waking around 2–4 AM replaying conflicts and solving problems.", vector: "FP" },
      { text: "Long and deep — eight or nine hours — yet you wake unrefreshed and heavy.", vector: "SC" },
      { text: "Exhausted but wired; you wake at 1–3 AM unable to return, and sleep never truly restores you.", vector: "DB" },
      { text: "Excellent under perfect conditions — but a noise, a temperature shift, any stress collapses it.", vector: "FE" },
    ],
  },
  {
    id: 5,
    text: "When something suddenly goes wrong:",
    options: [
      { text: "Your mind accelerates — more tabs open, faster, trying to out-think the problem.", vector: "HD" },
      { text: "Heat rushes up your neck, your jaw clenches, irritation spikes immediately.", vector: "FP" },
      { text: "You shut down, withdraw, and quietly put it off rather than face it.", vector: "SC" },
      { text: "You have nothing left to meet it; you feel fragile, raw, easily shattered.", vector: "DB" },
      { text: "A small thing triggers a disproportionate spike — heart leaps, breath shortens, instantly overwhelmed.", vector: "FE" },
    ],
  },
  {
    id: 6,
    text: "Your body's quiet signals:",
    options: [
      { text: "Dryness — dry skin, restless digestion, cold hands, a mind that won't settle.", vector: "HD" },
      { text: "Heat — acid digestion, skin flare-ups, tension in the jaw and shoulders, running warm.", vector: "FP" },
      { text: "Heaviness — slow digestion, bloating, water retention, congestion, stiff joints.", vector: "SC" },
      { text: "Erratic — sugar cravings, cold extremities, unpredictable digestion, no tolerance for stress.", vector: "DB" },
      { text: "Contraction — tight hips, shallow chest breathing, cold limbs, digestion that reacts to every emotion.", vector: "FE" },
    ],
  },
  {
    id: 7,
    text: "Your emotional baseline lately:",
    options: [
      { text: "Wired and quick, subtly irritated by slowness, delays, and anything that can't keep pace.", vector: "HD" },
      { text: "Intense and exacting — a short fuse and a sharp eye for everything that's wrong.", vector: "FP" },
      { text: "Flat and grey — not sad exactly, just absent of peak emotion or colour.", vector: "SC" },
      { text: "Numb and apathetic; even empathy feels like a resource you've run out of.", vector: "DB" },
      { text: "A low, constant hum of anxiety about something disrupting the order you've built.", vector: "FE" },
    ],
  },
  {
    id: 8,
    text: "How the people closest to you would describe you right now:",
    options: [
      { text: "\"Always on. Always producing. Never quite stops.\"", vector: "HD" },
      { text: "\"Brilliant, but intense — we sometimes walk on eggshells.\"", vector: "FP" },
      { text: "\"Quiet and withdrawn lately. Not quite themselves.\"", vector: "SC" },
      { text: "\"Running on empty, and still won't put anything down.\"", vector: "DB" },
      { text: "\"Has it all together. Everything perfectly in place.\"", vector: "FE" },
    ],
  },
  {
    id: 9,
    text: "Your relationship with routine:",
    options: [
      { text: "What routine? You improvise at speed and let the day pull you along.", vector: "HD" },
      { text: "Optimised and high-performance — every part engineered for output.", vector: "FP" },
      { text: "Hard to hold; you keep slipping back into the comfortable and familiar.", vector: "SC" },
      { text: "Mostly abandoned. Survival is the only structure you have energy for.", vector: "DB" },
      { text: "Precise and non-negotiable — and breaking it is a genuine source of stress.", vector: "FE" },
    ],
  },
  {
    id: 10,
    text: "Your relationship with stimulants (coffee, sugar, pressure):",
    options: [
      { text: "Fuel to keep the momentum going through a packed day.", vector: "HD" },
      { text: "Coffee plus a competitive edge — it sharpens you, and it heats you up.", vector: "FP" },
      { text: "You reach for sweet, heavy comfort food more than caffeine.", vector: "SC" },
      { text: "Caffeine isn't pleasure — it's survival, and the crash leaves you worse than before.", vector: "DB" },
      { text: "Measured and controlled; you're wary of anything that might tip your balance.", vector: "FE" },
    ],
  },
  {
    id: 11,
    text: "When an invitation lands that falls outside your plans:",
    options: [
      { text: "You squeeze it in — your calendar is already overflowing anyway.", vector: "HD" },
      { text: "You're selective; you've little patience for anything that wastes your time.", vector: "FP" },
      { text: "You'd rather stay in; the couch wins more often than not.", vector: "SC" },
      { text: "You decline — there's simply nothing left in you to give.", vector: "DB" },
      { text: "You decline because it's outside your routine; you've quietly chosen control over connection.", vector: "FE" },
    ],
  },
  {
    id: 12,
    text: "The sentence that lands closest to the truth:",
    options: [
      { text: "\"I can't slow down, even when I want to.\"", vector: "HD" },
      { text: "\"I'm carrying too much heat and too short a fuse.\"", vector: "FP" },
      { text: "\"I know exactly what to do — I just can't get moving.\"", vector: "SC" },
      { text: "\"I've been running past empty for a very long time.\"", vector: "DB" },
      { text: "\"Everything looks fine — but I'm one bad day from it all falling apart.\"", vector: "FE" },
    ],
  },
];
