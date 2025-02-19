let animationFrameTime = 0

const nativeRequestAnimationFrame =
  window.requestAnimationFrame || window.webkitRequestAnimationFrame

export const cancelAnimationFrame = (
  window.cancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.clearTimeout
).bind(window)

export const requestAnimationFrame = nativeRequestAnimationFrame
  ? nativeRequestAnimationFrame.bind(window)
  : (callback: FrameRequestCallback): number => {
      const currTime = Date.now()
      const timeDelay = Math.max(0, 16 - (currTime - animationFrameTime))
      animationFrameTime = currTime + timeDelay
      return window.setTimeout(() => {
        callback(Date.now())
      }, timeDelay)
    }
