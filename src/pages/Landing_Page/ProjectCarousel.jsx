import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import imgComposition from '../../assets/Mash5.png';
import imgDwelling from '../../assets/House—Mash.jpg';
import imgPrintmaking from '../../assets/CapeHouse.jpg';
import imgGraffiti from '../../assets/RIPSENSE.jpg';
import imgPhotography from '../../assets/BirdyBrooklyn.jpg';

gsap.registerPlugin(ScrollTrigger, Draggable);

const PROJECTS = [
  {
    id: 2,
    title: 'Dwelling Series',
    description: 'Drawings, paintings, quilts, hand embroidery, photography',
    date: '2016-2022',
    image: imgDwelling,
    path: '/dwelling',
  },
  {
    id: 1,
    title: 'Composition',
    description: 'Digital, paintings, photography',
    date: '2022-2027',
    image: imgComposition,
    path: '/composition',
  },
  {
    id: 3,
    title: 'Printmaking Works',
    description: 'Prints on paper',
    date: '',
    image: imgPrintmaking,
    path: '/printmaking',
  },
  {
    id: 4,
    title: 'Graffiti & 3D',
    description: 'Digital, and spray paint on wall',
    date: '',
    image: imgGraffiti,
    path: '/3d',
  },
  {
    id: 5,
    title: 'Photography',
    description: 'Film and digital photos',
    date: '',
    image: imgPhotography,
    path: '/photography',
  },
];

const TOTAL = PROJECTS.length;

