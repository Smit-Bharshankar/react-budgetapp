import React from 'react'
import { BrowserRouter ,Routes , Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard, { DashboardAction, DashboardLoader } from './Components/Dashboard'
import ErrorHandler from './Components/ErrorHandler'
import Mainboard, { MainLoader } from './Components/Layouts/Main'
import  { LogoutAction } from './Components/Logout'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage, { expensesLoader } from './Components/ExpensesPage'


const router = createBrowserRouter([
  {
   path: '/',
   element: <Mainboard/>,
   loader: MainLoader,
   errorElement: <ErrorHandler/> ,
   children: [
    {
      path: '/',
      element: <Dashboard/>,
      action:DashboardAction,
      loader: DashboardLoader,

      errorElement: <ErrorHandler/> ,
     } ,
     {
      path: 'expenseList',
      element: <ExpensesPage/>,
      loader: expensesLoader,
     } ,
     {
      path: 'logout',
      action:LogoutAction,
     }
    
   ]
  } ,
 ])

 
function App() {

  return (
   <>
    <RouterProvider router={router} />
    <ToastContainer/>
   </>
  )
}
export default App
