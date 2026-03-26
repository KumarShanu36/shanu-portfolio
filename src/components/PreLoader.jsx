import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [countDone, setCountDone] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(interval)
          setCountDone(true)
          return 100
        }

        return current + 1
      })
    }, 18)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countDone) {
      const fadeTextTimer = setTimeout(() => setFadeText(true), 1400)
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 900)
      const hideTimer = setTimeout(() => setLoading(false), 1600)

      return () => {
        clearTimeout(fadeTextTimer)
        clearTimeout(fadeScreenTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [countDone])

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-1000 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div
          className={`preloader-hud absolute transition-all duration-700 ${
            fadeText ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="preloader-shell">
            <div
              className="preloader-ring"
              style={{
                background: `conic-gradient(#38f8ff ${progress * 3.6}deg, rgba(56, 248, 255, 0.16) ${progress * 3.6}deg 360deg)`,
              }}
            >
              <div className="preloader-ring-inner">
                <span className="preloader-percent">{progress}%</span>
              </div>
            </div>

            <div className="preloader-bar-panel">
              <div className="preloader-bar-head" />
              <div className="preloader-bar-track">
                <div
                  className="preloader-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="preloader-label">LOADING...</p>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default PreLoader
