import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/technology", label: "Technology" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#050710]/70 border-b border-[var(--gold)]/20 shadow-[0_8px_30px_-12px_rgba(212,175,55,0.25)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Pranav Mercantile logo" width={48} height={48} className="size-12 logo-gold-sheen transition-transform duration-300 group-hover:scale-105" />
          <div className="font-display font-semibold tracking-tight leading-tight hidden sm:block text-white">
            <div className="text-sm">PRANAV<span className="text-gold"> · </span>MERCANTILE</div>
            <div className="text-[10px] tracking-[0.25em] text-white/50 uppercase">Private Limited</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-gold font-medium" }}
              inactiveProps={{ className: "text-white/70 hover:text-white transition-colors story-link" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex btn-fx text-white/80 hover:text-gold hover:bg-[var(--gold)]/10">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild size="sm" className="btn-fx bg-gradient-gold text-[#1a1407] font-semibold hover:opacity-95 shadow-gold hidden sm:inline-flex">
            <Link to="/contact">Request Demo</Link>
          </Button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2 text-white" aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background animate-float-up">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-foreground py-1.5">
                {l.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="text-foreground py-1.5 border-t border-border pt-3 mt-1">
              Sign in
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-primary font-medium py-1.5">
              Request Demo →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
