import TickerStrip    from '../components/TickerStrip'
import Navbar         from '../components/Navbar'
import Hero           from '../components/Hero'
import MarqueeDivider from '../components/MarqueeDivider'
import AboutSection   from '../components/AboutSection'
import EventsSection  from '../components/EventsSection'
import CommunityStrip from '../components/CommunityStrip'
import JoinSection    from '../components/JoinSection'
import Footer         from '../components/Footer'

export default function Home() {
  return (
    <>
      <TickerStrip />
      <Navbar />
      <Hero />
      <MarqueeDivider />
      <AboutSection />
      <EventsSection />
      <CommunityStrip />
      <JoinSection />
      <Footer />
    </>
  )
}