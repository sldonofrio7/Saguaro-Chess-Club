import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <motion.div className="snap-y snap-proximity flex justify-center items-center mt-[15vh]" initial={{y:50, opacity:0}} animate={{y:-10, opacity:1}} transition={{ ease: "easeOut", duration: .75 }}>
        <h1 className="snap-center  text-center text-3xl lg:text-6xl md:text-5xl sm:text-4xl">Saguaro Chess Club</h1>
      </motion.div>
      <motion.div className="snap-y flex justify-center items-center m-[3vh]" initial={{y:50, opacity:0}} animate={{y:-10, opacity:1}} transition={{ ease: "easeOut", duration: .70 }}>
        <p className="text-center text-xs lg:text-lg md:text-base sm:text-sm">
          "<b>Empower</b> people, <b>enrich</b> lives, and <b>enhance</b> communities through chess."
        </p>
      </motion.div>
      <motion.div className="flex justify-center items-center m-[3vh]" initial={{y:50, opacity:0}} animate={{y:-10, opacity:1}} transition={{ ease: "easeOut", duration: .65 }}>
        <Image src="/board.gif" alt="board" height="300" width="300"></Image>
      </motion.div>
      <div className="snap-proximity snap-y flex justify-center items-center my-[50vh] mx-[8vh]">
        <p className="snap-center text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

export default Home
