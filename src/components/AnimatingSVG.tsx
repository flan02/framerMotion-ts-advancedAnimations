import { Ball, Ball2 } from "@/assets/Ball"

type Props = {}

const AnimatingSVG = (props: Props) => {
  return (
    <>
      <h3 className="text-white">AnimatingSVG</h3>
      <br /><br />
      <Ball />
      <br />
      <Ball2 />
    </>
  )
}

export default AnimatingSVG