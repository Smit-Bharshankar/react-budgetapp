import React, { useEffect, useRef } from 'react'
import { Form, useFetcher } from 'react-router-dom'
import { CurrencyRupeeIcon } from '@heroicons/react/24/solid'

function AddBudgetForm() {
    
const fetcher = useFetcher();
const isSubmitting = fetcher.state === 'submitting'
const formRef = useRef();
const focusRef = useRef();
useEffect(() => {
    if (!isSubmitting) {
        formRef.current.reset()
        focusRef.current.focus()
    }
} , [isSubmitting])

  return (
    <div className='form-wrapper'>
        <h3 className='h3'>
            Create Budget
        </h3>
        <fetcher.Form 
        method='post'
        className='grid-sm'
        ref={formRef}

        >
            <div className="grid-xs">
                <label htmlFor="newBudget">Expense Name</label>
                <input type="text" name='newBudget' id='newBudget' placeholder='e.g. Food' required ref={focusRef}/>
            </div>
            <div className='grid-xs'>
                <label htmlFor="newBudgetAmount">Amount</label>
                <input type="text" name='newBudgetAmount' id='newBudgetAmount' placeholder="₹ 150" required inputMode='decimal' />
            </div>
            <input type="hidden" name='_action' value="newBudget"/>
            <button type='submit' className='btn btn--dark'>
                <span>Add Expense</span> < CurrencyRupeeIcon width={20}/>
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm
