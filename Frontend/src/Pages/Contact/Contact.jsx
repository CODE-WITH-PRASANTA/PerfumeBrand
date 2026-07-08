import React from 'react'
import './Contact.css'
import ContactBreadCrum from '../../Components/ContactBreadCrum/ContactBreadCrum'
import ContactDetalis from '../../Components/ContactDetalis/ContactDetalis'

const Contact = () => {
  return (
    <div>
      <ContactBreadCrum/>
      <ContactDetalis/>
    </div>
  )
}

export default Contact