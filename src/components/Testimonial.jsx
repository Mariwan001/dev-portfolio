import { motion } from 'framer-motion'
import React from 'react'
import { TESTIMONIALS } from '../constants'

const testimonialVariants = {
  hidden: { opacity: 0, y: 20 }, 
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.5 }
  })
}

const Testimonials = () => {
  return (
    <section className='px-6 py-10 overflow-hidden' id='testimonials'> 
      <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>Testimonials</h1>
      <div className='h-1 w-20 mb-8 bg-white'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div key={index} 
            className='relative rounded-lg overflow-hidden h-full transition transform'
            initial='hidden'
            whileInView='visible'
            custom={index}
            viewport={{ once: true }}
            variants={testimonialVariants}>

              <div className='border border-pink-300/60 p-6 rounded-lg flex flex-col bg-black/30 min-h-[350px] h-full'>

                <div className='flex items-center mb-4'>
                  <div className='border border-pink-100/50 p-1 rounded-full'>
                    <img src={testimonial.image} alt={testimonial.name} 
                         className='w-12 h-12 rounded-full' />
                  </div>
                  
                  <div className='ml-4'>
                    <h2 className='text-xl font-medium'>{testimonial.name}</h2>
                    <p className='text-sm font-light'>{testimonial.title}</p>
                  </div>
                </div>
                <div className='mt-4 flex-grow'>
                  <p className='text-xl italic'>" {testimonial.feedback} "</p>
                </div>

              </div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
