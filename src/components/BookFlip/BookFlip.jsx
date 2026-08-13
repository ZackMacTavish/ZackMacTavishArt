import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronFirst, ChevronLeft, ChevronRight, Expand, Shrink } from 'lucide-react';
import styled from 'styled-components';

const PAGE_ASPECT_RATIO = 424 / 600;

const getEmbeddedPageHeight = () => {
  if (typeof window === 'undefined') return 719;
  return Math.max(320, Math.min(719, window.innerHeight - 129));
};

const Viewer = styled.section`
  width: min(92vw, 1240px);
  margin: 0 auto;
  color: ${(props) => props.theme.pageText};
  font-family: 'Space Grotesk', sans-serif;

  &:fullscreen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    max-width: none;
    height: 100vh;
    padding: 3vh 2vw;
    background: ${(props) => props.theme.surfaceSecondary};
  }

  &:fullscreen > div:first-child {
    flex: 1;
    height: auto;
  }
`;

const Stage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $isFullscreen }) => $isFullscreen ? 'min(96vw, 1200px)' : 'min(92vw, 1016px)'};
  height: clamp(320px, min(62vw, calc(100svh - 8rem)), 720px);
  margin: 0 auto;
  overflow: ${({ $isFlipping }) => $isFlipping ? 'visible' : 'hidden'};
  outline: none;

  &:focus-visible {
    outline: 3px solid #e88d67;
    outline-offset: 3px;
  }

  .book-flipbook {
    position: relative;
    left: ${({ $pixelOffset }) => `${$pixelOffset}px`};
    z-index: 1;
    transform: translateX(${({ $coverPosition }) => $coverPosition === 'front' ? '-25%' : $coverPosition === 'back' ? '25%' : '0'});
    transition: transform 700ms ease;
  }

  ${({ $coverPosition }) => $coverPosition === 'open' ? `
    .book-flipbook .stf__item.--left > img {
      clip-path: inset(0 2px 0 0);
    }

    .book-flipbook .stf__item.--right > img {
      clip-path: inset(0 0 0 2px);
    }
  ` : ''}

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1.4133;
  }
`;

const Page = styled.div`
  overflow: hidden;
  background: #fff;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const PageImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({ $isCover }) => $isCover ? 'cover' : 'contain'};
  object-position: center;
  background: #fff;
  user-select: none;
  -webkit-user-drag: none;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const Status = styled.div`
  display: grid;
  place-items: center;
  min-height: 180px;
  padding: 2rem;
  color: ${(props) => props.theme.pageMuted};
  text-align: center;
`;

const Controls = styled.div`
  display: grid;
  grid-template-columns: 44px 44px minmax(9rem, auto) 44px 44px;
  justify-content: center;
  align-items: center;
  width: ${({ $isSinglePage, $isFullscreen }) => {
    if ($isFullscreen) return $isSinglePage ? 'min(96vw, 600px)' : 'min(96vw, 1200px)';
    return $isSinglePage ? 'min(92vw, 508px)' : 'min(92vw, 1016px)';
  }};
  margin: 0 auto;
  gap: 0.5rem;
  padding-top: 1rem;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 420px) {
    grid-template-columns: 42px 42px minmax(7.5rem, auto) 42px 42px;
    gap: 0.25rem;
  }
`;

const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid ${(props) => props.theme.controlBorder};
  border-radius: 4px;
  background: ${(props) => props.theme.uiSurfaceStrong};
  color: ${(props) => props.theme.pageText};
  cursor: pointer;

  &:hover:not(:disabled) {
    color: ${(props) => props.theme.pageText};
    border-color: #e88d67;
  }

  &:focus-visible {
    outline: 3px solid rgba(232, 141, 103, 0.45);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }

  @media (max-width: 420px) {
    width: 42px;
    height: 42px;
  }
`;

const PageCount = styled.div`
  min-width: 9rem;
  color: ${(props) => props.theme.pageText};
  font-size: 0.92rem;
  font-variant-numeric: tabular-nums;
  text-align: center;
