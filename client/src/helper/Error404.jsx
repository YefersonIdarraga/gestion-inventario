import React from 'react'
import Header from './Header'

const Error404 = () => {
  return (
    <section>
        <Header />
        <section className='error-cont'>
            <div className="error404">
                <h1>Error 404</h1>          
                <p>Page Not Found</p>
            </div>
        </section>
    </section>
  )
}

export default Error404