export const VIDEOS = {
  "chin-tucks":           "6ZzD7gMPCUE",
  "wall-angels":          "8DjCK31amn0",
  "wall-clocks":          "6lGMVMqmM6c",
  "glute-bridge":         "wPM8icPu6H8",
  "foam-roller-ham-curl": "6YuHDOPhm6E",
  "pelvic-tilt":          "9eTJxJb7pVA",
  "hip-flexor-stretch":   "YQmpHFfK0Rk",
  "thoracic-extension":   "nYFYEUMkHgQ",
  "open-books":           "Aq5E3c0XqOA",
  "band-scap":            "u4avLfESES4",
  "side-shrug-kb":        "EVskXSqGhUg",
  "band-pull-aparts":     "WqdNDTTe-9g",
  "band-seated-row":      "eOKwM5nHzj4",
  "90-90-hip":            "2BfFBNwDHRI",
  "cat-cow":              "kqnua4rHVVA",
  "levator-stretch":      "p_YkYVLcVx0",
  "rdl":                  "JCXUYuzwNrM",
  "dead-bug":             "nmwgirgXLYM",
  "ham-stretch-standing": "5qpKaJ_Gvk0",
  "prone-y-raise":        "HQD_enEFQlA",
  "kb-crossbody":         "EVskXSqGhUg",
  "body-blade":           "rqNNMnkZ69A",
  "assisted-pullup":      "qYvnQCUUOsI",
  "single-leg-bridge":    "zCdBCN_MTqg",
  "hollow-body":          "L_pMQa4BLyo",
  "couch-stretch":        "UWkxGBPPFaI",
  "child-pose":           "eqVMAPM00GM",
  "doorway-pec":          "WBEVVYgmCGA",
  "tricep-pushup":        "N7ykBIcOMic",
  "wrist-ext-stretch":    "un_hFdC1Usc",
  "thumb-ext-stretch":    "f5TIlQdyK7M",
  "wrist-flex-stretch":   "un_hFdC1Usc",
  "iso-wrist-ext":        "dEJPsEMUVxE",
  "iso-ulnar-dev":        "ouvdpjBGRJg",
  "iso-thumb-ext":        "f5TIlQdyK7M",
  "wrist-eccentric":      "JhFoi-6sM04",
  "finger-ext-band":      "pGBlMgYNQ0c",
  "ulnar-deviation":      "ouvdpjBGRJg",
  "supination-pronation": "OhVxbCpFKhA",
  "radial-nerve-glide":   "qx_NB5I5c-4",
  "ulnar-nerve-glide":    "sRXBj2pYS7s",
};

