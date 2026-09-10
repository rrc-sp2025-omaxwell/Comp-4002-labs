// Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.tsx'


// creates the Root React component of our app at the #root HTML element
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* renders the App component */}
        <App />
    </StrictMode>,
)

/**
 * <StrictMode> <App /> </StrictMode> are React Nodes. 
* The .tsx file type ("TypeScript XML") allows these nodes to be written in TypeScript with HTML-like syntax
 */