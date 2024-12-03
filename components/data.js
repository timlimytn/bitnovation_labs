import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/software_solutions.png";
import benefitTwoImg from "../public/img/app_dev.png";

const benefitOne = {
  title: "Custom Software Solutions",
  desc: "We work with you to design and build custom applications that streamline your operations, enhance customer experiences, and help you stay competitive.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Tailored Application Development",
      desc: "We design and develop custom applications that address your unique business challenges. From intuitive user interfaces to robust backend systems, our solutions are built to be scalable, secure, and easy to use.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Enterprise Solutions",
      desc: "We create enterprise-level software that streamlines operations, enhances collaboration, and integrates seamlessly with your existing systems. Whether it’s CRM, ERP, or specialized tools, we ensure your enterprise solutions are aligned with your business objectives and can scale as you grow.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "System Integration & Data Solutions",
      desc: "TWe provide robust integration services that connect all your platforms, ensuring smooth data exchange and enhancing overall business intelligence. Our solutions help optimize existing systems and make them work cohesively for maximum productivity.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Web & App Development",
  desc: "We create intuitive websites and mobile apps that provide seamless user experiences and are optimized for performance.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Custom Web Development",
      desc: "We design and develop fully responsive, interactive websites that deliver an exceptional user experience across all devices. Our custom web solutions ensure your site is optimized for performance, security, and scalability.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Mobile App Development",
      desc: "Our team builds high-performance mobile apps for both iOS and Android. Whether you need a consumer-facing app or an internal business solution, we craft apps that are intuitive, engaging, and optimized for seamless functionality.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Progressive Web Apps (PWAs)",
      desc: "We specialize in building Progressive Web Apps that combine the best of web and mobile experiences. PWAs deliver fast, reliable, and app-like performance while being accessible from any browser, providing users with a seamless cross-platform experience.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
