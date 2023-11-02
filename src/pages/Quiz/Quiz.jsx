import React from 'react'
import { useState } from 'react'
import Affirmation from './Affirmation/Affirmation'

const RESUlT = {
  SUCCESS: "success",
  TRYAGAIN: "tryAgain",
  FAIL: "fail"
}

export default function Quiz() {
  // const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <Affirmation status={RESUlT.SUCCESS}/>
    </div>
  )
}
