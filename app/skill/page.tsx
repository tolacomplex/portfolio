import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import * as motion from "framer-motion/client";
export default function SkillPage() {
  const text_program: string = `I have been learning the popular programming language and programming for web development that suppport the business and managements system. `;
  return (
    <main className="my-[40px]">
      <section className="my-[50]">
        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center gap-[100px]">
          {/* Skills programming language get implement */}
          <div className="flex flex-col justify-center items-center gap-[30px]">
            <div className="flex flex-col gap-[30px]">
              <motion.h1
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 2, ease: "backOut" }}
                className="lg:text-[50px] md:text-[50px] sm:text-[50px] text-[40px] font-title font-bold text-center text-[#9EDF13]"
              >
                Development Skills
              </motion.h1>
              <motion.p
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 2, ease: "backOut" }}
                className="font-poppins text-center leading-[30px] "
              >
                {text_program}
              </motion.p>
            </div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
            >
              <Button
                showAnchorIcon
                variant="shadow"
                as={Link}
                href="/project"
                className="bg-gradient-to-tl from-[#B0CA3E] to-[#4F6DDF]"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
          <div className="lg:w-[1000px] w-[400px]">
            <Image src="programming-im.png" />
          </div>
        </div>
      </section>
      <section className="my-[100px]">
        <div className="flex flex-row justify-center items-center lg:gap-8 md:gap-8 sm:gap-8 gap-2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[50px] border-1 h-[50px] rounded-md"
          >
            <source
              src="animation-code.mp4"
              type="video/mp4"
              title="Web Program"
            />
          </video>
          {/* Programming language text display  */}
          {/* Show all programming language that relate the courses */}
          <h1 className="g:text-[50px] md:text-[50px] sm:text-[40px] text-[25px] font-title text-center text-[#D648D6]">
            Programming Languages
          </h1>
        </div>
      </section>
      {/* View course  */}
      <section>
        <div className="lg:grid lg:grid-cols-4 gap-[20px] lg:justify-enter md:grid md:grid-cols-3 md:justify-center sm:grid sm:grid-cols-3 sm:justify-center grid grid-cols-2 justify-center">
          {/* View course C  programming */}
          <div className="border-1 border-[#E826B4] rounded-lg flex flex-col justify-center items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="c.png"
                alt="C Program"
                title="C Program"
                className="w-[90px] "
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                C Programming
              </Button>
            </div>
          </div>
          {/* View course C++  programming */}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px]  hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="cpp.png"
                alt="Cpp"
                title="C++"
                className="w-[90px] p-[5px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                C++ Programming
              </Button>
            </div>
          </div>
          {/* View course Python  programming */}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px]  hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="python.png"
                alt="python"
                title="Python Program"
                className="w-[100px] p-[10px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                Python
              </Button>
            </div>
          </div>
          {/* View course Java  programming */}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="java.jpeg"
                alt="java"
                title="Java Program"
                className="w-[100px] p-[10px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                Java
              </Button>
            </div>
          </div>
          {/* View course javascript programming */}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="javascript.jpeg"
                alt="javascript"
                title="Javascript Program"
                className="w-[100px] p-[15px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                JavaScript
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Web Programming description */}
      {/* show programming languages that using create a website  */}
      <section className="my-[100px]">
        <div className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[25px] font-title text-center text-[#D648D6] flex flex-row justify-center items-center gap-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[50px] border-1 h-[50px] rounded-md"
          >
            <source
              src="animate-icon.mp4"
              type="video/mp4"
              title="Web Program"
            />
          </video>
          <h1>Web Development</h1>
        </div>
      </section>
      {/* view course for Web programming */}
      <section className="my-[50px]">
        <div className="lg:grid lg:grid-cols-4 gap-[20px] lg:justify-enter md:grid md:grid-cols-3 md:justify-center sm:grid sm:grid-cols-3 sm:justify-center grid grid-cols-2 justify-center ">
          {/* Web programming Html css javascript */}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="html-css-js.png"
                alt="web program"
                title="HTML CSS Javascript"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                Html+Css+Js
              </Button>
            </div>
          </div>
          {/* Web programming javascript + React framework */}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="react.png"
                alt="react"
                title="React Js"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                React
              </Button>
            </div>
          </div>
          {/* Web programming javascript + vite framwork*/}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="vite.png"
                alt="vite"
                title="Vite"
                className="w-[100px] p-[15px] flex flex-col items-center gap-[20px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                Vite
              </Button>
            </div>
          </div>
          {/* Web programming javascript + Next js framework*/}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="nextjs.png"
                alt="next"
                title="Next Js"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                Next Js
              </Button>
            </div>
          </div>
          {/* Web programming React + Typescript framework*/}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                radius="lg"
                src="typscript.jpeg"
                alt="typescript"
                title="Typescript"
                className="w-[100px] p-[15px] flex flex-col items-center gap-[20px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                Typescript
              </Button>
            </div>
          </div>
          {/* Web programming tailwind css framework*/}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="tailwind.png"
                alt="tailwind"
                title="TailwindCss"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                Tailwind
              </Button>
            </div>
          </div>
          {/* Web programming Javascript + node framework*/}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="node.png"
                alt="node"
                title="Node Js"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                Node Js
              </Button>
            </div>
          </div>
          {/* Web programming tailwind css framework*/}
          <div className="border-1 border-[#E826B4] p-[20px] rounded-lg flex flex-col items-center gap-[20px] hover:bg-gradient-to-tr from-[#48F5BE] to-[#1281EB]">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image
                src="github.jpeg"
                alt="github"
                title="Github"
                className="w-[100px] p-[15px] flex flex-col items-center gap-[20px]"
              />
            </motion.div>
            <div>
              <Button className="text-poppins text-white bg-gradient-to-br from-[#12EBC3] to-[#DC16E8] rounded-md">
                Github
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
