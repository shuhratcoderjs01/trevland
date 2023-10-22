import React from 'react'
import { HeaderLink } from '../../assets/data/headerLink'
import Button from '../Button/Button'

function Header() {

  return (
   <header>
      <div className=' container flex justify-between items-center pt-9'>
             
             <div className="logo" >
               <a href="/" className='text-white font-logo text-2xl'>Trevland</a>
             </div>

             <ul className=' hidden md:flex justify-between gap-12 '>
                {
                    HeaderLink.map(({name, url})=>(
                        <li key={url} >
                            <a href={url} className=' text-white font-body text-lg font-medium'>
                                {name}
                                </a>
                            </li>
                    ))
                }
             </ul>

            <Button> Booking now</Button>
             

      </div>
   </header>
  )
}

export default Header