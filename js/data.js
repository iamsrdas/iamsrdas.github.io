/* =========================================================================
   DATA.JS  —  THIS IS THE ONLY FILE YOU SHOULD NEED TO EDIT DAY-TO-DAY.
   -------------------------------------------------------------------------
   Every page on the site (home, projects, publications, blog, awards,
   training, gallery) reads its content from the objects below and builds
   the page automatically. To add, remove, or change something, edit the
   arrays here — you never need to touch the .html files themselves.

   RULES THAT MATTER:
   1. Keep the commas between items. Every "{ ... }," entry is one card.
   2. Put NEW entries at the TOP of an array. The home page always shows
      whichever item is FIRST in "projects", "publications" and "blog" —
      so item [0] = "latest".
   3. Any field marked "(HTML allowed)" can contain formatting tags:
        <b>bold</b>  <i>italic</i>  <u>underline</u>
        <span style="color:#e8a23d">colored text</span>
        <br> for a line break, <p>...</p> for a new paragraph.
      Just be careful to close every tag you open.
   4. "size" on a media item controls how big the image/video shows on the
      detail page. Options: "small", "medium", "large".
   5. Image/video files themselves go in the /assets/img/... folders and
      you just reference the file path here, e.g. "assets/img/projects/ev1.jpg".
   6. Every project, publication, blog post, award, and training entry now
      needs an "image" (or "cover") field — cards only show an image, a
      date, and a title. Clicking a card opens a popup with the full
      text (description/abstract/content) right on that same page.
   ========================================================================= */

/* ---------------------------------------------------------------------
   1) SITE-WIDE INFO — used in the navbar, hero, footer, and contact page
   --------------------------------------------------------------------- */
const SITE = {
  name: "Shuvo Ronjon Das",          // EDIT: your full name — shown in the hero heading, browser tab title, and footer
  role: "Electrical Engineer, Researcher and Traveller",   // EDIT: your title/tagline — shown right after your name in the hero heading
  institution: "MTech in Electrical Engineering, Indian Institute of Technology Roorkee ",
  location: "Roorkee, Uttarakhand, India",
  thesis: "Researching Artificial Intelligence, Power Electronics and Battery Management Strategies for next-generation electric vehicles, with a long-term goal of pursuing a funded PhD abroad.",
  photo: "assets/img/profile.jpg",   // EDIT: replace this file with your photo (same name, or update the path)
  email: "iamsrdas00@gmail.com",          // EDIT
  cvFile: "assets/cv/CV.pdf",        // EDIT: drop your CV PDF into assets/cv/ with this name

  // EDIT each URL below. Leave the quotes empty ("") to hide an icon site-wide.
  social: {
    linkedin:  "https://linkedin.com/in/shuvoronjon",
    facebook:  "https://facebook.com/IamShuvoRonjon",
    instagram: "https://instagram.com/shuvo_ronjon",
    youtube:   "https://youtube.com/@Shuvo_IITR",
    scholar:   "https://scholar.google.com/citations?user=XXXXXXX"
  }
};

/* ---------------------------------------------------------------------
   2) PROJECTS — powers the Projects page AND each project's own detail
      page (project.html?id=...). Newest project first.
   --------------------------------------------------------------------- */
const projects = [
  {
    id: "ecg-based-smart-health-monitoring",     // EDIT: unique short id, no spaces (used in the URL)
    title: "ECG Based Smart Health Monitoring and Diagnostic System using IoT",
    date: "2024-10",                      // YYYY-MM, used for sorting/display
    tags: ["Electrocardiography", "ECG", "Internet of Things", "Health Monitoring"],
    cover: "assets/img/projects/placeholder-1.jpg",   // shown on cards
    summary: "Undergraduate Senior Year Project",
    // Full write-up, shown only on the project's own detail page. HTML allowed.
    description: `
      <p>This project was designed to acquire ECG signals from the human body, process them, display them in real time, and send them to a web-based platform for remote monitoring and basic diagnostic support. It aimed to provide a low-cost and portable ECG monitoring solution using IoT and embedded hardware.</p>
       
    `,
    // Photos/videos for the detail page. type: "image" or "video". size: "small" | "medium" | "large"
    media: [
      { type: "image", src: "assets/img/projects/placeholder-5.jpg", size: "large", caption: "Test setup / model overview" },
      { type: "image", src: "assets/img/projects/placeholder-4.jpg", size: "medium", caption: "Simulation results" }
    ],
    links: { repo: "", demo: "" }        // EDIT: GitHub repo / live demo URLs, or leave blank
  },
  {
    id: "IoT-based-overload-protection-system",
    title: "IoT-Based Overload Protection System in Electrical Networks using Arduino",
    date: "2025-04",
    tags: ["Internet of Things", "Overload Protection", "Arduino"],
    cover: "assets/img/projects/placeholder-3.jpg",
    summary: "A project under the <b> Switchgear and Protection </b> lab course during my 7th semester ",
    description: `<p>This project was designed to protect an electrical network from overload conditions by continuously monitoring current and automatically disconnecting the load when the current exceeds a safe limit. An Arduino was used as the control unit, while IoT connectivity enabled remote monitoring and alert notifications.</p>`,
    media: [
      { type: "image", src: "assets/img/projects/placeholder-2.jpg", size: "medium", caption: "" }
    ],
    links: { repo: "", demo: "" }
  }
];

