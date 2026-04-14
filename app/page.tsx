import Hero from "@/components/hero/hero";
import CreditStrip from "@/components/marquee/credit-strip";
import ReelIndex from "@/components/work/reel-index";
import Capabilities from "@/components/capabilities/capabilities";
import ProcessScrubber from "@/components/process/scrubber";
import CallSheet from "@/components/gear/call-sheet";
import PullQuote from "@/components/testimonials/pull-quote";
import StartProject from "@/components/contact/start-project";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CreditStrip />
      <ReelIndex limit={4} />
      <Capabilities />
      <ProcessScrubber />
      <CallSheet />
      <PullQuote />
      <StartProject />
    </main>
  );
}
