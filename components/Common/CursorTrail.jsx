import { useEffect, useRef, useState } from 'react'

const presets = {
  dots: { glow: false, connect: false },
  lines: { glow: true, connect: true },
  glow: { glow: true, connect: false }
}

const CursorTrail = ({ enabledDefault = true, lengthDefault = 24, sizeDefault = 6, fadeDefault = 800, colorDefault = '#1fdf64', smoothingDefault = 0.2, styleDefault = 'dots' }) => {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 })
  const [enabled, setEnabled] = useState(enabledDefault)
  const [length, setLength] = useState(lengthDefault)
  const [size, setSize] = useState(sizeDefault)
  const [fade, setFade] = useState(fadeDefault)
  const [color, setColor] = useState(colorDefault)
  const [smoothing, setSmoothing] = useState(smoothingDefault)
  const [style, setStyle] = useState(styleDefault)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches
    if (!fine) {
      setEnabled(false)
      return
    }
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const onMove = e => {
      const x = e.clientX
      const y = e.clientY
      mouseRef.current.tx = x
      mouseRef.current.ty = y
    }
    const onLeave = () => {
      particlesRef.current = []
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave, { passive: true })
    window.addEventListener('resize', resize)
    const loop = time => {
      rafRef.current = requestAnimationFrame(loop)
      if (!enabled) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }
      const m = mouseRef.current
      m.x += (m.tx - m.x) * smoothing
      m.y += (m.ty - m.y) * smoothing
      const now = performance.now()
      particlesRef.current.unshift({ x: m.x, y: m.y, t: now })
      if (particlesRef.current.length > length) particlesRef.current.pop()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cfg = presets[style] || presets.dots
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]
        const age = now - p.t
        const alpha = Math.max(0, 1 - age / fade)
        if (alpha <= 0) continue
        ctx.globalAlpha = alpha
        ctx.fillStyle = color
        ctx.strokeStyle = color
        if (cfg.glow) ctx.shadowBlur = size * 2
        else ctx.shadowBlur = 0
        ctx.shadowColor = color
        if (cfg.connect && i > 0) {
          const q = particlesRef.current[i - 1]
          ctx.lineWidth = Math.max(1, size / 2)
          ctx.beginPath()
          ctx.moveTo(q.x, q.y)
          ctx.lineTo(p.x, p.y)
          ctx.stroke()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, size / 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', resize)
    }
  }, [enabled, length, size, fade, color, smoothing, style])

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[45000]" />
      <div className="fixed bottom-4 left-4 sm:left-auto sm:right-4 z-40 hidden md:block">
        <button onClick={() => setOpen(!open)} className="button">Cursor Trail</button>
        {open && (
          <div className="mt-2 p-4 rounded-xl bg-MidNightBlack text-Snow w-64 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs">Enabled</span>
              <input type="checkbox" checked={enabled} onChange={e => setEnabled(e.target.checked)} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Style</span>
              <select className="bg-DeepNightBlack text-xs" value={style} onChange={e => setStyle(e.target.value)}>
                <option value="dots">dots</option>
                <option value="lines">lines</option>
                <option value="glow">glow</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Length</span>
              <input type="range" min="8" max="64" value={length} onChange={e => setLength(parseInt(e.target.value))} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Size</span>
              <input type="range" min="2" max="16" value={size} onChange={e => setSize(parseInt(e.target.value))} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Fade</span>
              <input type="range" min="200" max="2000" step="50" value={fade} onChange={e => setFade(parseInt(e.target.value))} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Smoothing</span>
              <input type="range" min="0" max="1" step="0.05" value={smoothing} onChange={e => setSmoothing(parseFloat(e.target.value))} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Color</span>
              <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CursorTrail