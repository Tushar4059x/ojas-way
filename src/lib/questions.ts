export type Vector = "A" | "B" | "C" | "D";

export interface Option {
  text: string;
  vector: Vector;
}

export interface Question {
  id: number;
  module: string;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    module: "Energy & Metabolic Velocity",
    text: "When you hit a busy stretch of work, how does your energy typically respond?",
    options: [
      { text: "I wire up. I work faster, skip meals, and run on pure adrenaline.", vector: "A" },
      { text: "I push through aggressively, but feel irritable and highly tense.", vector: "B" },
      { text: "I slow down. I feel heavy, unmotivated, and tend to procrastinate.", vector: "C" },
      { text: "I pace myself, adjust my schedule, and maintain a steady output.", vector: "D" },
    ],
  },
  {
    id: 2,
    module: "Energy & Metabolic Velocity",
    text: "If you miss a meal, what is your immediate systemic response?",
    options: [
      { text: "I feel lightheaded, anxious, and my mind races.", vector: "A" },
      { text: "I become extremely irritable, sharp, and physically hot.", vector: "B" },
      { text: "I barely notice. I can go long periods without feeling hungry.", vector: "C" },
      { text: "I feel a mild dip in energy, but I remain emotionally stable.", vector: "D" },
    ],
  },
  {
    id: 3,
    module: "Energy & Metabolic Velocity",
    text: "How would you describe your current relationship with digestion?",
    options: [
      { text: "Erratic. I often experience bloating, gas, or forget to eat.", vector: "A" },
      { text: "Intense. I have strong hunger and occasional heartburn or acidity.", vector: "B" },
      { text: "Sluggish. I feel heavy after meals and digestion feels slow.", vector: "C" },
      { text: "Efficient. I process food easily and feel energized after eating.", vector: "D" },
    ],
  },
  {
    id: 4,
    module: "Energy & Metabolic Velocity",
    text: "What is your typical reliance on caffeine or stimulants?",
    options: [
      { text: "I sip it constantly to keep my racing mind functioning.", vector: "A" },
      { text: "I use it strategically to dominate tasks, but it makes me edgey.", vector: "B" },
      { text: "I need strong doses just to get out of my own way and start.", vector: "C" },
      { text: "I enjoy it, but I don't need it to function effectively.", vector: "D" },
    ],
  },
  {
    id: 5,
    module: "Energy & Metabolic Velocity",
    text: "At 3:00 PM on a typical day, how does your body feel?",
    options: [
      { text: "Wired but tired. My mind is moving faster than my body.", vector: "A" },
      { text: "Frustrated by inefficiencies around me. I'm pushing to finish.", vector: "B" },
      { text: "Lethargic. I crave sugar or a nap to overcome the afternoon slump.", vector: "C" },
      { text: "Relatively stable, perhaps a slight natural dip that passes quickly.", vector: "D" },
    ],
  },
  {
    id: 6,
    module: "Cognitive & Stress Resilience",
    text: "When a sudden, unexpected problem arises, what is your default cognitive state?",
    options: [
      { text: "Overthinking. I instantly map out 10 possible worst-case scenarios.", vector: "A" },
      { text: "Action-oriented but annoyed. I want to fix it immediately and assign blame.", vector: "B" },
      { text: "Overwhelmed. I want to withdraw, avoid it, and deal with it later.", vector: "C" },
      { text: "Analytical. I pause, assess the reality, and handle it methodically.", vector: "D" },
    ],
  },
  {
    id: 7,
    module: "Cognitive & Stress Resilience",
    text: "How does your nervous system perceive 'stillness' or doing nothing?",
    options: [
      { text: "Uncomfortable. I feel like I should be doing something productive.", vector: "A" },
      { text: "Boring. I need a goal, a challenge, or something to optimize.", vector: "B" },
      { text: "Comfortable. I can easily spend hours lounging or doing very little.", vector: "C" },
      { text: "Restorative. I use it intentionally to recharge and reset.", vector: "D" },
    ],
  },
  {
    id: 8,
    module: "Cognitive & Stress Resilience",
    text: "In moments of high stress, where do you carry physical tension?",
    options: [
      { text: "Neck, shoulders, and shallow breathing in my upper chest.", vector: "A" },
      { text: "Jaw clenching, sharp headaches, or heat in my face.", vector: "B" },
      { text: "General heaviness, lethargy, or holding weight in my midsection.", vector: "C" },
      { text: "I notice the tension quickly and consciously release it.", vector: "D" },
    ],
  },
  {
    id: 9,
    module: "Cognitive & Stress Resilience",
    text: "How quickly do you recover emotionally after a conflict or frustrating event?",
    options: [
      { text: "I replay the conversation in my head for hours or days.", vector: "A" },
      { text: "I stay angry or heated for a while, holding onto the friction.", vector: "B" },
      { text: "I shut down and detach from the situation entirely.", vector: "C" },
      { text: "I process the emotion, address the issue, and move on relatively quickly.", vector: "D" },
    ],
  },
  {
    id: 10,
    module: "Cognitive & Stress Resilience",
    text: "How do you process multiple streams of incoming information (emails, slack, texts)?",
    options: [
      { text: "I context-switch rapidly, feeling anxious if I leave things unread.", vector: "A" },
      { text: "I batch them efficiently but get annoyed by the constant interruptions.", vector: "B" },
      { text: "I let them pile up until it becomes overwhelming, then ignore them.", vector: "C" },
      { text: "I have structured boundaries and check them at designated times.", vector: "D" },
    ],
  },
  {
    id: 11,
    module: "Sleep & Circadian Dynamics",
    text: "What is your typical experience when trying to fall asleep?",
    options: [
      { text: "My body is tired, but my mind is racing. It takes a long time to wind down.", vector: "A" },
      { text: "I fall asleep quickly because I'm exhausted from pushing so hard.", vector: "B" },
      { text: "I fall asleep easily and deeply, often struggling to wake up.", vector: "C" },
      { text: "I fall asleep within 15-20 minutes and transition smoothly.", vector: "D" },
    ],
  },
  {
    id: 12,
    module: "Sleep & Circadian Dynamics",
    text: "If you wake up in the middle of the night, what happens?",
    options: [
      { text: "My mind immediately starts planning the next day. Hard to go back to sleep.", vector: "A" },
      { text: "I usually only wake up if I'm physically uncomfortable or too warm.", vector: "B" },
      { text: "I rarely wake up. I sleep heavily through the night.", vector: "C" },
      { text: "I can usually fall right back asleep within a few minutes.", vector: "D" },
    ],
  },
  {
    id: 13,
    module: "Sleep & Circadian Dynamics",
    text: "How does your physical body feel when the alarm goes off in the morning?",
    options: [
      { text: "Stiff, restless, and mentally already 10 steps ahead.", vector: "A" },
      { text: "Groggy initially, but I force myself up and into action.", vector: "B" },
      { text: "Extremely heavy. Hitting snooze is a daily necessity.", vector: "C" },
      { text: "Refreshed and ready to start the day without immediate stimulants.", vector: "D" },
    ],
  },
  {
    id: 14,
    module: "Sleep & Circadian Dynamics",
    text: "How consistent is your daily routine (waking, eating, sleeping)?",
    options: [
      { text: "Highly erratic. Every day is different based on demands.", vector: "A" },
      { text: "Rigid. I control my schedule tightly to maximize productivity.", vector: "B" },
      { text: "Inconsistent. I struggle to maintain a routine for long periods.", vector: "C" },
      { text: "Rhythmic. My days follow a natural, sustainable pattern.", vector: "D" },
    ],
  },
  {
    id: 15,
    module: "Sleep & Circadian Dynamics",
    text: "If you had a completely free, unstructured weekend, what would happen?",
    options: [
      { text: "I would feel restless and end up filling the time with tasks or scrolling.", vector: "A" },
      { text: "I would create a project to accomplish to feel productive.", vector: "B" },
      { text: "I would likely stay in bed, binge-watch shows, and not move much.", vector: "C" },
      { text: "I would balance active hobbies with deep, intentional relaxation.", vector: "D" },
    ],
  },
];
