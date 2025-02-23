import React from 'react'
import Join from '../components/whyJoin/join'
import Membership from '../components/membership/membership'
import Faq from '../components/Faq/Faq'

const JoinPage = () => {
  return (
    <div className='mt-24'>
      <h2 className="text-center uppercase">Join IEEE</h2>
        <Join/>
        <Membership/>
    </div>
  )
}

export default JoinPage