/* ---------------------------------------------------------------------
   3) PUBLICATIONS — powers the Publications page. Newest first.
   --------------------------------------------------------------------- */
const publications = [
  {
    title: "Classification of Multifidus Surface Electromyography for Low Back Pain Detection: Superior Performance With Frequency-Domain Features",
    authors: "Shuvo Ronjon Das, Md. Moznuzzaman",
    venue: "18th International Conference on Engineering & Natural Sciences, Kyrenia, Turkish Republic of Northern Cyprus (Abstract Accepted and Presented)",
    year: "2025",
    image: "assets/img/publications/placeholder-1.jpg",   // EDIT: cover image shown on the card and in the popup
    link: "https://drive.google.com/file/d/12oDGqMZ9AtUIEFLcRxPKlRnmgoeRXF1c/view?usp=drive_link",     // EDIT: DOI or journal URL
    pdf: "",      // EDIT: path to a local PDF, e.g. "assets/cv/paper1.pdf", or leave blank
    abstract: `
      <p>Low back pain (LBP) affects millions worldwide and lacks objective diagnostic biomarkers.
      This study aimed to evaluate surface electromyography (sEMG) features from bilateral multifidus
      muscles to discriminate LBP patients from healthy controls during trunk movements. EMG signals
      from 22 participants (12 healthy, 10 LBP) were recorded during flexion and extension tasks. After
      preprocessing (bandpass Butterworth and notch filtering), signals were segmented, rectified,
      smoothed, and characterized using time-domain, frequency-domain, and time&ndash;frequency
      descriptors. Seven classifiers &mdash; Support Vector Machine, K-Nearest Neighbors, Decision Tree,
      Linear Discriminant Analysis, Random Forest, Logistic Regression, and Extreme Gradient Boosting
      &mdash; were trained and evaluated via stratified 5-fold cross-validation.</p>

      <p>Frequency-domain features consistently outperformed time-domain and time&ndash;frequency
      descriptors. <b>Random Forest achieved 86% accuracy</b> using combined frequency features for
      extension tasks, while Decision Tree reached 85% accuracy on the same feature set. Extension
      movements yielded superior discrimination compared to flexion (86% vs. 78% accuracy). ROC-AUC
      analysis confirmed strong classifier discrimination
      <span style="color:var(--accent-2)">(AUC &gt;0.80 for optimal models)</span>.</p>

      <p>These findings establish multifidus sEMG frequency signatures as discriminative biomarkers
      for LBP detection. Systematic feature selection combined with ensemble classifiers effectively
      identifies abnormal muscle activation patterns associated with LBP. The clinical utility of
      frequency-based sEMG analysis warrants further investigation for objective, non-invasive LBP
      diagnosis in clinical settings, rehabilitation monitoring, and wearable health systems.</p>

      <p><i>Keywords:</i> Surface electromyography, Low back pain, Multifidus, Multi-domain analysis,
      Machine learning.</p>
    `
  }
];

/* ---------------------------------------------------------------------
   4) BLOG — powers the Blog page AND each post's detail page
      (post.html?id=...). Newest first.
   --------------------------------------------------------------------- */
