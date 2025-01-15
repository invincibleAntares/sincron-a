import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import EditorPage from "./pages/EditorPage"
import { Toaster } from "react-hot-toast"

function App() {


  return (
   <>
     <div>
            <Toaster position="top-right"
              toastOptions={{
                success:{
                  theme:{
                    primary:'#4aed88',
                  }
                }
              }}
             />
            
     </div>
     <BrowserRouter>
         <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/editor/:roomId" element={<EditorPage/>} />
         </Routes>
     </BrowserRouter>  
   
   </>
  )
}

export default App
