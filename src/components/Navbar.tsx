import { useEffect, useRef, useState } from "react"

interface NavbarProps {
  onNavigate: (page: "home" | "books") => void
  currentPage: "home" | "books"
}

const menuItems = [
  { key: "home" as const, label: "الرئيسية" },
  { key: "books" as const, label: "الكتب" },
]

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-menu-wrap" ref={menuRef}>
        <button
          className="navbar-menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <rect width="18" height="2" rx="1" fill="currentColor" />
            <rect y="6" width="14" height="2" rx="1" fill="currentColor" />
            <rect y="12" width="18" height="2" rx="1" fill="currentColor" />
          </svg>
          القائمة
        </button>

        {menuOpen && (
          <div className="navbar-dropdown">
            {menuItems.map((item) => (
              <button
                key={item.key}
                className={`navbar-dropdown-item${currentPage === item.key ? " navbar-dropdown-item--active" : ""}`}
                onClick={() => {
                  onNavigate(item.key)
                  setMenuOpen(false)
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="navbar-logo">
        <div className="navbar-logo-text">
          <span>دار</span>
          الحضارة
        </div>
        <div className="navbar-logo-icon">
          <svg viewBox="0 0 32 32" width="20" height="20" fill="none">
            <path
              d="M16 4C16 4 8 8 8 16L8 26L16 28L24 26L24 16C24 8 16 4 16 4Z"
              stroke="#b8922a"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M16 4L16 28" stroke="#b8922a" strokeWidth="1" />
            <path d="M8 16L24 16" stroke="#b8922a" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </nav>
  )
}
