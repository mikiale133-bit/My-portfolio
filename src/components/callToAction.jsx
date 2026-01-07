import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className
    ="text-white bg-gradient-to-r from-gray-800 via-gray-800 to-gray-800">
      <div className="px-6 mx-auto text-center max-w-7xl py-28">
        <h2 className="text-3xl font-extrabold sm:text-5xl">
          Ready to build your next <span className="">web project</span>?
        </h2>

        <p className="max-w-xl mx-auto mt-6 text-lg text-gray-100">
          I create fast, scalable, and high-impact websites & web applications that grow your business.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 mt-10 font-semibold transition rounded-2xl bg-black/80 hover:bg-black/100"
        >
          Let’s Get Started
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
