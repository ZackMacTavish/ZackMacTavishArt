import { useLayoutEffect } from 'react';
import { Download } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Seo } from '../../foundation/adapter';
import { canonicalFromLocation } from '../../utils/seo';

const PDF_PATH = `${import.meta.env.BASE_URL}Zachary-MacTavish-Artist-CV-2026.pdf`;
const EMAIL_SUBJECT = 'Artist CV inquiry';
const EMAIL_BODY = `Hi Zachary,

I'm reaching out regarding your artwork and CV.

CV: https://zackmactavish.com/cv

Best,`;
const EMAIL_PATH = `mailto:zmactavish@gmail.com?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

const PrintStyles = createGlobalStyle`
  @media print {
    @page {
      size: letter;
      margin: 0.45in 0.5in;
    }

    html,
    body,
    #root,
    .App {
      background: #fff !important;
    }

    body * {
      visibility: hidden !important;
    }

    main,
    main * {
      visibility: visible !important;
      font-family: var(--font-body) !important;
    }

    main {
      position: absolute !important;
      inset: 0 auto auto 0 !important;
      box-sizing: border-box !important;
      width: 100% !important;
      min-height: 0 !important;
      padding: 0 !important;
      background: #fff !important;
      color: #111 !important;
    }

    main header {
      grid-template-columns: minmax(0, 1fr) auto !important;
      gap: 0.25in !important;
      max-width: none !important;
      margin: 0 0 0.18in !important;
      padding: 0 0 0.16in !important;
      border-color: #999 !important;
    }

    main header h1 {
      font-size: 30pt !important;
      line-height: 1 !important;
      white-space: nowrap !important;
    }

    main header p {
      margin-top: 0.08in !important;
      color: #444 !important;
      font-size: 9pt !important;
    }

    main header > div:last-child {
      display: none !important;
    }

    main > div:last-child {
      max-width: none !important;
      margin: 0 !important;
    }

    main section {
      grid-template-columns: 1.15in minmax(0, 1fr) !important;
      gap: 0.24in !important;
      padding: 0.13in 0 !important;
      border-color: #aaa !important;
    }

    main section:nth-of-type(2) {
      break-before: page !important;
    }

    main section h2 {
      color: #111 !important;
      font-size: 8pt !important;
      letter-spacing: 0.1em !important;
    }

    main ol {
      gap: 0.07in !important;
    }

    main li {
      break-inside: avoid !important;
      grid-template-columns: minmax(0, 1fr) auto !important;
      gap: 0.02in 0.18in !important;
    }

    main h3 {
      color: #111 !important;
      font-size: 9.25pt !important;
      line-height: 1.1 !important;
    }

    main li p {
      margin-top: 0.02in !important;
      color: #444 !important;
      font-size: 7.6pt !important;
      line-height: 1.2 !important;
    }
  }
