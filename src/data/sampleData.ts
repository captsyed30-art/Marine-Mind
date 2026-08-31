import { TrainingCategory, Course, Feature, EcosystemStep, RoadmapStage } from '../types';

export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    id: 'personal-watercraft',
    title: 'Personal Watercraft / Jet Ski',
    emoji: '🚤',
    iconName: 'Activity',
    description: 'Safe personal watercraft operation, high-speed jet control, off-throttle awareness, and instructor coaching techniques.',
    topicsSample: ['Jet Pump & Throttle Control', 'Off-Throttle Steering Dynamics', 'Safety Lanyards & Kill Switches', 'Instructor Coaching Principles']
  },
  {
    id: 'powerboat',
    title: 'Powerboat',
    emoji: '⚓',
    iconName: 'Anchor',
    description: 'Powerboat handling up to 12m, close-quarters manoeuvring, planing trim, slipway launch, and harbour seamanship.',
    topicsSample: ['Vessel Pre-Start Inspections', 'Low-Speed Pivot Points & Prop Walk', 'Planing Speeds & Trim Settings', 'Marina Berthing & Mooring']
  },
  {
    id: 'yacht',
    title: 'Yacht',
    emoji: '🛥️',
    iconName: 'Compass',
    description: 'Operational handling, near-shore pilotage, twin-engine control, and bridge management for power-driven yachts up to 24m.',
    topicsSample: ['Twin-Engine Vessel Handling', 'Near-Shore Passage Planning', 'Electronic Navigation & Chart Plotting', 'Stern-to Mediterranean Berthing']
  },
  {
    id: 'yacht-master-gt',
    title: 'Yacht Master / GT',
    emoji: '🚢',
    iconName: 'Ship',
    description: 'Comprehensive master qualifications for vessels above 24m and commercial tonnage tiers (100 GT, 200 GT, and 500 GT).',
    topicsSample: ['Vessels Above 24m Seamanship', '100 GT Commercial Yacht Master', '200 GT Watchkeeping & Stability', '500 GT Bridge Resource Management']
  },
  {
    id: 'marine-communications',
    title: 'Marine Communications',
    emoji: '📡',
    iconName: 'Radio',
    description: 'VHF marine radio communication, NATO phonetic alphabet, standard marine vocabulary, and distress procedure protocols.',
    topicsSample: ['VHF Channel Operations & Watchkeeping', 'Phonetic Alphabet & SMCP Phrases', 'Digital Selective Calling (DSC)', 'Mayday, Pan-Pan & Securité Calls']
  },
  {
    id: 'marine-safety',
    title: 'Marine Safety',
    emoji: '🛟',
    iconName: 'LifeBuoy',
    description: 'Core marine safety awareness, emergency action plans, hypothermia mitigation, and personal flotation standards.',
    topicsSample: ['Lifejacket & Harness Standards', 'Marine Fire Extinguisher Tactics', 'Distress Beacon Activation (EPIRB)', 'Cold Water Shock Mitigation']
  },
  {
    id: 'marine-engineering',
    title: 'Marine Engineering',
    emoji: '⚙️',
    iconName: 'Wrench',
    description: 'Marine diesel engine systems, machinery up to 750 kW, fuel/cooling circuits, preventative maintenance, and fault diagnosis.',
    topicsSample: ['Diesel Engine Operation (up to 750 kW)', 'Fuel & Cooling Circuit Checks', 'Shaft Alignment & Stern Glands', 'Engine Room Safety & Diagnostics']
  },
  {
    id: 'diving',
    title: 'Diving',
    emoji: '🤿',
    iconName: 'Waves',
    description: 'Marine diving fundamentals, underwater equipment operation, dive planning, buoyancy control, and sub-surface safety.',
    topicsSample: ['Diving Physics & Gas Laws', 'Scuba Equipment & BCD Control', 'No-Decompression Table Planning', 'Underwater Emergency Signals & Ascent']
  },
  {
    id: 'crowd-management',
    title: 'Crowd Management',
    emoji: '👥',
    iconName: 'Shield',
    description: 'Passenger vessel muster protocols, emergency crowd control, panic prevention, and clear life-saving communications.',
    topicsSample: ['Passenger Muster Station Protocols', 'Human Behaviour in Marine Crisis', 'Emergency Public Announcements', 'Disability & Passenger Care']
  },
  {
    id: 'basic-safety-training',
    title: 'Basic Safety Training',
    emoji: '🛡️',
    iconName: 'Award',
    description: 'Foundational safety training covering survival at sea, basic fire fighting, first aid awareness, and personal safety.',
    topicsSample: ['Personal Survival Techniques (PST)', 'Basic Fire Fighting on Vessels', 'Elementary First Aid at Sea', 'Personal Safety & Social Responsibilities']
  },
  {
    id: 'sports-recreational-safety',
    title: 'Sports & Recreational Safety',
    emoji: '🏄',
    iconName: 'Activity',
    description: 'Safety management and hazard awareness for recreational water sports, towed watercraft, and beach operations.',
    topicsSample: ['Water Sports Hazard Assessment', 'Towed Inflatable & Waterski Safety', 'Safety Boat Escort Techniques', 'Participant Briefing Standards']
  },
  {
    id: 'other-maritime-training',
    title: 'Other Maritime Training',
    emoji: '🧭',
    iconName: 'GraduationCap',
    description: 'Specialised maritime disciplines, future modular training pathways, coastal pilotage, and maritime environmental management.',
    topicsSample: ['Coastal Pilotage & Tidal Gates', 'MARPOL Marine Environmental Care', 'Electronic Chart Systems (ECDIS)', 'Custom Modular Pathways']
  }
];

