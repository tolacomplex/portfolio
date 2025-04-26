import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { GithubIcon, DownloadIcon, LinkendInIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Image } from "@heroui/image";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    // Profile detail about my self
    <main className="mt-[60px]">
      {/* One section detail about profile and personal */}
      <section>
        {/* Element include this page */}
        <div className="lg:flex lg:flex-row lg:justify-around md:flex md:flex-col md:justify-around sm:flex sm:flex-col sm:justify-around flex flex-col justify-around gap-4 ">
          {/* Element side page profile */}
          <div className="lg:flex lg:flex-col  md:flex md:flex-col sm:w-[700px] lg:w-[1000px]">
            {/* Element object */}
            <div className="capitalize">
              <motion.p
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="font-inter text-default-500 leading-5 text-[18px] lg:relative lg:left-[180px] md:relative md:left-[0] tracking-[1px] lg:text-start md:text-center sm:text-center text-center"
              >
                Software Developer
              </motion.p>

              <motion.h1
                initial={{ x: -350 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: "easeIn" }}
                className="font-title lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] font-bold tracking-[5px] lg:text-start md:text-center sm:text-center text-center"
              >
                Hello, I'm
              </motion.h1>
              <motion.h1
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: "easeIn" }}
                className="font-title lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] font-bold text-[#B7EE38] tracking-[5px] lg:relative lg:left-[160px] lg:text-start md:text-center sm:text-center text-center"
              >
                {" "}
                Ouen Tola
              </motion.h1>
            </div>
            <div className="font-inter text-default-600 tracking-[1.5px] leading-8 text-center lg:w-[600px] md:w-[800px] sm:w-[650px]">
              <p>
                I really excited that I have already to be yours. It's a first
                times I start joining in this career. so that, I can support
                their job.{" "}
              </p>
              {/* Element button item  */}
              <div className="lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center sm:flex sm:flex-row sm:justify-center sm:items-center flex flex-col justify-center items-center mt-[30px] gap-[30px] sm:gap-[100px] md:gap-[100px] lg:gap-[100px] ">
                <motion.div
                  initial={{ x: -330 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2, ease: "easeIn" }}
                >
                  <Button
                    as={Link}
                    href="https://www.canva.com/design/DAGJ6FamxNY/f94kzlQLPDLs-QIq0weRRw/edit"
                    target="blink"
                    className="bg-gradient-to-l from-[#9DBF12] to-[#1A6F45] relative text-white"
                    endContent={<DownloadIcon className="relative top-[4px]" />}
                    radius="full"
                  >
                    Check CV
                  </Button>
                </motion.div>
                {/* Element Icon Github and LinkedIn detail */}
                {/* Github icon and link to another page of github */}
                <motion.div
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2, ease: "easeIn" }}
                  className="flex flex-row gap-5"
                >
                  <div>
                    <Link
                      href="https://github.com/tolacomplex"
                      color="foreground"
                      target="blink"
                    >
                      {<GithubIcon className="w-[40px] h-[40px]" />}
                    </Link>
                  </div>
                  {/* LinkendIn icon and link to another page of LinkedIn profile user */}
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/ouen-tola-292041339/"
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
          <div className="lg:w-[800px] lg:h-[310px] md:w-[600px] md:h-[310px] sm:w-[600px] h-[320px] md:mt-4 sm:mt-5 mt-8 bg-gradient-to-l from-[#D4BD43] to-[#71E855] rounded-full lg:relative lg:right-[50px] md:relative md:right-[-100px] sm:relative sm:right-[-30px] max-w-full">
            <motion.div
              initial={{ x: -120 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: "easeIn" }}
            >
              <Image
                src="ouentola.jpg"
                alt="Cover profile"
                width={"300px"}
                height={"300px"}
                radius="full"
                className="object-cover lg:relative lg:left-[120px] lg:top-[5px] md:relative md:left-[160px] md:top-[4px] sm:relative sm:left-[160px] relative left-[20px] top-[8px] "
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
