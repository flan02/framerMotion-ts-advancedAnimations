/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import {
  AnimationPlaybackControls,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

export const MotionTips = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* <ScrollOffsets /> */}
      {/* <MotionValuesAreValuable /> */}
      {/* <MotionTemplates /> */}
      {/* <PauseAnimations /> */}
      <DragControls />
    </div>
  );
};

// * Box that rotates as you scrollY
const ScrollOffsets = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start end", "end start"],
    // offset: ["start start", "end start"],
    // offset: ["start", "end"],
    offset: ["start 50%", "-100px 0"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <motion.div className="py-[100vh]">
      <motion.div
        style={{
          rotate,
        }}
        ref={ref}
        className="mx-auto size-80 bg-indigo-500"
      />
    </motion.div>
  );
};

// * Box that changes scale and background color based on x position (when is dragged)
const MotionValuesAreValuable = () => {
  const x = useMotionValue(0);

  useMotionValueEvent(x, "change", (latest) => console.log(latest));

  const scale = useTransform(x, [-200, 0, 200], [1.5, 1, 1.5]);
  const background = useTransform(
    x,
    [-200, 0, 200],
    ["#fca5a5", "#cbd5e1", "#86efac"]
  );

  return (
    <div className="grid h-screen place-content-center">
      <motion.div
        style={{
          x,
          scale,
          background,
        }}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        className="size-52"
      />
    </div>
  );
};

// * Box that changes background color based on x position (when is dragged)
const MotionTemplates = () => {
  const x = useMotionValue(0);

  const stop1 = useTransform(x, [-200, 200], ["#ef4444", "#6366f1"]);
  const stop2 = useTransform(x, [-200, 200], ["#f59e0b", "#6d28d9"]);

  const backgroundImage = useMotionTemplate`linear-gradient(to right, ${stop1}, ${stop2})`;

  return (
    <div className="grid h-screen place-content-center">
      <motion.div
        style={{
          x,
          backgroundImage,
        }}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        className="size-52"
      />
    </div>
  );
};

// * Box that pauses animation when hovered
const PauseAnimations = () => {
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  const rotate = useMotionValue(0);

  useEffect(() => {
    const controls = animate(rotate, 360, {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    });

    controlsRef.current = controls // * Save the controls props in a current ref
  }, []);

  return (
    <div className="grid h-screen place-content-center">
      <motion.div
        onMouseEnter={() => {
          controlsRef.current?.pause();
        }}
        onMouseLeave={() => {
          controlsRef.current?.play();
        }}
        style={{
          rotate: rotate,
        }}
        className="size-52 bg-indigo-500"
      />
    </div>
  );
};

// * Box that can be dragged only in a specific area
const DragControls = () => {
  return (
    <div className="grid h-screen place-content-center">
      <motion.div
        drag
        dragConstraints={{
          top: -200,
          bottom: 200,
          left: -100,
          right: 100,
        }}
        dragElastic={0}
        dragMomentum={false}
        className="size-52 bg-indigo-500"
      />
    </div>
  );
};