`;

const graffitiEvents = [
  {
    name: 'Meeting of Styles San Diego',
    location: 'Barrio Logan, San Diego, CA',
    date: 'July 2026',
  },
  {
    name: '2buck Invitational',
    location: "Spinelli's Pizzeria, Louisville, KY",
    date: 'September 2025',
  },
  { name: 'Paint Louis', location: 'St. Louis, MO', date: 'September 2016' },
  { name: 'Paint Louis', location: 'St. Louis, MO', date: 'September 2015' },
  {
    name: "Raven Xmen's Community Art, Graffiti, and Hip Hop Battle",
    location: 'Chicago, IL',
    date: '2014',
    detail: '1st place in the younger adults category',
  },
  {
    name: 'Yollocalli Graffiti Art Battle',
    location: 'Chicago, IL',
    date: '2014',
    detail: '2nd place',
  },
  { name: 'Meeting of Styles Chicago', location: 'Chicago, IL', date: '2015' },
  {
    name: 'Cantankerous',
    location: 'Chicago, IL',
    date: '2014',
    detail: 'Separate event during Meeting of Styles',
  },
  { name: 'Meeting of Styles Chicago', location: 'Chicago, IL', date: '2014' },
];

const exhibitions = [
  {
    name: 'Teenie Tiny Art',
    location: 'Oceanside Museum of Art, Oceanside, CA',
    date: 'February 2 - March 2, 2026',
    detail: 'Curated by Katie Dolgov',
  },
  {
    name: 'Printed With a Steam Roller',
    location: 'La Liga de Arte, San Juan, PR',
    date: 'April 3, 2025',
    detail: 'Curated by Claudia Wilburn',
  },
  {
    name: 'Teenie Tiny Art',
    location: 'Oceanside Museum of Art, Oceanside, CA',
    date: 'February 2 - March 2, 2025',
    detail: 'Curated by Katie Dolgov',
  },
  {
    name: 'Overlap: A Printmaking Exhibition',
    location: 'Flight 64, Portland, OR',
    date: 'June 27, 2024',
    detail: 'Curated by Olivia Smith',
  },
  {
    name: 'Ulna Community Art Show',
    location: 'Olympic Mills Center, Portland, OR',
    date: 'October 8, 2022',
    detail: 'Curated by Lettie Jane Rennekamp',
  },
  {
    name: 'Print Day in May, Steamroller Printmaking Event',
    location: 'Atelier Meridian Printmaking Studio, Portland, OR',
    date: 'May 7, 2022',
    detail: 'Curated by Jane Pagliarulo',
  },
  {
    name: 'Composition',
    location: 'Belong Gallery, Chicago, IL',
    date: 'June 2018',
    detail: 'Solo exhibition',
  },
  {
    name: 'Bachelor of Fine Arts Showcase',
    location: 'School of the Art Institute of Chicago, Chicago, IL',
    date: 'April 2017',
  },
  {
    name: 'Upcoming Artists of Chicago: A Pop-Up Show',
    location: 'Belong Gallery, Chicago, IL',
    date: 'June 2016',
    detail: 'Curated by Joey Berrios',
  },
  {
    name: 'VCD Design Show',
    location: 'Chicago Art Department, Chicago, IL',
    date: 'April 2017',
  },
  {
    name: 'Around the Coyote',
    location: 'Flat Iron Arts Building, Chicago, IL',
    date: 'September 2015',
  },
  {
    name: 'Big Color Show',
    location: 'Flat Iron Arts Building, Chicago, IL',
    date: '2015',
  },
  {
    name: 'Slanted Canvas',
    location: 'Genesis Art Supply, Chicago, IL',
    date: '2015',
    detail: 'Best of show; curated by Anthony Esquivel',
  },
  {
    name: 'Ultimate Painting Exhibition',
    location: 'Genesis Art Supply, Chicago, IL',
    date: '2015',
  },
  {
    name: 'Keep It 100',
    location: 'Chicago Truborn, Chicago, IL',
    date: '2015',
    detail: 'Curated by Sara Dulkin',
  },
  {
    name: 'Duo Show',
    location: 'Black Couch Studio, Chicago, IL',
    date: '2015',
    detail: 'Curated by Mark Narrens and Suzann Norris',
  },
  {
    name: 'Intersection',
    location: 'Siragusa Gallery, Chicago, IL',
    date: '2015',
  },
  {
    name: 'ArtBash',
    location: 'SUGS Gallery, School of the Art Institute of Chicago, Chicago, IL',
    date: '2014',
  },
];

const Page = styled.main`
  min-height: 100vh;
  padding: clamp(8rem, 14vw, 12rem) clamp(1.25rem, 7vw, 7rem) 8rem;
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.pageText};
  text-align: left;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: end;
  max-width: 76rem;
  margin: 0 auto clamp(5rem, 10vw, 9rem);
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.pageSubtle};

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

const Name = styled.h1`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 5vw, 6rem);
  font-weight: 550;
  font-variation-settings: 'SOFT' 55, 'WONK' 1;
  line-height: 0.9;
  letter-spacing: 0;
  white-space: nowrap;

  @media (max-width: 680px) {
    white-space: normal;
  }
`;

const Role = styled.p`
  margin: 1.25rem 0 0;
  color: ${(props) => props.theme.pageMuted};
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
`;

