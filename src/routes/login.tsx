import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import logo from "@/assets/logo.png";
import { ArrowLeft, Loader2, Mail, Lock, ShieldCheck } from "lucide-react";
import { NeuralBackground3D } from "@/components/three/NeuralBackground3D";

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
    <div className="relative min-h-screen overflow-hidden bg-[#070b1a]">
      <Toaster />
      {/* 3D animated neural background */}
      <NeuralBackground3D className="absolute inset-0" />
      {/* gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,oklch(0.52_0.18_250/0.55),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_70%,oklch(0.68_0.18_235/0.4),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 sm:px-12 lg:px-16 py-8 text-primary-foreground">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Pranav Mercantile" width={44} height={44} className="size-11 drop-shadow-[0_0_18px_oklch(0.68_0.18_235/0.7)] transition-transform group-hover:scale-105" />
          <div className="font-display font-semibold tracking-tight text-sm leading-tight">
            <div>PRANAV MERCANTILE</div>
            <div className="text-[10px] text-primary-glow tracking-[0.3em] uppercase">Private Limited</div>
          </div>
        </Link>
        <button
          onClick={() => navigate({ to: "/" })}
          className="text-xs text-primary-foreground/70 hover:text-primary-foreground inline-flex items-center gap-1.5 story-link"
        >
          <ArrowLeft className="size-3.5" /> Back home
        </button>
      </div>

      {/* Glass login panel */}
      <div className="relative z-10 min-h-[calc(100vh-200px)] grid place-items-center px-6 py-12">
        <div className="w-full max-w-md glass-gold rounded-3xl p-8 sm:p-10 text-white animate-float-up">
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="" width={64} height={64} className="size-16 logo-gold-sheen" />
            <div className="mt-5 text-[10px] uppercase tracking-[0.35em] text-gold font-medium">Surgeon & Hospital Portal</div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">Welcome <span className="text-gradient-gold">back.</span></h1>
            <p className="mt-2 text-sm text-white/65">
              Sign in to access procedure analytics and fleet telemetry.
            </p>
          </div>

          {/* SSO */}
          <div className="mt-8 space-y-3">
            <SsoButton provider="google" label="Continue with Google" loading={loading === "google"} disabled={!!loading && loading !== "google"} onClick={() => trigger("google")} />
            <SsoButton provider="apple" label="Continue with Apple" loading={loading === "apple"} disabled={!!loading && loading !== "apple"} onClick={() => trigger("apple")} />
            <SsoButton provider="microsoft" label="Continue with Microsoft" loading={loading === "microsoft"} disabled={!!loading && loading !== "microsoft"} onClick={() => trigger("microsoft")} />
          </div>

          <div className="my-7 flex items-center gap-4 text-[10px] text-primary-foreground/50 uppercase tracking-wider">
            <div className="flex-1 h-px bg-white/15" />
            or with email
            <div className="flex-1 h-px bg-white/15" />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); trigger("email"); }}
            className="space-y-4"
          >
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Email</span>
              <div className="mt-2 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-primary-foreground/60" />
                <input
                  type="email"
                  required
                  placeholder="surgeon@hospital.org"
                  className="w-full h-12 pl-10 pr-3 rounded-xl bg-white/5 border border-white/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-glow focus:bg-white/10 transition-colors"
                />
              </div>
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Password</span>
              <div className="mt-2 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-primary-foreground/60" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full h-12 pl-10 pr-3 rounded-xl bg-white/5 border border-white/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-glow focus:bg-white/10 transition-colors"
                />
              </div>
            </label>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-primary-foreground/70">
                <input type="checkbox" className="rounded border-white/20 bg-white/5" />
                Remember me
              </label>
              <button type="button" className="text-primary-glow story-link">Forgot password?</button>
            </div>
            <button
              type="submit"
              disabled={!!loading}
              className="btn-fx w-full h-12 rounded-xl bg-gradient-gold text-[#1a1407] font-semibold shadow-gold hover:opacity-95 disabled:opacity-70 inline-flex items-center justify-center gap-2"
            >
              {loading === "email" ? (
                <><Loader2 className="size-4 animate-spin-fast" /> Signing in…</>
              ) : (
                <>Sign in</>
              )}
            </button>
          </form>

          <p className="mt-6 text-[11px] text-primary-foreground/60 inline-flex items-center gap-1.5 justify-center w-full">
            <ShieldCheck className="size-3.5 text-primary-glow" /> Protected by enterprise-grade SSO & TLS 1.3.
          </p>
        </div>
      </div>

      <div className="relative z-10 text-xs text-primary-foreground/50 text-center pb-6">
        © 2024 Pranav Mercantile Private Limited
      </div>
    </div>
  );
}

function SsoButton({
  provider, label, loading, disabled, onClick,
}: {
  provider: "google" | "apple" | "microsoft";
  label: string; loading: boolean; disabled: boolean; onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      className="btn-fx w-full h-12 px-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/15 transition-colors inline-flex items-center justify-center gap-3 text-sm font-medium disabled:opacity-60 text-primary-foreground"
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
