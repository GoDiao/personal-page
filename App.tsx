import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ChevronRight, Trophy, GraduationCap } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS, NAV_LINKS, EXPERIENCE, EDUCATION, SKILLS, RESEARCH_INTERESTS, ACHIEVEMENTS } from './constants';
import { Section } from './components/Section';

// --- SUB-COMPONENTS ---

// 1. Navigation Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          SD.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-indigo-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="flex flex-col p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 rounded-md text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. Skill Card Component
const SkillCard: React.FC<{ category: typeof SKILLS[0] }> = ({ category }) => {
  const Icon = category.icon;
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full border border-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// 3. Experience Item Component
const ExperienceCard: React.FC<{ item: typeof EXPERIENCE[0] }> = ({ item }) => {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline Line (Desktop) */}
      <div className="hidden md:block absolute left-[-41px] top-0 h-full w-[2px] bg-slate-200">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full z-10"></div>
      </div>
      
      {/* Timeline Line (Mobile) */}
      <div className="md:hidden absolute left-0 top-0 h-full w-[2px] bg-slate-200">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-3 border-indigo-600 rounded-full z-10"></div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8 hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-indigo-600">{item.role}</h3>
            <div className="text-lg font-semibold text-slate-900">{item.company}</div>
            {item.department && <div className="text-slate-500 text-sm italic mt-1">{item.department}</div>}
          </div>
          <div className="mt-2 md:mt-0 inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full self-start whitespace-nowrap">
            {item.date}
          </div>
        </div>

        <div className="space-y-6">
          {item.projects.map((project, idx) => (
            <div key={idx} className="group">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <ChevronRight size={16} className="text-indigo-500" />
                {project.title}
              </h4>
              <ul className="space-y-2 pl-6 mb-4">
                {project.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-slate-600 leading-relaxed text-sm md:text-base list-disc list-outside marker:text-slate-300">
                    <span dangerouslySetInnerHTML={{ 
                      __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-600 font-semibold">$1</strong>') 
                    }} />
                  </li>
                ))}
              </ul>
              
              {project.metrics && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-xl font-extrabold text-indigo-600">{metric.value}</div>
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">{metric.label}</div>
                      <div className="text-xs text-slate-500 mt-1">{metric.detail}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {item.tech && (
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <span key={tech} className="px-2.5 py-0.5 rounded text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
           <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
           <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block animate-bounce mb-4 text-4xl">👋</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{PROFILE.name}</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-600 mb-4">{PROFILE.role} | {PROFILE.subtitle}</p>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">{PROFILE.tagline}</p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#research" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center gap-2">
              View Research
            </a>
            <a href={PROFILE.cvLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="w-full h-full bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center text-6xl">
                 <span className="animate-pulse">🎓</span>
               </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            {PROFILE.about.map((paragraph, index) => (
              <p key={index} className="text-lg text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {PROFILE.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 text-indigo-700 font-semibold bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" className="bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-start justify-between p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-indigo-600 shrink-0">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{edu.school}</h3>
                  <div className="text-indigo-600 font-medium text-lg">{edu.degree}</div>
                  <p className="text-slate-600 mt-2 font-medium">{edu.description}</p>
                  {edu.modules && edu.modules.length > 0 && (
                    <div className="mt-3">
                       <p className="text-sm text-slate-500 mb-1">Relevant Modules:</p>
                       <div className="flex flex-wrap gap-2">
                         {edu.modules.map((mod, i) => (
                           <span key={i} className="text-xs bg-white px-2 py-1 rounded border border-slate-200 text-slate-600">
                             {mod}
                           </span>
                         ))}
                       </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:text-right shrink-0">
                <span className="inline-block px-4 py-2 bg-white rounded-full text-slate-600 font-semibold text-sm shadow-sm border border-slate-100">
                  {edu.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience">
        <div className="max-w-4xl mx-auto pl-4 md:pl-10 space-y-12 border-l border-slate-200 md:border-none">
          {EXPERIENCE.map((item, idx) => (
             <ExperienceCard key={idx} item={item} />
          ))}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" title="Achievements" className="bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white rounded-lg text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Trophy size={24} />
                </div>
                <span className="text-sm font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-100">{ach.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{ach.title}</h3>
              <div className="text-indigo-600 font-bold mb-4">{ach.rank}</div>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{ach.description}</p>
              <div className="flex flex-wrap gap-2">
                {ach.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-white border border-slate-200 rounded text-slate-500">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills" className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category) => (
            <SkillCard key={category.category} category={category} />
          ))}
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research" title="Research Interests">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_INTERESTS.map((interest) => {
             const Icon = interest.icon;
             return (
              <div key={interest.title} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
                <Icon size={40} className="text-indigo-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{interest.title}</h3>
                <p className="text-slate-600 leading-relaxed">{interest.description}</p>
              </div>
             );
          })}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" className="mb-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
          <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
            I'm always interested in discussing research opportunities, collaborations, or innovative projects in Computer Vision and Embodied AI.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white hover:text-indigo-600 transition-all duration-300 group border border-white/10"
                  aria-label={link.platform}
                >
                  <Icon size={28} className="mb-1" />
                  <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 uppercase tracking-wider">{link.platform}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-2 text-indigo-200 text-sm">
            <span>&copy; {new Date().getFullYear()} {PROFILE.name}.</span>
            <span className="hidden md:inline">•</span>
            <span>Built with React & Tailwind</span>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;