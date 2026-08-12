import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../../components/Images/ResponsiveImage';
import imgComposition from '../../assets/Mash5.png';
import imgCompositionWebp from '../../assets/optimized/Mash5.webp';
import imgCompositionAvif from '../../assets/optimized/Mash5.avif';
import imgCompositionWebp640 from '../../assets/optimized/Mash5-640.webp';
import imgCompositionWebp960 from '../../assets/optimized/Mash5-960.webp';
import imgCompositionAvif640 from '../../assets/optimized/Mash5-640.avif';
import imgCompositionAvif960 from '../../assets/optimized/Mash5-960.avif';
import imgDwelling from '../../assets/House—Mash.jpg';
import imgDwellingWebp from '../../assets/optimized/House—Mash.webp';
import imgDwellingAvif from '../../assets/optimized/House—Mash.avif';
import imgDwellingWebp640 from '../../assets/optimized/House—Mash-640.webp';
import imgDwellingWebp960 from '../../assets/optimized/House—Mash-960.webp';
import imgDwellingAvif640 from '../../assets/optimized/House—Mash-640.avif';
import imgDwellingAvif960 from '../../assets/optimized/House—Mash-960.avif';
import imgPrintmaking from '../../assets/CapeHouse.jpg';
import imgPrintmakingWebp from '../../assets/optimized/CapeHouse.webp';
import imgPrintmakingAvif from '../../assets/optimized/CapeHouse.avif';
import imgPrintmakingWebp640 from '../../assets/optimized/CapeHouse-640.webp';
import imgPrintmakingWebp960 from '../../assets/optimized/CapeHouse-960.webp';
import imgPrintmakingAvif640 from '../../assets/optimized/CapeHouse-640.avif';
import imgPrintmakingAvif960 from '../../assets/optimized/CapeHouse-960.avif';
import imgGraffiti from '../../assets/RIPSENSE.jpg';
import imgGraffitiWebp from '../../assets/optimized/RIPSENSE.webp';
import imgGraffitiAvif from '../../assets/optimized/RIPSENSE.avif';
import imgGraffitiWebp640 from '../../assets/optimized/RIPSENSE-640.webp';
import imgGraffitiWebp960 from '../../assets/optimized/RIPSENSE-960.webp';
import imgGraffitiAvif640 from '../../assets/optimized/RIPSENSE-640.avif';
import imgGraffitiAvif960 from '../../assets/optimized/RIPSENSE-960.avif';
import imgPhotography from '../../assets/BirdyBrooklyn.jpg';
import imgPhotographyWebp from '../../assets/optimized/BirdyBrooklyn.webp';
import imgPhotographyAvif from '../../assets/optimized/BirdyBrooklyn.avif';
import imgPhotographyWebp640 from '../../assets/optimized/BirdyBrooklyn-640.webp';
import imgPhotographyWebp960 from '../../assets/optimized/BirdyBrooklyn-960.webp';
import imgPhotographyAvif640 from '../../assets/optimized/BirdyBrooklyn-640.avif';
import imgPhotographyAvif960 from '../../assets/optimized/BirdyBrooklyn-960.avif';

let gsapCorePromise;
let gsapPluginsPromise;

async function loadGsap({ includePlugins = false } = {}) {
  if (!gsapCorePromise) {
    gsapCorePromise = import('gsap').then((module) => module.default);
  }

  const gsap = await gsapCorePromise;

  if (!includePlugins) {
    return { gsap };
  }

  if (!gsapPluginsPromise) {
    gsapPluginsPromise = Promise.all([
      import('gsap/ScrollTrigger'),
      import('gsap/Draggable'),
    ]).then(([scrollTriggerModule, draggableModule]) => {
      gsap.registerPlugin(scrollTriggerModule.ScrollTrigger, draggableModule.Draggable);

      return {
        ScrollTrigger: scrollTriggerModule.ScrollTrigger,
        Draggable: draggableModule.Draggable,
      };
    });
  }

  const plugins = await gsapPluginsPromise;

  return { gsap, ...plugins };
}

const MOBILE_STACK_BREAKPOINT = 980;

const PROJECTS = [
  {
    id: 2,
    title: 'Dwelling Series',
    description: 'Drawings, paintings, quilts, hand embroidery, photography',
    date: '2016-2022',
    image: imgDwelling,
    imageWebp: imgDwellingWebp,
    imageAvif: imgDwellingAvif,
    imageWebpSet: `${imgDwellingWebp640} 640w, ${imgDwellingWebp960} 960w, ${imgDwellingWebp} 2200w`,
    imageAvifSet: `${imgDwellingAvif640} 640w, ${imgDwellingAvif960} 960w, ${imgDwellingAvif} 2200w`,
    path: '/dwelling',
  },
  {
    id: 1,
    title: 'Composition',
    description: 'Digital, paintings, photography',
    date: '2022-2027',
    image: imgComposition,
    imageWebp: imgCompositionWebp,
    imageAvif: imgCompositionAvif,
    imageWebpSet: `${imgCompositionWebp640} 640w, ${imgCompositionWebp960} 960w, ${imgCompositionWebp} 2200w`,
    imageAvifSet: `${imgCompositionAvif640} 640w, ${imgCompositionAvif960} 960w, ${imgCompositionAvif} 2200w`,
    path: '/composition',
  },
  {
    id: 3,
    title: 'Printmaking Works',
    description: 'Prints on paper',
    date: '',
    image: imgPrintmaking,
    imageWebp: imgPrintmakingWebp,
    imageAvif: imgPrintmakingAvif,
    imageWebpSet: `${imgPrintmakingWebp640} 640w, ${imgPrintmakingWebp960} 960w, ${imgPrintmakingWebp} 2200w`,
    imageAvifSet: `${imgPrintmakingAvif640} 640w, ${imgPrintmakingAvif960} 960w, ${imgPrintmakingAvif} 2200w`,
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
    imageWebpSet: `${imgGraffitiWebp640} 640w, ${imgGraffitiWebp960} 960w, ${imgGraffitiWebp} 2200w`,
    imageAvifSet: `${imgGraffitiAvif640} 640w, ${imgGraffitiAvif960} 960w, ${imgGraffitiAvif} 2200w`,
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
    imageWebpSet: `${imgPhotographyWebp640} 640w, ${imgPhotographyWebp960} 960w, ${imgPhotographyWebp} 2200w`,
    imageAvifSet: `${imgPhotographyAvif640} 640w, ${imgPhotographyAvif960} 960w, ${imgPhotographyAvif} 2200w`,
    path: '/photography',
  },
];

