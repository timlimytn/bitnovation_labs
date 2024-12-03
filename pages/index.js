import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitnovate Labs - Digital Solutions and Web Development</title>
        <meta
          name="description"
          content="Bitnovate Labs is a Software Solutions and Web Development Company"
        />
        <link rel="icon" href="/bitnovate_logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="What We Do"
        title="We help businesses innovate and grow through cutting-edge software solutions"
      >
        At Bitnovate Labs, we’re committed to transforming businesses through
        innovative and reliable software solutions. Our team of experts
        specializes in delivering high-quality digital products and services
        that help businesses stay ahead. Here’s what we do:
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* !!! CODE BLOCK FOR FUTURE USE !!! */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      {/* !!! CODE BLOCK FOR FUTURE USE !!! */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Wondering how we can help? Check out our most frequently asked questions
        to learn more about our services and how we work. If you need further
        details, we’re happy to assist!
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      {/* !!! CODE BLOCK FOR FUTURE USE !!! */}
      {/* <PopupWidget /> */}
    </>
  );
}
