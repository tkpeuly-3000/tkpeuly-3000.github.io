/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR WEBSITE
   Change the words inside the quotes, save, and upload.
   To add a project: copy one { ... } block, paste it after the
   last one (with a comma between blocks), and change the words.
   ============================================================ */

const SITE = {
  firstName: "Tabassum",
  lastName: "Peuly",
  tagline: ["Mechanical", "Robotics", "Bionics", "Lubbock, TX"],
  subtitle: "Mechanical Engineering @ Texas Tech University",
  gradLabel: "Expected December 2028",
  intro:
    "I design mechanical systems for people. My focus is robotics, medical bionics, automotive and infrastructure, from CAD models in SolidWorks to 3D printed prototypes that move.",
  email: "tkpeuly@gmail.com",
  linkedin: "https://www.linkedin.com/in/tabassum-kamal-peuly-841267421/",
  github: "https://github.com/tkpeuly-3000",
  repo: "tkpeuly-3000/tkpeuly-3000.github.io", // your GitHub repository (used to find new files automatically)
  branch: "main",
  photo: "images/peuly.jpg",
};

const ABOUT = {
  heading: "More than engineering",
  paragraphs: [
    "I'm a Mechanical Engineering student at Texas Tech University in the Honors College, with a minor in Robotics. I'm most excited about engineering that helps people move: prosthetics, braces and assistive devices, along with automotive systems and the infrastructure people rely on every day.",
    "Outside the classroom I lead as a Student Assistant III supervisor at the TTU IT Help Desk, supporting about 9,000 on campus residents, and I mentor first year engineering and math students.",
    "Goal: build products that improve how people live and move, starting with low cost bionics.",
  ],
  focus: [
    "Robotics",
    "Medical bionics",
    "CAD design (SolidWorks)",
    "3D printed prototyping",
    "Automotive",
    "Infrastructure",
    "Mentoring and leadership",
  ],
};

/* SPOTLIGHT: the big "winning moment" banner at the top of Projects.
   Set show: false to hide it. */
const SPOTLIGHT = {
  show: true,
  badge: "1st Place",
  title: "IBTTA On-Ramp Innovation Challenge 2026",
  text: "Our Texas Tech team won first place in the finals with RoadRebound, a flood response system for toll roads that started as my idea. We presented 26 slides of simulation results to industry leaders at the IBTTA conference.",
  team: "Tabassum Peuly · Maksudul Haque Rishad · Safwan Kamal",
  where: "14 November 2026 · Arlington, Texas",
  photo: "images/roadrebound-win.jpg",
};

const FACTS = [
  ["Degree", "B.S. Mechanical Engineering"],
  ["Minor", "Robotics"],
  ["GPA", "3.92 / 4.00"],
  ["Grad", "Expected Dec 2028"],
  ["Honors", "Honors College<br>2× President's List<br>Dean's List"],
  ["Awards", "1st Place, IBTTA<br>On-Ramp Challenge 2026"],
  ["Scholarship", "Presidential Merit"],
  ["Orgs", "ASME · SWE · LYFE Mentor"],
];

/* status options: "Finalist", "Building now", "In design", "Complete" */
const PROJECTS = [
  {
    num: "001",
    title: "RoadRebound",
    label: "IBTTA On-Ramp Innovation Challenge 2026",
    status: "1st Place",
    description:
      "The decision layer between road sensors and a flood closure. We ran 210 simulations on five toll road networks to show how operators can warn drivers early, cut tolls and open express lanes when roads flood. Built on my base idea with Maksudul Haque Rishad and Safwan Kamal.",
    tags: ["1st Place", "Traffic simulation", "Flood response", "Team of 3"],
    images: ["images/roadrebound-cover.jpg", "images/roadrebound-slides.jpg", "images/roadrebound-win.jpg"],
    link: "",
  },
  {
    num: "002",
    title: "EMG Bionic Finger",
    label: "Personal project · Rev 1",
    status: "Building now",
    description:
      "A 3D printed, tendon driven finger that curls when I flex my forearm. Reads muscle signals with an EMG sensor and drives a servo through an ESP32. First step toward a full prosthetic hand.",
    tags: ["SolidWorks", "ESP32", "Python", "3D printing"],
    images: [],
    link: "",
  },
  {
    num: "003",
    title: "Modular Brace Platform",
    label: "Rice360 Global Health Design 2027",
    status: "In design",
    description:
      "Lego style, 3D printed blocks that build children's prosthetic arms and leg braces at low cost, with a color changing liner that shows pressure points.",
    tags: ["Global health", "CAD", "Pediatric devices"],
    images: [],
    link: "",
  },
];

