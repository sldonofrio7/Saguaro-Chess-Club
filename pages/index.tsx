import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <motion.div className="flex justify-center items-center mt-[15vh]" initial={{y:50, opacity:0}} animate={{y:-10, opacity:1}} transition={{ ease: "easeOut", duration: .75 }}>
        <h1 className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl">Saguaro Chess Club</h1>
      </motion.div>
      <motion.div className="flex justify-center items-center m-[3vh]" initial={{y:50, opacity:0}} animate={{y:-10, opacity:1}} transition={{ ease: "easeOut", duration: .70 }}>
        <p className="text-xs lg:text-lg md:text-base sm:text-xs">
          "<b>Empower</b> people, <b>enrich</b> lives, and <b>enhance</b> communities through chess."
        </p>
      </motion.div>
      <motion.div className="flex justify-center items-center m-[3vh]" initial={{y:50, opacity:0}} animate={{y:-10, opacity:1}} transition={{ ease: "easeOut", duration: .65 }}>
        <Image src="/board.gif" alt="board" height="300" width="300"></Image>
      </motion.div>
    </div>
  )
}

export default Home
