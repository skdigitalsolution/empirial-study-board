import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="grid grid-cols-[.95fr_1fr] items-center gap-[12%] bg-[#f8f9fc] px-[12%] py-[100px] min-[1500px]:px-[max(9%,calc((100vw-1260px)/2))] max-[900px]:gap-[7%] max-[900px]:px-[8%] max-[680px]:block max-[680px]:px-[23px] max-[680px]:py-[67px]" id="contact">
      <div>
        <p className="mb-[23px] flex items-center gap-[10px] text-[10px] font-bold tracking-[1.8px] uppercase max-[680px]:mb-[18px] max-[680px]:text-[8px] max-[680px]:tracking-[1.4px]">
          <span className="h-px w-[23px] bg-current" /> Your story starts with a hello
        </p>
        <h2 className="m-0 font-display text-[clamp(40px,4.5vw,56px)] leading-[1.06] font-bold tracking-[-2.5px] max-[680px]:text-[41px] max-[680px]:tracking-[-2px]">
          Let’s talk about<br /><em className="text-brand-blue not-italic">what’s possible.</em>
        </h2>
        <p className="mt-5 mb-7 max-w-[360px] text-[12px] leading-[1.8] text-[#758095] max-[680px]:mt-[15px] max-[680px]:mb-[18px] max-[680px]:text-[11px]">
          Share a little about your plans. We’ll help you figure out a good next
          step.
        </p>
        <div className="mb-0 flex items-center gap-[9px] text-[10px] text-[#748097] max-[680px]:mb-7">
          <span className="text-[20px] text-brand-orange" aria-hidden="true">✦</span>
          <span>No pressure. Just a friendly place to start.</span>
        </div>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-[7px] text-[10px] font-bold" htmlFor="name">Your name</label>
        <input className="mb-[17px] h-[43px] w-full rounded-[2px] border border-[#dce2eb] bg-white px-3 text-[11px] outline-none placeholder:text-[#a2aaba] focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 max-[680px]:mb-[14px] max-[680px]:h-[42px]" id="name" name="name" type="text" placeholder="e.g. Alex Morgan" autoComplete="name" required />
        <label className="mb-[7px] text-[10px] font-bold" htmlFor="email">Email address</label>
        <input className="mb-[17px] h-[43px] w-full rounded-[2px] border border-[#dce2eb] bg-white px-3 text-[11px] outline-none placeholder:text-[#a2aaba] focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 max-[680px]:mb-[14px] max-[680px]:h-[42px]" id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <label className="mb-[7px] text-[10px] font-bold" htmlFor="destination">Where are you thinking of studying?</label>
        <select className="mb-[17px] h-[43px] w-full rounded-[2px] border border-[#dce2eb] bg-white px-3 text-[11px] outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 max-[680px]:mb-[14px] max-[680px]:h-[42px]" id="destination" name="destination" defaultValue="" required>
          <option value="" disabled>Choose a destination</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>Australia</option>
          <option>Ireland</option>
          <option>Still exploring</option>
        </select>
        <button className="mt-[3px] inline-flex min-h-12 self-start items-center justify-center gap-6 rounded-[3px] bg-brand-blue px-5 text-[12px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-deep max-[680px]:min-h-11 max-[680px]:gap-[14px] max-[680px]:px-[14px] max-[680px]:text-[10px]" type="submit">
          Take the first step <span className="text-[17px]" aria-hidden="true">→</span>
        </button>
        <p className="mt-3 mb-0 text-[9px] text-[#7b8495]" aria-live="polite">
          {submitted
            ? "Thanks for your interest. This demo form does not send or store your details."
            : "This demo form does not send or store your details."}
        </p>
      </form>
    </section>
  );
}
