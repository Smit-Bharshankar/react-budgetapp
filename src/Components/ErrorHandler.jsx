import React from 'react'
import { useRouteError , Link} from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/solid'

function ErrorHandler() {
   const error = useRouteError()
  return (
    <div className='error'>
      <h1>There seems to be a problem !</h1>
      <p>{error.message || error.statusText}</p>
      <div className='flex-md'>
        <Link to='/' className='btn btn--dark'>
        <span>Go Home</span>
       < HomeIcon width={20}/>
        </Link>

      </div>
    </div>
  )
}

export default ErrorHandler
