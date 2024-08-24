import React from 'react';
import ReactDOMClient from 'react-dom/client';
import GeneralComp from './components/GeneralComp.js'
import './css_styles/main.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(<GeneralComp />)