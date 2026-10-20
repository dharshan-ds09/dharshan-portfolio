import type { PortfolioData } from '../types';

/**
 * PORTFOLIO CONFIGURATION FILE
 * 
 * Instructions for Dharshan:
 * You can edit your personal details, social media handles, education,
 * skills, and projects directly in this file. All placeholders are clearly
 * marked with "[Your ...]" tags.
 */

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Dharshan',
    role: '2nd-Year B.Tech Student',
    subRole: 'Cybersecurity Enthusiast & Software Developer',
    bio: 'Passionate undergraduate exploring the intersection of secure system architectures, application security, and modern full-stack engineering. Focused on understanding vulnerabilities to build more resilient digital systems.',
    aboutParagraphs: [
      'Hello! I am Dharshan, currently in my 2nd year of B.Tech. I discovered my passion for technology through a curiosity about how software works under the hood and how digital systems defend against modern cyber threats.',
      'My journey spans both software development and cybersecurity: from designing responsive web interfaces and robust backend services to analyzing network packets, studying common vulnerabilities (OWASP Top 10), and exploring Linux system internals.',
      'I am currently looking for summer internship opportunities, open-source projects, and collaborative hackathons where I can learn from experienced mentors and contribute meaningful, secure code.'
    ],
    location: '[Your City, Country - e.g., Bangalore, India]',
    availability: 'Open for Summer 2026 Internships & Open-Source Projects',
    status: 'Seeking Opportunities',
    resumeFileName: 'Dharshan_Resume_Placeholder.pdf',
  },

  socials: {
    github: 'https://github.com/your-username-placeholder',
    linkedin: 'https://linkedin.com/in/your-username-placeholder',
    twitter: 'https://x.com/your-username-placeholder',
    email: 'dharshan.placeholder@example.com', // Replace with your real contact email
    tryhackme: 'https://tryhackme.com/p/your-username-placeholder',
    hackthebox: 'https://app.hackthebox.com/profile/your-username-placeholder',
  },

  skills: [
    {
      title: 'Cybersecurity & Defense',
      iconName: 'ShieldAlert',
      description: 'Foundational security concepts, threat analysis, and hands-on tooling',
      skills: [
        { name: 'OWASP Top 10', level: 'Familiar', badge: 'Core' },
        { name: 'Wireshark & Packet Analysis', level: 'Practicing', badge: 'Tool' },
        { name: 'Nmap & Network Scanning', level: 'Practicing', badge: 'Tool' },
        { name: 'Burp Suite Basics', level: 'Exploring', badge: 'WebSec' },
        { name: 'Linux Security & Hardening', level: 'Practicing', badge: 'OS' },
        { name: 'Cryptography Fundamentals', level: 'Theoretical', badge: 'Core' },
        { name: 'Penetration Testing Concepts', level: 'Exploring', badge: 'Defensive' },
        { name: 'Bash Scripting for Security', level: 'Proficient', badge: 'Automation' },
      ],
    },
    {
      title: 'Software Development & Languages',
      iconName: 'Code2',
      description: 'Core programming languages, algorithms, and data structures',
      skills: [
        { name: 'Python', level: 'Proficient', badge: 'Primary' },
        { name: 'C / C++', level: 'Proficient', badge: 'Academic & DSA' },
        { name: 'JavaScript (ES6+)', level: 'Proficient', badge: 'Web' },
        { name: 'TypeScript', level: 'Familiar', badge: 'Modern Web' },
        { name: 'Java', level: 'Familiar', badge: 'OOP' },
        { name: 'SQL', level: 'Familiar', badge: 'Databases' },
      ],
    },
    {
      title: 'Web & Frameworks',
      iconName: 'Globe',
      description: 'Building modern, performant, and secure web applications',
      skills: [
        { name: 'React.js', level: 'Familiar', badge: 'Frontend' },
        { name: 'Node.js & Express', level: 'Familiar', badge: 'Backend' },
        { name: 'Tailwind CSS', level: 'Proficient', badge: 'Styling' },
        { name: 'RESTful API Design', level: 'Familiar', badge: 'Architecture' },
        { name: 'HTML5 & Responsive CSS3', level: 'Proficient', badge: 'Foundation' },
      ],
    },
    {
      title: 'Tools, Systems & DevOps',
      iconName: 'Terminal',
      description: 'Development environments, version control, and system utilities',
      skills: [
        { name: 'Git & GitHub', level: 'Proficient', badge: 'Essential' },
        { name: 'Linux (Ubuntu / Kali)', level: 'Proficient', badge: 'Daily Driver' },
        { name: 'Docker Fundamentals', level: 'Exploring', badge: 'Containers' },
        { name: 'VS Code & JetBrains IDEs', level: 'Proficient', badge: 'Workflow' },
        { name: 'Postman (API Testing)', level: 'Familiar', badge: 'Testing' },
      ],
    },
  ],

  projects: [
    {
      id: 'project-1',
      title: '[Project Placeholder] Network Packet Analyzer & Logger',
      tagline: 'Lightweight packet sniffer built with Python & Scapy to inspect network headers and detect anomalies.',
      description: 'A customizable packet sniffing utility that parses TCP/UDP/ICMP packets in real time. Built to understand the lower levels of the OSI stack, packet fragmentation, and protocol handshakes.',
      category: 'cybersecurity',
      technologies: ['Python', 'Scapy', 'Raw Sockets', 'Network Protocols', 'Wireshark Export'],
      features: [
        'Real-time packet capture filtering by IP, port, or protocol',
        'Payload inspection with hex/ASCII dumps for payload analysis',
        'Alerting on suspicious port-knocking or rapid SYN patterns',
        'PCAP file export compatible with Wireshark for deep dive analysis'
      ],
      githubUrl: 'https://github.com/your-username-placeholder/packet-analyzer',
      liveUrl: '',
      status: 'Placeholder',
      featured: true,
    },
    {
      id: 'project-2',
      title: '[Project Placeholder] Secure Role-Based Auth Service',
      tagline: 'Authentication microservice implementing JWT tokens, bcrypt hashing, and rate-limiting against brute force.',
      description: 'A dedicated authentication service designed with security-first practices: HTTP-only cookies, robust password complexity enforcement, token expiration, and CSRF protection mechanisms.',
      category: 'software',
      technologies: ['Node.js', 'Express', 'JWT', 'Bcrypt', 'PostgreSQL', 'Jest'],
      features: [
        'Secure password hashing with salted Bcrypt algorithms',
        'JWT access tokens paired with rotatable refresh tokens',
        'Sliding window rate-limiter to mitigate automated brute-force attacks',
        'Input sanitization preventing SQL injection and XSS payloads'
      ],
      githubUrl: 'https://github.com/your-username-placeholder/secure-auth-service',
      liveUrl: 'https://demo-auth-service.placeholder.app',
      status: 'Placeholder',
      featured: true,
    },
    {
      id: 'project-3',
      title: '[Project Placeholder] Automated Vulnerability & Port Scanner',
      tagline: 'Automated reconnaissance script that wraps Nmap and banner grabs to produce security audit reports.',
      description: 'A command-line security auditing script designed to scan local subnet ranges, detect open ports, fingerprint running service versions, and cross-reference common CVE records.',
      category: 'cybersecurity',
      technologies: ['Python', 'Nmap Scripting Engine (NSE)', 'Bash', 'JSON Reports'],
      features: [
        'Multi-threaded port scanning with configurable timeout thresholds',
        'Service version banner grabbing and header fingerprinting',
        'Generates structured Markdown and JSON audit reports',
        'Built-in safety checks to prevent scanning unauthorized external IP ranges'
      ],
      githubUrl: 'https://github.com/your-username-placeholder/recon-scanner',
      liveUrl: '',
      status: 'Placeholder',
      featured: true,
    },
    {
      id: 'project-4',
      title: '[Project Placeholder] Student Cyber Hub & Portfolio',
      tagline: 'Personal portfolio and technical interactive sandbox with an interactive CLI terminal.',
      description: 'A modern, responsive portfolio built to showcase cybersecurity labs, CTF write-up drafts, and software engineering projects with an electric-green terminal aesthetic.',
      category: 'software',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      features: [
        'Polished dark theme with electric-green cyber accents and glows',
        'Integrated interactive terminal console for quick visitor navigation',
        'Responsive layout optimized for mobile, tablet, and desktop screens',
        'Clean modular architecture ready for zero-config Vercel deployment'
      ],
      githubUrl: 'https://github.com/your-username-placeholder/dharshan-portfolio',
      liveUrl: 'https://your-portfolio-placeholder.vercel.app',
      status: 'Placeholder',
      featured: false,
    },
    {
      id: 'project-5',
      title: '[Project Placeholder] End-to-End Encrypted Chat Prototype',
      tagline: 'Proof-of-concept client-side encrypted messaging channel using AES-GCM and WebSockets.',
      description: 'An experimental prototype exploring symmetric encryption in transit. Messages are encrypted locally in the browser before being relayed across the WebSocket server, ensuring zero-knowledge on the server.',
      category: 'software',
      technologies: ['Web Crypto API', 'JavaScript', 'WebSockets', 'Node.js'],
      features: [
        'Browser-native AES-GCM 256-bit encryption and key derivation',
        'Ephemeral rooms with keys stored strictly in client memory',
        'Zero message storage on the relay server'
      ],
      githubUrl: 'https://github.com/your-username-placeholder/e2ee-chat',
      liveUrl: '',
      status: 'Placeholder',
      featured: false,
    },
    {
      id: 'project-6',
      title: '[Project Placeholder] Linux System Hardening & Audit Script',
      tagline: 'Bash automation script to evaluate Ubuntu/Debian security baselines against CIS benchmarks.',
      description: 'An administrative hardening script that audits SSH configuration, disables unnecessary services, configures UFW firewall rules, and identifies files with unsafe SUID permissions.',
      category: 'tools',
      technologies: ['Bash', 'Linux', 'UFW', 'SSH Hardening', 'Auditd'],
      features: [
        'Automated verification of SSH root login and password authentication flags',
        'Finds and logs unexpected SUID/SGID root executables',
        'Applies sensible UFW default deny rules for incoming connections',
        'Provides a checklist summary of passed and failed security checks'
      ],
      githubUrl: 'https://github.com/your-username-placeholder/linux-hardener',
      liveUrl: '',
      status: 'Placeholder',
      featured: false,
    },
  ],

  education: [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: '[Your College / University Name - e.g., National Institute of Technology]',
      duration: '2024 - 2028 (Expected)',
      status: 'Currently in 2nd Year (Semester 3/4)',
      location: '[Your University Location - e.g., Bangalore, India]',
      grade: '[Your Current CGPA - e.g., 8.7 / 10.0]',
      highlights: [
        'Second-year student actively specializing in Computer Science and Cybersecurity fundamentals.',
        'Active member of the campus Coding Club and Cybersecurity / CTF interest group [Editable].',
        'Participating in college hackathons and algorithmic programming challenges.',
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (C++ / Java)',
        'Computer Networks & Protocols',
        'Operating Systems & Concurrency',
        'Database Management Systems (DBMS)',
        'Discrete Mathematics',
        'Information & Computer Security Basics',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (12th Grade)',
      institution: '[Your High School / Junior College Name]',
      duration: '2022 - 2024',
      status: 'Completed',
      location: '[Your High School Location]',
      grade: '[Your Percentage / Grade - e.g., 92%]',
      highlights: [
        'Specialized in Science stream with Mathematics, Physics, Chemistry, and Computer Science.',
        'Developed foundational interest in programming algorithms and hardware architecture.',
      ],
      coursework: [
        'Computer Science (Python & SQL)',
        'Advanced Mathematics & Calculus',
        'Physics & Logic Gates',
      ],
    },
  ],

  certifications: [
    {
      title: 'Google Cybersecurity Certificate / CompTIA Security+ [Placeholder]',
      issuer: 'Coursera / CompTIA [Editable]',
      status: 'In Progress',
      date: 'Target: 2026',
      verificationUrl: '#',
    },
    {
      title: 'Pre-Security & Complete Beginner Paths [Placeholder]',
      issuer: 'TryHackMe [Editable]',
      status: 'In Progress',
      date: 'Ongoing',
      verificationUrl: 'https://tryhackme.com',
    },
    {
      title: 'Certified Ethical Hacker (CEH) / Practical Ethical Hacking [Placeholder]',
      issuer: 'TCM Security / EC-Council [Editable]',
      status: 'Planned',
      date: 'Target: 2026 - 2027',
      verificationUrl: '#',
    },
  ],
};
