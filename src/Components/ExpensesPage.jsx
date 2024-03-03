import React from 'react'
import { fetchData } from './Helpers'
import { useLoaderData } from 'react-router-dom';
import Table from './Table';

export function expensesLoader() {
    const expenses = fetchData("budget")
    return {expenses};
}




function ExpensesPage() {
    const {expenses} = useLoaderData()
    
  return (
    <div className='grid-lg'>
        <h1 style={{color:'#4A2403'}}>All Expenses</h1>
{
    expenses && expenses.length > 0  ? 
    (
        <div className='grid-md'>
            <h2 style={{color:'red'}}>
                Recent Expenses <small style={{color:'orange'}}>({expenses.length} total)</small>
            </h2>
            <Table 
                      budget={expenses.sort((a,b) => 
                        b.createdAt - a.createdAt)
                      }
                       />

        </div>
    ) :
    (
        <span>Input Expenses to View Here</span>
    )
}
    </div>
  )
}

export default ExpensesPage
