"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  VercelIcon,
  ArrowIcon,
  FacebookIcon,
  LinkendInIcon,
  TelegramIcon,
} from "@/components/icons";
import * as React from "react";
import * as motion from "framer-motion/client";
import { Image } from "@heroui/image";
import { useDisclosure } from "@heroui/react";
export default function ProjectPage() {
  const description: string =
    "Every project that I have build is using different Programming Languages depend on the project. Like project relative Interface I use programming languages for write a websit. and project relative console almost I use programming language like Python C C++ java programming build it.";
  const front_end_script: string = ` I have been an experience build a project front-end website. Every project components is using framework NextJs, ReactJs, TailwindCss, and Javascript API build modern wesite that complex component.`;
  const back_end_script: string =
    "It's a complexly then every programming in front-end. back-end is back a user interface it's being a process and store all data of user and protectes any attack from user unlikely. Back-end help any things and be placed that user unknow.";
  const database_management: string =
    "Database is a placed that store every data of user. it's have a task protected and store the main data of user secure data break from hacker. It's nessary companied and center easily find and delete unless every data that not true from system.";
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
      {/* Card detail about reference */}
      <section>
        <div className="lg:grid lg:grid-cols-3 lg:justify-center lg:items-center md:grid md:grid-cols-2 md:justify-center md:items-center sm:grid sm:grid-cols-2 sm:justify-center sm:items-center grid grid-cols-1 justify-center items-center gap-[20px]">
          {/* Card descript about masterpiece  first in page project */}
          <div className="border border-default-500 rounded-xl">
            <Card>
              <CardHeader>
                {/* avatar user input  */}
                <div className="flex flex-row justify-center items-center gap-[10px]">
                  <div>
                    <Avatar />
                  </div>
                  <div>
                    <p className="capitalize font-poppins font-medium text-default-400 text-[15px] hover:text-default-600">
                      Front-end dev
                    </p>
                    <div className="flex flex-row gap-[5px]">
                      <Image width={"20px"} src="icons8-star.png" />
                      <Image width={"20px"} src="icons8-star.png" />
                      <Image width={"20px"} src="icons8-star.png" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="font-poppins text-default-500 text-[16px] leading-7">
                  {front_end_script}
                </div>
              </CardBody>
              <CardFooter>
                <div>
                  <Button
                    className="text-[15px] text-center font-poppins bg-default-100 hover:bg-default-500 lg:w-[370] lg:h-[20px] rounded-lg"
                    endContent={<ArrowIcon />}
                  >
                    Let's check
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          {/* Back-end back at user interface */}
          <div className="border border-default-500 rounded-xl">
            <Card>
              <CardHeader>
                {/* avatar user input  */}
                <div className="flex flex-row justify-center items-center gap-[10px]">
                  <div>
                    <Avatar />
                  </div>
                  <div>
                    <p className="capitalize font-poppins font-medium text-default-400 text-[15px] hover:text-default-600">
                      back-end dev
                    </p>
                    <div className="flex flex-row gap-[5px]">
                      <Image width={"20px"} src="icons8-star.png" />
                      <Image width={"20px"} src="icons8-star.png" />
                      <Image width={"20px"} src="icons8-star.png" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="font-poppins text-default-500 text-[16px] leading-7">
                  {back_end_script}
                </div>
              </CardBody>
              <CardFooter>
                <div>
                  <Button
                    className="text-[15px] text-center font-poppins bg-default-100 hover:bg-default-500 lg:w-[370] lg:h-[20px] rounded-lg"
                    endContent={<ArrowIcon />}
                  >
                    Let's check
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          {/* database management system secure data of user */}
          <div className="border border-default-500 rounded-xl">
            <Card>
              <CardHeader>
                {/* avatar user input  */}
                <div className="flex flex-row justify-center items-center gap-[10px]">
                  <div>
                    <Avatar />
                  </div>
                  <div>
                    <p className="capitalize font-poppins font-medium text-default-400 text-[15px] hover:text-default-600">
                      Database system
                    </p>
                    <div className="flex flex-row gap-[5px]">
                      <Image width={"20px"} src="icons8-star.png" />
                      <Image width={"20px"} src="icons8-star.png" />
                      <Image width={"20px"} src="icons8-star.png" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="font-poppins text-default-500 text-[16px] leading-7">
                  {database_management}
                </div>
              </CardBody>
              <CardFooter>
                <div>
                  <Button
                    className="text-[15px] text-center font-poppins bg-default-100 hover:bg-default-500 lg:w-[370] lg:h-[20px] rounded-lg"
                    endContent={<ArrowIcon />}
                  >
                    Let's check
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      {/* footer section */}
      <section>
        <footer>
          {/* profile display */}
          <div>
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-row items-center gap-5">
                <Avatar src="icon-image.ico" /> <h1>Tola Ouen</h1>
              </div>
              <div className="flex flex-row items-center gap-7">
                <div>{<FacebookIcon />}</div>
                <div>{<TelegramIcon />}</div>
                <div>{<LinkendInIcon />}</div>
                <div>{<GithubIcon />}</div>
              </div>
              {/* break page */}
              <div>
                
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
