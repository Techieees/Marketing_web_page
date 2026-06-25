import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/app/AppLayout'
import { SmoothScrollWrapper } from '@/components/layout/SmoothScrollWrapper'

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })))
const Work = lazy(() => import('@/pages/Work').then((m) => ({ default: m.Work })))
const Pricing = lazy(() => import('@/pages/Pricing').then((m) => ({ default: m.Pricing })))
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })))

function PageFallback() {
  return <div className="flex flex-1" aria-hidden="true" />
}

export function App() {
  return (
    <BrowserRouter>
      <SmoothScrollWrapper>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/work"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Work />
                </Suspense>
              }
            />
            <Route
              path="/pricing"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Pricing />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Contact />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </SmoothScrollWrapper>
    </BrowserRouter>
  )
}
