// Progression ladders for each exercise that can advance
// Each level: { meta, note } — replaces the static card text at that level
// Stretches/mobility have no ladder (they never regress)

export const PROGRESSIONS = {
  "b-mon-4": { // Glute bridge
    name: "Glute bridge",
    levels: [
      { week: 1, meta: "3 × 15 reps, 2s pause at top",      note: "Drive through heels, squeeze hard at top. Tuck pelvis as you rise — posterior tilt is the correction you're training." },
      { week: 2, meta: "3 × 20 reps, 2s pause at top",      note: "Same cue — longer set means the last 5 reps are where the adaptation happens. Don't rush them." },
      { week: 3, meta: "3 × 15 reps, 3s hold at top",       note: "Longer hold increases time under tension without adding reps. Really squeeze the glutes at the top." },
      { week: 4, meta: "3 × 20 reps, 3s hold at top",       note: "This is the peak of bilateral glute bridge. After this you move to single-leg." },
      { week: 5, meta: "3 × 12 each side, single-leg",      note: "One leg extended, drive through the planted heel. Keep hips level — that's the whole challenge. This is already Friday's exercise." },
      { week: 6, meta: "3 × 15 each side, single-leg",      note: "Same form, more reps. If hips are still dropping, go back to week 5." },
      { week: 7, meta: "3 × 12 each side, single-leg + band", note: "Loop a resistance band above the knees. Push outward against the band the entire time — activates glute med." },
    ]
  },
  "b-mon-5": { // Foam roller hamstring curl
    name: "Foam roller hamstring curl",
    levels: [
      { week: 1, meta: "3 × 10 reps, 3s lower",             note: "Roller between thighs, feet on chair, curl hips up. The slow lowering is where the work happens — don't drop." },
      { week: 2, meta: "3 × 12 reps, 3s lower",             note: "Two more reps. Keep the 3s lowering tempo — if you can't, drop back to 10." },
      { week: 3, meta: "3 × 10 reps, 4s lower",             note: "Slower eccentric is harder than more reps. 4 full seconds on the way down, controlled." },
      { week: 4, meta: "3 × 12 reps, 4s lower",             note: "Peak difficulty for this setup. If this feels solid, you're ready to graduate." },
      { week: 5, meta: "3 × 10 reps, 5s lower",             note: "5-second lowering is the ceiling here. This is serious eccentric load." },
      { week: 6, meta: "Nordic curl negatives, 3 × 5, 5s lower", note: "Kneel on a pad, anchor feet under something heavy. Lower your body toward the floor as slowly as possible. This is the progression from the roller curl — same pattern, much harder." },
      { week: 7, meta: "Nordic curl negatives, 3 × 8, 5s lower", note: "More reps. Eventually you'll be able to curl back up — that's a full Nordic. You're not there yet and that's fine." },
    ]
  },
  "b-mon-6": { // Supine pelvic tilt hold
    name: "Supine pelvic tilt hold",
    levels: [
      { week: 1, meta: "3 × 30s hold",                      note: "Flatten lower back into floor, tilt pelvis, hold and breathe. Foundational APT correction pattern." },
      { week: 2, meta: "3 × 40s hold",                      note: "Longer hold. The challenge is maintaining the tilt while breathing — don't hold your breath." },
      { week: 3, meta: "3 × 45s hold",                      note: "Near the ceiling for this static hold. Focus shifts to breathing quality." },
      { week: 4, meta: "3 × 30s hold + leg tap",            note: "Hold the pelvic tilt, then slowly tap one heel to the floor and return. Like a dead bug lite — pelvis must not move." },
      { week: 5, meta: "3 × 10 reps with alternating heel taps", note: "Full alternating heel taps while maintaining posterior tilt. This is bridging into dead bug territory." },
    ]
  },
  "b-wed-4": { // RDL
    name: "Romanian deadlift (RDL)",
    levels: [
      { week: 1, meta: "3 × 10 reps, bodyweight",           note: "Hinge at hips, feel hamstrings load as you lower. Flat back. Squeeze glutes to stand back up." },
      { week: 2, meta: "3 × 12 reps, bodyweight",           note: "More reps, same tempo. If form breaks before 12, stop there." },
      { week: 3, meta: "3 × 10 reps, light dumbbells",      note: "Add load — 5–10 lb dumbbells. The weight makes the hinge pattern more honest. Keep the back flat." },
      { week: 4, meta: "3 × 12 reps, light dumbbells",      note: "Same weight, more reps. Should feel like the last 3 reps are genuinely challenging." },
      { week: 5, meta: "3 × 10 reps, moderate dumbbells",   note: "Increase weight — 15–20 lb. Start feeling like a real deadlift. 3s lowering tempo." },
      { week: 6, meta: "3 × 10 reps, moderate weight, 3s down", note: "Slow eccentric adds load without increasing weight. Control the descent entirely." },
      { week: 7, meta: "3 × 8 reps, heavier dumbbells",     note: "Heavier, fewer reps. You're building real posterior chain strength now." },
    ]
  },
  "b-wed-5": { // Dead bug
    name: "Dead bug",
    levels: [
      { week: 1, meta: "3 × 8 each side, knees bent 90°",   note: "Lie on back, arms up, knees at 90°. Lower opposite arm/leg while pressing lower back into floor. Brace without breath-holding." },
      { week: 2, meta: "3 × 10 each side, knees bent 90°",  note: "Two more reps. The lower back must stay glued to the floor — if it lifts, that's your limit." },
      { week: 3, meta: "3 × 10 each side, leg more extended", note: "Straighten the lowering leg more — increases the lever arm. Stop short of where your back lifts." },
      { week: 4, meta: "3 × 10 each side, leg fully extended", note: "Full leg extension. This is significantly harder. If lower back lifts at all, bend the knee." },
      { week: 5, meta: "3 × 10 each side + 2s hold",        note: "Pause for 2 seconds at the bottom of each rep. Kills momentum — forces true stability." },
      { week: 6, meta: "3 × 10 each side + light dumbbell", note: "Hold a light dumbbell (2–5 lb) in the opposite hand. The added weight makes the anti-extension demand much higher." },
    ]
  },
  "b-fri-7": { // Single-leg glute bridge
    name: "Single-leg glute bridge",
    levels: [
      { week: 1, meta: "3 × 10 each side",                  note: "One leg extended, drive through planted heel. Keep hips level — that's the whole challenge." },
      { week: 2, meta: "3 × 12 each side",                  note: "More reps. If hips drop before 12, stop and note where form breaks." },
      { week: 3, meta: "3 × 12 each side, 2s hold at top",  note: "Hold at the top. Really squeeze the glute of the working leg." },
      { week: 4, meta: "3 × 15 each side, 2s hold at top",  note: "Peak for bodyweight single-leg bridge. Solid here means your glutes are genuinely strong." },
      { week: 5, meta: "3 × 10 each side, foot elevated",   note: "Put the planted foot on a low surface (step, book). Increases range of motion significantly." },
    ]
  },
  "b-fri-8": { // Hollow body hold
    name: "Hollow body hold",
    levels: [
      { week: 1, meta: "3 × 20s, knees bent",               note: "Lower back pressed into floor, knees bent at 90°, arms overhead. Brace the core — don't hold your breath." },
      { week: 2, meta: "3 × 30s, knees bent",               note: "Longer hold with bent knees. If lower back lifts at any point, reset." },
      { week: 3, meta: "3 × 20s, legs at 45°",              note: "Extend legs to 45°. Much harder lever. Back stays on the floor or you bend the knees more." },
      { week: 4, meta: "3 × 30s, legs at 45°",              note: "30 seconds at 45° is serious core work. This is where most people plateau." },
      { week: 5, meta: "3 × 20s, legs fully extended",      note: "Legs as low as you can go while keeping lower back on the floor. This is the full hollow body." },
      { week: 6, meta: "3 × 30s, legs fully extended",      note: "Full hollow body for 30 seconds. Gymnasts live here. You've earned it." },
    ]
  },
  "b-wed-3": { // Prone Y raises
    name: "Prone Y raises",
    levels: [
      { week: 1, meta: "3 × 10 reps, bodyweight, 2s hold",  note: "Face down, raise arms into Y shape with thumbs up. Hold 2s at top. Most direct lower trap strengthener." },
      { week: 2, meta: "3 × 12 reps, bodyweight, 2s hold",  note: "More reps. The hold at the top is non-negotiable — that's where the lower trap fires." },
      { week: 3, meta: "3 × 10 reps, light weight, 3s hold", note: "Add very light weight (1–2 lb, even soup cans). The 3s hold makes it significantly harder." },
      { week: 4, meta: "3 × 12 reps, light weight, 3s hold", note: "More reps with load. If you feel this in your neck instead of shoulder blades, lower the weight." },
      { week: 5, meta: "3 × 10 reps, add Y+T combo",        note: "Do 5 Y raises then 5 T raises (arms straight out to sides). Hits lower and mid trap together." },
    ]
  },
  "b-mon-3": { // Wall clocks
    name: "Wall clocks",
    levels: [
      { week: 1, meta: "2 × full clock, left side",          note: "Move slowly through each hour. Builds low-trap and rotator cuff control together." },
      { week: 2, meta: "2 × full clock, both sides",         note: "Add the right side for comparison and symmetry work." },
      { week: 3, meta: "3 × full clock, both sides, 2s hold at each position", note: "Pause 2s at each hour position. The holds expose weak points in the arc." },
      { week: 4, meta: "3 × full clock, move slightly away from wall", note: "Take one small step away. Less wall support means more active shoulder stability required." },
    ]
  },
  "b-tue-5": { // Band pull-aparts
    name: "Band pull-aparts",
    levels: [
      { week: 1, meta: "3 × 15 reps, light band",           note: "Arms straight forward, pull band to chest height. Squeeze shoulder blades at end range, 1s hold." },
      { week: 2, meta: "3 × 20 reps, light band",           note: "More reps. Form check: arms stay straight, movement is from the shoulder blades not the elbows." },
      { week: 3, meta: "3 × 15 reps, medium band",          note: "Step up the resistance. Fewer reps is fine — quality of the end-range squeeze matters most." },
      { week: 4, meta: "3 × 15 reps, medium band, 2s hold", note: "2-second hold at full pull-apart. Feels easy until it doesn't." },
      { week: 5, meta: "4 × 15 reps, medium band",          note: "Extra set. This is now a real mid/lower trap training exercise, not just a warm-up." },
    ]
  },
  "b-tue-9": { // Seated band row
    name: "Seated band row (feet anchor)",
    levels: [
      { week: 1, meta: "3 × 12 reps, light band",           note: "Sit on floor, legs extended, band around feet. Pull to lower ribs. Initiate with scapula, not arms." },
      { week: 2, meta: "3 × 15 reps, light band",           note: "More reps. The scapular initiation cue is everything — arms are just along for the ride." },
      { week: 3, meta: "3 × 12 reps, medium band",          note: "Heavier band. Should feel the mid-back working hard on the last 4 reps." },
      { week: 4, meta: "3 × 12 reps, medium band, 2s hold", note: "Hold the pulled position for 2s. Squeeze the shoulder blades hard." },
      { week: 5, meta: "4 × 12 reps, medium band",          note: "Extra set. You're now doing real seated cable row volume — just with a band." },
    ]
  },
};

