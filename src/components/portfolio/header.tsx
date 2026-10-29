
"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Cpu,
  GraduationCap,
  FolderGit2,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";

const navigationItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: PhoneCall },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/10 bg-slate-950/95 py-3 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => {
            setActiveTab("#home");
            closeMenu();
          }}
          aria-label="Developer home"
          className={`shrink-0 text-2xl font-extrabold tracking-wide transition-colors ${
            isScrolled
              ? "text-white hover:text-cyan-400"
              : "text-slate-950 hover:text-slate-700"
          }`}
        >
          JUBAIL
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-2 lg:flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveTab(item.href)}
                aria-current={isActive ? "location" : undefined}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition-all duration-200 xl:px-4 ${
                  isActive
                    ? "border-cyan-500 bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : isScrolled
                      ? "border-transparent text-white hover:bg-white/10 hover:text-cyan-300"
                      : "border-white/70 bg-white/85 text-slate-900 shadow-sm shadow-black/10 backdrop-blur-md hover:border-cyan-500 hover:bg-white hover:text-cyan-700"
                }`}
              >
                <Icon className="size-4 shrink-0" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400 lg:hidden ${
            isScrolled
              ? "text-white hover:bg-white/10"
              : "border border-white/70 bg-white/85 text-slate-900 shadow-sm backdrop-blur-md hover:bg-white"
          }`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-white/10 bg-slate-950/95 shadow-xl backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="space-y-1 p-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.href);
                  closeMenu();
                }}
                tabIndex={isMenuOpen ? 0 : -1}
                aria-current={isActive ? "location" : undefined}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-white hover:bg-white/10 hover:text-cyan-300"
                }`}
              >
                <Icon className="size-4 shrink-0" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Header;
