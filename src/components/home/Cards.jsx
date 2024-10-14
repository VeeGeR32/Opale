import React from 'react'
import ServicesPreview from './ServicePreview'
import Testimonials from './Testimonials'
import Faq from '../services/Faq'

export default function Cards() {
  return (
    <div className='relative'>
        <img className='absolute top-0 -z-10 h-[180vh] w-[150%] object-cover' alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F6188698.jpg&f=1&nofb=1&ipt=3ba2b9957b1f774befcb6a6492a6e7a6517f45173213aca3f1722bb042436405&ipo=images"></img>
        <ServicesPreview />
        <Testimonials />
        <Faq />
    </div>
  )
}