// Which exercise IDs are strength/eccentric (can regress)
export const PROGRESSABLE_IDS = new Set(Object.keys(PROGRESSIONS));

// IDs that are stretches/mobility — never regress, no level tracking
export const STATIC_IDS = new Set([
  "b-mon-7", "b-tue-6", "b-tue-7", "b-tue-8",
  "b-wed-7", "b-fri-9", "b-sat-5", "b-sat-6",
  "b-sat-7", "b-sat-8", "b-sat-9",
]);

// Get the current exercise meta/note for a given exercise at a given level (1-indexed)
export function getLevel(exId, level) {
  const prog = PROGRESSIONS[exId];
  if (!prog) return null;
  const idx = Math.max(0, Math.min(level - 1, prog.levels.length - 1));
  return { ...prog.levels[idx], maxLevel: prog.levels.length };
}

// Given this week's completion data, compute next week's level
// completionDays: number of days completed this week (0-6)
// avgPain: average pain score this week (0-5), null if no data
// currentLevel: current level (1-indexed)
// returns: { newLevel, reason }
export function computeNextLevel(currentLevel, completionDays, avgPain, maxLevel) {
  // Missed the whole week
  if (completionDays === 0) {
    const next = Math.max(1, currentLevel - 2);
    return { newLevel: next, reason: "Missed week — dropped 2 levels." };
  }
  // Completed fewer than 2 days
  if (completionDays < 2) {
    const next = Math.max(1, currentLevel - 1);
    return { newLevel: next, reason: "Under 2 days completed — dropped 1 level." };
  }
  // Pain spike
  if (avgPain !== null && avgPain >= 5) {
    const next = Math.max(1, currentLevel - 1);
    return { newLevel: next, reason: "Pain too high — dropped 1 level." };
  }
  // Hold: 2-3 days or pain 3-4
  if (completionDays < 4 || (avgPain !== null && avgPain >= 3)) {
    return { newLevel: currentLevel, reason: "Good effort — holding level. Hit 4+ days with pain ≤2 to advance." };
  }
  // Advance: 4+ days, pain ≤2
  if (currentLevel < maxLevel) {
    return { newLevel: currentLevel + 1, reason: "Advanced! 4+ days completed with low pain." };
  }
  return { newLevel: currentLevel, reason: "At max level — maintaining." };
}
