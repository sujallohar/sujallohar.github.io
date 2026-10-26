import { useState, useEffect } from "react";
import { Search, X, Download, ExternalLink, BookOpen, Layers, Briefcase, Mail, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "../../data/personal";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Action" | "External";
  icon: any;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // handled by parent
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const commands: CommandItem[] = [
    {
      id: "nav-about",
      title: "Go to About / Bio",
      category: "Navigation",
      icon: Layers,
      action: () => {
        window.location.hash = "#about";
        onClose();
      }
    },
    {
      id: "nav-experience",
      title: "Go to Experience & Education",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        window.location.hash = "#experience";
        onClose();
      }
    },
    {
      id: "nav-projects",
      title: "Go to Featured Projects",
      category: "Navigation",
      icon: Layers,
      action: () => {
        window.location.hash = "#projects";
        onClose();
      }
    },
    {
      id: "nav-skills",
      title: "Go to Technical Skills Matrix",
      category: "Navigation",
      icon: Shield,
      action: () => {
        window.location.hash = "#skills";
        onClose();
      }
    },
    {
      id: "nav-research",
      title: "Go to Research & Publications",
      category: "Navigation",
      icon: BookOpen,
      action: () => {
        window.location.hash = "#research";
        onClose();
      }
    },
    {
      id: "nav-certifications",
      title: "Go to Certifications & Awards",
      category: "Navigation",
      icon: Shield,
      action: () => {
        window.location.hash = "#certifications";
        onClose();
      }
    },
    {
      id: "nav-contact",
      title: "Go to Contact Form",
      category: "Navigation",
      icon: Mail,
      action: () => {
        window.location.hash = "#contact";
        onClose();
      }
    },
    {
      id: "act-resume",
      title: "Download Resume PDF (Sujal_CV.pdf)",
      category: "Action",
      icon: Download,
      action: () => {
        window.open(personalInfo.resumePdfUrl, "_blank");
        onClose();
      }
    },
    {
      id: "ext-govasset360",
      title: "Open Live GovAsset 360 Platform",
      category: "External",
      icon: ExternalLink,
      action: () => {
        window.open("https://govasset-360.web.app", "_blank");
        onClose();
      }
    },
    {
      id: "ext-samvedna",
      title: "Open Live Samvedna Autism Platform",
      category: "External",
      icon: ExternalLink,
      action: () => {
        window.open("https://samvedna-beta.vercel.app", "_blank");
        onClose();
      }
    },
    {
      id: "ext-devsecops",
      title: "Open Secure DevSecOps Platform Docs",
      category: "External",
      icon: ExternalLink,
      action: () => {
        window.open("https://sujallohar.github.io/secure-devsecops-platform/", "_blank");
        onClose();
      }
    },
    {
      id: "ext-github",
      title: "Open GitHub Profile (sujallohar)",
      category: "External",
      icon: GithubIcon,
      action: () => {
        window.open(personalInfo.github, "_blank");
        onClose();
      }
    },
    {
      id: "ext-linkedin",
      title: "Open LinkedIn Profile",
      category: "External",
      icon: LinkedinIcon,
      action: () => {
        window.open(personalInfo.linkedin, "_blank");
        onClose();
      }
    }
  ];

  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase().trim())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950">
          <Search className="w-4 h-4 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-xs font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-500 hover:text-slate-300 rounded"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command Items List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs transition-colors ${
                    isSelected
                      ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-300 hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-400" : "text-slate-500"}`} />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-cyan-400 font-bold">Sujal Lohar DevSecOps</span>
        </div>
      </div>
    </div>
  );
}