const TOTAL = PROJECTS.length;

export default function ProjectCarousel() {
  const theme = useTheme();
  const [showInteractionCue, setShowInteractionCue] = useState(true);
  const [useVerticalStack, setUseVerticalStack] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_STACK_BREAKPOINT : false
  );
  const gsapRef = useRef(null);
  const sectionRef = useRef(null);
  const rowRef = useRef(null);
  const counterCurRef = useRef(null);
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
    let isCancelled = false;
    let teardown = () => {};

    const section = sectionRef.current;
    const row = rowRef.current;
    const setupCarousel = async () => {
      if (useVerticalStack || !section || !row) {
        currentIdxRef.current = 0;
        setShowInteractionCue(false);

        teardown = () => {};

        return;
      }

      const { gsap, ScrollTrigger, Draggable } = await loadGsap({ includePlugins: true });

      if (isCancelled) {
        return;
      }

      gsapRef.current = gsap;

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

      const getStartSnap = () => startSnap;
      const getScrollDist = () => scrollDist;

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

        const currentStartSnap = getStartSnap();
        const dist = getScrollDist();
        if (dist <= 0) return;

        const clampedPosition = Math.min(currentStartSnap + dist, Math.max(currentStartSnap, Math.abs(rowX)));
        const progress = (clampedPosition - currentStartSnap) / dist;
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
          const currentStartSnap = getStartSnap();
          const dist = getScrollDist();
          const currentPosition = currentStartSnap + self.progress * dist;
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

      const [drag] = Draggable.create(row, {
        type: 'x',
        trigger: section,
        onDragStart() {
          draggedRef.current = false;
          dismissInteractionCue();
        },
        onDrag() {
          draggedRef.current = true;
          const currentStartSnap = getStartSnap();
          const dist = getScrollDist();
          const clampedX = Math.min(-currentStartSnap, Math.max(-(currentStartSnap + dist), this.x));
          setRowX(clampedX);
          syncScrollToRowPosition(clampedX);
          updateCounter(getNearestIdx(Math.abs(clampedX)));
        },
        onDragEnd() {
          const currentStartSnap = getStartSnap();
          const dist = getScrollDist();
          const clampedX = Math.min(-currentStartSnap, Math.max(-(currentStartSnap + dist), this.x));
          setRowX(clampedX);
          syncScrollToRowPosition(clampedX);
          updateCounter(getNearestIdx(Math.abs(clampedX)));
          window.setTimeout(() => {
            draggedRef.current = false;
          }, 0);
        },
      });

      teardown = () => {
        window.removeEventListener('resize', handleResize);
        section.removeEventListener('wheel', handleWheel);
        stRef.current?.kill();
        drag?.kill();
      };
    };

    setupCarousel();

    return () => {
      isCancelled = true;
      teardown();
    };
  }, [useVerticalStack]);

  // ── Card parallax handlers ─────────────────────────────────────────────
  const handleMouseEnter = (i) => {
    if (!gsapRef.current || !imgRefs.current[i]) return;
    gsapRef.current.to(imgRefs.current[i], { scale: 1.05, duration: 0.4, ease: 'power2.out' });
  };

  const handleMouseMove = (e, i) => {
    if (!gsapRef.current || !imgRefs.current[i]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsapRef.current.to(imgRefs.current[i], { x: -x * 18, y: -y * 18, duration: 0.4, ease: 'power2.out' });
  };

  const handleMouseLeave = (i) => {
    if (!gsapRef.current || !imgRefs.current[i]) return;
    gsapRef.current.to(imgRefs.current[i], { scale: 1, x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
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
            webpSrcSet={project.imageWebpSet}
            avifSrc={project.imageAvif}
            avifSrcSet={project.imageAvifSet}
            sizes={stacked ? '(max-width: 980px) 92vw, 640px' : '(max-width: 1200px) 70vw, 68rem'}
            alt={project.title}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={i === 0 ? 'high' : undefined}
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
                color: theme.pageText,
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
                color: theme.pageMuted,
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
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: theme.pageMuted,
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
          backgroundColor: theme.pageBackground,
          paddingTop: useVerticalStack ? '1rem' : 0,
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
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: theme.pageMuted,
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
            backgroundColor: theme.controlBackground,
            border: `1px solid ${theme.controlBorder}`,
            boxShadow: '0 18px 35px rgba(0,0,0,0.28)',
            color: theme.controlText,
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
              border: `1px solid ${theme.controlBorder}`,
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
          backgroundColor: theme.pageBackground,
          padding: '2.5rem 0',
          borderTop: `1px solid ${theme.pageSubtle}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            width: 'max-content',
            animation: useVerticalStack ? 'none' : 'marqueeScroll 15s linear infinite',
            willChange: useVerticalStack ? 'auto' : 'transform',
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
                WebkitTextStroke: `1.5px ${theme.pageSubtle}`,
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

        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-carousel-card='true'] {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
