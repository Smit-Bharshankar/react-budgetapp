import React from 'react'
import { Form } from 'react-router-dom'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import illustration from '../assets/illustration.jpg'


function Intro() {
    

  return (
    <div className='intro'>
        <div>
      <h1>Take Control of <span className='accent'>Your Money</span></h1>
        <h3>Take Control of your financial decisions</h3>
        <Form method='post'>
            <input type="text" 
            name='userName'
            required 
            placeholder="What's your name"
            aria-label='Your Name'
            />
            <input type="hidden" name='_action' value="newUser" />
        <button type='submit' className='btn btn--dark'>
            <span>Create Account</span> <UserPlusIcon width={20}/>
        </button>
        </Form>
        </div>
        <img src={illustration} width={600} alt="Manage Your Money" />
    </div>
  )
}

export default Intro
