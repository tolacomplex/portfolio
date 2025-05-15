import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { GithubIcon, VercelIcon } from "@/components/icons";
import * as React from "react";
import { Image } from "@heroui/image";
import * as motion from "framer-motion/client";
export default function ProjectPage() {
  const description: string =
    "Every project that I have build is using different Programming Languages depend on the project. Like project relative Interface I use programming languages for write a websit. and project relative console almost I use programming language like Python C C++ java programming build it.";
  return (
    <main>
      {/* Main introduction about project detaill  */}
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
      {/* Page card of image detail about project in the future  */}
      <section>
        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center  gap-5">
          {/* Card image one display */}
          <div>
            <Card>
              <CardBody className="p-[20px]">
                <motion.div
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Image
                    className="w-[1200px]"
                    src="html-css-im.png"
                    alt="Image"
                  />
                </motion.div>
              </CardBody>
              <CardFooter>
                <p className="text-center font-poppins text-[20px] ">
                  I have been using popular programming language to build a
                  <span className="pl-[5px] pr-[5px] underline font-poppins text-[20px] text-primary">
                    modern website
                  </span>
                  for user interface.
                </p>
              </CardFooter>
            </Card>
          </div>
           {/* Card image two display */}
          <div>
            <Card>
              <CardBody className="p-[20px]">
                <motion.div
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Image
                    className="w-[1130px]"
                    src="website-programmer.png"
                    alt="Image"
                  />
                </motion.div>
              </CardBody>
              <CardFooter>
                <p className="text-center font-poppins text-[20px]">
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
          <div className="flex flex-col justify-center items-center  gap-10 text-center font-poppins">
            <h1 className="text-center capitalize lg:text-[50px] md:text-[40px] sm:text-[40px] text-[30px] text-secondary font-bold font-poppins ">
              Schools Project & Researches Project
            </h1>
            <p className="lg:w-[900px] md:w-[800px] sm:w-[600px] leading-[30px] lg:text-[20px] md:text-[20px] sm:text-[20px]">
              {description}
            </p>
            {/* Element Button in this page school and researchec projec */}
            {/* Button one detail about github */}
            {/* Button two detail  about vercel deployment project*/}
            <div className="flex flex-row justify-center items-center">
              {/* github projec button */}
              <div>
                <Button
                  as={Link}
                  href={siteConfig.links.github}
                  target="blink"
                  title="github"
                  endContent={<GithubIcon />}
                  className="font-poppins "
                >
                  Go To
                </Button>
              </div>
              {/* Element text middle between button github and button vercel */}
              <div>
                <span className="text-[25px] text-primary">
                  {">"}||{"<"}
                </span>
              </div>
              {/* Vercel project button */}
              <div>
                <Button
                  as={Link}
                  href={siteConfig.links.vercel}
                  target="blink"
                  title="vercel"
                  endContent={<VercelIcon />}
                >
                  Go To
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
