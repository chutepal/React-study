import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method

  useGSAP(() => {
    gsap.to('.stagger-box', {
      y: 220,
      repeat: -1,
      duration: 2,
      yoyo: true,
      borderRadius: '100%',
      rotation: 360,
      // Type 1
      // stagger: 0.5, // It lets you apply animations one-by-one on all elements

      // Type 2
      stagger: {
        amount: 1.5, // Delay between animations of consecutive elements
        grid: [2,1], // //[rows, columns] so that GSAP can calculate proximities accordingly
        axis: 'y', // axis along which staggered animations
        ease: 'circ.inOut',
        from: 'center' // start element
      }
    })
  }, [])

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
