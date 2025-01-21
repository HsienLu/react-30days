import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter,Routes, Route } from "react-router";
import Day1 from './component/Day1.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/Day1' element={<Day1/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