const OTHER_PROJECTS = [
  {
    title: "Place Radio",
    description: "Type any city and it tunes into music that matches the live weather and local time there, playing nonstop like a radio station.",
    tags: ["Web app", "Weather API", "JavaScript"],
    image: "images/place-radio.jpg",
    link: "https://tkpeuly-3000.github.io/place-radio/",
  },
  {
    title: "15 Year Automation Strategy",
    description: "Engineering Economy analysis in Excel comparing manual, semi automated and fully automated production with present worth, IRR and after tax cash flow models.",
    tags: ["Excel", "Engineering economy"],
    image: "",
    link: "",
  },
  {
    title: "Bike Share Ridership Prediction",
    description: "Cleaned a bike share dataset in pandas and built scikit learn regression models that predict riders from weather, with train and test error within 2%.",
    tags: ["Python", "pandas", "scikit learn"],
    image: "",
    link: "",
  },
  {
    title: "Degree Flow",
    description: "Upload your degree flowchart and get a draggable semester by semester plan with prerequisite lines, balancing hard and easy classes each term.",
    tags: ["Web app", "JavaScript", "Netlify"],
    image: "",
    link: "https://degree-flow.netlify.app/",
  },
];

/* CAD WORK
   ★ NEW: you don't need to edit this list anymore. Just add a folder inside "cad" on GitHub
   (see HOW-TO-ADD.md). The list below is only a backup that shows if GitHub can't be reached. 
   To add a model: copy a block and change the words.
   images: put screenshots or renders in the "cad" folder and list them like ["cad/finger-1.png", "cad/finger-2.png"]
           (you can add as many as you want; visitors click to flip through them)
   type: "Part", "Assembly" or "Drawing"
   featured: true  = shows on the main page with a ★ star
   featured: false = hidden under the "Show more designs" button
   file: optional link to a PDF drawing or model file in the "cad" folder */
const CAD_PROJECTS = [
  {
    title: "Lever Handle Pivot",
    type: "Assembly",
    software: "SolidWorks",
    status: "",
    featured: false,
    description: "Ball knob handle on a post, joined to a box pivot and link so the lever rotates about a single pin.",
    images: ["cad/lever-handle-pivot/1.jpg"],
    file: "",
  },
  {
    title: "Link Chain Mechanism",
    type: "Assembly",
    software: "SolidWorks",
    status: "",
    featured: false,
    description: "Slotted links pinned between two mounting brackets with concentric and coincident mates, set up for motion studies.",
    images: ["cad/link-chain-mechanism/1.jpg"],
    file: "",
  },
  {
    title: "Parallel Link Holder",
    type: "Assembly",
    software: "SolidWorks",
    status: "",
    featured: false,
    description: "Base holder, holder arm, side links, crosslink and bushing assembled with pegs into a parallel linkage.",
    images: ["cad/parallel-link-holder/1.jpg"],
    file: "",
  },
  {
    title: "Triangle Plate Linkage",
    type: "Assembly",
    software: "SolidWorks",
    status: "",
    featured: true,
    description: "A triangular plate with drive, center and rocker links pinned together with pegs into a working linkage.",
    images: ["cad/triangle-plate-linkage/1.jpg"],
    file: "",
  },
  {
    title: "Custom Truck Tire",
    type: "Part",
    software: "SolidWorks",
    status: "",
    featured: true,
    description: "Treaded tire with a spoked rim, built from extrudes, a loft, a circular pattern and wrapped lettering with my name.",
    images: ["cad/custom-truck-tire/1.jpg"],
    file: "",
  },
  {
    title: "Garbage Truck",
    type: "Assembly",
    software: "SolidWorks",
    status: "",
    featured: true,
    description: "Full garbage truck model with a compactor body, side loading arm, cab and six wheels, plus drawing sheets with standard and isometric views.",
    images: ["cad/garbage-truck/1.jpg", "cad/garbage-truck/2.jpg", "cad/garbage-truck/3.jpg"],
    file: "",
  },
];

