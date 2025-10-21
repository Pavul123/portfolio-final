import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Full-featured e-commerce platform with shopping cart and product catalog",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web Development"
    },
    {
      title: "Form Validation System",
      description: "Secure form validation with frontend and backend integration",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
      category: "Full Stack"
    },
    {
      title: "Power BI Customer Churn Analysis",
      description: "Comprehensive customer churn analysis dashboard with predictive insights",
      tech: ["Power BI", "DAX", "Data Visualization"],
      category: "Data Analytics"
    },
    {
      title: "Login & Signup System",
      description: "Responsive authentication system with modern UI",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web Development"
    },
    {
      title: "Age Calculator",
      description: "Interactive age calculator with date validation",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web Development"
    },
    {
      title: "Game Development",
      description: "Interactive game built using Pygame framework",
      tech: ["Python", "Pygame"],
      category: "Game Development"
    }
  ];

  const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React.js"],
    "Backend": ["Node.js", "Express.js", "Django", "SQL"],
    "Programming": ["Python", "C", "C++", "Java"],
    "Data & AI": ["Power BI", "Data Analysis", "Machine Learning", "AI Basics"],
    "Tools": ["Git", "VS Code", "Pygame"]
  };

  const experience = [
    {
      title: "Data Science Internship",
      company: "Professional Training",
      period: "Recent",
      description: "Gained hands-on experience in data analysis, visualization, and machine learning techniques. Worked on real-world datasets and implemented data-driven solutions."
    },
    {
      title: "Student Developer",
      company: "Anna University",
      period: "Sep 2022 - Apr 2026",
      description: "Active member of ELITE community, specializing in web development. Delivered presentations on various web frameworks and modern development practices."
    }
  ];

  const certificates = [
    { name: "JavaScript for Beginners", provider: "Simplilearn" },
    { name: "Java Programming Fundamentals", provider: "AZ Java" },
    { name: "Fundamentals of Database - SQL", provider: "Online Course" },
    { name: "Introduction to Artificial Intelligence", provider: "Online Course" },
    { name: "Introduction to HTML", provider: "Online Course" },
    { name: "Game Development using Pygame", provider: "GUVI" },
    { name: "AI/ML for Geodata Analysis", provider: "ISRO" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Safiya Barvin
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 hover:text-purple-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Safiya Barvin
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-6">
              Computer Science Engineer | Full Stack Developer | Data Analyst
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Passionate about building innovative web applications and deriving insights from data. 
              Currently pursuing B.E in Computer Science with a CGPA of 9.11.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300">
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="mailto:safiyabarvin777@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <GraduationCap className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <p className="text-gray-300 mb-2">
                <strong>B.E Computer Science and Engineering</strong>
              </p>
              <p className="text-purple-300 mb-4">St. Michael College of Engineering and Technology</p>
              <p className="text-gray-400">2022 - 2026</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm">Semester 1: CGPA 8.95</p>
                <p className="text-sm">Semester 2: CGPA 8.65</p>
                <p className="text-sm">Semester 3: CGPA 9.83</p>
                <p className="text-sm">Semester 4: CGPA 9.00</p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <Award className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Award from Collector of Sivagangai for speech on Drug Prevention and Control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Shield from Arabic School for excellence in public speaking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Academic Excellence Shield from Anna University</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Active member of ELITE community, Web Development domain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-purple-400 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-purple-300 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-xs text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-700/50 px-3 py-1 rounded-full text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
                <Code className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-4 text-purple-300">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span key={i} className="bg-purple-500/20 px-4 py-2 rounded-lg text-sm hover:bg-purple-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-slate-700/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <p className="font-semibold text-purple-300 text-sm">{cert.name}</p>
                  <p className="text-gray-400 text-xs mt-1">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-12 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:safiyabarvin777@gmail.com" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
              <Mail className="mx-auto mb-4 text-purple-400" size={32} />
              <p className="font-semibold mb-2">Email</p>
              <p className="text-sm text-gray-400">safiyabarvin777@gmail.com</p>
            </a>
            
            <a href="tel:+918098337483" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
              <Phone className="mx-auto mb-4 text-purple-400" size={32} />
              <p className="font-semibold mb-2">Phone</p>
              <p className="text-sm text-gray-400">+91 809 833 7483</p>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
              <Linkedin className="mx-auto mb-4 text-purple-400" size={32} />
              <p className="font-semibold mb-2">LinkedIn</p>
              <p className="text-sm text-gray-400">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-4">© 2025 Safiya Barvin. All rights reserved.</p>
          <p className="text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}