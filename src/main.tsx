import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {RouterProvider} from "react-router-dom"

import routes from "./routes" // arquivo que contém as rotas da aplicação

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={routes} />    
    </ChakraProvider>
  </React.StrictMode>)