export default function ProjectCarousel() {
  const sectionRef = useRef(null);
  const rowRef = useRef(null);
  const counterCurRef = useRef(null);
  const marqueeRef = useRef(null);
  const cardRefs = useRef([]);
  const imgRefs = useRef([]);
  const currentIdxRef = useRef(0);
  const stRef = useRef(null);
  const draggedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const row = rowRef.current;
    if (!section || !row) return;

    const getSnapPositions = () => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return [0];

      return cards.map((card) => {
        const centeredLeft = (section.offsetWidth - card.offsetWidth) / 2;
        return Math.max(0, card.offsetLeft - centeredLeft);
      });
    };

    const getStartSnap = () => {
      const snaps = getSnapPositions();
      return snaps[0] || 0;
    };

    const getScrollDist = () => {
      const snaps = getSnapPositions();
      return (snaps[snaps.length - 1] || 0) - (snaps[0] || 0);
    };

    const getNearestIdx = (position) => {
      const snaps = getSnapPositions();
      let nearestIdx = 0;
      let nearestDelta = Number.POSITIVE_INFINITY;

      snaps.forEach((snap, idx) => {
        const delta = Math.abs(position - snap);
        if (delta < nearestDelta) {
          nearestDelta = delta;
          nearestIdx = idx;
        }
      });

      return nearestIdx;
    };

    const updateCounter = (newIdx) => {
      if (newIdx === currentIdxRef.current) return;
      const el = counterCurRef.current;
      if (!el) return;
      gsap.to(el, {
        yPercent: -100,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          el.textContent = String(newIdx + 1).padStart(2, '0');
          gsap.fromTo(el, { yPercent: 100 }, { yPercent: 0, duration: 0.18, ease: 'power2.out' });
        },
      });
      currentIdxRef.current = newIdx;
    };

    gsap.set(row, { x: -getStartSnap() });

    // ── ScrollTrigger horizontal pin ──────────────────────────────────────
    stRef.current = ScrollTrigger.create({
      trigger: section,
      pin: true,
      scrub: 1,
      start: 'top top',
      end: () => `+=${getScrollDist()}`,
      onUpdate: (self) => {
        const startSnap = getStartSnap();
        const dist = getScrollDist();
        const currentPosition = startSnap + self.progress * dist;
        gsap.set(row, { x: -currentPosition });

        updateCounter(getNearestIdx(currentPosition));
      },
    });

    // ── Draggable scrubber (no InertiaPlugin required) ────────────────────
    const [drag] = Draggable.create(row, {
      type: 'x',
      trigger: section,
      onDragStart() {
        draggedRef.current = false;
      },
      onDrag() {
        draggedRef.current = true;
        const startSnap = getStartSnap();
        const dist = getScrollDist();
        const clampedX = Math.min(-startSnap, Math.max(-(startSnap + dist), this.x));
        gsap.set(row, { x: clampedX });
        updateCounter(getNearestIdx(Math.abs(clampedX)));
      },
      onDragEnd() {
        const startSnap = getStartSnap();
        const dist = getScrollDist();
        const clampedX = Math.min(-startSnap, Math.max(-(startSnap + dist), this.x));
        const snaps = getSnapPositions();
        const nearestIdx = getNearestIdx(Math.abs(clampedX));
        const snappedX = -(snaps[nearestIdx] || startSnap);
        gsap.to(row, { x: snappedX, duration: 0.45, ease: 'power3.out' });
        updateCounter(nearestIdx);
      },
    });

    // ── Marquee ───────────────────────────────────────────────────────────
    const marquee = marqueeRef.current;
    if (marquee) {
      gsap.to(marquee, {
        xPercent: -50,
        duration: 15,
        ease: 'none',
        repeat: -1,
      });
    }

    return () => {
      stRef.current?.kill();
      drag?.kill();
    };
  }, []);

  // ── Card parallax handlers ─────────────────────────────────────────────
  const handleMouseEnter = (i) => {
    gsap.to(imgRefs.current[i], { scale: 1.05, duration: 0.4, ease: 'power2.out' });
  };

  const handleMouseMove = (e, i) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(imgRefs.current[i], { x: -x * 18, y: -y * 18, duration: 0.4, ease: 'power2.out' });
  };

  const handleMouseLeave = (i) => {
    gsap.to(imgRefs.current[i], { scale: 1, x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
  };

  return (
    <>
      {/* ── Pinned horizontal carousel ──────────────────────────────────── */}
      <section
        ref={sectionRef}
        style={{
          overflow: 'hidden',
          height: '100vh',
          position: 'relative',
          backgroundColor: '#0a0a0a',
        }}
      >
        {/* Slide counter */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '2.5rem',
            zIndex: 10,
            fontFamily: 'monospace',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            overflow: 'hidden',
          }}
        >
          <span ref={counterCurRef} style={{ display: 'inline-block' }}>
            01
          </span>
          <span style={{ opacity: 0.4 }}>
            {' // '}
            {String(TOTAL).padStart(2, '0')}
          </span>
        </div>

        {/* Scrolling row */}
        <div
          ref={rowRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            height: '100%',
            alignItems: 'center',
            willChange: 'transform',
            cursor: 'grab',
            userSelect: 'none',
          }}
        >
          {/* Leading spacer — centers first card */}
          <div style={{ flexShrink: 0, width: 'calc((100vw - 70vw) / 2)' }} />
          {/* Right-side spacer so last card scrolls fully into view */}
          {PROJECTS.map((project, i) => (
            <Link
              key={project.id}
              data-carousel-card="true"
              to={project.path}
              onClick={(e) => { if (draggedRef.current) e.preventDefault(); }}
              style={{ textDecoration: 'none', flexShrink: 0, display: 'block' }}
            >
            <div
              ref={(el) => { cardRefs.current[i] = el; }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              style={{
                width: '70vw',
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image placeholder (overflow:hidden clips parallax + scale) */}
              <div
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  borderRadius: '6px',
                  backgroundColor: project.path === '/composition' ? 'white' : 'transparent',
                }}
              >
                <img
                  ref={(el) => { imgRefs.current[i] = el; }}
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>

              {/* Card meta */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                      color: 'white',
                      margin: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    {project.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.45)',
                      margin: '0.3rem 0 0',
                      lineHeight: 1.5,
                      maxWidth: '52ch',
                    }}
                  >
                    {project.description}
                  </p>
                </div>
                {project.date ? (
                  <p
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.35)',
                      margin: 0,
                    }}
                  >
                    {project.date}
                  </p>
                ) : null}
              </div>
            </div>
            </Link>
          ))}
          <div style={{ flexShrink: 0, width: 'calc((100vw - 70vw) / 2 + 4rem)' }} />
        </div>
      </section>

      {/* ── Marquee ─────────────────────────────────────────────────────── */}
      <div
        style={{
          overflow: 'hidden',
          backgroundColor: '#0a0a0a',
          padding: '2.5rem 0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          ref={marqueeRef}
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            width: 'max-content',
          }}
        >
          {[0, 1].map((n) => (
            <span
              key={n}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3rem, 7vw, 7rem)',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                paddingRight: '4rem',
              }}
            >
              ZACHARY MACTAVISH &nbsp;&nbsp;&nbsp; ZACHARY MACTAVISH &nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
