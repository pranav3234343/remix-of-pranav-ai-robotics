import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import logo from "@/assets/logo.png";
import orRoom from "@/assets/or-room.jpg";
import { ArrowLeft, Loader2, Mail, Lock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Pranav Mercantile" },
      { name: "description", content: "Sign in to the Pranav Mercantile surgical robotics platform." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

type LoadingKey = "google" | "apple" | "microsoft" | "email" | null;

function LoginPage() {
  const [loading, setLoading] = useState<LoadingKey>(null);
  const navigate = useNavigate();

  function trigger(key: NonNullable<LoadingKey>) {
    if (loading) return;
    setLoading(key);
    window.setTimeout(() => {
      setLoading(null);
      toast.error("Try again later.", {
        description: "Authentication is temporarily unavailable.",
      });
    }, 5000);
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <Toaster />
      {/* Left — form */}
      <div className="relative flex flex-col px-6 sm:px-12 lg:px-16 py-10">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logo} alt="Pranav Mercantile" width={40} height={40} className="size-10 drop-shadow-[0_0_8px_oklch(0.68_0.18_235/0.5)] transition-transform group-hover:scale-105" />
            <div className="font-display font-semibold tracking-tight text-sm leading-tight">
              PRANAV<span className="text-primary"> · </span>MERCANTILE
            </div>
          </Link>
          <button
            onClick={() => navigate({ to: "/" })}
            className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 story-link"
          >
            <ArrowLeft className="size-3.5" /> Back home
          </button>
        </div>

        <div className="flex-1 grid place-items-center">
          <div className="w-full max-w-md py-12">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Surgeon & Hospital Portal</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">Sign in to your console.</h1>
            <p className="mt-3 text-muted-foreground">
              Access procedure analytics, fleet telemetry and clinical reports.
            </p>

            {/* SSO */}
            <div className="mt-8 space-y-3">
              <SsoButton
                provider="google"
                label="Continue with Google"
                loading={loading === "google"}
                disabled={!!loading && loading !== "google"}
                onClick={() => trigger("google")}
              />
              <SsoButton
                provider="apple"
                label="Continue with Apple"
                loading={loading === "apple"}
                disabled={!!loading && loading !== "apple"}
                onClick={() => trigger("apple")}
              />
              <SsoButton
                provider="microsoft"
                label="Continue with Microsoft"
                loading={loading === "microsoft"}
                disabled={!!loading && loading !== "microsoft"}
                onClick={() => trigger("microsoft")}
              />
            </div>

            <div className="my-7 flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
              <div className="flex-1 h-px bg-border" />
              or with email
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Email form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                trigger("email");
              }}
              className="space-y-4"
            >
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                <div className="mt-2 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    placeholder="surgeon@hospital.org"
                    className="w-full h-12 pl-10 pr-3 rounded-md border border-input bg-background focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Password</span>
                <div className="mt-2 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full h-12 pl-10 pr-3 rounded-md border border-input bg-background focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </label>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="rounded border-input" />
                  Remember me
                </label>
                <button type="button" className="text-primary story-link">Forgot password?</button>
              </div>
              <button
                type="submit"
                disabled={!!loading}
                className="btn-fx w-full h-12 rounded-md bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:opacity-95 disabled:opacity-70 inline-flex items-center justify-center gap-2"
              >
                {loading === "email" ? (
                  <><Loader2 className="size-4 animate-spin-fast" /> Signing in…</>
                ) : (
                  <>Sign in</>
                )}
              </button>
            </form>

            <p className="mt-6 text-xs text-muted-foreground inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" /> Protected by enterprise-grade SSO & TLS 1.3.
            </p>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pranav Mercantile Private Limited
        </div>
      </div>

      {/* Right — visual */}
      <div className="relative hidden lg:block bg-gradient-deep overflow-hidden">
        <img src={orRoom} alt="" width={1920} height={1280} className="absolute inset-0 size-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-primary-glow/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.68_0.18_235/0.25),transparent_60%)]" />
        <img src={logo} alt="" aria-hidden width={800} height={800} className="absolute -bottom-32 -right-24 w-[700px] opacity-10" />
        <div className="relative h-full flex items-end p-14 text-primary-foreground">
          <div className="max-w-md">
            <div className="text-xs uppercase tracking-[0.3em] text-primary-glow">Pranav Mercantile</div>
            <div className="mt-4 font-display text-3xl font-semibold leading-tight">
              "Intelligent systems will extend the steadiest hands in medicine."
            </div>
            <div className="mt-4 text-primary-foreground/70 text-sm">
              — Srinivasulu Sandireddy, Founder & CEO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SsoButton({
  provider,
  label,
  loading,
  disabled,
  onClick,
}: {
  provider: "google" | "apple" | "microsoft";
  label: string;
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      className="btn-fx w-full h-12 px-4 rounded-md border border-input bg-card hover:bg-accent transition-colors inline-flex items-center justify-center gap-3 text-sm font-medium disabled:opacity-60"
    >
      {loading ? <Loader2 className="size-4 animate-spin-fast" /> : <ProviderIcon provider={provider} />}
      {loading ? "Connecting…" : label}
    </button>
  );
}

function ProviderIcon({ provider }: { provider: "google" | "apple" | "microsoft" }) {
  if (provider === "google") {
    return (
      <svg viewBox="0 0 48 48" className="size-4" aria-hidden>
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.4 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.4-.3-3.5z"/>
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.4 29 4.5 24 4.5 16.3 4.5 9.7 8.8 6.3 14.7z"/>
        <path fill="#4CAF50" d="M24 43.5c5 0 9.5-1.9 12.9-5l-6-5c-1.9 1.3-4.3 2-6.9 2-5.2 0-9.7-3.1-11.3-7.5l-6.5 5C9.6 39.1 16.2 43.5 24 43.5z"/>
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6 5C40.9 35.6 43.5 30.3 43.5 24c0-1.2-.1-2.4-.3-3.5z"/>
      </svg>
    );
  }
  if (provider === "apple") {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden fill="currentColor">
        <path d="M16.365 1.43c0 1.14-.43 2.21-1.29 3.01-.87.84-2.04 1.46-3.04 1.36-.13-1.13.43-2.31 1.21-3.04.86-.86 2.32-1.5 3.12-1.33zM20.7 17.5c-.55 1.27-.82 1.84-1.53 2.97-.99 1.58-2.39 3.55-4.13 3.56-1.55.01-1.95-1.01-4.06-1-2.11.01-2.55 1.02-4.1 1.01-1.74-.02-3.07-1.8-4.06-3.38C.04 16.92-.31 11.91 1.5 9.26c1.29-1.88 3.32-2.98 5.23-2.98 1.95 0 3.17 1.07 4.78 1.07 1.56 0 2.51-1.07 4.77-1.07 1.7 0 3.51.93 4.8 2.53-4.22 2.31-3.53 8.34.42 9.69z"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <rect width="10" height="10" x="1" y="1" fill="#F25022"/>
      <rect width="10" height="10" x="13" y="1" fill="#7FBA00"/>
      <rect width="10" height="10" x="1" y="13" fill="#00A4EF"/>
      <rect width="10" height="10" x="13" y="13" fill="#FFB900"/>
    </svg>
  );
}
