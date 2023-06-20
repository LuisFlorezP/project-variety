import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { router as Router} from './router/router'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router} />  

)
