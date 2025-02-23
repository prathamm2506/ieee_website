import React from 'react'
import ContactMap from '../components/contactLinks/ContactMap'
import Forms from '../components/forms/Forms'

const ContactPage = () => {
  return (
    <div className='mt-24'>
      <h2 className="text-center uppercase">Contact</h2>
      <Forms/>
      <ContactMap/>
    </div>
  )
}

export default ContactPage