export const COURSES_CATALOG: Course[] = [
  // 1. Jet Ski Course
  {
    id: 'MM-JET-001',
    title: 'Jet Ski Course',
    shortDescription: 'Foundational training in personal watercraft operation, high-speed jet control, off-throttle awareness, and waterway safety.',
    description: 'Foundational training in personal watercraft operation, high-speed jet control, off-throttle awareness, and waterway safety.',
    fullDescription: 'The Jet Ski Course provides comprehensive theoretical and procedural instruction for recreational and entry-level mariners operating personal watercraft. Students explore water-jet propulsion dynamics, low-speed docking, emergency throttle management, safety lanyards, capsizing recovery, and responsible coastal waterway etiquette.',
    category: 'Personal Watercraft / Jet Ski',
    categoryId: 'personal-watercraft',
    subCategory: 'PWC Operation & Safety',
    level: 'Beginner',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Online Interactive',
    image: 'https://images.unsplash.com/photo-1568434771617-640a32cb53fb?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: true,
    createdDate: '2026-01-10',
    courseType: 'Standard Course',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['jet ski', 'pwc', 'personal watercraft', 'seadoo', 'yamaha', 'throttle', 'docking', 'watercraft', 'beginner', 'safety lanyard'],
    learningObjectives: [
      'Understand personal watercraft (PWC) safety equipment, kill cords, and personal flotation devices (PFDs)',
      'Master low-speed close-quarters manoeuvring, docking, and neutral bucket handling',
      'Understand water-jet propulsion dynamics, off-throttle steering loss, and emergency avoidance',
      'Learn capsizing recovery orientation, deep-water reboarding, and post-ride engine maintenance'
    ],
    prerequisites: 'Basic swimming ability and water confidence recommended. Open to all aspiring watercraft operators.',
    assessmentInfo: 'Formative modular knowledge checks and interactive scenario drills at the end of each module.',
    relatedCourseIds: ['MM-JET-INST-001', 'MM-PB-012', 'MM-SPT-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Recreational riders, personal watercraft owners, charter guests, and marine sports enthusiasts.',
    whatToExpect: [
      'Comprehensive understanding of water-jet propulsion mechanics and responsiveness',
      'Confidence in slow-speed harbour handling and crowded slipway docking',
      'Clear instinctive awareness of off-throttle steering limitations',
      'Knowledge of local waterway speed limits, swimmer buffer zones, and marine etiquette'
    ],
    modules: [
      {
        id: 'mm-jet-mod-1',
        number: 1,
        title: 'Module 1: PWC Equipment & Pre-Launch Safety',
        description: 'Vessel inspection routines, kill-cord lanyards, personal flotation devices, and fuel system checks.',
        lessons: [
          'Personal Protective Equipment (PFD & Neoprene gear)',
          'Safety Lanyard & Emergency Engine Cut-Off Switch',
          'Pre-Launch Hull, Jet Intake & Bilge Inspection',
          'Fuel Management & Ventilation Precautions'
        ]
      },
      {
        id: 'mm-jet-mod-2',
        number: 2,
        title: 'Module 2: Jet Propulsion & Low-Speed Handling',
        description: 'Water-jet thrust dynamics, off-throttle awareness, low-speed manoeuvring, and docking.',
        lessons: [
          'Principles of Water-Jet Thrust & Impeller Propulsion',
          'Understanding Off-Throttle Steering Loss & Avoidance',
          'Low-Speed Approaching, Turning, and Slipway Docking',
          'Holding Position & Reverse Bucket Controls'
        ]
      },
      {
        id: 'mm-jet-mod-3',
        number: 3,
        title: 'Module 3: Open Water Operation & High-Speed Control',
        description: 'Wave crossing, maintaining lookout, wake avoidance, and collision avoidance.',
        lessons: [
          'High-Speed Balance, Stance & Trim Adjustment',
          'Crossing Wakes & Wave Negotiation Safely',
          'Situational Lookout & Collision Avoidance (COLREGs)',
          'Speed Zones, Swimmer Separation & Local By-laws'
        ]
      },
      {
        id: 'mm-jet-mod-4',
        number: 4,
        title: 'Module 4: Emergency Procedures & Recovery',
        description: 'Righting capsized craft, towing procedures, and post-ride engine maintenance.',
        lessons: [
          'Capsizing Direction & In-Water Righting Procedures',
          'Re-boarding from Deep Water & Ladder Techniques',
          'Towing Precautions & Towing Speed Limits',
          'Post-Ride Freshwater Flush & Storage Checklist'
        ]
      }
    ]
  },

  // 2. Jet Ski Instructor Course
  {
    id: 'MM-JET-INST-001',
    title: 'Jet Ski Instructor Course',
    shortDescription: 'Instructional methodology, coaching principles, safety boat positioning, and group management for PWC instructors.',
    description: 'Instructional methodology, coaching principles, safety boat positioning, and group management for PWC instructors.',
    fullDescription: 'The Jet Ski Instructor Course prepares experienced mariners to teach and supervise personal watercraft operations. The curriculum focuses on adult teaching pedagogy, structured on-water briefings, progressive skill coaching, fault analysis, safety zone establishment, and group crisis management.',
    category: 'Personal Watercraft / Jet Ski',
    categoryId: 'personal-watercraft',
    subCategory: 'Instructor Qualification',
    level: 'Advanced',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Blended Learning',
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: true,
    createdDate: '2026-01-12',
    courseType: 'Instructor Qualification',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['instructor', 'jet ski instructor', 'pwc instructor', 'teaching', 'coaching', 'supervision', 'group management', 'safety boat'],
    learningObjectives: [
      'Master adult learning principles, structured pre-session briefings, and debriefing frameworks',
      'Learn safety boat positioning, on-water group management, and student observation zones',
      'Develop fault diagnosis techniques for steering errors, throttle balance, and stance flaws',
      'Establish dynamic emergency response procedures for capsizes, injuries, and lost students'
    ],
    prerequisites: 'Demonstrated experience in personal watercraft handling. Prior powerboat or water safety background helpful.',
    assessmentInfo: 'Formative instructional teaching evaluations and simulated group briefing assessments.',
    relatedCourseIds: ['MM-JET-001', 'MM-PB-012', 'MM-SPT-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Experienced PWC riders, watersports centre instructors, safety boat drivers, and resort activity leaders.',
    whatToExpect: [
      'Methodologies for breaking down complex water-jet manoeuvres into teachable steps',
      'Skills to manage multi-craft fleets safely in varied wind and sea conditions',
      'Clear communication protocols for emergency containment on the water',
      'Professional standards for risk assessments and student welfare'
    ],
    modules: [
      {
        id: 'mm-jinst-mod-1',
        number: 1,
        title: 'Module 1: Principles of Maritime Instruction',
        description: 'Adult learning models, learning styles, lesson structure, and briefing methodologies.',
        lessons: [
          'Adult Learning Theories & Visual/Kinaesthetic Feedback',
          'Structuring the Pre-Launch Shore Briefing',
          'Establishing Water Boundaries & Communication Signals',
          'Post-Session Debriefing & Constructive Feedback'
        ]
      },
      {
        id: 'mm-jinst-mod-2',
        number: 2,
        title: 'Module 2: On-Water Group Management',
        description: 'Safety boat positioning, lead/sweep formations, and supervising mixed-ability groups.',
        lessons: [
          'Safety Craft Positioning & Line-of-Sight Supervision',
          'Managing Spread in Mixed Ability Groups',
          'Handling Wind Drift, Tidal Sets & Changing Sea States',
          'Managing Radio Communications with Shore Base'
        ]
      },
      {
        id: 'mm-jinst-mod-3',
        number: 3,
        title: 'Module 3: Fault Diagnosis & Skill Progression',
        description: 'Detecting rider errors, posture corrections, throttle hesitation, and docking coaching.',
        lessons: [
          'Diagnosing Low-Speed Steering Deficiencies',
          'Correcting Stance Flaws & Wave-Impact Cushioning',
          'Coaching Gentle Docking & Stern Line Tie-Up',
          'Progressive Drills: Slalom, Figure-Eight & Emergency Stop'
        ]
      },
      {
        id: 'mm-jinst-mod-4',
        number: 4,
        title: 'Module 4: Safety Oversight & Incident Protocols',
        description: 'Emergency response, capsizing extraction, first aid coordination, and incident reporting.',
        lessons: [
          'Instructor Response to Multiple Capsizes',
          'Recovering Unconscious or Injured Riders onto Sleds',
          'Emergency Towing & Return to Shore Base',
          'Risk Assessments, Incident Reporting & Centre SOPs'
        ]
      }
    ]
  },

  // 3. Basic Power Boat up to 12 m
  {
    id: 'MM-PB-012',
    title: 'Basic Power Boat up to 12 m',
    shortDescription: 'Core handling and seamanship for power-driven craft up to 12 metres in length across coastal and inland waters.',
    description: 'Core handling and seamanship for power-driven craft up to 12 metres in length across coastal and inland waters.',
    fullDescription: 'The Basic Power Boat up to 12 m course delivers foundational operational training for motorboats, RIBs, and displacement hulls. Mariners learn pre-start vessel checks, low-speed pivot manoeuvres, propeller walk compensation, planing attitude, anchoring methods, and coastal navigation rules.',
    category: 'Powerboat',
    categoryId: 'powerboat',
    subCategory: 'Small Craft Seamanship',
    level: 'Beginner',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Online Interactive',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: true,
    createdDate: '2026-01-15',
    courseType: 'Standard Course',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['powerboat', 'rib', 'motorboat', '12m', 'docking', 'anchoring', 'prop walk', 'seamanship', 'beginner'],
    learningObjectives: [
      'Understand essential vessel safety checks, engine pre-start inspections, and kill-cord operation',
      'Learn low-speed boat handling, pivot points, and prop-walk characteristics in confined marinas',
      'Master berthing alongside, springing off pontoons, and anchoring with proper chain scope',
      'Apply international collision regulations (COLREGs) and coastal distress protocols'
    ],
    prerequisites: 'None. Open to all aspiring motorboat skippers and crew.',
    assessmentInfo: 'Formative modular quizzes covering seamanship, docking vectors, and collision regulations.',
    relatedCourseIds: ['MM-PDY-024', 'MM-JET-001', 'MM-VHF-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Recreational powerboat owners, RIB drivers, safety boat crews, and charter skippers.',
    whatToExpect: [
      'Calm, repeatable techniques for berthing in challenging cross-winds',
      'Sound understanding of outboard and inboard engine maintenance basics',
      'Practical knowledge of anchor holding ground and chain ratios',
      'Ability to navigate coastal markers, cardinal buoys, and harbour fairways'
    ],
    modules: [
      {
        id: 'mm-pb-mod-1',
        number: 1,
        title: 'Module 1: Vessel Anatomy & Pre-Departure Checks',
        description: 'Hull types, steering systems, outboard/inboard engines, bilge pumps, and safety equipment.',
        lessons: [
          'Hull Types (Planing, Semi-Displacement, Displacement)',
          'Engine Pre-Start Checklist (Oil, Coolant, Fuel, Battery)',
          'Kill Cord Attachment & Engine Cut-Off Integrity',
          'Pre-Departure Crew Safety Briefing & Lifejackets'
        ]
      },
      {
        id: 'mm-pb-mod-2',
        number: 2,
        title: 'Module 2: Close-Quarters Handling & Manoeuvring',
        description: 'Pivot points, transverse thrust (prop walk), windage effects, and low-speed steering.',
        lessons: [
          'Understanding Vessel Pivot Points at Slow Speed',
          'Transverse Thrust (Prop Walk) in Forward & Reverse',
          'Holding Vessel in Fixed Position Against Current',
          'Turning in a Confined Waterway (Three-Point Turn)'
        ]
      },
      {
        id: 'mm-pb-mod-3',
        number: 3,
        title: 'Module 3: Berthing, Mooring & Anchoring',
        description: 'Coming alongside finger pontoons, springing off, picking up moorings, and anchoring.',
        lessons: [
          'Berthing Alongside with Onshore & Offshore Winds',
          'Using Bow & Stern Springs to Control Departure',
          'Securing to Mooring Buoys & Cleat Hitching Techniques',
          'Anchor Types, Scope Calculation & Drag Monitoring'
        ]
      },
      {
        id: 'mm-pb-mod-4',
        number: 4,
        title: 'Module 4: Seamanship, Rules & Emergency Drills',
        description: 'COLREGs rules of the road, high-speed trim, man overboard response, and distress signaling.',
        lessons: [
          'Collision Regulations (Steering & Sailing Rules)',
          'High-Speed Trim Tabs & Power Trim Adjustments',
          'Man Overboard (MOB) Spotting & Recovery Protocol',
          'Emergency Signaling & Flare Deployment Awareness'
        ]
      }
    ]
  },

  // 4. Power Driven Yacht up to 24 m Near Shore
  {
    id: 'MM-PDY-024',
    title: 'Power Driven Yacht up to 24 m Near Shore',
    shortDescription: 'Advanced handling, twin-engine control, near-shore passage planning, and watchkeeping for motor yachts up to 24 metres.',
    description: 'Advanced handling, twin-engine control, near-shore passage planning, and watchkeeping for motor yachts up to 24 metres.',
    fullDescription: 'Designed for skippers and crew operating motor yachts up to 24 metres within near-shore limits. The course covers twin-screw engine mechanics, bow thruster integration, passage pilotage, electronic chart plotters, tidal gates, heavy weather preparedness, and guest safety management.',
    category: 'Yacht',
    categoryId: 'yacht',
    subCategory: 'Power-Driven Yacht Operations',
    level: 'Intermediate',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Theory & Scenario Training',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: true,
    createdDate: '2026-01-22',
    courseType: 'Standard Course',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['yacht', 'motor yacht', '24m', 'twin screw', 'passage planning', 'radar', 'navigation', 'near shore', 'intermediate'],
    learningObjectives: [
      'Master twin-engine differential thrust for precision docking and station keeping',
      'Develop comprehensive near-shore passage plans including tidal stream vectors and safety clearances',
      'Operate marine radar and electronic chart systems (ECDIS/Chartplotters) for coastal pilotage',
      'Manage yacht auxiliary systems: generators, shore power, freshwater, and bilge alarms'
    ],
    prerequisites: 'Basic powerboat or day skipper experience recommended.',
    assessmentInfo: 'Passage planning exercises, navigational scenario drills, and twin-engine vector analysis.',
    relatedCourseIds: ['MM-PB-012', 'MM-YM-024', 'MM-YM-100', 'MM-VHF-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Motor yacht owners, charter skippers, deck officers, and delivery crew operating vessels up to 24m.',
    whatToExpect: [
      'Advanced command of twin-screw manoeuvring without reliance on rudders at low speed',
      'Confidence executing coastal passages by day and night',
      'Thorough knowledge of yacht safety equipment and crew briefing procedures',
      'Understanding of anchoring ground tackle for large displacement hulls'
    ],
    modules: [
      {
        id: 'mm-pdy-mod-1',
        number: 1,
        title: 'Module 1: Twin-Screw Yacht Hydrodynamics',
        description: 'Differential throttle control, split levers, bow/stern thrusters, and windage on high freeboard.',
        lessons: [
          'Twin-Screw Differential Thrust Principles',
          'Spinning a 24m Yacht within Its Own Waterline Length',
          'Bow and Stern Thruster Applications & Limitations',
          'Managing High-Freeboard Windage in Narrow Marinas'
        ]
      },
      {
        id: 'mm-pdy-mod-2',
        number: 2,
        title: 'Module 2: Near-Shore Coastal Passage Planning',
        description: 'Tidal curves, secondary ports, clearance heights, and route appraisal techniques.',
        lessons: [
          'Appraisal & Execution of Near-Shore Routes',
          'Tidal Calculations & Under-Keel Clearance Limits',
          'Identifying Safe Havens & Alternative Anchorages',
          'Marine Weather Forecasts & Sea-State Assessment'
        ]
      },
      {
        id: 'mm-pdy-mod-3',
        number: 3,
        title: 'Module 3: Electronic Navigation & Radar Watchkeeping',
        description: 'Chartplotter configuration, waypoint tracks, cross-track error, and radar collision avoidance.',
        lessons: [
          'ECDIS & Chartplotter Setup (Datums, Contours, Alarms)',
          'Radar Basics (Range Rings, Gain, Sea Clutter, Rain Clutter)',
          'Target Tracking & Closest Point of Approach (CPA)',
          'Blind Pilotage & Night Coastal Navigation'
        ]
      },
      {
        id: 'mm-pdy-mod-4',
        number: 4,
        title: 'Module 4: Yacht Systems & Emergency Procedures',
        description: 'Diesel fuel circuits, fire suppression systems, generator loads, and emergency towing.',
        lessons: [
          'Engine Room Safety & Fixed Fire Suppression (FM200/Novec)',
          'Electrical Systems (AC Shore Power & DC House Banks)',
          'Bilge Manifold Operations & Emergency Dewatering',
          'Managing Onboard Medical & Mechanical Emergencies'
        ]
      }
    ]
  },

  // 5. Yacht Master Above 24 m
  {
    id: 'MM-YM-024',
    title: 'Yacht Master Above 24 m',
    shortDescription: 'Command principles, offshore passage execution, bridge resource management, and ship handling for yachts exceeding 24 metres.',
    description: 'Command principles, offshore passage execution, bridge resource management, and ship handling for yachts exceeding 24 metres.',
    fullDescription: 'The Yacht Master Above 24 m course provides advanced theoretical foundations for captains and chief officers commanding superyachts and large vessels. The syllabus covers open-ocean meteorology, advanced ship handling, complex stability calculations, Bridge Resource Management (BRM), and international regulatory compliance.',
    category: 'Yacht Master / GT',
    categoryId: 'yacht-master-gt',
    subCategory: 'Master Command',
    level: 'Advanced',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Classroom / Simulator',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: true,
    createdDate: '2026-01-28',
    courseType: 'Master Qualification',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['yacht master', 'above 24m', 'superyacht', 'captain', 'bridge management', 'brm', 'ship handling', 'advanced', 'master'],
    learningObjectives: [
      'Apply Bridge Resource Management (BRM) communication loops and situational leadership on large bridges',
      'Analyse oceanic synoptic weather charts, frontal systems, and optimal passage routing',
      'Understand large vessel displacement hydrodynamics, squat effect, and bank suction',
      'Oversee international safety management systems (SMS) and environmental compliance'
    ],
    prerequisites: 'Coastal skipper or equivalent near-shore yacht qualification with significant logged sea time.',
    assessmentInfo: 'Simulated bridge command exercises, synoptic meteorology evaluations, and stability case studies.',
    relatedCourseIds: ['MM-YM-100', 'MM-YM-200', 'MM-YM-500', 'MM-PDY-024'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Superyacht officers, delivery captains, luxury charter masters, and offshore watchkeepers.',
    whatToExpect: [
      'Comprehensive command-level leadership frameworks',
      'Advanced knowledge of ocean routing and heavy weather ship handling',
      'Thorough understanding of large vessel manoeuvring constraints in commercial ports',
      'Mastery of bridge teamwork and error-trapping cultures'
    ],
    modules: [
      {
        id: 'mm-ym024-mod-1',
        number: 1,
        title: 'Module 1: Advanced Ship Handling & Hydrodynamics',
        description: 'Squat effect, shallow water interaction, bank suction, and large yacht inertia.',
        lessons: [
          'Large Displacement Inertia & Stopping Distances',
          'Shallow Water Dynamics: Squat Effect & Trim Changes',
          'Bank Effect & Interaction Between Passing Vessels',
          'Handling Controllable Pitch Propellers (CPP) & Pod Drives'
        ]
      },
      {
        id: 'mm-ym024-mod-2',
        number: 2,
        title: 'Module 2: Oceanic Meteorology & Weather Routing',
        description: 'Synoptic charts, isobar spacing, tropical revolving storms, and routing strategies.',
        lessons: [
          'Reading Synoptic Weather Charts & Isobar Gradients',
          'Frontal Depressions & Secondary Wave Formations',
          'Tropical Revolving Storms (Avoidance Sectors & Dangerous Semicircles)',
          'Ocean Current Optimization (Gulf Stream, Agulhas, Kuroshio)'
        ]
      },
      {
        id: 'mm-ym024-mod-3',
        number: 3,
        title: 'Module 3: Bridge Resource Management (BRM)',
        description: 'Shared mental models, challenge and response culture, fatigue mitigation, and pilot integration.',
        lessons: [
          'Establishing Situational Awareness on Multi-Crew Bridges',
          'Challenge & Response Communication Protocols',
          'Master / Pilot Information Exchange (MPX) Procedures',
          'Watchkeeping Fatigue Management & Rest Hours'
        ]
      },
      {
        id: 'mm-ym024-mod-4',
        number: 4,
        title: 'Module 4: Safety Management & Environmental Compliance',
        description: 'Safety Management Systems (SMS), risk assessments, MARPOL regulations, and port state controls.',
        lessons: [
          'Safety Management Systems (SMS) Implementation Onboard',
          'MARPOL Conventions & Special Areas Compliance',
          'Emergency Preparedness Plans & Multi-Department Drills',
          'Port State Control (PSC) & Flag State Inspections Readiness'
        ]
      }
    ]
  },

  // 6. 100 GT Yacht Master
  {
    id: 'MM-YM-100',
    title: '100 GT Yacht Master',
    shortDescription: 'Master qualification curriculum for commercial and private motor and sailing vessels up to 100 Gross Tonnage.',
    description: 'Master qualification curriculum for commercial and private motor and sailing vessels up to 100 Gross Tonnage.',
    fullDescription: 'The 100 GT Yacht Master course covers the operational, regulatory, and navigational requirements for commanding vessels up to 100 Gross Tonnage. Topics include vessel stability, coastal passage governance, crew leadership, watchkeeping standards, marine engineering basics, and passenger safety oversight.',
    category: 'Yacht Master / GT',
    categoryId: 'yacht-master-gt',
    subCategory: 'Tonnage Master (100 GT)',
    level: 'Intermediate',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Theory & Scenario Training',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: false,
    createdDate: '2026-02-01',
    courseType: 'Master Qualification',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['100 gt', 'yacht master', 'gross tonnage', 'commercial master', 'tonnage', 'coastal captain', 'stability'],
    learningObjectives: [
      'Understand statutory responsibilities of the Master for vessels up to 100 GT',
      'Calculate vessel stability, freeboard requirements, and trim for varied loading conditions',
      'Execute precise pilotage and coastal watchkeeping in restricted visibility',
      'Manage onboard crew safety routines, emergency drills, and logbook maintenance'
    ],
    prerequisites: 'Intermediate navigation experience and powerboat or yacht handling background.',
    assessmentInfo: 'Modular knowledge checks covering stability curves, pilotage plans, and master responsibilities.',
    relatedCourseIds: ['MM-YM-200', 'MM-YM-024', 'MM-PDY-024', 'MM-VHF-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Commercial yacht skippers, charter vessel operators, tender captains, and prospective 100 GT masters.',
    whatToExpect: [
      'Comprehensive understanding of commercial master legal obligations and logs',
      'Mastery of stability fundamentals and weight shift implications',
      'Ability to manage passenger welfare and safety equipment compliance',
      'Confidence operating 100 GT craft in coastal and tidal waters'
    ],
    modules: [
      {
        id: 'mm-ym100-mod-1',
        number: 1,
        title: 'Module 1: Master Responsibilities & Legal Frameworks',
        description: 'Official logbooks, statutory duties, crew contracts, and casualty reporting.',
        lessons: [
          'Legal Duties & Authority of the 100 GT Master',
          'Maintaining Official Deck & Engine Logbooks',
          'Vessel Certification & Safety Equipment Registers',
          'Accident & Incident Investigation Reporting'
        ]
      },
      {
        id: 'mm-ym100-mod-2',
        number: 2,
        title: 'Module 2: 100 GT Stability & Loading Calculations',
        description: 'Centre of gravity, metacentric height (GM), freeboard, and free surface effects.',
        lessons: [
          'Basic Stability: G, M, and Centre of Buoyancy (B)',
          'Understanding Metacentric Height (GM) & Righting Levers',
          'Free Surface Effect in Fuel & Water Tanks',
          'Passenger Weight Distribution & Heeling Moments'
        ]
      },
      {
        id: 'mm-ym100-mod-3',
        number: 3,
        title: 'Module 3: Coastal Watchkeeping & Pilotage',
        description: 'Tidal navigation, blind pilotage techniques, clearing bearings, and sector lights.',
        lessons: [
          'Coastal Pilotage with Clearing Marks & Sector Lights',
          'Radar Navigation in Fog & Restricted Visibility',
          'Traffic Separation Schemes (Rule 10 Compliance)',
          'Anchoring Protocols in Congested Commercial Anchorages'
        ]
      },
      {
        id: 'mm-ym100-mod-4',
        number: 4,
        title: 'Module 4: Safety Drills & Machinery Oversight',
        description: 'Fire and abandon ship drills, engine room walk-throughs, and passenger safety briefings.',
        lessons: [
          'Conducting Structured Fire & Abandon Ship Drills',
          'Engine Room Monitoring (Temperatures, Pressures, Bilges)',
          'Life-Saving Appliances (LSA) Inspections & Service Intervals',
          'Medical First Response & Telemedical Maritime Advice'
        ]
      }
    ]
  },

  // 7. 200 GT Yacht Master
  {
    id: 'MM-YM-200',
    title: '200 GT Yacht Master',
    shortDescription: 'Advanced master qualification curriculum for commanding commercial and private yachts up to 200 Gross Tonnage.',
    description: 'Advanced master qualification curriculum for commanding commercial and private yachts up to 200 Gross Tonnage.',
    fullDescription: 'The 200 GT Yacht Master course is an advanced qualification module for officers and masters operating vessels up to 200 Gross Tonnage. The curriculum provides deep instruction in offshore watchkeeping standards, complex ship handling, dynamic stability, GMDSS radio procedures, and emergency response management.',
    category: 'Yacht Master / GT',
    categoryId: 'yacht-master-gt',
    subCategory: 'Tonnage Master (200 GT)',
    level: 'Advanced',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Classroom / Simulator',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: false,
    createdDate: '2026-02-05',
    courseType: 'Master Qualification',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['200 gt', 'yacht master 200', 'tonnage master', 'commercial yacht', 'deck officer', 'advanced master', 'superyacht'],
    learningObjectives: [
      'Manage complex voyage execution for 200 GT vessels across international and coastal waters',
      'Understand stability criteria, freeboard considerations, and cargo/weight distribution',
      'Lead Bridge Resource Management (BRM) teams during close-quarters manoeuvres and night pilotage',
      'Implement ISM code principles and international maritime security procedures (ISPS)'
    ],
    prerequisites: '100 GT Yacht Master or equivalent coastal qualification with offshore sea service.',
    assessmentInfo: 'Advanced navigation plots, stability computations, and simulated emergency command assessments.',
    relatedCourseIds: ['MM-YM-500', 'MM-YM-100', 'MM-YM-024', 'MM-BST-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Senior yacht officers, commercial charter captains, fleet managers, and candidates pursuing 200 GT Master status.',
    whatToExpect: [
      'Mastery of offshore passage appraisal and multi-sensor navigation',
      'Expertise in transverse stability curves and dynamic roll periods',
      'Leadership capabilities for commanding multi-national crews',
      'In-depth knowledge of international maritime safety codes'
    ],
    modules: [
      {
        id: 'mm-ym200-mod-1',
        number: 1,
        title: 'Module 1: Advanced Navigation & Voyage Planning',
        description: 'Great circle sailing, ocean routing, electronic charting systems, and position verification.',
        lessons: [
          'Ocean Passage Appraisal & Weather Route Planning',
          'Electronic Chart Systems (ECDIS) Verification & Cross-Checking',
          'Celestial Navigation Fundamentals (Sun, Stars, Noon Sights)',
          'Complex Harbour Pilotage by Night with Sector Beacons'
        ]
      },
      {
        id: 'mm-ym200-mod-2',
        number: 2,
        title: 'Module 2: 200 GT Vessel Stability & Hull Dynamics',
        description: 'GZ curves, dynamical stability, angle of vanishing stability (AVS), and parametric rolling.',
        lessons: [
          'Interpreting GZ Curves & Angle of Vanishing Stability',
          'Dynamical Stability & Severe Wind/Rolling Criteria',
          'Parametric & Synchronous Rolling in Following Seas',
          'Damage Stability & Compartment Flooding Management'
        ]
      },
      {
        id: 'mm-ym200-mod-3',
        number: 3,
        title: 'Module 3: Bridge Leadership & Error Management',
        description: 'BRM protocols, situational leadership, workload distribution, and crisis decision-making.',
        lessons: [
          'Bridge Team Management & Workload Delegation',
          'Error Trapping in High-Intensity Navigational Situations',
          'Crisis Decision-Making Frameworks Under Stress',
          'Effective Interfacing with Coastal Vessel Traffic Services (VTS)'
        ]
      },
      {
        id: 'mm-ym200-mod-4',
        number: 4,
        title: 'Module 4: Maritime Governance & Emergency Command',
        description: 'ISM Code compliance, ISPS security levels, salvage contracts, and emergency command response.',
        lessons: [
          'International Safety Management (ISM) Code Compliance',
          'Maritime Security (ISPS Code) & Access Control Levels',
          'Marine Insurance, Salvage Contracts & Lloyd’s Open Form (LOF)',
          'Command Leadership During Vessel Evacuation & Search and Rescue'
        ]
      }
    ]
  },

  // 8. 500 GT Yacht Master
  {
    id: 'MM-YM-500',
    title: '500 GT Yacht Master',
    shortDescription: 'Senior command qualification curriculum for mega-yachts and commercial motor vessels up to 500 Gross Tonnage.',
    description: 'Senior command qualification curriculum for mega-yachts and commercial motor vessels up to 500 Gross Tonnage.',
    fullDescription: 'The 500 GT Yacht Master course is the pinnacle curriculum for captains commanding large commercial yachts up to 500 Gross Tonnage. The training encompasses extensive ship handling, thruster and pod drive operations, complex stability envelopes, SOLAS convention requirements, port operations, and comprehensive safety management.',
    category: 'Yacht Master / GT',
    categoryId: 'yacht-master-gt',
    subCategory: 'Tonnage Master (500 GT)',
    level: 'Advanced',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Classroom / Simulator',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: false,
    createdDate: '2026-02-10',
    courseType: 'Master Qualification',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['500 gt', 'yacht master 500', 'mega yacht', 'superyacht captain', 'senior master', 'solas', 'ism', 'ship handling'],
    learningObjectives: [
      'Oversee full operational command and compliance for 500 GT class commercial yachts',
      'Master advanced ship handling, propulsion dynamics, and deep-water anchoring',
      'Ensure complete compliance with SOLAS, MARPOL, STCW, and MLC 2006 international conventions',
      'Direct large crew hierarchies, safety departments, and emergency response teams'
    ],
    prerequisites: '200 GT Yacht Master or Chief Mate qualification with proven logged commercial sea time.',
    assessmentInfo: 'Comprehensive command examinations, ship handling simulations, and regulatory case studies.',
    relatedCourseIds: ['MM-YM-200', 'MM-YM-024', 'MM-BST-001', 'MM-CWD-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Mega-yacht captains, senior deck officers, marine operations directors, and maritime superintendents.',
    whatToExpect: [
      'Comprehensive senior master operational readiness',
      'Advanced knowledge of mega-yacht systems and propulsion architectures',
      'Complete mastery of international maritime statutory frameworks',
      'Highest standards of bridge leadership, passenger safety, and environmental stewardship'
    ],
    modules: [
      {
        id: 'mm-ym500-mod-1',
        number: 1,
        title: 'Module 1: Mega-Yacht Handling & Propulsion Architecture',
        description: 'Podded propulsion, dynamic positioning (DP) basics, bow/stern thrusters, and anchoring heavy vessels.',
        lessons: [
          'Handling 500 GT Vessels with Podded Propulsion (Azipod/Volvo IPS)',
          'Dynamic Positioning (DP) Systems Overview & Station Keeping',
          'Deep-Water Anchoring & Windlass Load Management',
          'Tugboat Operations & Harbour Berthing Assistance'
        ]
      },
      {
        id: 'mm-ym500-mod-2',
        number: 2,
        title: 'Module 2: Advanced Stability Envelopes & Trim',
        description: 'Longitudinal stability, trim calculations, cross-curves of stability, and grain/cargo stability.',
        lessons: [
          'Longitudinal Stability & Trimming Calculations',
          'Cross Curves of Stability & KN Tables',
          'Damage Stability, Subdivision & Water-tight Bulkheads',
          'Managing Tender Garages, Ballast Water & Heli-deck Loads'
        ]
      },
      {
        id: 'mm-ym500-mod-3',
        number: 3,
        title: 'Module 3: International Conventions & Compliance',
        description: 'SOLAS chapters, MARPOL annexes, MLC 2006 maritime labour convention, and STCW standards.',
        lessons: [
          'SOLAS Convention Key Requirements for Large Yachts',
          'Maritime Labour Convention (MLC 2006) Crew Welfare Standards',
          'Flag State Inspections, Class Societies & Surveys',
          'Environmental Regulations & Low-Emission Marine Operations'
        ]
      },
      {
        id: 'mm-ym500-mod-4',
        number: 4,
        title: 'Module 4: Senior Master Leadership & Crisis Command',
        description: 'Major casualty response, media communications, search & rescue coordination, and shipboard leadership.',
        lessons: [
          'Command Structure During Major Shipboard Casualties',
          'Coordinating Search and Rescue (SAR) with Rescue Coordination Centres (RCC)',
          'Crisis Media Communications & Stakeholder Liaison',
          'Fostering a Culture of Maritime Safety & Operational Excellence'
        ]
      }
    ]
  },

  // 9. VHF Intermediate Course
  {
    id: 'MM-VHF-001',
    title: 'VHF Intermediate Course',
    shortDescription: 'Operational maritime radio training, VHF channel allocations, Digital Selective Calling (DSC), and emergency distress procedures.',
    description: 'Operational maritime radio training, VHF channel allocations, Digital Selective Calling (DSC), and emergency distress procedures.',
    fullDescription: 'The VHF Intermediate Course provides mariners with operational knowledge of marine VHF radio equipment, international radio regulations, phonetic alphabet clarity, Digital Selective Calling (DSC) distress alerts, and structured voice protocols for Mayday, Pan-Pan, and Securité communications.',
    category: 'Marine Communications',
    categoryId: 'marine-communications',
    subCategory: 'Radio Operations',
    level: 'Intermediate',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Online Interactive',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: true,
    createdDate: '2026-02-14',
    courseType: 'Standard Course',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['vhf', 'radio', 'dsc', 'mayday', 'pan-pan', 'securite', 'phonetic', 'mmsi', 'communications', 'intermediate'],
    learningObjectives: [
      'Understand marine VHF radio channel allocations: Channel 16, inter-ship, port operations, and weather channels',
      'Master the NATO phonetic alphabet and Standard Marine Communication Phrases (SMCP)',
      'Learn Digital Selective Calling (DSC) distress alerting, MMSI numbers, and automated GPS relays',
      'Execute correct voice procedures for Mayday (distress), Pan-Pan (urgency), and Securité (safety) calls'
    ],
    prerequisites: 'None. Open to all mariners, boat skippers, radio operators, and yacht crew.',
    assessmentInfo: 'Interactive voice message construction drills, radio protocol evaluations, and DSC alerting quizzes.',
    relatedCourseIds: ['MM-PB-012', 'MM-PDY-024', 'MM-BST-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Vessel skippers, yacht crew, water sports operators, fishermen, and coastal watchkeepers.',
    whatToExpect: [
      'Clear, confident speech and standard procedure on marine radio channels',
      'Proper understanding of DSC distress button activation and safeguards',
      'Knowledge of emergency call prioritization and radio silence protocols',
      'Understanding of international VHF licensing and equipment checks'
    ],
    modules: [
      {
        id: 'mm-vhf-mod-1',
        number: 1,
        title: 'Module 1: VHF Equipment & Channel Plans',
        description: 'VHF transceivers, antenna height, power settings (1W vs 25W), squelch, and channel watchkeeping.',
        lessons: [
          'VHF Marine Radio Controls (Squelch, Dual Watch, Power Output)',
          'Channel 16 International Distress, Safety & Calling',
          'Inter-Ship Working Channels & Port Operations',
          'VHF Line-of-Sight Range & Antenna Installation Factors'
        ]
      },
      {
        id: 'mm-vhf-mod-2',
        number: 2,
        title: 'Module 2: Standard Marine Communication Phrases',
        description: 'NATO phonetic alphabet, numerical clarity, standard procedural words (pro-words), and routine calls.',
        lessons: [
          'The NATO Phonetic Alphabet & Clear Pronunciation',
          'Standard Pro-Words: Over, Out, Roger, Say Again, Stand By',
          'Routine Vessel-to-Vessel Calling Procedure',
          'Contacting Marina Staff, Lock Keepers & Harbour Masters'
        ]
      },
      {
        id: 'mm-vhf-mod-3',
        number: 3,
        title: 'Module 3: Digital Selective Calling (DSC) & MMSI',
        description: 'Maritime Mobile Service Identity (MMSI), DSC distress buttons, urgency alerts, and GPS link.',
        lessons: [
          'MMSI Number Structure & Vessel Registration',
          'DSC Distress Alerting with Embedded GPS Position',
          'Routine & Group DSC Calling by MMSI Number',
          'Cancelling an Accidental DSC Distress Transmission'
        ]
      },
      {
        id: 'mm-vhf-mod-4',
        number: 4,
        title: 'Module 4: Distress, Urgency & Safety Voice Calls',
        description: 'Mayday transmissions (MIPDANIO structure), Pan-Pan calls, Securité broadcasts, and silence protocols.',
        lessons: [
          'Mayday Distress Structure & Voice Transmission',
          'Pan-Pan Urgency Calls for Medical or Breakdown Aid',
          'Securité Navigational & Meteorological Warnings',
          'Imposing Radio Silence (Seelonce Mayday / Seelonce Feenee)'
        ]
      }
    ]
  },

  // 10. Crowd Management Course
  {
    id: 'MM-CWD-001',
    title: 'Crowd Management Course',
    shortDescription: 'Passenger vessel muster procedures, human behaviour in marine emergencies, panic prevention, and evacuation control.',
    description: 'Passenger vessel muster procedures, human behaviour in marine emergencies, panic prevention, and evacuation control.',
    fullDescription: 'The Crowd Management Course prepares deck officers, crew, and passenger vessel staff to manage large groups of passengers safely during emergency situations. The training covers muster station organization, crowd psychology, panic prevention, clear emergency broadcasting, and safe embarkation into survival craft.',
    category: 'Crowd Management',
    categoryId: 'crowd-management',
    subCategory: 'Passenger Safety',
    level: 'Beginner',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Theory & Scenario Training',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: false,
    createdDate: '2026-02-18',
    courseType: 'Safety Certification',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['crowd management', 'passenger safety', 'muster', 'evacuation', 'lifeboats', 'panic prevention', 'safety'],
    learningObjectives: [
      'Understand human behaviour in marine emergency crises and techniques to prevent crowd panic',
      'Organize and lead structured passenger muster station roll-calls and briefings',
      'Deliver calm, unambiguous emergency announcements in multi-language environments',
      'Direct safe, orderly passenger movement along escape routes to survival craft'
    ],
    prerequisites: 'None. Suitable for all crew and staff serving on passenger vessels or large charter yachts.',
    assessmentInfo: 'Emergency communication scenario exercises and muster station management evaluations.',
    relatedCourseIds: ['MM-BST-001', 'MM-YM-200', 'MM-YM-500'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Ferry crew, cruise ship staff, charter yacht personnel, and passenger vessel deckhands.',
    whatToExpect: [
      'Confidence in leading passenger groups during high-stress evacuations',
      'Knowledge of lifejacket distribution and fitting for adults and children',
      'Techniques for maintaining order in enclosed corridors and stairwells',
      'Clear understanding of emergency alarm signals and muster duties'
    ],
    modules: [
      {
        id: 'mm-cwd-mod-1',
        number: 1,
        title: 'Module 1: Human Behaviour in Marine Emergencies',
        description: 'Psychological responses to crisis, shock reactions, panic triggers, and maintaining authority.',
        lessons: [
          'Understanding Human Reactions to Maritime Emergencies',
          'Recognizing & De-escalating Panic in Crowded Spaces',
          'Maintaining Crew Composure & Visible Leadership',
          'Addressing Special Needs & Vulnerable Passengers'
        ]
      },
      {
        id: 'mm-cwd-mod-2',
        number: 2,
        title: 'Module 2: Muster Stations & Emergency Alarms',
        description: 'General emergency alarm (7 short + 1 long blast), muster lists, and passenger accountability.',
        lessons: [
          'The General Emergency Alarm & Vessel Alarm Signals',
          'Muster List Duties & Station Leader Responsibilities',
          'Passenger Headcounts & Accounting for Missing Persons',
          'Lifejacket Donning Demonstrations & Assisting Passengers'
        ]
      },
      {
        id: 'mm-cwd-mod-3',
        number: 3,
        title: 'Module 3: Crowd Movement & Escape Routes',
        description: 'Corridor traffic flow, stairwell safety, emergency lighting, and clearing public spaces.',
        lessons: [
          'Controlling Movement Along Escape Routes & Stairwells',
          'Keeping Corridors Clear & Managing Bottlenecks',
          'Navigating Low-Location Lighting (LLL) in Smoke',
          'Final Sweeps of Cabins & Public Lounges'
        ]
      },
      {
        id: 'mm-cwd-mod-4',
        number: 4,
        title: 'Module 4: Embarkation into Survival Craft',
        description: 'Lifeboat and life raft boarding order, preventing overloading, and launching safety.',
        lessons: [
          'Orderly Embarkation Protocols for Lifeboats & Rafts',
          'Preventing Overcrowding & Managing Boarding Gates',
          'Securing Passengers Inside Survival Craft',
          'Post-Embarkation Headcount & Survival Briefing'
        ]
      }
    ]
  },

  // 11. Basic Safety Training (BST)
  {
    id: 'MM-BST-001',
    title: 'Basic Safety Training (BST)',
    shortDescription: 'Core maritime safety training covering personal survival techniques, fire prevention, elementary first aid, and personal safety.',
    description: 'Core maritime safety training covering personal survival techniques, fire prevention, elementary first aid, and personal safety.',
    fullDescription: 'The Basic Safety Training (BST) course is the essential safety foundation for all professional and recreational seafarers. The curriculum covers Personal Survival Techniques (PST), Fire Prevention and Fire Fighting, Elementary First Aid, and Personal Safety and Social Responsibilities (PSSR).',
    category: 'Basic Safety Training',
    categoryId: 'basic-safety-training',
    subCategory: 'Mandatory Safety Foundation',
    level: 'Beginner',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Blended Learning',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: true,
    createdDate: '2026-02-20',
    courseType: 'Safety Certification',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['bst', 'basic safety training', 'stcw', 'survival', 'fire fighting', 'first aid', 'pssr', 'safety at sea'],
    learningObjectives: [
      'Master Personal Survival Techniques (PST) including lifejacket donning, life raft deployment, and HELP position',
      'Understand shipboard fire prevention, fire triangle dynamics, and extinguisher operation (CO2, Foam, Powder)',
      'Apply elementary first aid for hypothermia, bleeding, shock, and basic CPR at sea',
      'Adopt safe working practices, slip/fall prevention, and social responsibility onboard vessels'
    ],
    prerequisites: 'None. Mandatory foundational training for all seafarers and commercial vessel crew.',
    assessmentInfo: 'Modular knowledge checks covering sea survival, fire safety protocols, and first aid responses.',
    relatedCourseIds: ['MM-CWD-001', 'MM-PB-012', 'MM-VHF-001', 'MM-ENG-750'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'All commercial seafarers, yacht crew, deckhands, marine engineers, and offshore personnel.',
    whatToExpect: [
      'Comprehensive safety mindset for any maritime vessel environment',
      'Confidence in using marine life rafts, EPIRBs, and survival equipment',
      'Knowledge of fire prevention and initial containment on watercraft',
      'Practical understanding of cold water survival and first aid fundamentals'
    ],
    modules: [
      {
        id: 'mm-bst-mod-1',
        number: 1,
        title: 'Module 1: Personal Survival Techniques (PST)',
        description: 'Lifejackets, immersion suits, life raft inflation, survival in cold water, and rescue recovery.',
        lessons: [
          'Lifejackets, Lights, Whistles & Immersion Suits',
          'Life Raft Launching, Inflation & Righting Inverted Rafts',
          'Cold Water Survival: HELP & Huddle Positions',
          'Search and Rescue (SAR) Helicopter & Vessel Recovery'
        ]
      },
      {
        id: 'mm-bst-mod-2',
        number: 2,
        title: 'Module 2: Fire Prevention & Fire Fighting',
        description: 'Fire chemistry, extinguisher types, fixed systems, galley fires, and smoke movement.',
        lessons: [
          'The Fire Triangle & Classification of Shipboard Fires',
          'Operating Portable Extinguishers (Water, Foam, Powder, CO2)',
          'Engine Room Fire Isolation & Quick-Closing Valves',
          'Smoke Movement & Self-Contained Breathing Apparatus (SCBA) Basics'
        ]
      },
      {
        id: 'mm-bst-mod-3',
        number: 3,
        title: 'Module 3: Elementary First Aid at Sea',
        description: 'Cardiopulmonary resuscitation (CPR), severe bleeding control, shock management, and hypothermia.',
        lessons: [
          'Primary Assessment (DR ABC) & Cardio-Pulmonary Resuscitation (CPR)',
          'Bleeding Control, Pressure Dressings & Tourniquets',
          'Recognizing & Treating Shock and Burns',
          'Hypothermia Rewarming Protocols at Sea'
        ]
      },
      {
        id: 'mm-bst-mod-4',
        number: 4,
        title: 'Module 4: Personal Safety & Social Responsibilities (PSSR)',
        description: 'Safe work practices, PPE, enclosed spaces, drug/alcohol policies, and interpersonal relations.',
        lessons: [
          'Shipboard Safety Culture & Hazard Identification',
          'Personal Protective Equipment (PPE) & Enclosed Space Entry Rules',
          'Drug and Alcohol Policies & Fatality Prevention',
          'Effective Interpersonal Communications & Teamwork'
        ]
      }
    ]
  },

  // 12. Engine Operator 750 kW Course
  {
    id: 'MM-ENG-750',
    title: 'Engine Operator 750 kW Course',
    shortDescription: 'Technical engineering training for operating and maintaining marine diesel engines and auxiliary machinery up to 750 kW.',
    description: 'Technical engineering training for operating and maintaining marine diesel engines and auxiliary machinery up to 750 kW.',
    fullDescription: 'The Engine Operator 750 kW Course provides comprehensive technical instruction for marine engine drivers, small vessel engineers, and yacht deckhand-engineers. The curriculum covers two-stroke and four-stroke diesel engine operation, fuel injection systems, cooling circuits, lubrication, electrical generation, and fault diagnostics.',
    category: 'Marine Engineering',
    categoryId: 'marine-engineering',
    subCategory: 'Machinery Operations',
    level: 'Intermediate',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Theory & Scenario Training',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: false,
    createdDate: '2026-02-22',
    courseType: 'Technical Engineering',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['engine operator', '750 kw', 'marine diesel', 'engineering', 'machinery', 'auxiliary', 'diagnostics', 'maintenance'],
    learningObjectives: [
      'Understand the mechanical cycles, components, and operation of marine diesel engines up to 750 kW',
      'Inspect and maintain fuel supply systems, filtration, raw water cooling, and closed-circuit heat exchangers',
      'Diagnose common engine anomalies: overheating, oil pressure drops, vibration, and black/white/blue exhaust smoke',
      'Operate auxiliary machinery: marine alternators, bilge dewatering manifolds, and battery banks'
    ],
    prerequisites: 'Basic mechanical aptitude recommended. Open to all prospective marine engineers.',
    assessmentInfo: 'Formative troubleshooting exercises, schematic reading tests, and routine maintenance quizzes.',
    relatedCourseIds: ['MM-PB-012', 'MM-PDY-024', 'MM-BST-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Small commercial vessel engineers, powerboat skippers, charter yacht technicians, and marine mechanics.',
    whatToExpect: [
      'Ability to conduct thorough pre-start engine room inspections and log pressures',
      'Skills to replace raw water impellers, fuel filters, and drive belts safely',
      'Clear understanding of engine emergency shutdown and alarm systems',
      'Knowledge of bilge water management and environmental oil spill prevention'
    ],
    modules: [
      {
        id: 'mm-eng-mod-1',
        number: 1,
        title: 'Module 1: Marine Diesel Engine Fundamentals',
        description: 'Four-stroke operating cycles, cylinder head components, pistons, crankshafts, and turbochargers.',
        lessons: [
          'Four-Stroke Marine Diesel Operating Principles',
          'Cylinder Blocks, Crankshafts, Pistons & Connecting Rods',
          'Turbochargers, Intercoolers & Air Intake Systems',
          'Valve Timing, Compression Ratios & Combustion Efficiency'
        ]
      },
      {
        id: 'mm-eng-mod-2',
        number: 2,
        title: 'Module 2: Fuel, Cooling & Lubrication Circuits',
        description: 'Fuel filtration, common rail injection, raw water pumps, heat exchangers, and lube oil viscosity.',
        lessons: [
          'Diesel Fuel Systems (Primary Filters, Water Separators & Injectors)',
          'Raw Water & Freshwater Cooling Heat Exchangers',
          'Impeller Replacement & Anti-Siphon Valves',
          'Lubricating Oil Circuits, Filters & Pressure Regulators'
        ]
      },
      {
        id: 'mm-eng-mod-3',
        number: 3,
        title: 'Module 3: Electrical Systems & Auxiliaries',
        description: 'Marine batteries (AGM, Gel, Lithium), alternators, starter motors, and shaft stern glands.',
        lessons: [
          'Marine 12V/24V DC Systems & Battery Isolation Switches',
          'Alternators, Regulators & Charging Isolators',
          'Propeller Shafts, Cutlass Bearings & Drip-less Shaft Seals',
          'Bilge Pumping Manifolds & High-Water Alarm Sensors'
        ]
      },
      {
        id: 'mm-eng-mod-4',
        number: 4,
        title: 'Module 4: Diagnostics, Faults & Safety Routines',
        description: 'Interpreting exhaust smoke colours, overheating causes, oil dilution, and emergency shutdowns.',
        lessons: [
          'Diagnosing Exhaust Smoke (Black, White, Blue Causes)',
          'Overheating Causes: Air Locks, Blocked Seacocks & Impeller Failure',
          'Engine Emergency Stop Controls & Fuel Cut-Off Pulls',
          'Engine Room Logbook Entries & Scheduled Maintenance Intervals'
        ]
      }
    ]
  },

  // 13. Diving Course
  {
    id: 'MM-DIV-001',
    title: 'Diving Course',
    shortDescription: 'Foundational marine diving theory, underwater physics, scuba equipment mechanics, dive planning, and safety protocols.',
    description: 'Foundational marine diving theory, underwater physics, scuba equipment mechanics, dive planning, and safety protocols.',
    fullDescription: 'The Diving Course delivers essential theoretical instruction for recreational, scientific, and professional diving trainees. The curriculum examines underwater physics, Boyle’s and Dalton’s gas laws, scuba cylinder and regulator maintenance, buoyancy compensation, no-decompression dive tables, and underwater emergency ascents.',
    category: 'Diving',
    categoryId: 'diving',
    subCategory: 'Sub-Surface Training',
    level: 'Beginner',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Online Interactive',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: false,
    createdDate: '2026-02-25',
    courseType: 'Standard Course',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['diving', 'scuba', 'underwater', 'buoyancy', 'gas laws', 'decompression', 'dive tables', 'marine diving'],
    learningObjectives: [
      'Understand diving physics: pressure, volume, density, and gas absorption (Boyle’s, Charles’s, Dalton’s, Henry’s Laws)',
      'Inspect and assemble scuba equipment: cylinders, first/second stage regulators, pressure gauges, and BCDs',
      'Calculate no-decompression limits (NDL) using dive tables and electronic dive computers',
      'Learn underwater hand signals, buddy checks, out-of-air emergency drills, and controlled ascents'
    ],
    prerequisites: 'Basic swimming proficiency and medical fitness for diving recommended.',
    assessmentInfo: 'Formative gas law problem solving, dive table planning drills, and underwater safety quizzes.',
    relatedCourseIds: ['MM-SPT-001', 'MM-BST-001', 'MM-JET-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Prospective divers, yacht crew maintaining underwater hulls, marine biology students, and water sports enthusiasts.',
    whatToExpect: [
      'Deep understanding of underwater physiology and barotrauma prevention',
      'Confidence in planning safe dive profiles and safety stops',
      'Knowledge of scuba equipment inspection and preventative maintenance',
      'Mastery of underwater buddy communication and emergency procedures'
    ],
    modules: [
      {
        id: 'mm-div-mod-1',
        number: 1,
        title: 'Module 1: Underwater Physics & Physiology',
        description: 'Hydrostatic pressure, gas laws, lung expansion injuries, equalization, and nitrogen narcosis.',
        lessons: [
          'Pressure, Volume & Density (Boyle’s Law & Equalization)',
          'Gas Partial Pressures & Nitrogen Absorption (Henry’s Law)',
          'Preventing Barotrauma (Ears, Sinuses & Lungs)',
          'Nitrogen Narcosis & Oxygen Toxicity Awareness'
        ]
      },
      {
        id: 'mm-div-mod-2',
        number: 2,
        title: 'Module 2: Scuba Equipment Anatomy & Assembly',
        description: 'Cylinders, valves, balanced regulators, alternate air sources (octopus), BCDs, and depth gauges.',
        lessons: [
          'Scuba Cylinders, Hydrostatic Testing & Valve Types (DIN vs Yoke)',
          'First & Second Stage Regulators & Alternate Air Sources',
          'Buoyancy Control Devices (BCD) & Integrated Weight Systems',
          'Submersible Pressure Gauges (SPG) & Dive Computers'
        ]
      },
      {
        id: 'mm-div-mod-3',
        number: 3,
        title: 'Module 3: Dive Planning & Decompression Theory',
        description: 'No-decompression limits (NDL), surface intervals, repetitive dives, and safety stops.',
        lessons: [
          'Using Dive Tables & Reading Dive Computer Displays',
          'Calculating No-Decompression Limits & Ascent Rates',
          'Surface Intervals & Repetitive Dive Group Planning',
          'Executing 3-Minute Safety Stops at 5 Metres'
        ]
      },
      {
        id: 'mm-div-mod-4',
        number: 4,
        title: 'Module 4: Underwater Protocols & Emergency Ascents',
        description: 'Pre-dive buddy checks (BWRAF), underwater signals, shared air breathing, and controlled emergency ascents.',
        lessons: [
          'Pre-Dive Buddy Safety Checks (BWRAF Framework)',
          'Standard Underwater Hand Signals & Communication',
          'Out-of-Air Responses: Alternate Air Breathing with Buddy',
          'Controlled Emergency Swimming Ascent (CESA) Procedures'
        ]
      }
    ]
  },

  // 14. Sports Safety Courses
  {
    id: 'MM-SPT-001',
    title: 'Sports Safety Courses',
    shortDescription: 'Safety management and emergency preparedness for recreational water sports, towed inflatables, waterskiing, and beach operations.',
    description: 'Safety management and emergency preparedness for recreational water sports, towed inflatables, waterskiing, and beach operations.',
    fullDescription: 'The Sports Safety Courses provide essential safety guidelines, observer protocols, towline management, and hazard assessment for recreational marine sports. Students learn how to operate safety chase boats, manage wake zones, brief participants, inspect towing equipment, and execute rapid recovery of fallen water-skiers and inflatable riders.',
    category: 'Sports & Recreational Safety',
    categoryId: 'sports-recreational-safety',
    subCategory: 'Water Sports Safety',
    level: 'Beginner',
    status: 'Available',
    modulesCount: 4,
    learningFormat: 'Online Interactive',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
    isSample: true,
    isFeatured: true,
    createdDate: '2026-02-28',
    courseType: 'Specialist Training',
    enrolmentStatus: 'Pre-registration Open',
    keywords: ['sports safety', 'water sports', 'towing', 'waterski', 'wakeboard', 'inflatables', 'beach safety', 'lookout'],
    learningObjectives: [
      'Understand water sports safety regulations, designated towing zones, and swimmer separation buffers',
      'Master the role of the boat observer, hand communication signals, and fallen skier protection',
      'Inspect tow ropes, bridles, quick-release mechanisms, and impact life vests',
      'Execute safe approach, engine neutral isolation, and re-boarding of in-water participants'
    ],
    prerequisites: 'None. Open to all boat drivers, observers, resort activity staff, and water sports participants.',
    assessmentInfo: 'Interactive observer signal quizzes, tow zone risk scenario evaluations, and participant briefing tests.',
    relatedCourseIds: ['MM-JET-001', 'MM-PB-012', 'MM-BST-001'],
    instructor: 'Information to be confirmed',
    duration: 'Information to be confirmed',
    fee: 'Information to be confirmed',
    certification: 'Information to be confirmed',
    targetAudience: 'Water sports instructors, resort activity teams, recreational boat skippers, and water-skiing clubs.',
    whatToExpect: [
      'Thorough understanding of towing dynamics and safe speed envelopes',
      'Clear observer hand signals for speed adjustments, turns, and returns',
      'Confidence in maneuvering rescue boats around swimmers without prop risk',
      'Professional standards for water sports participant risk briefings'
    ],
    modules: [
      {
        id: 'mm-spt-mod-1',
        number: 1,
        title: 'Module 1: Water Sports Principles & Regulations',
        description: 'Towing legislation, speed regulations, designated zones, and swimmer buffer boundaries.',
        lessons: [
          'Designated Water Sports Zones & Local Marine By-laws',
          'Speed Limits, Distance from Shore & Swimmer Separation',
          'Equipment Standards: Impact Life Vests & Protective Gear',
          'Alcohol & Drug Prohibitions in Towing Operations'
        ]
      },
      {
        id: 'mm-spt-mod-2',
        number: 2,
        title: 'Module 2: The Observer & Hand Communication Signals',
        description: 'Observer duties, mandatory continuous lookout, and standardized skier-to-boat signals.',
        lessons: [
          'Legal Responsibilities of the Dedicated Boat Observer',
          'Standard Hand Signals (Faster, Slower, OK, Turn, Cut Engine)',
          'Maintaining Continuous Line-of-Sight on Towed Riders',
          'Communicating with the Driver Without Causing Distraction'
        ]
      },
      {
        id: 'mm-spt-mod-3',
        number: 3,
        title: 'Module 3: Tow Gear, Bridles & Inflatable Safety',
        description: 'Tow ropes, elastic dynamic loads, quick releases, inflatable banana/doughnut stability, and wake crossing.',
        lessons: [
          'Tow Line Strength Ratings, Lengths & Bridle Inspection',
          'Quick-Release Mechanisms & Emergency Tow Cutters',
          'Towed Inflatable Dynamics & Roll-Over Prevention',
          'Managing Propeller Wash & Crossing Wakes with Inflatables'
        ]
      },
      {
        id: 'mm-spt-mod-4',
        number: 4,
        title: 'Module 4: Fallen Rider Recovery & Propeller Safety',
        description: 'Approaching swimmers on the driver’s side, shifting to neutral, boarding ladders, and propeller guards.',
        lessons: [
          'Approaching a Fallen Rider (Windward vs. Leeward Approach)',
          'Mandatory Engine Neutral Shift Before Approaching Swimmer',
          'Propeller Safety Zones & Engine Cut-Off Confirmation',
          'Assisting Fatigued or Injured Riders Back into the Vessel'
        ]
      }
    ]
  }
];

export const FEATURED_COURSES: Course[] = COURSES_CATALOG.filter(c => c.isFeatured);

export const WHY_MARINE_MIND_FEATURES: Feature[] = [
  {
    id: 'feature-1',
    title: 'Professional Learning Ecosystem',
    description: 'A structured maritime education platform designed to support mariners across every stage of training, from initial watercraft handling to commercial yacht command.',
    iconName: 'Anchor'
  },
  {
    id: 'feature-2',
    title: 'Multi-Discipline Training Range',
    description: 'Comprehensive curriculum covering Personal Watercraft, Powerboat, Yacht Master GT, Marine Communications, Safety at Sea, Engineering, and Marine Sports.',
    iconName: 'Compass'
  },
  {
    id: 'feature-3',
    title: 'Modular & Progressive Pathways',
    description: 'Every course is organized into clear, structured modules with articulated learning outcomes, enabling students to track progress and plan progression.',
    iconName: 'Layers'
  },
  {
    id: 'feature-4',
    title: 'Intelligent AI-Assisted Study Support',
    description: 'Preparing the foundation for Marine Mind AI — an intelligent learning companion to assist students with concept clarification, revision, and terminology.',
    iconName: 'Sparkles'
  }
];

export const ECOSYSTEM_STEPS: EcosystemStep[] = [
  {
    stepNumber: 1,
    title: 'Discover & Explore',
    subtitle: 'Stage 2 Active',
    description: 'Explore our comprehensive maritime curriculum catalogue across 12 training domains, reviewing module structures and learning outcomes.',
    iconName: 'Compass'
  },
  {
    stepNumber: 2,
    title: 'Student Profile & Registration',
    subtitle: 'Stage 3 Roadmap',
    description: 'Create a personal mariner profile, register for courses, and prepare your training pathway.',
    iconName: 'GraduationCap'
  },
  {
    stepNumber: 3,
    title: 'Learn in the Interactive Hub',
    subtitle: 'Stage 4 Roadmap',
    description: 'Engage with multimedia lessons, boat handling simulations, and downloadable checklists.',
    iconName: 'Layers'
  },
  {
    stepNumber: 4,
    title: 'Assess Knowledge & Progress',
    subtitle: 'Stage 5 Roadmap',
    description: 'Complete structured knowledge evaluations, scenario drills, and formative assessments.',
    iconName: 'CheckCircle'
  },
  {
    stepNumber: 5,
    title: 'Log Maritime Achievement',
    subtitle: 'Stage 6 Roadmap',
    description: 'Earn digital course certificates, maintain training records, and log sea-time milestones.',
    iconName: 'Award'
  }
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    stage: 'Stage 1',
    title: 'Portal Foundation',
    status: 'Current',
    description: 'Core architectural foundation, branding, responsive layout, and platform introduction.',
    iconName: 'Anchor'
  },
  {
    stage: 'Stage 2',
    title: 'Courses & Discovery',
    status: 'Current',
    description: 'Full course catalogue, category filtering, instant keyword search, and dedicated course detail views.',
    iconName: 'Compass'
  },
  {
    stage: 'Stage 3',
    title: 'Student Registration & Profile',
    status: 'Planned',
    description: 'User account creation, student authentication, saved courses, and profile preferences.',
    iconName: 'GraduationCap'
  },
  {
    stage: 'Stage 4',
    title: 'Learning Centre',
    status: 'Planned',
    description: 'Interactive lesson viewer, video players, chartwork canvas, and progress tracking.',
    iconName: 'Layers'
  },
  {
    stage: 'Stage 5',
    title: 'Assessments & Knowledge Checks',
    status: 'Future',
    description: 'Formative quizzes, scenario-based rule evaluations, and maritime practice drills.',
    iconName: 'CheckCircle'
  },
  {
    stage: 'Stage 6',
    title: 'Certificates & Progress Records',
    status: 'Future',
    description: 'Digital course completion records, verifiable badges, and PDF certificates.',
    iconName: 'Award'
  }
];