const blogPosts = [
  {
    id: "first-post",
    title: "Starting my Master of Technology in EV Technology at IIT Roorkee",
    date: "2026-07-16",
    cover: "assets/img/blog/placeholder-2.jpg",
    excerpt: "Starting my M.Tech in Electrical Engineering (EV Technology) at IIT Roorkee under the ICCR Scholarship.",
    content: `
      <p>New Chapter Begins in my Academic journey! 🎓</p>

      <p>I've officially started my <b>Master of Technology (M.Tech) in Electrical Engineering,
      specializing in Electric Vehicle Technology</b>, at the
      <a href="https://www.iitr.ac.in/" target="_blank" rel="noopener">Indian Institute of Technology, Roorkee</a> —
      one of India's premier engineering institutions and a leading center for research in power
      electronics, energy systems, and next-generation mobility.</p>

      <p>This journey has been made possible by the
      <span style="color:var(--accent-2)"><b>Indian Council for Cultural Relations (ICCR) Scholarship</b></span>,
      awarded under the <b>Suborno Jayanti Scholarship</b> scheme, sponsored by the
      Ministry of External Affairs, Government of India. It's a privilege to be selected for this
      program, and I don't take the opportunity lightly.</p>

      <p>Coming from Bangladesh, with a B.Sc. in Electrical and Electronic Engineering from Jashore University of Science and Technology and some
      hands-on industry experience as a Trainee Engineer at PRAN RFL Group, I've long been drawn to the intersection
      of power systems and clean mobility. EV Technology as a field sits right at that intersection —
      batteries, power electronics, motor drives, and control systems all coming together to reshape
      how we move. Joining IIT Roorkee's EE department to study this in depth feels like the natural
      next step toward my long-term goal of pursuing a funded PhD abroad.</p>

      <p> Grateful to the High Commission of India, Dhaka, and ICCR for this opportunity.
      Excited for the journey ahead! 🚗⚡ </p>

      <p>Over the next two years, I'm looking forward to:</p>
      <ul>
        <li>Building a strong foundation in EV powertrains, battery management systems, artificial intelligence and power electronics</li>
        <li>Working on research projects and publishing my findings</li>
        <li>Collaborating with faculty and peers across one of India's top engineering campuses</li>
        <li>Documenting the journey here — coursework, projects, conferences, and the occasional detour</li>
      </ul>

      <p>Thank you to everyone who has supported me in getting here — family, mentors, and
      the ICCR and Indian High Commission in Dhaka for making this possible. New chapter,
      new campus, and a lot of work ahead. Let's get started.</p>
    `
  }
];

/* ---------------------------------------------------------------------
   5) AWARDS — powers the Awards page. Newest first.
   --------------------------------------------------------------------- */
const awards = [
  {
    title: "1st Runner Up",
    org: "Ansys SCADE Student Challenge 2026 organized by IIT Roorkee, CADFEM in association with IEEE Roorkee Subsection and UP Section",
    year: "2026",
    image: "assets/img/awards/placeholder-1.jpg",   // EDIT: award photo shown on the card and in the popup
    description: "1st Runner-Up in the Ansys SCADE Student Challenge where I built a small Battery Management System using Ansys SCADE."
  },
  {
    title: "ICCR Suborno Jayanti Scholarship",
    org: "Indian Council for Cultural Relations",
    year: "2026",
    image: "assets/img/awards/placeholder-2.jpg",   // EDIT: award photo shown on the card and in the popup
    description: "Fully funded scholarship awarded for pursuing Master of Technology in Electrical Engineering at Indian Institute of Technology Roorkee, India."
  }
];

/* ---------------------------------------------------------------------
   6) TRAINING & WORKSHOPS — powers the Training page. Newest first.
   --------------------------------------------------------------------- */
const trainings = [
  {
    title: "Two-Day Hands-On Training Workshop on Electric Vehicle and Battery Management Systems",
    org: "Department of Electrical Engineering, Indian Institute of Technology, Roorkee, in association with IEEE Roorkee Subsection, IEEE UP Section, and CADFEM APAC",
    year: "2026",
    image: "assets/img/training/placeholder-1.jpg",   // EDIT: training photo shown on the card and in the popup
    description: "The workshop offered a great mix of theory and hands-on practice, covering: Fundamentals of EV operation and Battery Management Systems, Practical motor design using Ansys MotorCAD, Simulation of practical BMS operations using Ansys SCADE."
  }
];

/* ---------------------------------------------------------------------
   7) GALLERY — powers the Gallery page. type: "image" or "video".
   --------------------------------------------------------------------- */
const gallery = [
  { type: "image", src: "assets/img/gallery/placeholder-1.jpg", caption: "Ansys SCADE Student Challenge 2026 at IIT Roorkee — 1st Runner-Up Award among 150+ participants" },
  { type: "image", src: "assets/img/gallery/placeholder-2.jpg", caption: "First Day at IIT Roorkee and it's iconic James Thomason Building" }
];
