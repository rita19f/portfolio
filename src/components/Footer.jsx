import React, { useEffect, useRef, useState } from 'react'

const Footer = () => {
  const [count, setCount] = useState(null)
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/ritawu-portfolio/page-views/up')
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null))
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span>© {new Date().getFullYear()} Rita Wu</span>
          <div className="visitor-counter" ref={ref}>
            <div className={`visitor-pill ${open ? 'visitor-pill--open' : ''}`}>
              <button
                className="visitor-eye-btn"
                onClick={() => setOpen((v) => !v)}
                aria-label="Show visitor count"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11">
                  <rect x="10.25" y="3" width="3.5" height="12" rx="1.75" />
                  <rect x="10.25" y="18" width="3.5" height="3.5" rx="1.75" />
                </svg>
              </button>
              <span className="visitor-count">
                {count !== null ? `${count.toLocaleString()} visitors` : '…'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