const EXPERIENCE = [
  {
    role: "Student Assistant III (Supervisor)",
    org: "TTU IT Help Desk",
    dates: "Sept 2025 to Present",
    points: [
      "Promoted twice: SA I (Sept 2025), SA II (June 2026), SA III (Oct 2026)",
      "Support technology needs for about 9,000 residents across the residence halls",
      "Lead student technicians on shift and troubleshoot hardware, software, account and network issues",
    ],
  },
  {
    role: "LYFE Peer Mentor",
    org: "TTU College of Engineering",
    dates: "Fall 2026 to Present",
    points: ["Guide first year engineering students through their first semester"],
  },
  {
    role: "Bridge Math Mentor",
    org: "Texas Tech University",
    dates: "August 2026",
    points: ["One of 9 mentors for about 60 incoming freshmen moving from high school to college math"],
  },
  {
    role: "Camp Counselor",
    org: "Explore Engineering Summer Camp",
    dates: "Summer 2026",
    points: ["Led high school students through hands on activities exploring engineering fields", "Created and presented a Mechanical Engineering department presentation for campers"],
  },
];

/* SKILLS
   To add a skill: add it inside the quotes list of that group.
   To add a group: copy one { ... } block. icon options: cube, printer, wrench, people, globe, gear, code, chart */
const SKILLS = [
  {
    group: "CAD and design",
    icon: "cube",
    note: "SolidWorks Design 2026",
    items: ["SolidWorks", "Part modeling", "Assemblies and mates", "Engineering drawings", "Motion studies", "Design for 3D printing"],
  },
  {
    group: "Prototyping",
    icon: "printer",
    note: "From model to physical part",
    items: ["3D printing", "Iterative prototyping", "Hand calculations"],
  },
  {
    group: "Technical",
    icon: "wrench",
    note: "IT Help Desk supervisor",
    items: ["Technical support", "Troubleshooting", "Microsoft Excel", "Microsoft Office"],
  },
  {
    group: "Programming and data",
    icon: "code",
    note: "Computational Thinking with Data Science",
    items: ["Python", "pandas", "scikit learn", "Excel financial models"],
  },
  {
    group: "Leadership",
    icon: "people",
    note: "Mentor to 60+ students",
    items: ["Team supervision", "Project management", "Mentoring", "Teaching", "Presenting to industry"],
  },
  {
    group: "Languages",
    icon: "globe",
    note: "",
    items: ["English (fluent)", "Bangla (native)"],
  },
];

/* CERTIFICATES
   To add one: copy a block, change the words.
   file: put the certificate PDF or image in the "certificates" folder and write its path here
   link: or paste the online verification link (leave "" if you don't have one)
   featured: true = shows on the main page with a ★ (pick your best 3 or 4)
   ★ NEW: you can also just upload certificate files to GitHub, see HOW-TO-ADD.md */
const CERTIFICATIONS = [
  {
    name: "Student Success Mentor Training",
    issuer: "Mentor Collective",
    date: "Oct 2026",
    credentialId: "",
    file: "",
    link: "",
    featured: true,
  },
  {
    name: "Certificate of Completion, On-Ramp Innovation Challenge",
    issuer: "IBTTA",
    date: "Nov 2026",
    credentialId: "",
    file: "",
    link: "",
    featured: true,
  },
  {
    name: "Foundations of Project Management",
    issuer: "Google",
    date: "Nov 2026",
    credentialId: "",
    file: "",
    link: "",
    featured: true,
  },
  {
    name: "Texas Cybersecurity Awareness Training",
    issuer: "State of Texas",
    date: "Oct 2025",
    credentialId: "",
    file: "",
    link: "",
    featured: false,
  },
];
