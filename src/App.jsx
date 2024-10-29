import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Todos from './components/Todos'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Calender from './components/Calender'
import Projects from './components/Projects/Projects'


const App = () => {


  const AppComponent = () => {
    
    // Dark mode
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    // Toggle Sidebar
    const [isOpen, setOpen] = useState(true)

    function toggleSidebar() {
      setOpen(!isOpen)
    }

    // Dynamic section update
    const location = useLocation();

    const getPageTitle = (path) => {
      switch (path) {
        case '/todos':
          return 'ToDos';
        case '/projects':
          return 'Projects';
        case '/calender':
          return 'Calendar';
        default:
          return 'Dashboard';
      }
    };

    const pageTitle = getPageTitle(location.pathname);

    return (
      <div className={`${theme === 'light' ? 'light' : 'dark'} w-full h-full`}>
        <Navbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} title={pageTitle} />
        <div className='flex h-full w-full overflow-hidden'>
          <Sidebar isOpen={isOpen} />
          <div className='h-full w-full overflow-auto'>
            <Routes>
              <Route path="/todos" element={<Todos />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/calender" element={<Calender />} />
            </Routes>
          </div>
        </div>
      </div>
    )
  }
  return (
    <Router>
      <AppComponent />
    </Router>
  )
}

export default App