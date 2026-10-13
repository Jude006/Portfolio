/**
 * Portfolio projects. Order here = order on the page.
 * Strongest, most complex work first; smaller frontend builds last.
 *
 * Required: title, category, description, img, technologies
 * Optional: shortDescription, link, github, video, problemSolved,
 *           story, impact, features
 * category: "Full Stack" | "Frontend" | "Mobile"
 */
export const projects = [
  /* ---------------- Flagship: mobile + full stack ---------------- */
  {
    title: "KontriFund",
    category: "Mobile",
    shortDescription:
      "Fintech mobile app for personal savings and secure group contributions.",
    description:
      "A fintech mobile app that helps people reach their financial goals through secure group contributions and structured savings plans. Users can save on their own with a personal savings plan, or come together with friends, family or colleagues to contribute toward a shared purpose. KontriFund is built around trust and transparency, so every member can see how the group is doing, and it helps users build saving discipline and support one another over time.",
    img: "/images/kontrifund.PNG",
    technologies: "Flutter, Kotlin, PostgreSQL, Paystack, CoralPay",
    link: "",
    github: "https://github.com/Jude006",
    video: "/videos/kontrifund-demo.mp4",
    problemSolved:
      "Saving money alone is hard to stick to, and group contributions are usually run informally through chats and notebooks, where money can go missing and members lose trust in each other. KontriFund gives people a structured, transparent and secure place to save, both individually and together.",
    impact:
      "✅ Gives users a disciplined way to save toward a personal goal\n✅ Lets groups pool contributions for a shared purpose in one place\n✅ Every member can see contributions and progress, which builds trust\n✅ Replaces informal tracking in chats and notebooks with a clear record",
    features: [
      "Personal savings plans with goals",
      "Group contributions for a shared purpose",
      "Structured savings plans that build discipline",
      "Transparent contribution tracking for every member",
      "Secure sign-up and login",
      "Payments through Paystack and CoralPay",
      "Built for mobile with Flutter",
    ],
  },
  {
    title: "SmartSkul",
    category: "Full Stack",
    shortDescription:
      "Multi-tenant school platform for results, report cards, fees and parent communication.",
    description:
      "A multi-tenant school management platform where any school can register, set itself up and run its daily operations from one place. Admins manage students, classes, subjects, sessions and terms, enter and publish results, generate printable report cards, track fees and payments, and send announcements to students and parents by email. Every student gets their own portal to view results, report cards and fee balances, and a super admin dashboard lets the platform owner manage schools and subscriptions.",
    img: "/images/smartskul.PNG",
    technologies:
      "React, Tailwind CSS, Node.js, Express, MongoDB, JWT, Nodemailer",
    link: "https://smart-school-beta-livid.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Many schools still handle results, fees and parent communication with paper records, spreadsheets and scattered WhatsApp messages, which makes report cards slow to produce and fee balances hard to track. SmartSkul puts the whole workflow in one platform where each school's data is kept separate and secure.",
    impact:
      "✅ Schools can register and set up on their own, with email verification\n✅ Results are entered once, published, and appear in each student's portal\n✅ Report cards are generated and print-ready as PDF\n✅ Fees, payments and outstanding balances are tracked per student\n✅ Fee reminders and announcements reach students and parents by email\n✅ Each school's data is isolated, and suspending a school blocks its logins",
    features: [
      "School self-registration with email verification",
      "Academic sessions, terms, classes and subjects setup",
      "Student registration with auto-generated login credentials",
      "Custom grading structures for result entry",
      "Result publishing and printable report cards",
      "Fee structures, payment recording and balance tracking",
      "Email announcements and fee reminders to parents",
      "Student portal for results, report cards and fees",
      "Super admin dashboard to suspend or activate schools",
      "Role-based access with JWT authentication",
      "Responsive on mobile with a sidebar drawer",
    ],
  },
  {
    title: "Voice of Glory Assembly",
    category: "Full Stack",
    shortDescription:
      "Complete church management system with sermon streaming, online giving, and member portal.",
    description:
      "A complete church management system that solves the pain of manual WhatsApp follow-ups. Built because our evangelism team spent 2-3 hours daily copying and pasting messages to new visitors one by one. Now send personalized bulk WhatsApp messages to 100+ members instantly while managing sermon streaming, events, member portals, online giving, and admin dashboards.",
    img: "/images/vog.PNG",
    technologies:
      "React, Tailwind CSS, Node.js, Express, MongoDB, Paystack, JWT",
    link: "https://voiceofglory.org",
    github: "https://github.com/Jude006",
    problemSolved:
      "Church evangelism team struggled to send personalized follow-up messages to hundreds of outreach contacts individually via WhatsApp. This was time-consuming (taking 2-3 hours daily) and led to inconsistent communication, causing potential new members to be forgotten.",
    story:
      "💡 The idea was born during a church evangelism meeting. As the person responsible for reaching out to people who gave their contacts, I noticed the struggle: copying and pasting messages one by one to WhatsApp, often missing people or sending late replies. I thought, 'What if I could build a system that sends personalized messages to everyone at once?' That night, I started coding Voice of Glory Assembly - a platform that not only solved the WhatsApp messaging problem but evolved into a full church management system.",
    impact:
      "✅ Reduced message sending time from 2-3 hours to 5 minutes\n✅ Increased follow-up response rate by 75%\n✅ Helped retain 40+ new members in first month\n✅ Automated birthday and event reminders",
    features: [
      "Bulk personalized WhatsApp messaging",
      "Sermon streaming and podcast",
      "Online giving with Paystack",
      "Event management system",
      "Member dashboard and profiles",
      "Admin analytics dashboard",
      "Prayer request portal",
      "Media gallery",
      "Automated birthday/event reminders",
      "Role-based access control",
    ],
  },

  /* ---------------- Real client work ---------------- */
  {
    title: "Marian Schools",
    category: "Full Stack",
    shortDescription:
      "School website with admissions, student portal, fees and report card management.",
    description:
      "A complete school website with a built-in management system for a school in Anambra. The public website presents the school with an about page, gallery, contact page and an online application form for new admissions. Behind it, administrators log in to register students, manage school fees, enter results and publish report cards, and the system sends automated email reminders for outstanding fees. Students log in to their own dashboard to view their report cards and see exactly how much they owe.",
    img: "/images/marian.PNG",
    technologies: "React, Tailwind CSS, Node.js, Express, MongoDB, Nodemailer",
    link: "https://www.marianschools.com/",
    github: "https://github.com/Jude006",
    problemSolved:
      "The school had no online presence for parents to learn about it or apply, and it ran fees, results and report cards by hand. This project gives the school one place for both: a professional public website that handles admission applications, and a management system that handles student records, fees, results and parent reminders.",
    impact:
      "✅ Gave the school a professional website parents can find and trust\n✅ Parents can apply for admission online\n✅ Admin registers students and manages fees in one system\n✅ Automated email reminders follow up on unpaid fees\n✅ Results are entered and published as report cards\n✅ Students see their report card and fee balance from their own dashboard",
    features: [
      "Public website with about, gallery and contact pages",
      "Online admission application form",
      "Admin login and dashboard",
      "Student registration and records",
      "Fee management with balance tracking",
      "Automated email fee reminders",
      "Result entry and report card publishing",
      "Student portal with report card and amount owed",
      "Fully responsive on mobile",
    ],
  },
  {
    title: "GentleX Phones",
    category: "Full Stack",
    shortDescription: "Phone store with admin dashboard and Telegram ordering.",
    description:
      "A complete phone store website where customers can browse iPhones and Samsung phones, view product details, and order via Telegram. Includes a full admin dashboard for product management, order tracking, and customer management.",
    img: "/images/image.png",
    technologies: "React, Tailwind CSS, Node.js, Express, MongoDB",
    link: "https://gentle-x-v91r.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "The phone dealer relied solely on Instagram and WhatsApp for sales. This was chaotic and hard to manage. The website provides a professional storefront with an admin dashboard to manage products, orders, and customers efficiently.",
    impact:
      "✅ Admin can manage products easily\n✅ Track orders and customers\n✅ Professional storefront 24/7\n✅ Reduced chaos from Instagram-only sales",
    features: [
      "Product management dashboard",
      "Order tracking system",
      "Customer management",
      "Telegram ordering integration",
      "Admin analytics",
      "Product categories (iPhone, Samsung)",
      "Product detail pages",
    ],
  },

  /* ---------------- Full stack products ---------------- */
  {
    title: "CareerPilot",
    category: "Full Stack",
    shortDescription:
      "AI-powered job search platform with application tracking.",
    description:
      "An intelligent job search platform that transforms your career journey. Track applications, discover opportunities across 50+ job boards, and land your dream job with smart analytics and reminders.",
    img: "/images/career.PNG",
    technologies: "React, Tailwind, Node.js, Express, MongoDB, React Native",
    link: "https://career-pilot-neon.vercel.app/user/dashboard",
    github: "https://github.com/Jude006",
    problemSolved:
      "Eliminates job search chaos by centralizing applications and providing intelligent tracking and reminders.",
    features: [
      "Job application tracker",
      "Multi-board search",
      "Analytics dashboard",
      "Application reminders",
    ],
  },
  {
    title: "Dev Quest",
    category: "Full Stack",
    shortDescription: "Gamified platform turning coding tasks into RPG quests.",
    description:
      "A gamified developer productivity platform where programmers transform coding tasks into epic RPG quests. Track progress, set time-bound goals, earn streaks, and unlock achievements while accessing AI-powered learning materials.",
    img: "/images/dev-quest.PNG",
    technologies: "React, Tailwind, Node.js, Express, MongoDB, AI Integration",
    link: "https://dev-quest-ochre.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Makes learning to code engaging and addictive through gamification, increasing developer productivity and learning retention.",
    features: [
      "RPG-style quest system",
      "Streak tracking",
      "Achievement unlocks",
      "AI-powered learning",
    ],
  },
  {
    title: "Trip Tracker",
    category: "Full Stack",
    shortDescription:
      "Trip management with AI expense tracking and route optimization.",
    description:
      "A comprehensive trip management application that helps users track and manage their travels with AI-powered expense calculation and route optimization.",
    img: "/images/triptrack.png",
    technologies: "React, Tailwind, Node.js, Express, MongoDB, AI Integration",
    link: "https://trip-track-frontend.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Solves travel expense management and itinerary planning with intelligent automation.",
    features: [
      "AI expense calculator",
      "Route optimization",
      "Trip history",
      "Budget tracking",
    ],
  },
  {
    title: "FurShield",
    category: "Full Stack",
    shortDescription:
      "All-in-one pet care platform with vet services and shelter bookings.",
    description:
      "A comprehensive pet care platform offering veterinary services, animal shelter bookings, and pet management. Premium pet care, health tracking, and expert veterinary services all in one place - because your companion deserves the best protection.",
    img: "/images/furshield.PNG",
    technologies: "React, Tailwind, Node.js, Express, MongoDB",
    link: "https://furshield.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Simplifies pet care management by connecting pet owners with veterinary services and shelter bookings in one unified platform.",
    features: [
      "Vet appointment booking",
      "Pet health tracking",
      "Shelter reservations",
      "Pet care reminders",
    ],
  },

  /* ---------------- Frontend and brand websites ---------------- */
  {
    title: "Popsin Footwears",
    category: "Full Stack",
    shortDescription: "Premium shoe brand website with WhatsApp ordering.",
    description:
      "A premium shoe brand website showcasing corporate shoes and loafers. Customers can browse products, view detailed images, and order directly via WhatsApp. Built to help the brand establish a professional online presence and reach more customers.",
    img: "/images/popson.PNG",
    technologies: "React, Tailwind CSS, Vercel",
    link: "https://popson-footwear.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "The shoe brand had no online presence and relied solely on Instagram. Customers couldn't browse products easily or see prices. This website solved that by creating a professional digital storefront that works 24/7.",
    impact:
      "✅ Gave the brand a professional online presence\n✅ Customers can now browse shoes anytime, anywhere\n✅ WhatsApp ordering makes it easy for customers to buy\n✅ Built trust and credibility for the brand",
    features: [
      "Product showcase with image slider",
      "WhatsApp ordering integration",
      "Corporate shoes and loafers display",
      "Professional brand presence",
      "Mobile responsive design",
      "Contact form for inquiries",
    ],
  },
  {
    title: "Echoes Creative",
    category: "Frontend",
    shortDescription: "Creative agency website for digital services.",
    description:
      "A creative agency website offering web development, writing, social media management, and brand growth services. Designed to showcase the agency's capabilities and attract clients who need creative and digital solutions.",
    img: "/images/echoes.PNG",
    technologies: "React, Tailwind CSS, Vercel",
    link: "https://echoes-creative.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "The creative agency needed a professional online presence to attract clients. This website showcases their services, builds trust, and makes it easy for potential clients to contact them.",
    impact:
      "✅ Professional brand presence\n✅ Showcases all services clearly\n✅ Easy client contact\n✅ Built credibility for the agency",
    features: [
      "Service showcase (Web Dev, Writing, Social Media)",
      "Brand growth services",
      "Client contact form",
      "Professional design",
      "Mobile responsive",
    ],
  },
  {
    title: "Honey Guide",
    category: "Frontend",
    shortDescription: "Travel guide platform with destination info and booking.",
    description:
      "A comprehensive travel website providing users with essential travel information, destination guides, and booking resources for seamless trip planning.",
    img: "/images/guide.png",
    technologies: "React, Tailwind CSS",
    link: "https://honeys-escape.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Centralizes travel information and resources for stress-free trip planning.",
    features: [
      "Destination guides",
      "Travel tips",
      "Booking integration",
      "User reviews",
    ],
  },
  {
    title: "School Dashboard",
    category: "Frontend",
    shortDescription:
      "Student management system for schools and administrators.",
    description:
      "A comprehensive web application designed to manage student activities, track attendance, monitor academic progress, and streamline administrative tasks.",
    img: "/images/Dashboard.png",
    technologies: "React, Tailwind CSS",
    link: "https://school-admin-dashboard-47xp.vercel.app/",
    github: "https://github.com/Jude006",
    problemSolved:
      "Digitizes and streamlines school administration and student tracking.",
    features: [
      "Student attendance",
      "Grade tracking",
      "Parent communication",
      "Report generation",
    ],
  },
];