//import Image from "next/image";

import { SquareBasics } from "@/components/SquareBasics";
import { TransitionsCustom } from "@/components/TransitionsCustom";
import TransitionsRepeat from "@/components/TransitionsRepeat";
import TransitionsPosition from "@/components/TransitionsPosition";
import VariantsNestedAnimations from "@/components/VariantsNestedAnimations";
import PresenceAnimate from "@/components/PresenceAnimate";
import UseAnimation from "@/components/UseAnimation";
import DragGestures from "@/components/DragGestures";
import WhileTapHover from "@/components/WhileTapHover";
import PanGestures from "@/components/PanGestures";
import AccesibleAnimations from "@/components/AccesibleAnimations";
import AnimatingSVG from "@/components/AnimatingSVG";
import { AnimateCustomComponents } from "@/components/AnimateCustomComponents";


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
      {/*<PresenceAnimate />*/}
      {/*<UseAnimation />*/}
      {/*<DragGestures />*/}
      {/*<WhileTapHover />*/}
      {/*<PanGestures />*/}
      {/*<AccesibleAnimations />*/}
      {/*<AnimatingSVG />*/}
      <AnimateCustomComponents name="Dan" id="33787475" />
    </div>
  )
}
