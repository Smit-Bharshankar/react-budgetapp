import React from 'react'
import { formatCurrency, formatDate } from './Helpers'

function ExpenseItem({budget}) {
  return (
   <>
   <td> {budget.name} </td>
   <td> {formatCurrency(budget.amount)} </td>
   <td> {formatDate(budget.createdAt)} </td>


   </>
  )
}

export default ExpenseItem
