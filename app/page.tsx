import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { GithubIcon, DownloadIcon, LinkendInIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    // Profile detail about my self
    <main className="mr-[30px] ml-[30px] mt-[100px] mb-[200px]">
      {/* One section detail about profile and personal */}
      <section>
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
                className="font-title lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] font-bold tracking-[5px] lg:text-start md:text-center sm:text-center text-center"
              >
                Hello, I'm
              </motion.h1>
              <motion.h1
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="font-title lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] font-bold text-[#B7EE38] tracking-[5px] lg:relative lg:left-[160px] lg:text-start md:text-center sm:text-center text-center"
              >
                {" "}
                Ouen Tola
              </motion.h1>
            </div>
            <div className="font-poppins text-default-600 tracking-[1.5px] leading-8 text-center lg:w-[600px] md:w-[800px] sm:w-[650px]">
              <motion.p
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "backOut" }}
              >
                I really excited that I have already to be yours. It's a first
                times I start joining in this career. so that, I can hope support
                the job.{" "}
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
                    href={siteConfig.links.canva}
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
      <section></section>
    </main>
  );
}
