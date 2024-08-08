import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

// First we need to add the 'ScrollTrigger' plugin to gsap
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  // TODO: Implement the gsap scroll trigger

  // Add reference to div containing all the box elements
  const scrollRef = useRef();

  useGSAP(() => {
    // Get all the box elements
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box, i) => {
      gsap.to(box, {
        x: 280 * (i+1),
        borderRadius: '100%',
        rotation: 360,
        scale: 1.5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: box, // When box element comes into view, it starts the animation
          start: 'bottom bottom', // Starts animation when bottom of the box hits the bottom of the viewport
          end: 'top 20%', // Ends when top of the box hits 20% of the viewport
          scrub: true // To make the animation smooth
        }
      })
    })
  }, [{ scope: scrollRef}]); // Added dependency 

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
