import { useEffect, useState } from "react";
import "./App.css";

const notes = [
  "BIG THINGS ARE MOVING.",
  "GOODBYE, PHONE TAG.",
  "LESS WAITING. MORE DOING.",
  "THE NEXT STOP? SOMETHING BETTER.",
];

function Symbol({ small = false }) {
  return (
    <span
      className={`moovio-symbol ${small ? "symbol-small" : ""}`}
      aria-hidden="true"
    >
      <span className="symbol-piece piece-one" />
      <span className="symbol-piece piece-two" />
      <span className="symbol-piece piece-three" />
      <span className="symbol-piece piece-four" />
    </span>
  );
}

export default function App() {
  const [note, setNote] = useState(0);
  const [surprise, setSurprise] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setNote((current) => (current + 1) % notes.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="moovio-page">
      <header className="nav">
        <a href="#home" className="brand" aria-label="Moovio home">
          <Symbol small />
          <span>
            moovio<span className="brand-dot">.</span>
          </span>
        </a>

        <div className="nav-right">
          <span className="nav-pill">
            <span className="nav-light" />
            WORK IN PROGRESS
          </span>
          <span className="nav-star">✳</span>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-topline">
            <span>HEY, WE'RE MOOVIO.</span>
            <span>AND WE'RE ON OUR WAY ↗</span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <div className="intro-label">
                <span className="label-dot" />
                A LITTLE SOMETHING IS BREWING
              </div>

              <h1>
                NOT
                <br />
                QUITE
                <br />
                <span className="ready-word">
                  READY<span className="period">.</span>
                </span>
              </h1>

              <p className="hero-description">
                But we're getting somewhere good.
                <br />
                Something new is taking shape.
                <br />
                And we can't wait to show you.
              </p>

              <div className="hero-actions">
                <a className="explore-link" href="#next">
                  TAKE A PEEK <span>↘</span>
                </a>
                <span className="little-note">NO SPOILERS. YET.</span>
              </div>
            </div>

            <div className="hero-art" aria-label="Animated Moovio artwork">
              <div className="orbit orbit-outer" />
              <div className="orbit orbit-middle" />
              <div className="orbit orbit-inner" />

              <div className="orbit-runner">
                <div className="runner-dot" />
              </div>

              <div className="orbit-center">
                <Symbol />
              </div>

              <div className="floating-sticker sticker-one">
                <span className="sticker-spark">✳</span>
                <span>IN MOTION</span>
              </div>

              <div className="floating-sticker sticker-two">
                <span>100%</span>
                <small>GOOD ENERGY</small>
              </div>

              <div className="floating-sticker sticker-three">
                <span>↗</span>
              </div>

              <div className="orbit-caption">
                MOVING FORWARD, ALWAYS.
              </div>
            </div>
          </div>

          <div className="hero-bottomline">
            <span>DESIGNED TO KEEP THINGS MOVING</span>
            <span>01 — 02</span>
          </div>
        </section>

        <div className="ribbon" aria-label="Moovio coming soon">
          <div className="ribbon-track">
            {Array.from({ length: 4 }).map((_, index) => (
              <span className="ribbon-group" key={index}>
                GOOD THINGS AHEAD <b>✳</b> COMING SOON <b>↗</b>
              </span>
            ))}
          </div>
        </div>

        <section className="next-section" id="next">
          <div className="next-top">
            <span>THE NEXT CHAPTER</span>
            <span>UNDER CONSTRUCTION / 2026</span>
          </div>

          <div className="next-content">
            <div className="next-heading">
              <span className="tiny-label">A NOTE FROM US ↘</span>
              <h2>
                WE'RE
                <br />
                MAKING
                <br />
                <span>MOOVES.</span>
              </h2>
            </div>

            <div className="next-card">
              <div className="card-top">
                <span>✳ MOOVIO POSTCARD</span>
                <span>NO. 001</span>
              </div>

              <div className="card-art">
                <div className="card-circle">
                  <Symbol />
                </div>
                <span className="card-arrow">↗</span>
              </div>

              <div className="card-bottom">
                <span>LESS CALLING.</span>
                <strong>MORE FIXING.</strong>
                <p>
                  We're creating a better way for repair shops
                  and customers to stay connected.
                  The best part is still ahead.
                </p>
              </div>
            </div>
          </div>

          <div className="next-footer">
            <span>NO COUNTDOWNS. JUST GOOD WORK.</span>
            <span>02 — 02</span>
          </div>
        </section>

        <section className="final-section">
          <div className="final-decoration" aria-hidden="true">
            <span>✳</span>
            <span>↗</span>
            <span>✳</span>
          </div>

          <div className="final-content">
            <span className="final-eyebrow">ONE LAST THING...</span>

            <h2>
              SEE YOU
              <br />
              <span>SOON!</span>
            </h2>

            <p key={note} className="rotating-note">
              {notes[note]}
            </p>

            <button
              type="button"
              className="surprise-button"
              onClick={() => setSurprise((current) => !current)}
              aria-expanded={surprise}
            >
              {surprise ? "OKAY, BACK TO WORK" : "ONE MORE THING"}
              <span>{surprise ? "↩" : "↗"}</span>
            </button>

            {surprise && (
              <div className="surprise-message">
                <span className="surprise-emoji">🐮</span>
                <strong>MOO.</strong>
                <p>
                  You've officially met the unofficial mascot.
                  We'll explain later.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="footer-brand">
          <Symbol small />
          moovio<span>.</span>
        </a>

        <span>© {new Date().getFullYear()} MOOVIO</span>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}