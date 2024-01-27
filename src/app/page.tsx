//import Image from "next/image";
import { SquareBasics } from "@/components/SquareBasics";
import { TransitionsCustom } from "@/components/TransitionsCustom";

export default function Home() {
  return (
    <div className="h-max bg-gradient-to-tr from-cyan-400 via-violet-600 to-purple-700 px-4">
      <h1 className="text-center text-6xl text-white py-8">Framer motion advanced course</h1>
      {/* <SquareBasics /> */}
      <TransitionsCustom />
    </div>
  )
}
