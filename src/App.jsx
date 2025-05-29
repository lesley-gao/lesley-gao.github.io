import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import UXUIPage from './pages/UXUIPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import DashboardProject from './pages/DashboardProject'
import PetProject from './pages/PetProject'
import ActivityProject from './pages/ActivityProject'
import BlogProject from './pages/BlogProject'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/uxui' element={<UXUIPage />} />

          <Route path='/uxui/dashboard-project' element={<DashboardProject />} />
          <Route path='/uxui/pet-project' element={<PetProject />} />
          <Route path='/uxui/activity-project' element={<ActivityProject />} />
          <Route path='/uxui/blog-project' element={<BlogProject />} />

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
