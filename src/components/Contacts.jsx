import { motion } from 'framer-motion';
import React from 'react';
import { CONTACT_CONTENTS } from '../constants';

// Import the required icons from react-icons
import { RiTwitterFill, RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Contacts = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-10 overflow-hidden" id="contacts">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">Contact</h2>
      <div className="h-1 w-20 bg-white mb-8"></div>
      <motion.h3
        className="text-6xl md:text-8xl leading-none"
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        variants={textVariants}
      >
        {CONTACT_CONTENTS.headline}
      </motion.h3>
      <motion.p
        className="text-lg md:text-2xl mt-4 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        variants={textVariants}
      >
        {CONTACT_CONTENTS.description}
      </motion.p>

      <motion.a
        href={`mailto:${CONTACT_CONTENTS.email}`}
        className="text-2xl md:text-3xl font-medium mt-8"
        initial="hidden"
        whileInView="visible"
        custom={0.9}
        variants={textVariants}
      >
        {CONTACT_CONTENTS.email}
      </motion.a>

      <div className="flex space-x-6 mt-8">
        {CONTACT_CONTENTS.socialLinks.map((link, index) => {
          // Use a fallback approach to handle any missing or incorrect icons
          const Icon =
            link.icon === 'RiTwitterXFill'
              ? RiTwitterFill
              : link.icon === 'RiGithubFill'
              ? RiGithubFill
              : RiLinkedinFill;

          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            >
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>

      <motion.p className='text-sm text-stone-400 mt-36'
        initial='hidden'
        whileInView='visible'
        custom={1.6}
        variants={textVariants}>{CONTACT_CONTENTS.footerText}</motion.p>
    </section>
  );
};

export default Contacts;
