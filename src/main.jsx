import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route'

import { Toaster } from 'react-hot-toast'
import Authentication from './Context/Authentication/Authentication'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
    <Toaster
            position="top-center"
            reverseOrder={false}
        />
        <RouterProvider router={router}>
        </RouterProvider>
    </Authentication>
  </StrictMode>,
)