export const BODY_DAYS = [
  {
    label:"Mon", fullLabel:"Monday — glutes + hamstrings + shoulder activation",
    sections:[
      { title:"Shoulder warm-up", exercises:[
        { id:"b-mon-1", name:"Chin tucks",                  meta:"3 × 10 reps, 2s hold",        note:"Pull chin straight back, not down. Resets cervical spine and releases posterior neck tightness.", tag:"shoulder", pt:true, videoKey:"chin-tucks" },
        { id:"b-mon-2", name:"Wall angels",                 meta:"3 × 10 reps",                  note:"Back and arms flat against wall. Slide arms overhead — stop where they peel off. Serratus does most of the work.", tag:"scap", pt:true, videoKey:"wall-angels" },
        { id:"b-mon-3", name:"Wall clocks",                 meta:"2 × full clock, left side",    note:"Move slowly through each hour. Builds low-trap and rotator cuff control together.", tag:"shoulder", pt:true, videoKey:"wall-clocks" },
      ]},
      { title:"Main work", exercises:[
        { id:"b-mon-4", name:"Glute bridge",                meta:"3 × 15 reps, 2s pause at top", note:"Drive through heels, squeeze hard at top. Tuck pelvis as you rise — that posterior tilt is the correction you're training.", tag:"glute", videoKey:"glute-bridge" },
        { id:"b-mon-5", name:"Foam roller hamstring curl",  meta:"3 × 10 reps",                  note:"Roller between thighs, feet on chair, curl hips up. Slow lowering 3s on the way down.", tag:"ham", videoKey:"foam-roller-ham-curl" },
        { id:"b-mon-6", name:"Supine pelvic tilt hold",    meta:"3 × 30s",                       note:"Flatten lower back into floor, tilt pelvis, hold and breathe. Foundational APT correction pattern.", tag:"core", videoKey:"pelvic-tilt" },
        { id:"b-mon-7", name:"Kneeling hip flexor stretch", meta:"2 × 45s each side",            note:"Half-kneeling, tuck pelvis first, then lean forward. Stretch in front of rear hip — not the low back.", tag:"hip", videoKey:"hip-flexor-stretch" },
      ]},
    ]
  },
  {
    label:"Tue", fullLabel:"Tuesday — scapula + rotator cuff + mobility",
    sections:[
      { title:"PT shoulder block", exercises:[
        { id:"b-tue-1", name:"Foam roller thoracic extension",      meta:"2 × 60s, move up spine",  note:"Roller perpendicular to spine. Opens the upper back — gives the shoulder blade room to rotate.", tag:"shoulder", pt:true, videoKey:"thoracic-extension" },
        { id:"b-tue-2", name:"Open books",                          meta:"2 × 10 each side",         note:"Side-lying, top arm sweeps to ceiling. Breathe into rotation. Key thoracic mobility drill.", tag:"stretch", pt:true, videoKey:"open-books" },
        { id:"b-tue-3", name:"Long band — scapular retraction/elevation", meta:"3 × 12 reps",       note:"Green band anchored low. Pull shoulders up and back — the 'up' trains lower trap to upwardly rotate the scapula.", tag:"scap", pt:true, videoKey:"band-scap" },
        { id:"b-tue-4", name:"Side shrug with kettlebell",          meta:"3 × 12 reps, light KB",    note:"Shrug straight up, 1s hold, lower slowly. Don't roll the shoulder. Left side priority.", tag:"shoulder", pt:true, videoKey:"side-shrug-kb" },
        { id:"b-tue-5", name:"Band pull-aparts",                    meta:"3 × 15 reps",              note:"Arms straight forward, pull band to chest height. Squeeze shoulder blades at end range, 1s hold. Trains mid-trap and rear delts.", tag:"scap", videoKey:"band-pull-aparts" },
        { id:"b-tue-9", name:"Seated band row (feet anchor)",       meta:"3 × 12 reps",              note:"Sit on floor, legs extended, band looped around feet. Pull to lower ribs, elbows close to body. Initiate with the scapula — squeeze shoulder blades before bending the arms.", tag:"scap", videoKey:"band-seated-row" },
      ]},
      { title:"Mobility", exercises:[
        { id:"b-tue-6", name:"90/90 hip stretch",         meta:"2 × 45s each side", note:"Both legs in 90° positions. Rotate through the hips. Key unlock for APT.", tag:"stretch", videoKey:"90-90-hip" },
        { id:"b-tue-7", name:"Cat-cow",                   meta:"2 × 10 slow reps",  note:"Breathe into each direction. Wakes up spinal and shoulder mobility together.", tag:"stretch", videoKey:"cat-cow" },
        { id:"b-tue-8", name:"Levator scapulae stretch",  meta:"2 × 60s each side", note:"Ear to shoulder, nose toward armpit. Most targeted stretch for posterior neck soreness when looking down.", tag:"stretch", videoKey:"levator-stretch" },
      ]},
    ]
  },
  {
    label:"Wed", fullLabel:"Wednesday — hamstring strength + core + shoulder stability",
    sections:[
      { title:"Shoulder warm-up", exercises:[
        { id:"b-wed-1", name:"Chin tucks",      meta:"2 × 10 reps",        note:"Daily frequency matters for cervical reset and neck tightness.", tag:"shoulder", pt:true, videoKey:"chin-tucks" },
        { id:"b-wed-2", name:"Tricep push-ups", meta:"3 × 8–10 reps",      note:"Elbows track close to body. Loads serratus anterior and stabilizes the scapula. Do on knees or wall if painful.", tag:"scap", pt:true, videoKey:"tricep-pushup" },
        { id:"b-wed-3", name:"Prone Y raises",  meta:"3 × 10 reps, 2s hold", note:"Face down, raise arms into Y shape with thumbs up. Most direct lower trap strengthener — addresses backpack-load sensitivity.", tag:"scap", videoKey:"prone-y-raise" },
      ]},
      { title:"Main work", exercises:[
        { id:"b-wed-4", name:"Romanian deadlift (RDL)",      meta:"3 × 10 reps, light or bodyweight", note:"Hinge at hips, feel hamstrings load as you lower. Flat back. Squeeze glutes to stand back up.", tag:"ham", videoKey:"rdl" },
        { id:"b-wed-5", name:"Dead bug",                     meta:"3 × 8 each side",                  note:"Lie on back, arms up, knees at 90°. Lower opposite arm/leg while pressing lower back into floor.", tag:"core", videoKey:"dead-bug" },
        { id:"b-wed-6", name:"Foam roller hamstring curl",   meta:"3 × 10 reps",                      note:"Same as Monday. Progress by slowing the lowering to 4–5s over time.", tag:"ham", videoKey:"foam-roller-ham-curl" },
        { id:"b-wed-7", name:"Standing hamstring stretch",   meta:"2 × 45s each side",                note:"Foot on low surface, lean from hips. Soft knee is fine. Hold — don't bounce.", tag:"stretch", videoKey:"ham-stretch-standing" },
      ]},
    ]
  },
  { label:"Thu", fullLabel:"Thursday — rest", rest:true },
  {
    label:"Fri", fullLabel:"Friday — glutes + core + full shoulder circuit",
    sections:[
      { title:"PT shoulder circuit", exercises:[
        { id:"b-fri-1",  name:"Wall clocks",                           meta:"2 × full clock, left side",  note:"Repeat from Monday. Track whether range has increased through the week.", tag:"shoulder", pt:true, videoKey:"wall-clocks" },
        { id:"b-fri-2",  name:"KB crossbody: down opposite, up same",  meta:"3 × 10 each side",           note:"Trains scapular upward rotation — the exact motion lost in impingement.", tag:"scap", pt:true, videoKey:"kb-crossbody" },
        { id:"b-fri-3",  name:"Body blade / reactor shakes",           meta:"3 × 20–30s each position",   note:"Oscillate at side, then forward, then slightly elevated. Left arm priority.", tag:"shoulder", pt:true, videoKey:"body-blade" },
        { id:"b-fri-4",  name:"Cone tap drill (lying)",                meta:"2 × 30s, controlled taps",   note:"Reach and tap in different positions. Trains end-range shoulder control without load.", tag:"shoulder", pt:true, videoKey:"wall-clocks" },
        { id:"b-fri-5",  name:"Assisted pull-ups",                     meta:"3 × 5–6 reps, heavy assist", note:"Initiate by depressing and retracting the scapula before bending elbows.", tag:"scap", pt:true, videoKey:"assisted-pullup" },
        { id:"b-fri-6",  name:"Band pull-aparts",                      meta:"3 × 15 reps",                note:"Bookend the week with this. Clearest direct antagonist to the impingement pattern.", tag:"scap", videoKey:"band-pull-aparts" },
        { id:"b-fri-10", name:"Seated band row (feet anchor)",         meta:"3 × 12 reps",                note:"Same as Tuesday. By Friday your scapular initiation should feel cleaner than day one.", tag:"scap", videoKey:"band-seated-row" },
      ]},
      { title:"APT work", exercises:[
        { id:"b-fri-7", name:"Single-leg glute bridge",      meta:"3 × 10 each side",     note:"Forces each glute independently. Keep hips level, tuck pelvis on the way up.", tag:"glute", videoKey:"single-leg-bridge" },
        { id:"b-fri-8", name:"Hollow body hold",             meta:"3 × 20–30s",            note:"Lower back pressed into floor, legs extended at 30–45°. Scale by bending knees more.", tag:"core", videoKey:"hollow-body" },
        { id:"b-fri-9", name:"Kneeling hip flexor stretch",  meta:"2 × 60s each side",    note:"Daily hip flexor time is the long game for APT.", tag:"hip", videoKey:"hip-flexor-stretch" },
      ]},
    ]
  },
  {
    label:"Sat", fullLabel:"Saturday — full mobility flow",
    sections:[
      { title:"Shoulder + neck mobility", exercises:[
        { id:"b-sat-1", name:"Chin tucks",                  meta:"3 × 10",                       note:"Daily minimum. Keeps suboccipitals from dragging on the posterior neck.", tag:"shoulder", pt:true, videoKey:"chin-tucks" },
        { id:"b-sat-2", name:"Foam roller thoracic extension", meta:"2 × 90s, move slowly up spine", note:"More time here on the weekend. Upstream of everything.", tag:"shoulder", pt:true, videoKey:"thoracic-extension" },
        { id:"b-sat-3", name:"Open books",                  meta:"2 × 10 each side",             note:"Hold the open position 3–5s for more thoracic benefit.", tag:"stretch", pt:true, videoKey:"open-books" },
        { id:"b-sat-4", name:"Wall angels",                 meta:"2 × 10 slow reps",             note:"Track your range week to week — one of the best indicators of shoulder progress.", tag:"scap", pt:true, videoKey:"wall-angels" },
        { id:"b-sat-5", name:"Levator scapulae stretch",    meta:"2 × 60s each side",            note:"Key for posterior neck tightness. Do whenever the neck flares up.", tag:"stretch", videoKey:"levator-stretch" },
        { id:"b-sat-6", name:"Doorway pec stretch",         meta:"2 × 45s each side, elbow 90°", note:"Tight pecs pull shoulders forward and load the interscapular area all day.", tag:"stretch", videoKey:"doorway-pec" },
      ]},
      { title:"APT + hip mobility", exercises:[
        { id:"b-sat-7", name:"Couch stretch",               meta:"2 × 60s each side", note:"Rear foot elevated, tuck pelvis before leaning forward. Weekend priority.", tag:"hip", videoKey:"couch-stretch" },
        { id:"b-sat-8", name:"90/90 hip stretch",           meta:"2 × 60s each side", note:"More time in this position. Rock gently forward if comfortable.", tag:"stretch", videoKey:"90-90-hip" },
        { id:"b-sat-9", name:"Cat-cow + child's pose flow", meta:"5 min easy",         note:"Close the week gently. Connect breath to movement.", tag:"stretch", videoKey:"child-pose" },
      ]},
    ]
  },
  { label:"Sun", fullLabel:"Sunday — rest", rest:true },
];