`;

const FlipPage = forwardRef(function FlipPage({ page, index, bookTitle }, ref) {
  const isCover = index === 0 || page.isLast;

  return (
    <Page ref={ref} data-density={index === 0 || page.isLast ? 'hard' : 'soft'} data-cursor-hover>
      <PageImage
        src={page.src}
        alt={index === 0 ? `${bookTitle} front cover` : page.isLast ? `${bookTitle} back cover` : `${bookTitle} page ${index + 1}`}
        width={page.width}
        height={page.height}
        loading={index < 4 ? 'eager' : 'lazy'}
        draggable="false"
        $isCover={isCover}
      />
    </Page>
  );
});

export default function BookFlip({ assetDirectory = 'composition-book', bookTitle = 'Composition art book' }) {
  const bookRef = useRef(null);
  const viewerRef = useRef(null);
  const stageRef = useRef(null);
  const wasViewerFullscreenRef = useRef(false);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isCoverOpening, setIsCoverOpening] = useState(false);
  const [isCoverClosing, setIsCoverClosing] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [pixelOffset, setPixelOffset] = useState(0);
  const [embeddedPageHeight, setEmbeddedPageHeight] = useState(getEmbeddedPageHeight);
  const [error, setError] = useState('');
  const isFrontCover = currentPage === 0;
  const isBackCover = pages.length > 0 && currentPage === pages.length - 1;
  const showFrontCover = (isFrontCover && !isCoverOpening) || isCoverClosing;

  useEffect(() => {
    const controller = new AbortController();
    const basePath = `${import.meta.env.BASE_URL}${assetDirectory}/`;

    fetch(`${basePath}manifest.json`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('The book could not be loaded.');
        return response.json();
      })
      .then((manifest) => {
        setPages(manifest.pages.map((page, index) => ({
          ...page,
          src: `${basePath}${page.file}`,
          isLast: index === manifest.pages.length - 1,
        })));
      })
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') setError(fetchError.message);
      });

    return () => controller.abort();
  }, [assetDirectory]);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const alignBookToPixel = () => {
      const bounds = stage.getBoundingClientRect();
      const center = (bounds.left + bounds.right) / 2;
      setPixelOffset(Math.round(center) - center);
    };

    alignBookToPixel();
    const observer = new ResizeObserver(alignBookToPixel);
    observer.observe(stage);
    window.addEventListener('resize', alignBookToPixel);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', alignBookToPixel);
    };
  }, []);

  useEffect(() => {
    let resizeTimeout;
    const updatePageSize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => setEmbeddedPageHeight(getEmbeddedPageHeight()), 120);
    };

    window.addEventListener('resize', updatePageSize);
    return () => {
      window.clearTimeout(resizeTimeout);
      window.removeEventListener('resize', updatePageSize);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isViewerFullscreen = document.fullscreenElement === viewerRef.current;
      const exitedViewerFullscreen = wasViewerFullscreenRef.current && !isViewerFullscreen;

      wasViewerFullscreenRef.current = isViewerFullscreen;
      setIsFullscreen(isViewerFullscreen);

      if (exitedViewerFullscreen) {
        requestAnimationFrame(() => {
          viewerRef.current?.scrollIntoView({ block: 'center', inline: 'nearest' });
        });
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const pageFlip = () => bookRef.current?.pageFlip();

  const showFirstPage = () => pageFlip()?.turnToPage(0);
  const showPreviousPage = () => {
    if (currentPage === 1) setIsCoverClosing(true);
    pageFlip()?.flipPrev('top');
  };
  const showNextPage = () => {
    if (isFrontCover) setIsCoverOpening(true);
    pageFlip()?.flipNext('top');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPreviousPage();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNextPage();
    }
  };

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await viewerRef.current?.requestFullscreen();
    }
  };

  return (
    <Viewer ref={viewerRef} aria-label={`${bookTitle} flip through`}>
      <Stage
        ref={stageRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        $isFullscreen={isFullscreen}
        $isFlipping={isFlipping}
        $isSinglePage={showFrontCover || isBackCover}
        $coverPosition={showFrontCover ? 'front' : isBackCover ? 'back' : 'open'}
        $pixelOffset={pixelOffset}
      >
        {error && <Status role="alert">{error}</Status>}
        {!error && pages.length === 0 && <Status role="status">Loading book...</Status>}
        {pages.length > 0 && (
          <HTMLFlipBook
            key={isFullscreen ? 'fullscreen' : `embedded-${embeddedPageHeight}`}
            ref={bookRef}
            startPage={currentPage}
            width={424}
            height={600}
            size="stretch"
            minWidth={120}
            maxWidth={isFullscreen ? 600 : Math.round(embeddedPageHeight * PAGE_ASPECT_RATIO)}
            minHeight={170}
            maxHeight={isFullscreen ? 849 : embeddedPageHeight}
            drawShadow={false}
            showCover
            usePortrait={false}
            mobileScrollSupport
            swipeDistance={24}
            flippingTime={700}
            onFlip={(event) => setCurrentPage(event.data)}
            onChangeState={(event) => {
              if (event.data === 'flipping') {
                setIsFlipping(true);
                if (isFrontCover) setIsCoverOpening(true);
              }
              if (event.data === 'read') {
                setIsFlipping(false);
                setIsCoverOpening(false);
                setIsCoverClosing(false);
              }
            }}
            className="book-flipbook"
          >
            {pages.map((page, index) => (
              <FlipPage key={page.file} page={page} index={index} bookTitle={bookTitle} />
            ))}
          </HTMLFlipBook>
        )}
      </Stage>

      {pages.length > 0 && (
        <Controls
          aria-label="Book controls"
          $isFullscreen={isFullscreen}
          $isSinglePage={showFrontCover || isBackCover}
          $coverPosition={showFrontCover ? 'front' : isBackCover ? 'back' : 'open'}
        >
          <IconButton type="button" onClick={showFirstPage} disabled={currentPage === 0} aria-label="First page" title="First page">
            <ChevronFirst aria-hidden="true" size={22} />
          </IconButton>
          <IconButton type="button" onClick={showPreviousPage} disabled={currentPage === 0} aria-label="Previous page" title="Previous page">
            <ChevronLeft aria-hidden="true" size={22} />
          </IconButton>
          <PageCount aria-live="polite">Page {currentPage + 1} of {pages.length}</PageCount>
          <IconButton type="button" onClick={showNextPage} disabled={currentPage >= pages.length - 1} aria-label="Next page" title="Next page">
            <ChevronRight aria-hidden="true" size={22} />
          </IconButton>
          <IconButton type="button" onClick={toggleFullscreen} aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'} title={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}>
            {isFullscreen ? <Shrink aria-hidden="true" size={20} /> : <Expand aria-hidden="true" size={20} />}
          </IconButton>
        </Controls>
      )}
    </Viewer>
  );
}
