import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export const About = () => {
  const a = useContext(noteContext)
  useEffect(()=>{                          //using our useEffect hook
    a.update()
  })
                                          //We want it to run just once, so passing and empty array
  return (
    <div>
      This is About {a.state.name} and he has opted {a.state.Course}
    </div>
  )
}
