import React, { useState } from 'react';
import { Mail, Github, Send, Copy, Check, Terminal, AlertCircle, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import Magnet from '../components/reactbits/Magnet';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Contact: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
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
    // Functional mailto action: constructs standard mailto protocol to trigger local email client
    const subjectLine = encodeURIComponent(
      formData.subject || `[Portfolio Inquiry] Message from ${formData.name || 'Visitor'}`
    );
    const bodyText = encodeURIComponent(
      `From: ${formData.name || 'Not provided'} (${formData.email || 'Not provided'})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.contact.email}?subject=${subjectLine}&body=${bodyText}`;
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="border-b border-border bg-background-secondary px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-metallic">
            <Mail className="h-3.5 w-3.5" />
            <span>08 // OPEN FOR COLLABORATION</span>
          </div>
          <h2 className="font-display text-display-lg font-bold uppercase tracking-tight text-foreground">
            LET&apos;S BUILD WHAT&apos;S NEXT.
          </h2>
          <p className="max-w-3xl font-body text-sm leading-relaxed text-foreground-muted sm:text-base">
            Open to internships, research collaborations, hackathons and ambitious engineering
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Contact Details & Verified Channels (5 cols on lg) */}
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-6 rounded-xl border border-border bg-background-surface p-6 shadow-sm">
              <div className="flex items-center gap-2 border-b border-border pb-4 font-mono text-xs font-semibold text-foreground">
                <Terminal className="h-4 w-4 text-metallic" />
                <span>Verified Direct Channels</span>
              </div>

              {/* Direct Email Channel */}
              <div className="space-y-2">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
                  Primary Technical Mailbox
                </span>
                <div className="flex items-center justify-between rounded border border-border bg-background p-3 font-mono text-xs">
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="select-all text-foreground transition-colors hover:text-metallic focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-metallic"
                    aria-label={`Send email to ${profileData.contact.email}`}
                  >
                    {profileData.contact.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="cursor-target rounded p-1.5 text-foreground-secondary transition-colors hover:bg-background-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-metallic"
                    aria-label="Copy email address to clipboard"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {copied ? (
                  <p
                    className="flex items-center gap-1 font-mono text-[11px] text-emerald-400"
                    role="status"
                  >
                    <Check className="h-3 w-3" /> Email copied to clipboard
                  </p>
                ) : (
                  <p className="font-mono text-[10px] text-foreground-muted">
                    Clicking opens your default email application.
                  </p>
                )}
              </div>

              {/* GitHub Channel */}
              <div className="space-y-2">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
                  Source Control &amp; Code Repositories
                </span>
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded border border-border bg-background p-3 font-mono text-xs transition-colors hover:border-metallic focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-metallic"
                  aria-label="Visit Tarun's GitHub profile (opens in new tab)"
                >
                  <div className="flex items-center gap-2 text-foreground-secondary group-hover:text-foreground">
                    <Github className="h-4 w-4" />
                    <span>github.com/TRB-89</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-foreground-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              </div>

              {/* Asset Policy Disclosure */}
              <div className="flex items-start gap-2.5 rounded border border-border/70 bg-background p-3.5 font-mono text-[11px] text-foreground-muted">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-metallic" />
                <span>
                  LinkedIn profile and compiled resume PDF links are withheld in accordance with
                  asset verification guidelines until final production assets are provided.
                </span>
              </div>
            </div>
          </div>

          {/* Email Dispatch Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border border-border bg-background-surface p-6 shadow-sm sm:p-8"
              aria-label="Direct message dispatch form"
            >
              <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-xs">
                <span className="font-semibold text-foreground">Draft Transmission</span>
                <span className="text-[11px] text-foreground-muted">
                  ACTION: LAUNCH EMAIL CLIENT
                </span>
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
                    className="w-full rounded border border-border bg-background px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-foreground-muted/50 focus:border-metallic focus:outline-none focus:ring-1 focus:ring-metallic"
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
                    className="w-full rounded border border-border bg-background px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-foreground-muted/50 focus:border-metallic focus:outline-none focus:ring-1 focus:ring-metallic"
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
                  className="w-full rounded border border-border bg-background px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-foreground-muted/50 focus:border-metallic focus:outline-none focus:ring-1 focus:ring-metallic"
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
                  placeholder="Outline your project scope, technical query, or collaboration proposal..."
                  className="w-full resize-y rounded border border-border bg-background px-3.5 py-2.5 font-mono text-xs text-foreground placeholder:text-foreground-muted/50 focus:border-metallic focus:outline-none focus:ring-1 focus:ring-metallic"
                />
              </div>

              <div className="flex flex-col justify-between gap-4 border-t border-border/70 pt-4 font-mono text-xs sm:flex-row sm:items-center">
                <p className="text-[11px] text-foreground-muted">
                  Note: Submitting this form prepares and launches your local email client directly.
                </p>
                <Magnet
                  magnetStrength={2}
                  maxOffset={10}
                  padding={25}
                  disabled={prefersReducedMotion}
                  wrapperClassName="inline-block"
                  innerClassName="inline-block"
                >
                  <button
                    type="submit"
                    className="cursor-target inline-flex items-center justify-center gap-2 rounded bg-foreground px-5 py-2.5 font-semibold text-background transition-all hover:bg-metallic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metallic"
                  >
                    <span>Launch Mail Client</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </Magnet>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
