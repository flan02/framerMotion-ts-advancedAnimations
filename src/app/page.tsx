//import Image from "next/image";

import { SquareBasics } from "@/components/SquareBasics";
import { TransitionsCustom } from "@/components/TransitionsCustom";
import TransitionsRepeat from "@/components/TransitionsRepeat";
import TransitionsPosition from "@/components/TransitionsPosition";
import VariantsNestedAnimations from "@/components/VariantsNestedAnimations";
import PresenceAnimate from "@/components/PresenceAnimate";


export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-tr from-cyan-400 via-violet-600 to-purple-700 px-8">
      <h1 className="text-center text-6xl text-white py-8">Framer motion advanced course</h1>
      {/* <SquareBasics /> */}
      {/*<TransitionsCustom />*/}
      {/*<TransitionsRepeat />*/}
      {/*
      <TransitionsPosition id="1" name="Dan" url="https://www.chanivetdan.tech" positionTransition={{
        type: 'tween',
        ease: 'easeInOut'
      }} />
      */}
      {/*<VariantsNestedAnimations />*/}
      <PresenceAnimate />

    </div>
  )
}
