import React, { useState, useEffect, FormEvent } from 'react';
import { GitHubIcon, LinkedInIcon, HuggingFaceIcon, MailIcon, PhoneIcon, LocationIcon, TrophyIcon, MedalIcon, CertificateIcon, CodeIcon, ShieldIcon, BarChartIcon, PeopleIcon, LightbulbIcon, ClipboardIcon } from './Icons';

// Reusable Section Wrapper
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="py-20 md:py-28 section-animate">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-heading text-accent-blue mb-12">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// --- HERO SECTION ---
const titles = [
  "Responsible AI & Applied AI Scientist",
  "ISO/IEC 42001 Contributor",
  "AI Governance & Risk Specialist",
  "Top 1% Hugging Face Contributor",
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 75 : 100);

    setCurrentTitle(titles[index].substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="z-10 container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-light-text dark:text-dark-text">
                Ganesh Kumar
            </h1>
            <p className="mt-4 text-xl md:text-2xl h-8 font-mono text-accent-blue">
                {currentTitle}
                <span className="opacity-50 text-light-secondary dark:text-dark-secondary">|</span>
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-light-secondary dark:text-dark-secondary">
                Building Responsible, Explainable, and Secure AI Systems that Align with Human Values.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/resume.pdf" target="_blank" className="text-white font-bold py-3 px-6 rounded-lg bg-accent-blue hover:opacity-90 transition-opacity w-full sm:w-auto">Download Resume</a>
                <a href="#contact" className="bg-gray-200 dark:bg-dark-card text-light-text dark:text-dark-text font-bold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-opacity-80 transition-all w-full sm:w-auto">Contact Me</a>
            </div>
        </div>
    </section>
  );
};


// --- ABOUT SECTION ---
export const About: React.FC = () => (
  <Section id="about" title="About Me">
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <p className="text-lg text-light-text dark:text-dark-text/90 mb-6">
          I’m a Responsible AI & Applied AI Scientist with 4+ years of experience in operationalizing AI governance frameworks across enterprise systems. My work integrates technical controls with regulatory compliance, driving fairness, transparency, and accountability in machine learning applications.
        </p>
        <p className="text-lg text-light-text dark:text-dark-text/90 mb-6">
          At Infosys, I contributed to the world’s first ISO/IEC 42001–certified Responsible AI practice, leading cross-functional programs to assess AI risk, implement security controls, and establish AI audit readiness. Recognized among the Top 1% on Hugging Face for Generative AI work and Top 2% in Google AI Hackathon 2025, I strive to balance ethical principles with innovation in every AI deployment.
        </p>
        <p className="text-lg text-light-text dark:text-dark-text/90">
          As a Responsible AI Engineer at Infosys, I contribute to the development and testing of our open-source Responsible AI Toolkit, a key component of the Infosys Topaz Responsible AI Suite. This toolkit is built upon the AI3S framework—Scan, Shield, and Steer—to help enterprises innovate responsibly while addressing ethical challenges in AI adoption. By integrating advanced defensive measures, the toolkit detects and mitigates risks such as privacy breaches, security attacks, and biased outputs, thereby enhancing trust and transparency in AI systems. Infosys is committed to fostering an inclusive AI ecosystem that ensures safety, security, privacy, and fairness, empowering businesses worldwide to leverage AI responsibly.
        </p>
      </div>
      <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold font-heading text-light-text dark:text-dark-text">Fun Facts</h3>
        <ul className="list-disc list-inside space-y-2 text-light-secondary dark:text-dark-secondary mt-4">
          <li>Lifelong learner in emerging AI ethics frameworks</li>
          <li>Passionate about AI regulation & model explainability</li>
          <li>Enthusiast in reinforcement learning</li>
        </ul>
      </div>
    </div>
  </Section>
);

// --- EXPERIENCE SECTION ---
const experiences = [
    {
        company: "Infosys — Responsible AI & ML Innovation Team",
        role: "Applied AI Scientist",
        duration: "Jan 2022 – Present | Hyderabad",
        points: [
            "Led Responsible AI risk assessments for 50+ AI projects across Finance, Healthcare, and Government.",
            "Mapped NIST AI RMF (Govern → Map → Measure → Manage) into risk workflows.",
            "Designed risk scoring, audit documentation, and fairness dashboards.",
            "Drove ISO/IEC 42001 certification readiness.",
            "Managed LLM security red-teaming (TAP/PAIR), cutting injection risk by 30%.",
            "Delivered RAI training to 180+ engineers and product managers.",
            "Worked on data migration from RDBMS (Netezza) to Databricks Delta Lake for analysis and reporting.",
            "Developed high-performance data ingestion pipelines using Spark SQL and automated data processing workflows using Python, reducing manual effort by 50%.",
            "Configured Airflow DAGs to automate data processing, ensuring data accuracy and reliability.",
            "Analyzed large financial datasets to identify trends and anomalies for decision-making.",
        ]
    },
    {
        company: "[24]7.ai",
        role: "Research Analyst",
        duration: "Aug 2021 – Dec 2021 | Hyderabad",
        points: [
            "Built NLP chatbots improving intent classification accuracy by 22%.",
            "Developed SaaS-ready APIs for enterprise deployment.",
            "Collaborated with cross-functional teams to enhance data quality by 15%, ensuring data accuracy for reporting.",
        ]
    }
];

