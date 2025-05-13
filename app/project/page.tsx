
import { Card, CardBody, CardFooter } from "@heroui/card";
import * as React from "react";
import { Image } from "@heroui/image";
import * as motion from "framer-motion/client";
export default function ProjectPage() {
  return (
    <main>
      <section className="my-[100px]">
        <div className="py-[10px] flex flex-row justify-center items-center lg:gap-10 md:gap-10 sm:gap-9 gap-5">
          <motion.video
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            autoPlay
            loop
            muted
            className="lg:w-[80px] md:w-[80px] sm:w-[60px] w-[50px] rounded-full"
          >
            <source src="physics-animate.mp4" type="video/mp4" />
          </motion.video>
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[30px] text-primary capitalize font-bold font-title text-center"
          >
            Project Result
          </motion.h1>
          <motion.video
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            autoPlay
            loop
            muted
            className="lg:w-[80px] md:w-[80px] sm:w-[60px] w-[50px] rounded-full"
          >
            <source src="project-animate.mp4" type="video/mp4" />
          </motion.video>
        </div>
      </section>
      <section>
        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center  gap-5">
          <div>
            <Card>
              <CardBody>
                <Image
                  className="w-[1200px]"
                  src="html-css-im.png"
                  alt="Image"
                />
              </CardBody>
              <CardFooter>
                <p className="text-center font-poppins text-[20px] text-[#68e3ac]">
                  I have been using popular programming language to build a
                  <span className="pl-[5px] pr-[5px] underline font-poppins text-[20px] text-primary">
                    modern website
                  </span>
                  for user interface.
                </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody>
                <Image
                  className="w-[1130px]"
                  src="website-programmer.png"
                  alt="Image"
                />
              </CardBody>
              <CardFooter>
                <p className="text-center font-poppins text-[20px] text-[#68e3ac]">
                  Every One in the currently started using a digital system, so
                  demand of creating website is increased.{" "}
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="my-[100px]">
        <div>
          <div>
            <h1 className="text-center capitalize lg:text-[50px] md:text-[40px] sm:text-[40px] text-[30px] text-secondary font-bold font-poppins ">
              Schools Project & Researches Project
            </h1>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
