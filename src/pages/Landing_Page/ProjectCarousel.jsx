import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import ResponsiveImage from '../../components/Images/ResponsiveImage';
import imgComposition from '../../assets/Mash5.png';
import imgDwelling from '../../assets/House—Mash.jpg';
import imgPrintmaking from '../../assets/CapeHouse.jpg';
import imgGraffiti from '../../assets/RIPSENSE.jpg';
import imgGraffitiWebp from '../../assets/optimized/RIPSENSE.webp';
import imgGraffitiAvif from '../../assets/optimized/RIPSENSE.avif';
import imgPhotography from '../../assets/BirdyBrooklyn.jpg';
import imgPhotographyWebp from '../../assets/optimized/BirdyBrooklyn.webp';
import imgPhotographyAvif from '../../assets/optimized/BirdyBrooklyn.avif';

gsap.registerPlugin(ScrollTrigger, Draggable);

const MOBILE_STACK_BREAKPOINT = 980;

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
    imageWebp: imgGraffitiWebp,
    imageAvif: imgGraffitiAvif,
    path: '/3d',
  },
  {
    id: 5,
    title: 'Photography',
    description: 'Film and digital photos',
    date: '',
    image: imgPhotography,
    imageWebp: imgPhotographyWebp,
    imageAvif: imgPhotographyAvif,
    path: '/photography',
  },
];

const TOTAL = PROJECTS.length;

