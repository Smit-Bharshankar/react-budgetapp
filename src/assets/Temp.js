
const router = createBrowserRouter (
  createRoutesFromElements (
   <Route path='/' element={<h1>Home</h1>} > 
  <Route   path='/me' element={<p>About</p>}/>
   </Route>
  )
)

const router = createBrowserRouter([
   {
    path: '/',
    element: <h1>Hello</h1>
   } ,
   {
    path: '/about' ,
    element : <h1>About</h1>
   }
  ])


function App() {

  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}
