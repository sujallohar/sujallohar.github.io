import React, { useState, useEffect, useRef } from "react";
import { ResumeVariant } from "../../types/portfolio";
import { CloseIcon } from "./Icons";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeVariant: (variant: ResumeVariant) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResumeVariant
}) => {
  const [query, setQuery] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions = [
    {
      id: "sec-dispatch",
      title: "Jump: §01 // Executive Dispatch",
      category: "Navigation",
      run: () => {
        window.location.hash = "#dispatch";
        onClose();
      }
    },
    {
      id: "sec-case-studies",
      title: "Jump: §02 // Systems Case Studies",
      category: "Navigation",
      run: () => {
        window.location.hash = "#case-studies";
        onClose();
      }
    },
    {
      id: "sec-proceedings",
      title: "Jump: §03 // Research Proceedings",
      category: "Navigation",
      run: () => {
        window.location.hash = "#proceedings";
        onClose();
      }
    },
    {
      id: "sec-record",
      title: "Jump: §04 // Career & Fellowship Record",
      category: "Navigation",
      run: () => {
        window.location.hash = "#record";
        onClose();
      }
    },
    {
      id: "sec-capability",
      title: "Jump: §05 // Capability Inventory",
      category: "Navigation",
      run: () => {
        window.location.hash = "#capability";
        onClose();
      }
    },
    {
      id: "sec-commendations",
      title: "Jump: §06 // Verified Commendations",
      category: "Navigation",
      run: () => {
        window.location.hash = "#commendations";
        onClose();
      }
    },
    {
      id: "sec-contact",
      title: "Jump: §07 // Direct Dispatch",
      category: "Navigation",
      run: () => {
        window.location.hash = "#contact";
        onClose();
      }
    },
    {
      id: "cv-one-page",
      title: "Resume Studio: Open Industry 1-Page (SWE / DevSecOps)",
      category: "Resume Studio",
      run: () => {
        onClose();
        onOpenResumeVariant("one-page");
      }
    },
    {
      id: "cv-full",
      title: "Resume Studio: Open Full Technical CV",
      category: "Resume Studio",
      run: () => {
        onClose();
        onOpenResumeVariant("full");
      }
    },
    {
      id: "cv-academic",
      title: "Resume Studio: Open Academic & Research CV",
      category: "Resume Studio",
      run: () => {
        onClose();
        onOpenResumeVariant("academic");
      }
    },
    {
      id: "theme-toggle",
      title: "Appearance: Toggle Light / Dark Monograph Theme",
      category: "Preferences",
      run: () => {
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("portfolio_theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("portfolio_theme", "dark");
        }
        onClose();
      }
    },
    {
      id: "copy-email",
      title: "Action: Copy Primary Email (sujapanchal17@gmail.com)",
      category: "Contact",
      run: () => {
        navigator.clipboard.writeText("sujapanchal17@gmail.com");
        onClose();
      }
    },
    {
      id: "ext-github",
      title: "External: Open GitHub Profile (@sujallohar)",
      category: "External",
      run: () => {
        window.open("https://github.com/sujallohar", "_blank");
        onClose();
      }
    },
    {
      id: "ext-linkedin",
      title: "External: Open LinkedIn Profile (sujallohar)",
      category: "External",
      run: () => {
        window.open("https://www.linkedin.com/in/sujallohar", "_blank");
        onClose();
      }
    }
  ];

  const filtered = actions.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].run();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filtered, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cmd-palette-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-xs no-print"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[var(--bg-canvas)] border border-[var(--border-rule-strong)] shadow-2xl overflow-hidden font-mono text-xs"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-[var(--border-rule)] bg-[var(--bg-surface)]">
          <span className="text-[var(--accent-terracotta)] font-bold mr-2">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or section..."
            className="w-full bg-transparent border-none text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden text-xs"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] ml-2"
            aria-label="Close command palette"
          >
            <CloseIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto divide-y divide-[var(--border-rule)] bg-[var(--bg-surface)]">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-[var(--text-muted)]">
              No matching commands found.
            </div>
          ) : (
            filtered.map((action, idx) => (
              <div
                key={action.id}
                onClick={() => action.run()}
                className={`px-4 py-2.5 flex items-center justify-between cursor-pointer transition-colors ${
                  idx === selectedIndex
                    ? "bg-[var(--accent-terracotta)] text-white"
                    : "text-[var(--text-primary)] hover:bg-[var(--bg-surface-secondary)]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="opacity-75">{action.title}</span>
                </div>
                <span className={`text-[10px] uppercase tracking-wider ${
                  idx === selectedIndex ? "text-white/80" : "text-[var(--text-muted)]"
                }`}>
                  {action.category}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Footer Hints */}
        <div className="px-4 py-2 border-t border-[var(--border-rule)] bg-[var(--bg-surface-secondary)] flex justify-between items-center text-[10px] text-[var(--text-muted)]">
          <span>Navigate: ↑ ↓ • Execute: Enter</span>
          <span>Close: Esc</span>
        </div>
      </div>
    </div>
  );
};
