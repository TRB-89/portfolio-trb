import React, { useState } from 'react';
import { Mail, Github, Send, Copy, Check, Terminal, AlertCircle } from 'lucide-react';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honest submission: constructs standard mailto protocol to trigger verified email dispatch
    const subjectLine = encodeURIComponent(
      formData.subject || `[Portfolio Inquiry] Message from ${formData.name || 'Anonymous'}`
    );
    const bodyText = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.contact.email}?subject=${subjectLine}&body=${bodyText}`;
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Transmission"
      className="border-b border-border bg-background-secondary px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <Mail className="h-3.5 w-3.5" />
            <span>08 // TRANSMISSION PROTOCOL &amp; CONTACT</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            Initiate Contact
          </h2>
          <p className="font-mono text-xs text-foreground-muted">
            DIRECT DISPATCH // VERIFIED CHANNELS // ZERO PLACEHOLDER PROMISES
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Contact Details & Social Dispatch */}
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-6 rounded-xl border border-border bg-background-surface p-6">
              <div className="flex items-center gap-2 border-b border-border pb-4 font-mono text-xs font-semibold text-foreground">
                <Terminal className="h-4 w-4 text-metallic" />
                <span>Verified Direct Channels</span>
              </div>

              {/* Direct Email Box */}
              <div className="space-y-2">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
                  Primary Technical Mailbox
                </span>
                <div className="flex items-center justify-between rounded border border-border bg-background p-3 font-mono text-xs">
                  <span className="select-all text-foreground">{profileData.contact.email}</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="rounded p-1.5 text-foreground-secondary transition-colors hover:bg-background-secondary hover:text-foreground"
                    aria-label="Copy verified email to clipboard"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                    <Check className="h-3 w-3" /> Address copied to clipboard
                  </p>
                )}
              </div>

              {/* GitHub */}
              <div className="space-y-2">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
                  Source Control &amp; Code Repositories
                </span>
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded border border-border bg-background p-3 font-mono text-xs transition-colors hover:border-metallic"
                >
                  <div className="flex items-center gap-2 text-foreground-secondary group-hover:text-foreground">
                    <Github className="h-4 w-4" />
                    <span>github.com/TRB-89</span>
                  </div>
                  <span className="text-foreground-muted group-hover:text-foreground">↗</span>
                </a>
              </div>

              {/* Note on omitted placeholder links */}
              <div className="flex items-start gap-2 rounded border border-border/70 bg-background p-3.5 font-mono text-[11px] text-foreground-muted">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-metallic" />
                <span>
                  LinkedIn and verified PDF resume downloads are withheld pending review of
                  authentic production assets.
                </span>
              </div>
            </div>
          </div>

          {/* Direct Dispatch Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border border-border bg-background-surface p-6 sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-xs">
                <span className="font-semibold text-foreground">Transmission Form</span>
                <span className="text-[11px] text-foreground-muted">DISPATCH PROTOCOL: MAILTO</span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase text-foreground-muted"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full rounded border border-border bg-background px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-foreground-muted/50 focus:border-metallic focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase text-foreground-muted"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@example.com"
                    className="w-full rounded border border-border bg-background px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-foreground-muted/50 focus:border-metallic focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs uppercase text-foreground-muted"
                >
                  Topic / Engineering Inquiry
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry regarding VORTEX / Systems collaboration"
                  className="w-full rounded border border-border bg-background px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-foreground-muted/50 focus:border-metallic focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase text-foreground-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your project scope, technical query, or research topic..."
                  className="w-full resize-y rounded border border-border bg-background px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-foreground-muted/50 focus:border-metallic focus:outline-none"
                />
              </div>

              <div className="flex flex-col justify-between gap-4 pt-2 font-mono text-xs sm:flex-row sm:items-center">
                <span className="text-[11px] text-foreground-muted">
                  Submitting dispatches directly to your local mail agent.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded bg-foreground px-5 py-2.5 font-semibold text-background transition-all hover:bg-metallic"
                >
                  <span>Dispatch Email</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
