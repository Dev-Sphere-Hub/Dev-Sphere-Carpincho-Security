import React, { useEffect, useState } from 'react'

const TypewriterAnimation = () => {
  const [text, setText] = useState('')
  const fullText = 'Seguridad en 🏢 edificios,'
  const altText = ' 🏡 countries y establecimientos'

  useEffect(() => {
    let currentIndex = 0
    let isAltText = false
    let timer

    const animateTypewriter = () => {
      timer = setInterval(() => {
        if (isAltText) {
          if (currentIndex === altText.length) {
            clearInterval(timer)
            setTimeout(() => {
              setText('')
              currentIndex = 0
              isAltText = false
              animateTypewriter()
            }, 2000)
          } else {
            setText(altText.slice(0, currentIndex + 1))
            currentIndex++
          }
        } else {
          if (currentIndex === fullText.length) {
            currentIndex = 0
            isAltText = true
          } else {
            setText(fullText.slice(0, currentIndex + 1))
            currentIndex++
          }
        }
      }, 100)
    }

    animateTypewriter()

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='typewriter mb-7'>
      <h1>{text}</h1>
    </div>
  )
}

export default TypewriterAnimation
