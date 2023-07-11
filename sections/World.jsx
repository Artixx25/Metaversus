'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
    <TypingText title="| People on the World" textStyle="text-center" />
    <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyle="text-center"/>

      <motion.div variants={fadeIn("up", 'tween', 0.3, 1)} className="relative mt-[68px] flex w-full h-[550px]">
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-28 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full drop-shadow-3xlOrange" />
        </div>
        <div className="absolute top-14 left-28 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full drop-shadow-3xlPurple" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full drop-shadow-3xlBlue" />
        </div>

        <div className="absolute bottom-[35px] left-[5%]">
          <img
            src="/card-1.png"
            alt="people"
            className="w-[300px] h-[250px] block"
          />
        </div>
        <div className="absolute -top-[50px] right-[19%]">
          <img
            src="/card-2.png"
            alt="people"
            className="w-[350px] h-[300px]"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