export const Experience: React.FC = () => (
    <Section id="experience" title="Professional Experience">
        <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-light-border dark:bg-dark-border hidden md:block"></div>
            {experiences.map((exp, index) => (
                <div key={index} className="md:flex mb-12 items-start group">
                    <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                         <h3 className="text-xl font-bold font-heading text-light-text dark:text-dark-text">{exp.role}</h3>
                        <p className="font-semibold text-accent-blue">{exp.company}</p>
                        <p className="text-sm text-light-secondary dark:text-dark-secondary">{exp.duration}</p>
                    </div>
                    <div className="relative md:w-1/2 md:pl-8 mt-4 md:mt-0">
                        <div className="absolute -left-1.5 md:left-[-34px] top-1 w-3 h-3 rounded-full bg-accent-blue ring-4 ring-light-bg dark:ring-dark-bg transition-all"></div>
                        <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-xl shadow-sm">
                            <ul className="list-disc list-inside space-y-2 text-light-secondary dark:text-dark-secondary">
                                {exp.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

// --- CORE COMPETENCIES ---
const competencies = [
    { icon: <ShieldIcon />, title: "Responsible AI Governance", text: "NIST AI RMF, ISO/IEC 42001" },
    { icon: <BarChartIcon />, title: "Bias Detection & Explainability", text: "Fairlearn, SHAP, LIME" },
    { icon: <CodeIcon />, title: "Threat Modeling & LLM Security", text: "OWASP LLM Top 10, MITRE ATLAS" },
    { icon: <ClipboardIcon />, title: "AI Risk Assessment", text: "Risk Scoring & Escalation" },
    { icon: <PeopleIcon />, title: "Stakeholder Communication", text: "Audit Readiness & Training" },
    { icon: <LightbulbIcon />, title: "Policy-to-Practice", text: "Implementation & Control Design" },
];
export const Competencies: React.FC = () => (
    <Section id="competencies" title="Core Competencies">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {competencies.map((c, i) => (
                <div key={i} className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-xl hover:-translate-y-2 transition-all text-center shadow-sm">
                    <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-accent-blue/10 text-accent-blue rounded-full">
                        {c.icon}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-light-text dark:text-dark-text">{c.title}</h3>
                    <p className="text-light-secondary dark:text-dark-secondary mt-1">{c.text}</p>
                </div>
            ))}
        </div>
    </Section>
);

// --- ACHIEVEMENTS ---
const achievements = [
    { icon: <TrophyIcon />, text: "Top 1% — Hugging Face Competitions (Reinforcement Learning, 2023)" },
    { icon: <MedalIcon />, text: "Top 2% — Google AI Hackathon (Agentic AI, 2025)" },
    { icon: <CertificateIcon />, text: "Contributor — Infosys ISO/IEC 42001 Responsible AI Implementation" }
];
export const Achievements: React.FC = () => (
    <Section id="achievements" title="Achievements & Awards">
        <div className="max-w-3xl mx-auto space-y-6">
            {achievements.map((a, i) => (
                <div key={i} className="flex items-center bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-4 rounded-xl shadow-sm">
                    <div className="text-accent-blue mr-4">{a.icon}</div>
                    <p className="text-light-text dark:text-dark-text">{a.text}</p>
                </div>
            ))}
        </div>
    </Section>
);

// --- EDUCATION & CERTIFICATIONS ---
const education = [
    "Master’s in Information Technology — Osmania University",
    "Bachelor’s in Applied Science — Osmania University"
];
const certifications = [
    "ISO/IEC 42001 — Responsible AI Management (Contributor)",
    "Google Gen AI Leader",
    "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    "DeepLearning.AI — Fine-tuning Large Language Models",
    "OpenAI Certified Prompt Engineer"
];
export const Education: React.FC = () => (
    <Section id="education" title="Education & Certifications">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-xl font-bold font-heading text-center mb-6 text-light-text dark:text-dark-text">Education</h3>
                <ul className="space-y-4">
                    {education.map((e, i) => <li key={i} className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-4 rounded-xl text-center shadow-sm">{e}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold font-heading text-center mb-6 text-light-text dark:text-dark-text">Certifications</h3>
                <ul className="space-y-4">
                    {certifications.map((c, i) => <li key={i} className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-4 rounded-xl text-center shadow-sm">{c}</li>)}
                </ul>
            </div>
        </div>
    </Section>
);

// --- TECHNICAL STACK ---
const skills = ["Python", "PyTorch", "Hugging Face", "LangChain", "Fairlearn", "SHAP", "LIME", "Spark SQL", "Airflow", "Databricks", "OpenTelemetry", "OWASP ZAP", "Power BI", "Confluence", "Jira"];
export const TechStack: React.FC = () => (
    <Section id="tech-stack" title="Technical Stack">
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
                <div key={i} className="bg-gray-200 dark:bg-dark-card text-light-secondary dark:text-dark-secondary font-mono text-sm py-2 px-4 rounded-lg">
                    {skill}
                </div>
            ))}
        </div>
    </Section>
);

// --- BLOG ---
const posts = [
    { title: "Why ISO/IEC 42001 Matters for AI Governance", summary: "A deep dive into how the new ISO standard is creating a global benchmark for trust and accountability in AI, moving from abstract principles to auditable controls." },
    { title: "Operationalizing AI Risk Frameworks with NIST RMF", summary: "Explore practical strategies for implementing the NIST AI Risk Management Framework, transforming theoretical guidelines into tangible engineering practices for safer AI systems." },
    { title: "How to Red-Team Large Language Models Responsibly", summary: "Learn about the ethical hacking techniques used to test LLMs for vulnerabilities like bias, toxicity, and security flaws, ensuring models are robust before deployment." }
];
export const Blog: React.FC = () => (
    <Section id="blog" title="Blog & Publications">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((p, i) => (
                <div key={i} className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 rounded-xl flex flex-col shadow-sm">
                    <h3 className="text-lg font-bold font-heading flex-grow text-light-text dark:text-dark-text">{p.title}</h3>
                    <p className="text-light-secondary dark:text-dark-secondary mt-2 text-sm">{p.summary}</p>
                    <a href="#" className="text-accent-blue mt-4 self-start font-semibold">Read More &rarr;</a>
                </div>
            ))}
        </div>
    </Section>
);

// --- CONTACT ---
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    // Mock sending email
    console.log('Form data submitted:', formData);
    setTimeout(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };
    
    return(
    <Section id="contact" title="Get In Touch">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <LocationIcon />
                    <p className="text-light-secondary dark:text-dark-secondary">Hyderabad, India</p>
                </div>
                 <div className="flex items-start gap-4">
                    <MailIcon />
                    <a href="mailto:ganeshgoud0023@gmail.com" className="text-light-secondary dark:text-dark-secondary hover:text-accent-blue transition">ganeshgoud0023@gmail.com</a>
                </div>
                 <div className="flex items-start gap-4">
                    <PhoneIcon />
                    <a href="tel:+917995686260" className="text-light-secondary dark:text-dark-secondary hover:text-accent-blue transition">+91 7995686260</a>
                </div>
                <div className="flex space-x-6 pt-4">
                    <a href="https://www.linkedin.com/in/ganeshkumararyan/" target="_blank" rel="noopener noreferrer" className="text-light-secondary dark:text-dark-secondary hover:text-dark-text transition"><LinkedInIcon /></a>
                    <a href="https://github.com/Aryanshanu" target="_blank" rel="noopener noreferrer" className="text-light-secondary dark:text-dark-secondary hover:text-dark-text transition"><GitHubIcon /></a>
                    <a href="https://huggingface.co/spaces/Aryanshanu" target="_blank" rel="noopener noreferrer" className="text-light-secondary dark:text-dark-secondary hover:text-dark-text transition"><HuggingFaceIcon /></a>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full p-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:ring-2 focus:ring-accent-blue focus:outline-none placeholder:text-light-secondary/80"/>
                <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:ring-2 focus:ring-accent-blue focus:outline-none placeholder:text-light-secondary/80"/>
                <textarea name="message" placeholder="Your Message" rows={5} required value={formData.message} onChange={handleChange} className="w-full p-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:ring-2 focus:ring-accent-blue focus:outline-none placeholder:text-light-secondary/80"></textarea>
                <button type="submit" className="w-full text-white font-bold py-3 px-6 rounded-lg bg-accent-blue hover:opacity-90 transition-opacity">Send Message</button>
                 {status && <p className="text-center mt-4 text-accent-blue">{status}</p>}
            </form>
        </div>
    </Section>
);
};