import { OutcomeId } from "./scoring";

export function getEmailTemplate(outcomeId: OutcomeId, name: string) {
  const safeName = name || "friend";
  
  const baseHtml = (content: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #131009; line-height: 1.6;">
      <h1 style="color: #C49A2A; text-align: center; margin-bottom: 32px;">The OJAS WAY</h1>
      ${content}
      <br/>
      <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 32px 0;" />
      <p style="text-align: center; color: #6B7280; font-size: 14px;">
        OJAS WAY Wellness
      </p>
    </div>
  `;

  switch(outcomeId) {
    case "THE_HYPER_DRIVE_ENGINE":
      return {
        subject: "Your Diagnostic Report: The Hyper-Drive Engine",
        html: baseHtml(`
          <p><strong>${safeName}</strong>, your assessment indicates your primary operational profile is <strong>The Hyper-Drive Engine</strong>.</p>
          <p>From the outside, you appear highly capable, productive, and driven. But internally, your system is running an invisible deficit. Your mind rarely slows down, your thoughts race, and your nervous system has adapted to constant stimulation. You are wired, but you are tired.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The Clinical Rationale: Why This Is Happening</h3>
          <p>Your challenge is not a lack of discipline; it is an excess of input. In modern terms, your sympathetic nervous system (fight-or-flight) is dominant. When you operate at high speeds for too long, your system begins to view stillness as a threat. This is why you feel restless when you try to relax, why your sleep feels shallow, and why you rely on constant context-switching. Your body has lost its natural deceleration sequence.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The OJAS WAY Protocol: Your Blueprint for Vitality</h3>
          <p>To optimize the Hyper-Drive Engine, we do not push harder. We buffer the nervous system and create intentional friction against overstimulation.</p>
          
          <p><strong>1. Circadian & Sleep Rhythm</strong><br/>
          <em>The Ideal:</em> Implement a strict 90-minute digital sundown before bed. No screens, no complex problem-solving.<br/>
          <em>The Alternative:</em> If 90 minutes is impossible, use blue-light-blocking glasses after 8:00 PM and switch your phone to grayscale mode to reduce neurological stimulation.</p>
          
          <p><strong>2. Metabolic & Dietary Velocity</strong><br/>
          <em>The Ideal:</em> Your fast-moving system needs grounding. Shift away from cold, raw, or dry foods. Focus on warm, cooked, nutrient-dense meals with healthy fats (ghee, olive oil) to stabilize your metabolic rate.<br/>
          <em>The Alternative:</em> If you must eat on the go, never drink caffeine on an empty stomach. Always buffer it with a protein or fat source to prevent cortisol spikes.</p>
          
          <p><strong>3. Cognitive & Nervous System Calibration</strong><br/>
          <em>The Ideal:</em> 20 minutes of non-sleep deep rest (NSDR) or structured stillness mid-afternoon to reset your autonomic nervous system.<br/>
          <em>The Alternative:</em> The "Micro-Grounding" technique. Set an alarm for 2:00 PM. Take 60 seconds to do box breathing (inhale 4s, hold 4s, exhale 4s, hold 4s) while physically feeling the ground beneath your feet.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">Your Immediate 24-Hour Action Plan</h3>
          <p>Tomorrow morning, do not consume any content for the first 30 minutes after waking. No emails, no social media, no news. Allow your brain to boot up naturally without external hijacking.</p>
          
          <h3 style="margin-top: 32px;">Next Steps:</h3>
          <p>If you want to permanently restructure your baseline and stop relying on adrenaline to get through the week, let's map out your personalized operating system.</p>
          <p><a href="#" style="color: #C49A2A; font-weight: bold;">Secure Your 15-Minute Lifestyle Audit Here &rarr;</a></p>
        `)
      };
      
    case "THE_DEPLETED_BATTERY":
      return {
        subject: "Your Diagnostic Report: The Depleted Battery",
        html: baseHtml(`
          <p><strong>${safeName}</strong>, your assessment indicates your primary operational profile is <strong>The Depleted Battery</strong>.</p>
          <p>You have been giving more energy than you have been restoring. You are still showing up for life, but your reserves are critically low. You wake up tired, experience afternoon brain fog, and rely on stimulants just to cross the finish line of your day.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The Clinical Rationale: Why This Is Happening</h3>
          <p>Many mistake this state for laziness or a lack of motivation. It is neither. Your biology is highly intelligent; because your energy expenditure has outpaced your recovery for so long, your body has entered an energy-conservation mode. Your adrenal system is fatigued, and your cellular recovery is lagging. Your body is not asking for more discipline, biohacking, or intense workouts. It is screaming for deep, systemic replenishment.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The OJAS WAY Protocol: Your Blueprint for Vitality</h3>
          <p>To restore a Depleted Battery, we must pause optimization and focus entirely on accumulation. We build energy through rhythm, not force.</p>
          
          <p><strong>1. Circadian & Sleep Rhythm</strong><br/>
          <em>The Ideal:</em> Sleep and wake at the exact same time every single day, allowing for 8-9 hours of time in bed. Consistency is more restorative than duration.<br/>
          <em>The Alternative:</em> If your schedule fluctuates, anchor your wake-up time. Wake up at the same time every day regardless of when you slept, and get immediate sunlight in your eyes to lock in your circadian rhythm.</p>
          
          <p><strong>2. Metabolic & Dietary Velocity</strong><br/>
          <em>The Ideal:</em> Your digestive fire is currently weak. Avoid heavy, complex, or highly processed meals that require massive energy to digest. Focus on warm, deeply nourishing, easily digestible foods like soups, stews, and cooked root vegetables.<br/>
          <em>The Alternative:</em> If you cannot cook, focus on the "Warm Hydration" rule. Drink warm water throughout the day instead of ice-cold water, which shocks your weakened metabolic system.</p>
          
          <p><strong>3. Cognitive & Nervous System Calibration</strong><br/>
          <em>The Ideal:</em> Suspend all high-intensity interval training (HIIT) and heavy weightlifting. Replace them with restorative movement—walking, mobility work, and stretching.<br/>
          <em>The Alternative:</em> If you need to sweat to feel good, limit intense exertion to 20 minutes maximum, and only do it in the morning when your cortisol is naturally highest.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">Your Immediate 24-Hour Action Plan</h3>
          <p>For the next 24 hours, eliminate all caffeine after 11:00 AM. You are currently using caffeine to borrow energy from tomorrow to pay for today. We must stop the debt cycle.</p>
          
          <h3 style="margin-top: 32px;">Next Steps:</h3>
          <p>Replenishing a depleted system requires strategic intervention. Let’s design a recovery protocol that fits your life without adding more to your to-do list.</p>
          <p><a href="#" style="color: #C49A2A; font-weight: bold;">Secure Your 15-Minute Lifestyle Audit Here &rarr;</a></p>
        `)
      };
      
    case "THE_STAGNANT_CIRCUIT":
      return {
        subject: "Your Diagnostic Report: The Stagnant Circuit",
        html: baseHtml(`
          <p><strong>${safeName}</strong>, your assessment indicates your primary operational profile is <strong>The Stagnant Circuit</strong>.</p>
          <p>Your system is moving slower than it wants to. You may feel stuck, unmotivated, or physically heavy. You likely know exactly what you should be doing to feel better, but there is a disconnect between knowing and doing. Days are blending together.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The Clinical Rationale: Why This Is Happening</h3>
          <p>This is not necessarily clinical exhaustion; it is a loss of operational rhythm. In your current state, your metabolic and cognitive velocity have slowed down. When routines drop off, the body defaults to inertia. A body at rest stays at rest. Your challenge is not a lack of knowledge—it is the absence of the initial spark required to turn a singular action into automatic momentum.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The OJAS WAY Protocol: Your Blueprint for Vitality</h3>
          <p>To optimize the Stagnant Circuit, we must introduce light, heat, and structured movement to break the physical and mental inertia.</p>
          
          <p><strong>1. Circadian & Sleep Rhythm</strong><br/>
          <em>The Ideal:</em> Wake up before 6:30 AM. For your specific profile, sleeping past sunrise increases physical heaviness and mental fog for the rest of the day.<br/>
          <em>The Alternative:</em> If waking early is too difficult, focus on the "No Snooze" rule. The moment the alarm goes off, your feet must touch the floor. No lingering in bed.</p>
          
          <p><strong>2. Metabolic & Dietary Velocity</strong><br/>
          <em>The Ideal:</em> Introduce metabolic "fire." Utilize warming spices (ginger, black pepper, cinnamon) and delay your first heavy meal until you feel genuine, physical hunger. Avoid heavy dairy or excess sugar, which act as metabolic glue for your profile.<br/>
          <em>The Alternative:</em> Start your day with 16oz of warm water with fresh lemon and a pinch of salt to flush the digestive tract and stimulate your metabolism before any food enters your system.</p>
          
          <p><strong>3. Cognitive & Nervous System Calibration</strong><br/>
          <em>The Ideal:</em> 30 minutes of brisk, continuous physical movement early in the day to generate internal heat and release endorphins.<br/>
          <em>The Alternative:</em> "The 5-Minute Rule." Commit to doing just 5 minutes of a task or workout. If you want to stop after 5 minutes, you can. (You rarely will, because for you, starting is the only real hurdle).</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">Your Immediate 24-Hour Action Plan</h3>
          <p>Tomorrow morning, do not eat until you have been awake for at least two hours and have moved your body. Let your system fully wake up before tasking it with digestion.</p>
          
          <h3 style="margin-top: 32px;">Next Steps:</h3>
          <p>Momentum returns through small, precise actions. Let our strategists help you build an automated routine that makes healthy habits frictionless.</p>
          <p><a href="#" style="color: #C49A2A; font-weight: bold;">Secure Your 15-Minute Lifestyle Audit Here &rarr;</a></p>
        `)
      };
      
    case "THE_FRICTION_POINT_PROFILE":
      return {
        subject: "Your Diagnostic Report: The Friction-Point Profile",
        html: baseHtml(`
          <p><strong>${safeName}</strong>, your assessment indicates your primary operational profile is <strong>The Friction-Point Profile</strong>.</p>
          <p>You are highly capable, highly aware, and highly responsive. But your system is currently generating an immense amount of internal heat. This manifests as irritability, impatience, digestive inflammation, and the feeling that you are constantly carrying tension. You are burning hot, and it is creating friction in your daily life.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The Clinical Rationale: Why This Is Happening</h3>
          <p>Your system is working overtime to maintain control and efficiency in a world that is often inefficient. When external pressure builds, your internal resources immediately flood toward "fixing" or "reacting." Because of this intense drive, your body accumulates inflammatory stress markers faster than it can clear them. You don't need to learn how to work harder; you need to learn how to dissipate internal heat.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The OJAS WAY Protocol: Your Blueprint for Vitality</h3>
          <p>To optimize the Friction-Point Profile, we focus on cooling the system, creating emotional boundaries, and increasing the space between stimulus and response.</p>
          
          <p><strong>1. Circadian & Sleep Rhythm</strong><br/>
          <em>The Ideal:</em> Shift your workouts to the early morning or late evening. Avoid intense physical exertion during the hottest parts of the day (10 AM - 2 PM), which aggravates your baseline tension.<br/>
          <em>The Alternative:</em> If you must work out mid-day, ensure your cool-down is twice as long as normal, ending with a cool shower to drop your core temperature.</p>
          
          <p><strong>2. Metabolic & Dietary Velocity</strong><br/>
          <em>The Ideal:</em> Your digestive fire is strong but easily irritated. Avoid highly spicy, salty, or acidic foods (excess coffee, alcohol, fermented foods). Focus on cooling, hydrating, and sweet (natural) profiles like coconut water, cucumber, leafy greens, and melon.<br/>
          <em>The Alternative:</em> If you cannot change your diet immediately, commit to drinking 3 liters of room-temperature or cool (not ice) water daily to literally flush the heat from your system.</p>
          
          <p><strong>3. Cognitive & Nervous System Calibration</strong><br/>
          <em>The Ideal:</em> Implement scheduled "decompression zones." Block 15 minutes after work to sit in silence and mentally close tabs before interacting with your family or evening tasks.<br/>
          <em>The Alternative:</em> "The 3-Breath Buffer." Before replying to an annoying email, responding to a frustrating comment, or reacting to a delay, you must take 3 deep nasal breaths.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">Your Immediate 24-Hour Action Plan</h3>
          <p>Today, cancel one non-essential commitment or delegate one task. Your system is craving space and a release of pressure. Give it to yourself intentionally.</p>
          
          <h3 style="margin-top: 32px;">Next Steps:</h3>
          <p>If you want to maintain your high performance without the collateral damage to your mood, digestion, and relationships, we need to map your cooling protocol.</p>
          <p><a href="#" style="color: #C49A2A; font-weight: bold;">Secure Your 15-Minute Lifestyle Audit Here &rarr;</a></p>
        `)
      };
      
    case "THE_FRAGILE_EQUILIBRIUM":
      return {
        subject: "Your Diagnostic Report: The Fragile Equilibrium",
        html: baseHtml(`
          <p><strong>${safeName}</strong>, your assessment indicates your primary operational profile is <strong>The Fragile Equilibrium</strong>.</p>
          <p>Congratulations. You are currently operating from a place of relative balance. Your routines are functioning, your energy is stable, and your stress is manageable. However, your resilience reserves are shallow. You feel great when conditions are perfect, but a few bad nights of sleep or an unexpected stressful week can quickly throw everything off.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The Clinical Rationale: Why This Is Happening</h3>
          <p>You are not struggling, but you are not fully bulletproof yet. You have successfully implemented good daily habits, but your biological bank account is living "paycheck to paycheck." When life gets turbulent, you lack the deep biological reserves required to bounce back immediately. Your current challenge is no longer about fixing a problem; it is about preservation, refinement, and expanding your capacity for stress.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">The OJAS WAY Protocol: Your Blueprint for Vitality</h3>
          <p>To optimize the Fragile Equilibrium, we focus on identifying your non-negotiables, optimizing your recovery, and building deep, sustainable resilience.</p>
          
          <p><strong>1. Circadian & Sleep Rhythm</strong><br/>
          <em>The Ideal:</em> Optimize your sleep architecture, not just duration. Ensure your bedroom is pitch black, keep the temperature around 18°C (65°F), and view natural sunlight within 20 minutes of waking to anchor your circadian clock.<br/>
          <em>The Alternative:</em> If you cannot control your environment, invest in a high-quality sleep mask and earplugs. Protect the sleep you are getting.</p>
          
          <p><strong>2. Metabolic & Dietary Velocity</strong><br/>
          <em>The Ideal:</em> Eat with the sun. Consume your largest, most complex meal at lunchtime when your digestive capacity is at its peak. Keep your dinners light and finish eating at least 3 hours before bed to ensure your body focuses on cellular repair overnight, not digestion.<br/>
          <em>The Alternative:</em> If a heavy lunch makes you tired, focus instead on the 3-hour fasting window before bed. This single habit will dramatically deepen your resilience.</p>
          
          <p><strong>3. Cognitive & Nervous System Calibration</strong><br/>
          <em>The Ideal:</em> Begin introducing "hormetic stress"—short, controlled bursts of physical stress that train your nervous system to adapt. This includes cold exposure, saunas, or high-intensity interval training.<br/>
          <em>The Alternative:</em> End your daily warm shower with 30 seconds of pure cold water. Focus on controlling your breath and remaining calm in the discomfort.</p>
          
          <h3 style="color: #C49A2A; margin-top: 32px;">Your Immediate 24-Hour Action Plan</h3>
          <p>Identify your Anchor Habit—the one single routine (e.g., your morning walk, your 8 hours of sleep, your evening reading) that keeps you sane. For the next 7 days, protect this habit relentlessly, no matter what else happens.</p>
          
          <h3 style="margin-top: 32px;">Next Steps:</h3>
          <p>You have built a great foundation. Now, let’s bulletproof it. Book a session with our team to map out a preventive lifestyle strategy that ensures you never fall back into burnout.</p>
          <p><a href="#" style="color: #C49A2A; font-weight: bold;">Secure Your 15-Minute Lifestyle Audit Here &rarr;</a></p>
        `)
      };
      
    default:
      return { subject: "Your OJAS WAY Report", html: baseHtml("<p>Your report is ready.</p>") };
  }
}
