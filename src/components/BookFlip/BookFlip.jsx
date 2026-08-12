import React, { forwardRef, useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronFirst, ChevronLeft, ChevronRight, Expand, Shrink } from 'lucide-react';
import styled from 'styled-components';

const Viewer = styled.section`
  width: min(92vw, 1240px);
  margin: 0 auto;
  color: #252525;
  font-family: 'Space Grotesk', sans-serif;

  &:fullscreen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    max-width: none;
    height: 100vh;
    padding: 3vh 2vw;
    background: #e8e8e5;
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
  height: clamp(460px, 62vw, 720px);
  margin: 0 auto;
  overflow: hidden;
  outline: none;

  &:focus-visible {
    outline: 3px solid #e88d67;
    outline-offset: 3px;
  }

  .composition-flipbook {
    position: relative;
    z-index: 1;
    transform: translateX(${({ $coverPosition }) => $coverPosition === 'front' ? '-25%' : $coverPosition === 'back' ? '25%' : '0'});
    transition: transform 700ms ease;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1.4133;
  }
`;

const Page = styled.div`
  overflow: hidden;
  background: #fff;
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
`;

const Status = styled.div`
  display: grid;
  place-items: center;
  min-height: 180px;
  padding: 2rem;
  color: #5d5d5d;
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
  border: 1px solid rgba(63, 69, 92, 0.22);
  border-radius: 4px;
  background: #fff;
  color: #3f455c;
  cursor: pointer;

  &:hover:not(:disabled) {
    color: #111;
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
  color: #5d5d5d;
  font-size: 0.92rem;
  font-variant-numeric: tabular-nums;
  text-align: center;
`;

const FlipPage = forwardRef(function FlipPage({ page, index }, ref) {
  const isCover = index === 0 || page.isLast;

  return (
    <Page ref={ref} data-density={index === 0 || page.isLast ? 'hard' : 'soft'} data-cursor-hover>
      <PageImage
        src={page.src}
        alt={index === 0 ? 'Composition book front cover' : page.isLast ? 'Composition book back cover' : `Composition book page ${index + 1}`}
        width={page.width}
        height={page.height}
        loading={index < 4 ? 'eager' : 'lazy'}
        draggable="false"
        $isCover={isCover}
      />
    </Page>
  );
});

export default function BookFlip() {
  const bookRef = useRef(null);
  const viewerRef = useRef(null);
  const stageRef = useRef(null);
  const wasViewerFullscreenRef = useRef(false);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isCoverOpening, setIsCoverOpening] = useState(false);
  const [isCoverClosing, setIsCoverClosing] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState('');
  const isFrontCover = currentPage === 0;
  const isBackCover = pages.length > 0 && currentPage === pages.length - 1;
  const showFrontCover = (isFrontCover && !isCoverOpening) || isCoverClosing;

  useEffect(() => {
    const controller = new AbortController();
    const basePath = `${import.meta.env.BASE_URL}composition-book/`;

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
    <Viewer ref={viewerRef} aria-label="Composition art book flip through">
      <Stage
        ref={stageRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        $isFullscreen={isFullscreen}
        $isSinglePage={showFrontCover || isBackCover}
        $coverPosition={showFrontCover ? 'front' : isBackCover ? 'back' : 'open'}
      >
        {error && <Status role="alert">{error}</Status>}
        {!error && pages.length === 0 && <Status role="status">Loading book...</Status>}
        {pages.length > 0 && (
          <HTMLFlipBook
            key={isFullscreen ? 'fullscreen' : 'embedded'}
            ref={bookRef}
            startPage={currentPage}
            width={424}
            height={600}
            size="stretch"
            minWidth={120}
            maxWidth={isFullscreen ? 600 : 508}
            minHeight={170}
            maxHeight={isFullscreen ? 849 : 719}
            drawShadow={false}
            showCover
            usePortrait={false}
            mobileScrollSupport
            swipeDistance={24}
            flippingTime={700}
            onFlip={(event) => setCurrentPage(event.data)}
            onChangeState={(event) => {
              if (event.data === 'flipping' && isFrontCover) setIsCoverOpening(true);
              if (event.data === 'read') {
                setIsCoverOpening(false);
                setIsCoverClosing(false);
              }
            }}
            className="composition-flipbook"
          >
            {pages.map((page, index) => (
              <FlipPage key={page.file} page={page} index={index} />
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
