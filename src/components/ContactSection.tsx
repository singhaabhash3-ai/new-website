import { useState, type FormEvent } from 'react';
import { PERSONAL_INFO } from '../data';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [showDirectForm, setShowDirectForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowDirectForm(false);
      setFormSent(false);
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 bg-[#0d1c2d]/60 relative border-b border-[#464554]/15"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#1c2b3c] via-[#122131] to-[#010f1f] p-8 md:p-12 overflow-hidden shadow-2xl border border-[#464554]/30">
          {/* Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c0c1ff]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-1.5 text-[#c0c1ff] font-label-caps text-label-caps uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">
                alternate_email
              </span>
              <span>Reach Out</span>
            </div>

            <h2 className="font-headline-xl text-headline-xl text-[#d4e4fa] tracking-tight">
              Let&apos;s build something interesting.
            </h2>

            <p className="font-body-lg text-body-lg text-[#c7c4d7]">
              Have a project idea, collaboration opportunity, or just want to connect?
            </p>

            {/* Copy-to-Clipboard Email Bar */}
            <div className="p-2 pl-4 rounded-xl bg-[#010f1f] flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 shadow-inner border border-[#464554]/30 mt-2">
              <div className="flex items-center gap-2 text-[#d4e4fa] font-code-md text-body-md overflow-hidden">
                <span className="material-symbols-outlined text-[#c0c1ff] text-lg">
                  mail
                </span>
                <span className="truncate" id="emailText">
                  {PERSONAL_INFO.email}
                </span>
              </div>

              <button
                id="copyBtn"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-headline-md text-body-sm transition-all active:scale-95 shadow-sm cursor-pointer border ${
                  copied
                    ? 'bg-[#c0c1ff] text-[#1000a9] border-[#c0c1ff]'
                    : 'bg-[#1c2b3c] hover:bg-[#273647] text-[#d4e4fa] border-[#464554]/30'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span id="copyLabel">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 font-headline-md text-body-md bg-[#c0c1ff] text-[#1000a9] hover:bg-[#8083ff] hover:text-[#0d0096] px-6 py-3 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(192,193,255,0.25)] hover:shadow-[0_0_28px_rgba(192,193,255,0.45)] hover:-translate-y-0.5 font-medium cursor-pointer"
              >
                <span>Email Me</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-headline-md text-body-md bg-[#273647]/80 text-[#d4e4fa] hover:bg-[#2c3a4c] border border-[#464554]/30 px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:-translate-y-0.5 font-medium cursor-pointer"
              >
                <span>LinkedIn</span>
                <span className="material-symbols-outlined text-[18px]">
                  open_in_new
                </span>
              </a>

              <button
                onClick={() => setShowDirectForm(!showDirectForm)}
                className="inline-flex items-center justify-center gap-2 font-headline-md text-body-md bg-[#122131] text-[#7bd0ff] hover:bg-[#1c2b3c] border border-[#7bd0ff]/30 px-5 py-3 rounded-lg transition-all font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat_bubble_outline
                </span>
                <span>{showDirectForm ? 'Hide Form' : 'Send Quick Note'}</span>
              </button>
            </div>

            {/* Interactive Quick Note Form */}
            {showDirectForm && (
              <form
                onSubmit={handleSendMessage}
                className="mt-6 pt-6 border-t border-[#464554]/30 flex flex-col gap-4 bg-[#051424]/90 p-5 rounded-xl border border-[#464554]/30"
              >
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-xs text-[#c0c1ff]">
                    DIRECT TRANSMISSION FORM
                  </span>
                  <span className="text-[11px] font-mono text-[#c7c4d7]">
                    Encrypted // Local Dispatch
                  </span>
                </div>

                {formSent ? (
                  <div className="p-4 rounded-lg bg-[#1c2b3c] text-[#7bd0ff] font-mono text-sm flex items-center gap-2 border border-[#7bd0ff]/30">
                    <span className="material-symbols-outlined">task_alt</span>
                    <span>
                      Message prepared and dispatched to {PERSONAL_INFO.email}!
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-[#010f1f] border border-[#464554]/30 rounded-lg px-3 py-2 text-sm text-[#d4e4fa] focus:border-[#c0c1ff] focus:outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-[#010f1f] border border-[#464554]/30 rounded-lg px-3 py-2 text-sm text-[#d4e4fa] focus:border-[#c0c1ff] focus:outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subject / Project Topic"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="bg-[#010f1f] border border-[#464554]/30 rounded-lg px-3 py-2 text-sm text-[#d4e4fa] focus:border-[#c0c1ff] focus:outline-none"
                    />
                    <textarea
                      placeholder="Your Message..."
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-[#010f1f] border border-[#464554]/30 rounded-lg px-3 py-2 text-sm text-[#d4e4fa] focus:border-[#c0c1ff] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="self-start px-5 py-2 rounded-lg bg-[#c0c1ff] text-[#1000a9] font-medium text-sm hover:bg-[#8083ff] transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Transmit Message</span>
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </button>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
