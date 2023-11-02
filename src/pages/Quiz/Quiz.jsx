import React from 'react'
import Affirmation from './Affirmation/Affirmation'

const RESUlT = {
  SUCCESS: "success",
  TRYAGAIN: "tryAgain",
  FAIL: "fail"
}

export default function Quiz() {
  return (
    <div>
      <Affirmation status={RESUlT.TRYAGAIN} />
    </div>
  )
}