export const WRIST_EXERCISES = [
  { id:"w-1",  name:"Wrist extensor stretch",       tag:"stretch",  note:"Arm out, palm down, use other hand to gently pull fingers toward you. Hold still — no bouncing.",                                             baseSets:3, baseDuration:"20s",       baseRest:"15s",  type:"stretch",   videoKey:"wrist-ext-stretch" },
  { id:"w-2",  name:"Thumb extensor stretch",        tag:"stretch",  note:"Gently pull thumb down and across palm. Feel the stretch along the back of the thumb and wrist.",                                             baseSets:3, baseDuration:"20s",       baseRest:"15s",  type:"stretch",   videoKey:"thumb-ext-stretch" },
  { id:"w-3",  name:"Wrist flexor stretch",          tag:"stretch",  note:"Arm out, palm up, gently pull fingers back toward you. Covers the underside of the forearm.",                                                 baseSets:3, baseDuration:"20s",       baseRest:"15s",  type:"stretch",   videoKey:"wrist-flex-stretch" },
  { id:"w-4",  name:"Isometric wrist extension",     tag:"iso",      note:"Press back of hand against a surface or your other palm. Hold the push — wrist doesn't move. Target 4–5/10 effort max.",                     baseSets:3, baseDuration:"35s",       baseRest:"45s",  type:"iso",       videoKey:"iso-wrist-ext",     progressNote:"Progress +5s/week if pain stays ≤2. Target is 45s." },
  { id:"w-5",  name:"Isometric ulnar deviation",     tag:"iso",      note:"Wrist in neutral, press the pinky side of your hand against your other palm or a table edge. Hold without moving.",                           baseSets:3, baseDuration:"35s",       baseRest:"45s",  type:"iso",       videoKey:"iso-ulnar-dev" },
  { id:"w-6",  name:"Isometric thumb extension",     tag:"iso",      note:"Press thumb outward against your other hand. Hold without movement. Gentle effort — thumb tendons are small.",                                baseSets:3, baseDuration:"35s",       baseRest:"45s",  type:"iso",       videoKey:"iso-thumb-ext" },
  { id:"w-7",  name:"Wrist extensor eccentric curl", tag:"strength", note:"Palm down, light dumbbell. Use other hand to lift, then slowly lower under control (4s down). The slow lowering is the treatment.",          baseSets:2, baseReps:8,               baseWeight:"0.5–1 lb",       type:"strength", videoKey:"wrist-eccentric",   progressNote:"Progress: 2×8 → 2×10 → 3×8 → 3×10 over 3–4 weeks." },
  { id:"w-8",  name:"Finger extension with band",    tag:"strength", note:"Band looped around all fingers. Spread fingers open against resistance, hold 1s at open, return slowly.",                                     baseSets:2, baseReps:10,              baseWeight:"Light #64 band", type:"strength", videoKey:"finger-ext-band" },
  { id:"w-9",  name:"Ulnar deviation with weight",   tag:"strength", note:"Wrist in neutral, light dumbbell held vertically. Tilt wrist toward pinky side, hold 1s, return slowly.",                                    baseSets:2, baseReps:8,               baseWeight:"0.5–1 lb",       type:"strength", videoKey:"ulnar-deviation" },
  { id:"w-10", name:"Forearm supination/pronation",  tag:"strength", note:"Hold dumbbell at the end for leverage. Slowly rotate forearm palm-up then palm-down. 3s each direction.",                                    baseSets:2, baseReps:"8 each way",    baseWeight:"0.5–1 lb",       type:"strength", videoKey:"supination-pronation" },
  { id:"w-11", name:"Radial nerve glide",            tag:"neural",   note:"Arm at side, fist with thumb inside. Extend elbow, tilt head away. Gently oscillate 10×. Should feel like a mild pull, never sharp.",       baseSets:2, baseReps:"10 osc.",        baseRest:"30s",  type:"neural",    videoKey:"radial-nerve-glide" },
  { id:"w-12", name:"Ulnar nerve glide",             tag:"neural",   note:"Elbow bent to 90°, wrist extended back, bring hand toward ear. Slow and deliberate. Stop if tingling into pinky or ring finger.",            baseSets:2, baseReps:"10 osc.",        baseRest:"30s",  type:"neural",    videoKey:"ulnar-nerve-glide" },
];

export const TAG_COLORS = {
  glute:    { bg:"#E6F1FB", text:"#0C447C" },
  ham:      { bg:"#E1F5EE", text:"#085041" },
  core:     { bg:"#FAEEDA", text:"#633806" },
  stretch:  { bg:"#F1EFE8", text:"#5F5E5A" },
  hip:      { bg:"#FAECE7", text:"#712B13" },
  shoulder: { bg:"#EEEDFE", text:"#3C3489" },
  scap:     { bg:"#FAEEDA", text:"#633806" },
  iso:      { bg:"#EEEDFE", text:"#3C3489" },
  strength: { bg:"#E1F5EE", text:"#085041" },
  neural:   { bg:"#FAEEDA", text:"#633806" },
};
