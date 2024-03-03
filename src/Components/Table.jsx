import React from 'react'
import ExpenseItem from './ExpenseItem'

function Table({budget}) {

const {color} = budget;

  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
                        {
                            ["Name" , "Amount" , "Date"].map((i , index) => 
                            <th key={index} > {i}</th>)
                        }
                </tr>
            </thead>
            <tbody>
                {
                    budget.map((budget) => (
                        <tr keys={budget.id} >
                            {/* {budget.name} */}
                            <ExpenseItem budget={budget}/>
                        </tr>
                     ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table
