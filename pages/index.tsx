import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <motion.div className="flex justify-center items-center mt-[30vh]" initial={{y:50, opacity:0}} animate={{y:-10, opacity:1}} transition={{ ease: "easeOut", duration: 1 }}>
        <h1 className="text-4xl">Saguaro Chess Club</h1>
      </motion.div>
      <motion.div className="flex justify-center items-center mt-[3vh]" initial={{y:50, opacity:0}} animate={{y:-10, opacity:1}} transition={{ ease: "easeOut", duration: 1.15 }}>
        <p>
          "<b>Empower</b> people, <b>enrich</b> lives, and <b>enhance</b> communities through chess."
        </p>
      </motion.div>
    </div>
  )
}

export default Home
