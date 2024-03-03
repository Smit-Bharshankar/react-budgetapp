import React from 'react'
import { createBudget, fetchData } from './Helpers'
import { Link, useLoaderData } from 'react-router-dom';
import Intro from './Intro'
import { toast } from 'react-toastify';
import AddBudgetForm from './AddBudgetForm';
import Table from './Table';


//loader
export function DashboardLoader () {
    const userName = fetchData("userName");
    const budget = fetchData("budget");
    return { userName , budget}
}

export async function DashboardAction({request}) {
  const data = await request.formData();
  const {_action , ...values} = Object.fromEntries(data);

  if (_action === "newUser") {
    try{
      localStorage.setItem("userName" , JSON.stringify(values.userName))
    return toast.success(`Welcome ${values.userName}`)
    } catch (e) {
      throw new Error("There was a problem creating account.")
    }
  }

  if (_action === "newBudget") {
    try {
      createBudget({
        name:  values.newBudget , 
        amount: values.newBudgetAmount ,
      })
      return toast.success("Expense Created")
    } catch (e) {
      throw new Error("There was a problem creating your budget!")
    }
  }
}

function Dashboard() {
    const { userName , budget} = useLoaderData()
  return (
    <>
        {userName ? 
        (
          <div className='dashboard'>
            <h1>Welcome <span style={{color:'#0FC6F3   '}}>{userName}</span></h1>
          
             <div className='grid-sm'>
              {/* {budget ? () : ()} */}
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm/>
                </div>
              </div>
              </div> 
              <div>
                {

                  budget && budget.length > 0 && (
                    <div className="grid-md">
                      <h2>Recent Expenses</h2>
                      <Table 
                      budget={budget.sort((a,b) => 
                        b.createdAt - a.createdAt)
                        .slice(0,8)
                      }
                       />
                       {budget.length > 8 && (
                        <Link className='btn btn--dark' to="expenseList">
                        View All
                        </Link>
                       )}
                      </div>
                  )
                }
              </div>

          </div>
        ) 
        : <Intro/>}
    </>
  )
}

export default Dashboard
