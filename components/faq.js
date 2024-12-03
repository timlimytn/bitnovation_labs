import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is custom software development?",
    answer:
      "Custom software development involves creating software specifically designed to meet the unique needs of a business. Unlike off-the-shelf solutions, custom software is tailored to your company's processes, helping to solve specific challenges more effectively.",
  },
  {
    question: "How long does it take to develop custom software?",
    answer:
      "The timeline for developing custom software depends on the complexity and scope of the project. Simple applications may take a few months, while larger, enterprise-level systems can take up to a year or more. We'll provide a clear project plan with milestones and timelines.",
  },
  {
    question:
      "What are the benefits of custom software over off-the-shelf solutions?",
    answer:
      "Custom software offers greater flexibility, scalability, and better alignment with your business goals. It can be adapted to meet your specific requirements, integrates more seamlessly with your existing systems, and can evolve as your business grows.",
  },
  {
    question:
      "Will I be able to make changes to the software after it’s developed? ",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your software continues to meet your evolving business needs. You can request changes or updates as your requirements change over time.",
  },
  {
    question: "What is the difference between a web app and a mobile app? ",
    answer:
      "A web app is accessed through a browser and works across multiple platforms without requiring installation, while a mobile app is specifically designed for smartphones and tablets and needs to be installed from an app store (e.g., iOS or Android).",
  },
  {
    question: "How long does it take to develop a website or app? ",
    answer:
      "The development time depends on the complexity and functionality of the project. A simple website or app may take 4-6 weeks, while more complex projects may take several months. We’ll work with you to establish a realistic timeline based on your requirements.",
  },
  {
    question: "What is the cost of building a website or mobile app? ",
    answer:
      "The cost varies depending on the scope of the project, the features required, and the complexity of the design and functionality. We offer a tailored quote based on your specific needs and will work within your budget to provide the best value.",
  },
  {
    question:
      "Do you provide ongoing support after my website or app is launched? ",
    answer:
      "Yes, we offer post-launch support and maintenance services. This includes bug fixes, updates, performance monitoring, and the addition of new features to keep your website or app running smoothly as your business evolves.",
  },
];