const PrintContact = styled.p`
  display: none;

  @media print {
    display: block;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  align-items: center;

  a {
    color: inherit;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    text-underline-offset: 0.25rem;
  }
`;

const DownloadLink = styled.a`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
`;

const Content = styled.div`
  max-width: 76rem;
  margin: 0 auto;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(10rem, 0.32fr) minmax(0, 1fr);
  gap: clamp(2rem, 7vw, 7rem);
  padding: clamp(3rem, 6vw, 5rem) 0;
  border-top: 1px solid ${(props) => props.theme.pageSubtle};

  &:first-child {
    border-top: 0;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.3;
  text-transform: uppercase;
`;

const Entries = styled.ol`
  display: grid;
  gap: 2.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Entry = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.5rem 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const EntryName = styled.h3`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 600;
  letter-spacing: 0;
`;

const DateText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.pageMuted};
  font-family: var(--font-mono);
  font-size: 0.9rem;
  white-space: nowrap;
`;

const EntryDetail = styled.p`
  grid-column: 1;
  margin: 0.35rem 0 0;
  color: ${(props) => props.theme.pageMuted};
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.6;
`;

function EntryList({ entries }) {
  return (
    <Entries>
      {entries.map(({ name, location, date, detail }) => (
        <Entry key={`${name}-${date}`}>
          <div>
            <EntryName>{name}</EntryName>
            <EntryDetail>{location}</EntryDetail>
            {detail ? <EntryDetail>{detail}</EntryDetail> : null}
          </div>
          <DateText>{date}</DateText>
        </Entry>
      ))}
    </Entries>
  );
}

export default function CV() {
  const canonical = canonicalFromLocation(useLocation());

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <PrintStyles />
      <Seo
        title="Artist CV | Zachary MacTavish"
        description="Artist CV and resume for Zachary (Zack) MacTavish, including exhibitions, graffiti events, awards, and education."
        url={canonical}
        keywords={[
          'Zachary MacTavish artist CV',
          'Zack MacTavish artist resume',
          'Philadelphia artist',
          'exhibitions',
          'graffiti artist',
          'printmaking',
        ]}
        authorName="Zack MacTavish"
        authorAlternateNames={['Zachary MacTavish', 'Zack MacTavish Art']}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          name: 'Artist CV | Zachary MacTavish',
          url: canonical,
          mainEntity: {
            '@type': 'Person',
            name: 'Zachary MacTavish',
            alternateName: 'Zack MacTavish',
            jobTitle: 'Multidisciplinary Artist',
            url: 'https://zackmactavish.com',
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'School of the Art Institute of Chicago',
            },
            knowsAbout: ['Painting', 'Textile art', 'Collage', 'Printmaking', 'Graffiti', 'Photography'],
          },
        }}
      />

      <Header>
        <div>
          <Name>Zachary MacTavish</Name>
          <Role>Multidisciplinary Artist · Curriculum Vitae</Role>
          <PrintContact>zmactavish@gmail.com · zackmactavish.com/cv</PrintContact>
        </div>
        <Actions>
          <a href={EMAIL_PATH}>Email</a>
          <DownloadLink href={PDF_PATH} download>
            <Download aria-hidden="true" size={18} />
            Download PDF
          </DownloadLink>
        </Actions>
      </Header>

      <Content>
        <Section aria-labelledby="exhibitions-heading">
          <SectionTitle id="exhibitions-heading">Exhibitions</SectionTitle>
          <EntryList entries={exhibitions} />
        </Section>

        <Section aria-labelledby="graffiti-heading">
          <SectionTitle id="graffiti-heading">Graffiti Events</SectionTitle>
          <EntryList entries={graffitiEvents} />
        </Section>

        <Section aria-labelledby="education-heading">
          <SectionTitle id="education-heading">Education</SectionTitle>
          <Entries>
            <Entry>
              <div>
                <EntryName>Bachelor of Fine Arts</EntryName>
                <EntryDetail>School of the Art Institute of Chicago · Chicago, IL</EntryDetail>
              </div>
              <DateText>2013 - 2017</DateText>
            </Entry>
          </Entries>
        </Section>
      </Content>
    </Page>
  );
}