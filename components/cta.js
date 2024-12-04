import React from "react";
import Container from "./container";
import Link from "next/link";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl capitalize">
            Ready to launch your next idea or digital project?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Tell us more about your project, your business, and where you want
            to take it. Let's make it happen!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            // href="https://github.com/web3templates"
            href="https://wa.link/xet5bv"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </Container>
  );
}
