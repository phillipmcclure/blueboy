import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  height: 99vh;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    overflow-x: hidden;
    width: 100vw;
  }
`

const TextColumn = styled.div`
  grid-column: 1 / 3;
  position: relative;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  border-right: 1px solid black;
  margin: 15px 0;
  overflow-y: auto;
  padding-top: 2rem;

  @media (max-width: 1024px) {
    grid-column: 1;
    order: 2;
    border-right: none;
    margin: 0;
    padding: 2rem 1rem;
    height: auto;
    overflow-y: visible;
    width: 100%;
    box-sizing: border-box;
  }
`

const CarouselImage = styled.img`
  @media (max-width: 1024px) {
    width: calc(100vw - 1rem);
    height: 400px;
    object-fit: cover;
    margin: 0 1rem;
  }
`

const ImageColumn = styled.div`
  grid-column: 3 / 5;
  position: relative;
  overflow-y: auto;
  padding: 1rem;
  padding-top: 2rem;

  @media (max-width: 1024px) {
    grid-column: 1;
    order: 1;
    height: 400px;
    overflow-y: visible;
    overflow-x: visible;
    padding: 0;
    width: 100vw;
    margin-left: -1rem;
    margin-right: -1rem;
  }
`

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const ExhibitionText = styled.div`
  margin-top: 1rem;
`

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding: 0 1rem;
    gap: 1rem;
    width: 100%;
    
    &::-webkit-scrollbar {
      display: none;
    }

    img {
      flex: 0 0 calc(100vw - 2rem);
      scroll-snap-align: center;
      scroll-snap-stop: always;
      width: calc(100vw - 2rem);
      height: 400px;
      object-fit: cover;
    }
  }
`

const ArtistBio = styled.span`
  color: #727272;
`

const getImageExtension = (index: number): string => {
  const jpegIndices = [4, 5, 6, 7, 11, 12, 13];
  const pngIndices = [18, 19, 20];
  
  if (jpegIndices.includes(index)) return '.jpeg';
  if (pngIndices.includes(index)) return '.png';
  return '.jpg';
};

const OnView: React.FC = () => {
  return (
    <Container>
      <TextColumn>
        <ArtistInfo>
          <h1>Kate Burke & Daniela Rodriguez: <i>One lifetime is enough to learn life&apos;s preciousness</i></h1>
          <br />
          <h1>December 15 through January 11.</h1>
        </ArtistInfo>
        <br />
        <br />
        <ExhibitionText>
          <p>
            A large circling loop wheels its way through the work in One lifetime is enough to learn life&apos;s preciousness. The loop rises and falls, twists, turns, and returns as both artists note the circular patterns at play in their own lives.
            <br /><br />
            In their single-channel video, Dani Rodriguez scrubs away the grime to reveal a mythologized self, wiped of features sans two large, winking eyes.
            <br /><br /><br />
            Everyday I have to: scrub, wash, sweep, rinse, mop, cleanse, wipe, and scrub again.
            <br /><br />
            All over again.
            <br /><br />
            I scrub those floors squeaky clean, exhaustion down my back. So I fall asleep.
            <br /><br />
            And I wake up, and I keep on scrubbing.
            <br /><br /><br />
            Chants Rodriguez in My Own Personal Saṃsāra, wherein Rodriguez likens cleaning their home to the karmic cycle. The term Saṃsāra connotes &quot;cyclic change&quot; or, more colloquially, &quot;running in circles.&quot; They scrub the glass, grow tired, sleep, and wake to begin again.
            <br /><br />
            This monotony is reflected in the physical labor of Kate Burke&apos;s practice. In her studio, piles of small ceramic tiles and Perler beads fill the floor. As we talk, she crafts small mosaics on the ground, rehearsing the method she will later employ to cover the desk she&apos;s found on Facebook Marketplace or a small shelf with a heart-shaped window. Burke&apos;s images reveal slowly, over time, one physical pixel following the last. On the ends of the desk, small flowers take root, bud, blossom, and wilt—the cycle continues.
            <br /><br />
            And I&apos;ll have to scrub again on Monday and Tuesday, and well, maybe not Wednesday because Wednesday is Laundry Day, but I&apos;ll be sure to scrub again on Thursday.
            And even if I scrub with a heavenly force, with an earnest commitment to the shine, life comes down and messes it all up.
            <br /><br />
            Through their respective practices, Burke and Rodriguez inhabit these circling loops with dedication and attention, animating what could be monotony with spiritual rigor, marking where mundanity collides with something mythic.
            <br /><br /><br /><br />
            <ArtistBio>
              <b>Kate Burke</b> is an Atlanta-based musician, artist, and performer. After receiving her BFA in Fabric Design in 2016 with honors from the University of Georgia. She has shown throughout the United States with solo and group presentations in spaces such as the Museum of Contemporary Art of Georgia, the Atlanta Contemporary, Hartsfield Jackson International Airport, Lyndon House Art Center, the Dalton Gallery at Agnes Scott, Tiger Strikes Asteroid Greenville, Free Market Gallery, ATHICA, whitespec, Art Fields, Waiting Room Art, and Mint Atlanta. Kate has received distinguished awards such as the ArtFields Category Award for textiles in 2019 and has a growing list of fellowships, including being a two-time Hambidge Center fellow, a former member of the Atlanta Contemporary Studio Artists, a resident at Long Meadow Artist Residency, and a Leap Year Artist with MINT in Atlanta, GA. Kate is currently a part of the Creatives Project Residency in Atlanta, GA, through 2025.
              <br /><br />
              <b>Dani Rodriguez</b> is a multidisciplinary artist living and working between Colombia and the United States. Dani makes drawings, textiles, and video art that synthesize the information learned from organizing life around friendship, walking through different ecosystems, and practicing the deep listening of body/mind. Through their work, Daniela wants to honor and adorn the liberating processes that have transformed them and share them in an effort to tighten the connection between all life.
            </ArtistBio>
          </p>
        </ExhibitionText>
      </TextColumn>

      <ImageColumn>
        <ImageGallery>
          {[...Array(20)].map((_, i) => (
            <CarouselImage 
              key={i + 1}
              src={`/experimental/images/exhibitions-pictures/Lifes/Lifes-${i + 1}${getImageExtension(i + 1)}`}
              alt={`Exhibition image ${i + 1}`}
            />
          ))}
        </ImageGallery>
      </ImageColumn>
    </Container>
  )
}

export default OnView 