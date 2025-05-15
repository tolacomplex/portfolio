import { Image } from "@heroui/image";
import * as motion from "framer-motion/client";
import { Link } from "@heroui/link";
export default function AboutPage() {
  const text_1: string = `Developer Handsome`;
  const text_2: string = `I'm every exciting to start my journey with desire the career. Everything it become a truely things build the massives projects at my school during studying at the college. So that, I have some experience cover your company grow spread.`;
  return (
    <main className="mb-[30px]">
      <section>
        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center gap-[100px]">
          {/* Element cover text detail personal information */}
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <div>
              <motion.h1
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 2, ease: "backOut" }}
                className="text-purple-500 text-center capitalize font-poppins font-bold lg:text-[40px] md:text-[40px] sm:text-[30px] text-[20px]"
              >
                I'm modern web Development
              </motion.h1>
              <motion.p
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: "backOut" }}
                className="text-[20px] text-center text-default-400 font-bold font-poppins"
              >
                {text_1}
              </motion.p>
              <motion.p
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 2, ease: "backOut" }}
                className="font-poppins text-center leading-[30px]"
              >
                {text_2}
              </motion.p>
            </div>
            {/* View IDE and browser that support programming running on web sever */}
            {/* chrome  */}
            {/* Safari */}
            {/* Visual Studio Code  */}
            {/* Jetbrain */}
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="border-1 flex flex-row w-[250px] h-[40px] rounded-full justify-center items-center "
            >
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: "backOut" }}
              >
                {/* Link to page visual studio code IDE */}
                <Link
                  color="foreground"
                  target="blink"
                  href="https://code.visualstudio.com/"
                >
                  <Image
                    src="vscode.png"
                    alt="vscode"
                    title="vscode"
                    className="w-[50px] p-[5px] relative top-[4px]"
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: "backOut" }}
              >
                {/* Link to page jetbrain developer too IDE */}
                <Link
                  color="foreground"
                  target="blink"
                  href="https://www.jetbrains.com/ides/"
                >
                  <Image
                    src="jetbrain.jpeg"
                    alt="jetbrain"
                    title="Jetbrain"
                    className="w-[50px] p-[13px] relative top-[4px]"
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: "backOut" }}
              >
                {/* Link to page chrome browser debugs */}
                <Link
                  color="foreground"
                  target="blink"
                  href="https://www.google.com/chrome/"
                >
                  <Image
                    src="chrome.png"
                    alt="chrome"
                    title="Chrome"
                    className="w-[50px] p-[10px] relative top-[4px]"
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 2, ease: "backOut" }}
              >
                {/* Link to page Apple safari browser debugs */}
                <Link
                  color="foreground"
                  target="blink"
                  href="https://www.apple.com/safari/"
                >
                  <Image
                    src="safari.png"
                    alt="safari"
                    title="Safari"
                    className="w-[50px] relative top-[4px]"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
          {/* Element image cover detail imformation */}
          <div className="lg:w-[1000px] border-1 dark:border-white rounded-lg lg:p-[80px] md:p[80px] ms:p-[80px] p-[40px]">
            {/* circle image detail about language and frame work programming  */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "circOut", repeat: Infinity }}
              className="w-[300px] h-[300px] grid grid-cols-4 gap-[40px] border-1 border-lime-400 rounded-full"
            >
              {/* Python programming language image */}
              <Image
                className="w-[50px] relative  top-[20px]"
                src="python.png"
                alt="Python"
                title="Python"
              />
              {/* C++ programming frame work image */}
              <Image
                className="w-[50px] relative bottom-[35px] "
                src="cpp.png"
                alt="Cpp"
                title="C++"
              />
              {/* Java programming language image */}
              <Image
                className="w-[50px]  relative bottom-[30px]"
                src="java.jpeg"
                alt="Java"
                title="Java"
              />
              {/* HTML Css Javascript image */}
              <Image
                className="w-[50px] relative top-[20px]"
                src="html-css-js.png"
                alt="Web"
                title="Web"
              />
              {/* React Js frame work image */}
              <Image
                className="w-[50px] relative right-[30px] "
                src="react.png"
                alt="React"
                title="React"
              />
              {/* Typescript frame work image */}
              <Image
                className="w-[50px] relative top-[170px] "
                src="typscript.jpeg"
                alt="Typescript"
                title="Typescript"
              />
              {/* Vite frame work image */}
              <Image
                className="w-[50px] relative top-[170px] "
                src="vite.png"
                alt="Vite"
                title="Vite"
              />
              {/* Next Js frame work image */}
              <Image
                className="w-[50px] relative left-[30px] "
                src="nextjs.png"
                alt="Next Js"
                title="Next Js"
              />
              {/* Tailwind css frame work image */}
              <Image
                className="w-[50px]"
                src="tailwind.png"
                alt="Tailwind"
                title="Tailwind Css"
              />
              {/* Github version controll image */}
              <Image
                className="w-[50px] relative left-[170px] "
                src="github.jpeg"
                alt="Github"
                title="Github"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
