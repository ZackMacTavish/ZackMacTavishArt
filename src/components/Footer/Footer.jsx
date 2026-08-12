import { useEffect, useState } from 'react';
import styled from 'styled-components';
import dribbble from '../../assets/dribbble.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import medium from '../../assets/medium.svg';

const localTimeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
});
const localYearFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  year: 'numeric',
});

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/zackmichaelmactavish', icon: instagram },
  { name: 'Dribbble', href: 'https://dribbble.com/Zmactavish', icon: dribbble },
  { name: 'Medium', href: 'https://medium.com/@zmactavish', icon: medium },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/zacharymactavish/', icon: linkedin },
  { name: 'GitHub', href: 'https://github.com/ZackMacTavish', icon: github },
];

function getClockState() {
  const now = new Date();
  const localYear = Number(localYearFormatter.format(now));
  const yearEndIso = `${localYear + 1}-01-01T00:00:00-05:00`;
  const secondsRemaining = Math.max(0, Math.floor((new Date(yearEndIso).getTime() - now.getTime()) / 1000));
  const days = Math.floor(secondsRemaining / 86400);
  const hours = Math.floor((secondsRemaining % 86400) / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  return {
    isoTime: now.toISOString(),
    localTime: localTimeFormatter.format(now),
    localYear,
    yearEndIso,
    countdown: `${days}d ${hours}h ${minutes}m ${seconds}s`,
  };
}

const FooterBand = styled.footer`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.pageText};
  border-top: 1px solid ${(props) => props.theme.pageSubtle};
`;

const FooterInner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: clamp(3rem, 10vw, 10rem);
  align-items: end;
  min-height: 17rem;
  padding: clamp(3rem, 6vw, 6rem) clamp(1.5rem, 6vw, 7rem);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: start;
    min-height: 0;
  }
`;

const Identity = styled.div`
  display: grid;
  gap: 1.25rem;
`;

const Title = styled.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1rem, 1.4vw, 1.25rem);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  align-items: center;
`;

const SocialLink = styled.a`
  position: relative;
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  color: inherit;
  transition: opacity 160ms ease, transform 160ms ease;

  &::after {
    content: attr(data-label);
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translate(-50%, 4px);
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    background: rgba(10, 10, 10, 0.92);
    color: #f3f0e8;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.6rem;
    letter-spacing: 0.04em;
    line-height: 1;
    text-transform: uppercase;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 160ms ease, transform 160ms ease;
    z-index: 2;
  }

  &:hover {
    opacity: 0.72;
    transform: translateY(-2px);
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  &:focus-visible {
    outline: 2px solid #e88d67;
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const SocialIcon = styled.img`
  display: block;
  width: 1.75rem;
  height: 1.75rem;
  object-fit: contain;
  filter: ${(props) => props.theme.iconFilter};
`;

const Clock = styled.div`
  display: grid;
  gap: 1.4rem;
  min-width: 17rem;
  text-align: right;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;

  @media (max-width: 700px) {
    min-width: 0;
    text-align: left;
  }
`;

const ClockRow = styled.div`
  display: grid;
  gap: 0.35rem;
`;

const ClockLabel = styled.span`
  color: ${(props) => props.theme.pageMuted};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const ClockValue = styled.time`
  font-size: clamp(1.1rem, 1.8vw, 1.65rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
  white-space: nowrap;
`;

export default function Footer() {
  const [clock, setClock] = useState(getClockState);

  useEffect(() => {
    const updateClock = () => setClock(getClockState());
    const intervalId = window.setInterval(updateClock, 1000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') updateClock();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <FooterBand>
      <FooterInner>
        <Identity>
          <Title>Zachary MacTavish. Multidisciplinary artist</Title>
          <SocialLinks aria-label="Social links">
            {socials.map(({ name, href, icon }) => (
              <SocialLink key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} data-label={name}>
                <SocialIcon src={icon} alt="" loading="lazy" decoding="async" />
              </SocialLink>
            ))}
          </SocialLinks>
        </Identity>

        <Clock>
          <ClockRow>
            <ClockLabel>Local · Philadelphia</ClockLabel>
            <ClockValue dateTime={clock.isoTime}>{clock.localTime}</ClockValue>
          </ClockRow>
          <ClockRow>
            <ClockLabel>Time left in {clock.localYear}</ClockLabel>
            <ClockValue dateTime={clock.yearEndIso}>{clock.countdown}</ClockValue>
          </ClockRow>
        </Clock>
      </FooterInner>
    </FooterBand>
  );
}