export default function ProjectCarousel() {
  const [showInteractionCue, setShowInteractionCue] = useState(true);
  const [useVerticalStack, setUseVerticalStack] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_STACK_BREAKPOINT : false
  );
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
    const handleViewportMode = () => {
      setUseVerticalStack(window.innerWidth < MOBILE_STACK_BREAKPOINT);
    };

    handleViewportMode();
    window.addEventListener('resize', handleViewportMode);

    return () => {
      window.removeEventListener('resize', handleViewportMode);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const row = rowRef.current;
    const marquee = marqueeRef.current;
    const marqueeTween = marquee
      ? gsap.to(marquee, {
          xPercent: -50,
          duration: 15,
          ease: 'none',
          repeat: -1,
        })
      : null;

    if (useVerticalStack || !section || !row) {
      currentIdxRef.current = 0;
      setShowInteractionCue(false);

      return () => {
        marqueeTween?.kill();
      };
    }

    let snapPositions = [0];
    let startSnap = 0;
    let scrollDist = 0;
    const setRowX = gsap.quickSetter(row, 'x', 'px');
    const dismissInteractionCue = () => {
      setShowInteractionCue(false);
    };

    const getSnapPositions = () => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return [0];

      const leadInset = section.offsetWidth >= 1400
        ? Math.min(section.offsetWidth * 0.22, 380)
        : Math.min(section.offsetWidth * 0.18, 240);

      return cards.map((card) => {
        const centeredLeft = (section.offsetWidth - card.offsetWidth) / 2 + leadInset;
        return Math.max(0, card.offsetLeft - centeredLeft);
      });
    };

    const refreshMetrics = () => {
      snapPositions = getSnapPositions();
      startSnap = snapPositions[0] || 0;
      scrollDist = (snapPositions[snapPositions.length - 1] || 0) - startSnap;
    };

    const getStartSnap = () => {
      return startSnap;
    };

    const getScrollDist = () => {
      return scrollDist;
    };

    const getNearestIdx = (position) => {
      let nearestIdx = 0;
      let nearestDelta = Number.POSITIVE_INFINITY;

      snapPositions.forEach((snap, idx) => {
        const delta = Math.abs(position - snap);
        if (delta < nearestDelta) {
          nearestDelta = delta;
          nearestIdx = idx;
        }
      });

      return nearestIdx;
    };

    const syncScrollToRowPosition = (rowX) => {
      if (!stRef.current) return;

      const startSnap = getStartSnap();
      const dist = getScrollDist();
      if (dist <= 0) return;

      const clampedPosition = Math.min(startSnap + dist, Math.max(startSnap, Math.abs(rowX)));
      const progress = (clampedPosition - startSnap) / dist;
      const scrollTarget = stRef.current.start + progress * (stRef.current.end - stRef.current.start);
      stRef.current.scroll(scrollTarget);
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

    refreshMetrics();
    setRowX(-getStartSnap());

    // ── ScrollTrigger horizontal pin ──────────────────────────────────────
    stRef.current = ScrollTrigger.create({
      trigger: section,
      pin: true,
      scrub: 1.2,
      anticipatePin: 1,
      fastScrollEnd: true,
      invalidateOnRefresh: true,
      start: 'top top',
      end: () => {
        refreshMetrics();
        return `+=${getScrollDist()}`;
      },
      onUpdate: (self) => {
        const startSnap = getStartSnap();
        const dist = getScrollDist();
        const currentPosition = startSnap + self.progress * dist;
        setRowX(-currentPosition);
        if (self.progress > 0.01) dismissInteractionCue();

        updateCounter(getNearestIdx(currentPosition));
      },
    });

    const handleResize = () => {
      refreshMetrics();
      ScrollTrigger.refresh();
    };

    const handleWheel = (event) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
        if (Math.abs(event.deltaY) > 0) dismissInteractionCue();
        return;
      }

      if (!stRef.current?.isActive) return;

      event.preventDefault();
      dismissInteractionCue();
      window.scrollBy({ top: event.deltaX, behavior: 'auto' });
    };

    window.addEventListener('resize', handleResize);
    section.addEventListener('wheel', handleWheel, { passive: false });

    // ── Draggable scrubber (no InertiaPlugin required) ────────────────────
    const [drag] = Draggable.create(row, {
      type: 'x',
      trigger: section,
      onDragStart() {
        draggedRef.current = false;
        dismissInteractionCue();
      },
      onDrag() {
        draggedRef.current = true;
        const startSnap = getStartSnap();
        const dist = getScrollDist();
        const clampedX = Math.min(-startSnap, Math.max(-(startSnap + dist), this.x));
        setRowX(clampedX);
        syncScrollToRowPosition(clampedX);
        updateCounter(getNearestIdx(Math.abs(clampedX)));
      },
      onDragEnd() {
        const startSnap = getStartSnap();
        const dist = getScrollDist();
        const clampedX = Math.min(-startSnap, Math.max(-(startSnap + dist), this.x));
        setRowX(clampedX);
        syncScrollToRowPosition(clampedX);
        updateCounter(getNearestIdx(Math.abs(clampedX)));
      },
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      section.removeEventListener('wheel', handleWheel);
      stRef.current?.kill();
      drag?.kill();
      marqueeTween?.kill();
    };
  }, [useVerticalStack]);

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

  const renderCard = (project, i, stacked = false) => (
    <Link
      key={project.id}
      data-carousel-card="true"
      to={project.path}
      onClick={(e) => { if (!stacked && draggedRef.current) e.preventDefault(); }}
      style={{ textDecoration: 'none', flexShrink: 0, display: 'block' }}
    >
      <div
        ref={stacked ? undefined : (el) => { cardRefs.current[i] = el; }}
        onMouseEnter={stacked ? undefined : () => handleMouseEnter(i)}
        onMouseMove={stacked ? undefined : (e) => handleMouseMove(e, i)}
        onMouseLeave={stacked ? undefined : () => handleMouseLeave(i)}
        style={{
          width: stacked ? 'min(92vw, 38rem)' : 'min(70vw, 68rem)',
          height: stacked ? 'auto' : '80vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            flex: 1,
            overflow: 'hidden',
            borderRadius: '6px',
            backgroundColor: project.path === '/composition' ? 'white' : 'transparent',
            aspectRatio: stacked ? '4 / 5' : undefined,
          }}
        >
          <ResponsiveImage
            ref={stacked ? undefined : (el) => { imgRefs.current[i] = el; }}
            src={project.image}
            webpSrc={project.imageWebp}
            avifSrc={project.imageAvif}
            alt={project.title}
            imgStyle={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </div>

        <div
          style={{
            paddingTop: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1rem',
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
  );

  return (
    <>
      {/* ── Pinned horizontal carousel ──────────────────────────────────── */}
      <section
        ref={sectionRef}
        style={{
          overflow: 'hidden',
          height: useVerticalStack ? 'auto' : '100vh',
          minHeight: useVerticalStack ? '100vh' : undefined,
          position: 'relative',
          backgroundColor: '#0a0a0a',
          paddingTop: useVerticalStack ? 'min(32rem, 60vh)' : 0,
          paddingBottom: useVerticalStack ? '3rem' : 0,
        }}
      >
        {/* Slide counter */}
        {!useVerticalStack && <div
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
        </div>}

        {!useVerticalStack && <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '2rem',
            transform: 'translateY(-50%)',
            zIndex: 11,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.7rem',
            padding: '0.8rem 1rem',
            borderRadius: '999px',
            backgroundColor: 'rgba(0, 0, 0, 0.82)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 18px 35px rgba(0,0,0,0.28)',
            color: 'rgba(243,240,232,0.82)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.85rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            pointerEvents: 'none',
            opacity: showInteractionCue ? 0 : 0,
            animation: showInteractionCue ? 'carouselCueReveal 0.55s ease-out 3.35s forwards' : 'carouselCueFade 0.24s ease-out forwards',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.7rem',
              height: '1.7rem',
              border: '1px solid rgba(243,240,232,0.2)',
              borderRadius: '999px',
              animation: showInteractionCue ? 'carouselCueSlide 1.25s ease-in-out 3.6s infinite' : 'none',
            }}
          >
            ↔
          </span>
          <span>Scroll or drag</span>
        </div>}

        {/* Scrolling row */}
        <div
          ref={rowRef}
          style={{
            display: 'flex',
            flexDirection: useVerticalStack ? 'column' : 'row',
            gap: useVerticalStack ? '2.5rem' : '2rem',
            height: useVerticalStack ? 'auto' : '100%',
            alignItems: useVerticalStack ? 'center' : 'center',
            willChange: useVerticalStack ? 'auto' : 'transform',
            cursor: useVerticalStack ? 'default' : 'grab',
            userSelect: 'none',
            paddingInline: useVerticalStack ? '1rem' : 0,
          }}
        >
          {!useVerticalStack && <div
            style={{
              flexShrink: 0,
              width: 'clamp(24rem, 36vw, 40rem)',
            }}
          />}
          {/* Right-side spacer so last card scrolls fully into view */}
          {PROJECTS.map((project, i) => renderCard(project, i, useVerticalStack))}
          {!useVerticalStack && <div style={{ flexShrink: 0, width: 'calc((100vw - min(70vw, 68rem)) / 2 + 4rem)' }} />}
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
      <style>{`
        @keyframes carouselCueReveal {
          from {
            opacity: 0;
            transform: translateY(calc(-50% - 8px));
          }
          to {
            opacity: 1;
            transform: translateY(-50%);
          }
        }

        @keyframes carouselCueFade {
          from {
            opacity: 1;
            transform: translateY(-50%);
          }
          to {
            opacity: 0;
            transform: translateY(calc(-50% - 6px));
          }
        }

        @keyframes carouselCueSlide {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(7px);
          }
        }
      `}</style>
    </>
  );
}
