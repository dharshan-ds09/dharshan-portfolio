import { useState, type FormEvent } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare, 
  Shield, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

interface ContactProps {
  onOpenEditGuide: () => void;
}

export const Contact = ({ onOpenEditGuide }: ContactProps) => {
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    // Successful submission simulation + mailto launch
    setFormStatus('success');
    setStatusMessage('Message prepared! Click "Launch Mail App" or copy the prefilled draft.');

    // Construct mailto link
    const mailtoUrl = `mailto:${encodeURIComponent(socials.email)}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#080d16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>&lt;Get In Touch /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="text-slate-400 text-base font-sans leading-relaxed">
            Interested in discussing an internship, hackathon collaboration, or cybersecurity research? Drop a note below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-xl bg-[#0b101c] border border-slate-800 space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-100 font-sans">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-sans">
                  Whether you have an inquiry, feedback on my projects, or an internship opportunity, I will be delighted to hear from you.
                </p>
              </div>

              {/* Email Copier Box */}
              <div className="p-4 rounded-lg bg-[#070b13] border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>EMAIL ADDRESS (PLACEHOLDER)</span>
                  <span className="text-[10px] text-emerald-400">Click to copy</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-emerald-300 truncate">
                    {socials.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:border-emerald-400 transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-emerald-400 animate-in fade-in duration-200">
                    &bull; Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Status and Details */}
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Typical response time: Within 24-48 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Target: Summer 2026 Internships</span>
                </div>
              </div>

              {/* Social Handles */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono uppercase text-slate-400 mb-3">
                  Profiles &amp; Platforms (Editable)
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-[#070b13] border border-slate-800 hover:border-emerald-500/40 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-emerald-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-[#070b13] border border-slate-800 hover:border-emerald-500/40 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                    <span>LinkedIn</span>
                  </a>

                  {socials.tryhackme && (
                    <a
                      href={socials.tryhackme}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-[#070b13] border border-slate-800 hover:border-emerald-500/40 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span>TryHackMe</span>
                    </a>
                  )}

                  {socials.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-[#070b13] border border-slate-800 hover:border-emerald-500/40 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <TwitterIcon className="w-4 h-4 text-emerald-400" />
                      <span>Twitter / X</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Edit Guide Trigger */}
              <div className="pt-2 text-center">
                <button
                  onClick={onOpenEditGuide}
                  className="text-xs font-mono text-slate-500 hover:text-emerald-400 underline transition-colors cursor-pointer"
                >
                  Configure your email &amp; social URLs &gt;
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0b101c] border border-slate-800 shadow-xl text-left">
              <h3 className="text-lg font-bold text-slate-100 font-sans mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans mb-6">
                Fill in the details below. This form will create a structured message and launch your default email client.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Summer Internship Opportunity / Project Collaboration"
                    className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Dharshan, I checked out your portfolio and would like to discuss..."
                    className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-sans text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 resize-none"
                  />
                </div>

                {/* Status Alert */}
                {formStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/40 text-xs font-mono text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {formStatus === 'success' && (
                  <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-xs font-mono text-emerald-300 space-y-2">
                    <p className="flex items-center gap-2 font-bold">
                      <Check className="w-4 h-4 text-emerald-400" />
                      {statusMessage}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={`mailto:${encodeURIComponent(socials.email)}?subject=${encodeURIComponent(
                          formData.subject || 'Portfolio Inquiry'
                        )}&body=${encodeURIComponent(formData.message)}`}
                        className="px-3 py-1.5 rounded bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
                      >
                        Launch Mail App
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `To: ${socials.email}\nSubject: ${formData.subject}\n\n${formData.message}`
                          );
                          alert('Draft copied to clipboard!');
                        }}
                        className="px-3 py-1.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
                      >
                        Copy Draft Text
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-500 text-slate-950 font-mono font-bold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_25px_rgba(0,255,102,0.5)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
