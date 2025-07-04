"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  GithubIcon,
  DownloadIcon,
  LinkendInIcon,
  DiscordIcon,
  FacebookIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Image } from "@heroui/image";
import { Avatar } from "@heroui/avatar";
import { Card, CardBody } from "@heroui/card";
import * as motion from "framer-motion/client";
import { CircularProgress } from "@heroui/progress";
import * as React from "react";
export default function Home() {
  const title_1: string =
    "I’m a Software Development student eager to grow my skills and knowledge throughout my studies. I’m excited about the opportunity to learn, collaborate, and apply my abilities to solve real-world problems and contribute to the tech industry.";
  const [value, setValue] = React.useState(0);
  const data_list: number[] = [50, 70, 90, 100];
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    // Profile detail about my self
    <main className="mr-[30px] ml-[30px] mt-[100px]">
      {/* One section detail about profile and personal */}
      <section className="mb-[120px]">
        {/* Element include this page */}
        <div className="lg:flex lg:flex-row lg:justify-center md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center md:gap-[200px] sm:gap-[200px] gap-[200px]">
          {/* Element side page profile */}
          <div className="lg:flex lg:flex-col  md:flex md:flex-col sm:w-[700px] lg:w-[1000px]">
            {/* Element object */}
            <div className="capitalize">
              <motion.p
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="font-inter text-default-500 leading-5 text-[18px] lg:relative lg:left-[180px] md:relative md:left-[0] tracking-[1px] lg:text-start md:text-center sm:text-center text-center"
              >
                Software Developer
              </motion.p>
              <motion.h1
                initial={{ x: -350 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="font-title lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] font-bold tracking-[5px] lg:text-start md:text-center sm:text-center text-center text-slate-900 dark:text-white"
              >
                Hello I&apos;m
              </motion.h1>
              <motion.h1
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="font-title lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] font-bold text-[#B7EE38] tracking-[5px] lg:relative lg:left-[160px] lg:text-start md:text-center sm:text-center text-center"
              >
                Ouen Tola
              </motion.h1>
            </div>
            <div className="font-poppins text-default-600 tracking-[1.5px] leading-8 text-center lg:w-[600px] md:w-[800px] sm:w-[650px]">
              <motion.p
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "backOut" }}
              >
                {title_1}
              </motion.p>
              {/* Element button item  */}
              <div className="lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center sm:flex sm:flex-row sm:justify-center sm:items-center flex flex-col justify-center items-center mt-[30px] gap-[30px] sm:gap-[100px] md:gap-[100px] lg:gap-[100px] ">
                <motion.div
                  initial={{ x: -330 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, ease: "backOut" }}
                >
                  <Button
                    as={Link}
                    href={"/downloads"}
                    target="blink"
                    className="bg-gradient-to-l from-[#9DBF12] to-[#1A6F45] relative text-white"
                    startContent={
                      <DownloadIcon className="relative top-[4px]" />
                    }
                    radius="full"
                  >
                    Download CV
                  </Button>
                </motion.div>
                {/* Element Icon Github and LinkedIn detail */}
                {/* Github icon and link to another page of github */}
                <motion.div
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, ease: "backOut" }}
                  className="flex flex-row gap-5"
                >
                  <div>
                    <Link
                      href={siteConfig.links.github}
                      color="foreground"
                      target="blink"
                    >
                      {<GithubIcon className="w-[40px] h-[40px]" />}
                    </Link>
                  </div>
                  {/* LinkendIn icon and link to another page of LinkedIn profile user */}
                  <div>
                    <Link
                      href={siteConfig.links.linkendin}
                      color="foreground"
                      target="blink"
                    >
                      {<LinkendInIcon className="w-[40px] h-[40px]" />}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Element image  */}
          <div className="lg:w-[800px] md:w-[500px] sm:w-[400px] w-[400px] lg:h-[360px] md:h-[460px]  border-1 border-black rounded-full lg:relative lg:top-[100px] lg:left-[-100px] bg-black md:relative md:left-[70px] ">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, ease: "backOut" }}
            >
              <Image
                src="ouentola-bg.png"
                alt="Cover profile"
                width={"300px"}
                height={"400px"}
                radius="full"
                className="object-cover lg:relative lg:top-[-150px] lg:left-[30px] md:relative md:top-[-150px] md:right-[-90px] sm:relative sm:top-[-150px] sm:right-[-50px] retative top-[-150px] right-[-50px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Page detail personal background  */}
      <section className="mt-[100px] mb-[50px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <small className="text-default-400 font-bold text-[15px] font-poppins capitalize">
              power of development
            </small>
            <h1 className="text-secondary font-inter font-bold lg:text-[40px] md:text-[35px] ms:text-[30px] text-[20px] underline capitalize">
              Resource development project guides
            </h1>
          </div>
        </div>
      </section>
      {/* page progress data counting */}
      <section className="mb-[50px]">
        <div className="flex flex-row justify-center items-center gap-[10px]">
          {data_list.map((data) => (
            <div key={data} className="w-[200px]">
              <CircularProgress
                color="warning"
                showValueLabel={true}
                value={value}
                aria-label="Loading..."
              />
            </div>
          ))}
        </div>
      </section>
      {/* Card itemsdkispl */}
      <section>
        <div className="lg:grid lg:grid-cols-3 lg:gap-[20px] lg:items-center md:grid md:grid-cols1  md:gap-[20px] sm:grid sm:grid-cols-1 sm:gap-[20px] grid grid-cols-1 gap-[10px]">
          {/* Firs card items */}
          <div className="border rounded-xl">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-[10px]">
                  <Image
                    className="w-[40p] h-[40px] object-cover"
                    alt="freecodecamp"
                    src="dev-freecode.png"
                  />
                  <Link
                    href={siteConfig.links.freecodecamp}
                    target="blank"
                    className="text-default-900"
                  >
                    <h1 className="font-bold font-poppins capitalize text-[20px]">
                      FreeCodeCamp
                    </h1>
                  </Link>
                  <h1 className="text-default-400 font-poppins capitalize text-[15px]">
                    Learn any course from there
                  </h1>
                </div>
              </CardBody>
            </Card>
          </div>
          {/* second card items */}
          <div className="border rounded-xl">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-[10px]">
                  <Image
                    className="w-[40p] h-[40px] object-cover"
                    alt="ai"
                    src="dev-icon.png"
                  />
                  <Link className="text-defalt-900" target="blank" href="#">
                    <h1 className="font-bold font-poppins capitalize text-[20px]">
                      Ai
                    </h1>
                  </Link>
                  <h1 className="text-default-400 font-poppins capitalize text-[15px]">
                    Artificial intelligent
                  </h1>
                </div>
              </CardBody>
            </Card>
          </div>
          {/* third card items */}
          <div className="border rounded-xl">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-[10px]">
                  <Image
                    className="w-[40p] h-[40px] object-cover"
                    alt="Programmer"
                    src="dev-programmer.png"
                  />
                  <Link
                    href={siteConfig.links.github}
                    target="blank"
                    className="text-default-900"
                  >
                    <h1 className="font-bold font-poppins capitalize text-[20px]">
                      Code
                    </h1>
                  </Link>
                  <h1 className="text-default-400 font-poppins capitalize text-[15px]">
                    Learn source of programming languages
                  </h1>
                </div>
              </CardBody>
            </Card>
          </div>
          {/* four card items */}
          <div className="border rounded-xl">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-[10px]">
                  <Image
                    className="w-[40p] h-[40px] object-cover"
                    alt="website"
                    src="dev-website.png"
                  />
                  <Link className="text-default-900" target="blank" href="#">
                    <h1 className="font-bold font-poppins capitalize text-[20px]">
                      Website
                    </h1>
                  </Link>
                  <h1 className="text-default-400 font-poppins capitalize text-[15px]">
                    Learn from some popular website
                  </h1>
                </div>
              </CardBody>
            </Card>
          </div>
          {/* five card items */}
          <div className="border rounded-xl">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-[10px]">
                  <Image
                    className="w-[40p] h-[40px] object-cover"
                    alt="roadmap"
                    src="dev-roadmap.png"
                  />
                  <Link
                    href={siteConfig.links.notion}
                    target="blank"
                    className="text-default-900"
                  >
                    <h1 className="font-bold font-poppins capitalize text-[20px]">
                      roadmap
                    </h1>
                  </Link>
                  <h1 className="text-default-400 font-poppins capitalize text-[15px]">
                    plan to learn code
                  </h1>
                </div>
              </CardBody>
            </Card>
          </div>
          {/* six card items */}
          <div className="border rounded-xl">
            <Card>
              <CardBody>
                <div className="flex flex-col gap-[10px]">
                  <Image
                    className="w-[40p] h-[40px] object-cover"
                    alt="tools"
                    src="dev-tool.png"
                  />
                  <Link
                    href={siteConfig.links.heroui}
                    target="blank"
                    className="text-default-900"
                  >
                    <h1 className="font-bold font-poppins capitalize text-[20px]">
                      tools
                    </h1>
                  </Link>
                  <h1 className="text-default-400 font-poppins capitalize text-[15px]">
                    support my idea
                  </h1>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      <section className="my-[100px]">
        <footer>
          {/* profile display */}
          <div className="lg:flex lg:flex-row lg:justify-center md:flex md:flex-row md:justify-center sm:flex sm:flex-col sm:justify-center flex flex-col justify-center lg:gap-[300px] md:gap-[200px] sm:gap-[100px] gap-[100px]">
            <div className="lg:flex lg:flex-col md:flex md:flex-col sm:flex sm:flex-col flex flex-col items-center gap-[40px]">
              <div className="flex flex-row items-center gap-5">
                <div>
                  <Avatar src="icon-image.ico" />
                </div>
                <div>
                  <h1 className="font-poppons font-bold">Tola Ouen</h1>
                  <small className="text-default-300 font-poppins">
                    Software Development
                  </small>
                </div>
              </div>
              <div className="flex flex-row items-center gap-7">
                <div>
                  <Link
                    className="text-default-900"
                    href={siteConfig.links.facebook}
                    target="blank"
                    title="facebook"
                  >
                    {<FacebookIcon />}
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-default-900"
                    href={siteConfig.links.discord}
                    target="blank"
                    title="discord"
                  >
                    {<DiscordIcon />}
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-default-900"
                    href={siteConfig.links.linkendin}
                    target="blank"
                    title="LinkedIn"
                  >
                    {<LinkendInIcon />}
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-default-900"
                    href={siteConfig.links.github}
                    target="blank"
                    title="github"
                  >
                    {<GithubIcon />}
                  </Link>
                </div>
              </div>
            </div>
            {/* break page */}
            <div className="flex flex-row gap-[70px] justify-center">
              {/* footer skills and detail header */}
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[20px] font-poppins font-bold text-[#704ea0]">
                  Skills
                </h1>
                <ul className="font-poppins text-[15px] text-default-400 flex flex-col gap-[5px]">
                  <li className="hover:text-default-600 hover:underline">
                    C/C++
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Python
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Java
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Javascript
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Web Development
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Front-end
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Back-end
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Database System
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Networking
                  </li>
                  <li>Deployment</li>
                </ul>
              </div>
              {/* footer tools and projec header */}
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[20px] font-bold font-poppins text-[#704ea0]">
                  Tools
                </h1>
                <ul className="text-[15px] text-default-400 font-poppins flex flex-col gap-[5px]">
                  <li className="hover:text-default-600 hover:underline">
                    Git&Github
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    VS Code
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Heroui
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Flowbite
                  </li>
                  <li className="hover:text-default-600 hover:underline">
                    Next Deploy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
