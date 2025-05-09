import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";

export default function SkillPage() {
  const text_program: string = `Programming Languages is a ways goes to the full development in real life.`;
  return (
    <main>
      <section>
        <div>
          {/* Skills programming language get implement */}
          <div>
            <h1>Programming Languages</h1>
            <p>{text_program}</p>
            <p>
              List Down are shown about programming language, I used to learn a
              long.
            </p>
          </div>
        </div>
      </section>
      <section className="my-[60px]">
        <div className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[30px] font-title text-center text-[#ff768b]">
          <h1>Programming Languages</h1>
        </div>
      </section>
      {/* View course  */}
      <section>
        <div className="lg:grid lg:grid-cols-4 gap-[20px] lg:justify-enter md:grid md:grid-cols-3 md:justify-center sm:grid sm:grid-cols-3 sm:justify-center grid grid-cols-2 justify-center ">
          {/* View course C  programming */}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="c.png"
                alt="C Program"
                title="C Program"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                C Programming
              </Button>
            </div>
          </div>
          {/* View course C++  programming */}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="cpp.png"
                alt="Cpp"
                title="C++"
                className="w-[90px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                C++ Programming
              </Button>
            </div>
          </div>
          {/* View course Python  programming */}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="python.png"
                alt="python"
                title="Python Program"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                Python
              </Button>
            </div>
          </div>
          {/* View course Java  programming */}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="java.jpeg"
                alt="java"
                title="Java Program"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                Java
              </Button>
            </div>
          </div>
          {/* View course javascript programming */}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                radius="full"
                src="javascript.jpeg"
                alt="javascript"
                title="Javascript Program"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                JavaScript
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Web Programming description */}
      <section className="my-[60px]">
        <div className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[30px] font-title text-center text-[#ff768b]">
          <h1>Web Development</h1>
        </div>
      </section>
      {/* view course for Web programming */}
      <section>
        <div className="lg:grid lg:grid-cols-4 gap-[20px] lg:justify-enter md:grid md:grid-cols-3 md:justify-center sm:grid sm:grid-cols-3 sm:justify-center grid grid-cols-2 justify-center ">
          {/* Web programming Html css javascript */}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="html-css-js.png"
                alt="web program"
                title="HTML CSS Javascript"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                Html+Css+Js
              </Button>
            </div>
          </div>
          {/* Web programming javascript + React framework */}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="react.png"
                alt="react"
                title="React Js"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                React
              </Button>
            </div>
          </div>
          {/* Web programming javascript + vite framwork*/}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="vite.png"
                alt="vite"
                title="Vite"
                className="w-[100px] p-[15px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                Vite
              </Button>
            </div>
          </div>
          {/* Web programming javascript + Next js framework*/}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="nextjs.png"
                alt="next"
                title="Next Js"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                Next Js
              </Button>
            </div>
          </div>
          {/* Web programming React + Typescript framework*/}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                radius="lg"
                src="typscript.jpeg"
                alt="typescript"
                title="Typescript"
                className="w-[100px] p-[15px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                Typescript
              </Button>
            </div>
          </div>
          {/* Web programming tailwind css framework*/}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="tailwind.png"
                alt="tailwind"
                title="TailwindCss"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                Tailwind
              </Button>
            </div>
          </div>
          {/* Web programming Javascript + node framework*/}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="node.png"
                alt="node"
                title="Node Js"
                className="w-[100px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                Node Js
              </Button>
            </div>
          </div>
          {/* Web programming tailwind css framework*/}
          <div className="border-1 border-[#ea60ab] p-[20px] rounded-lg flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="github.jpeg"
                alt="github"
                title="Github"
                className="w-[100px] p-[15px] flex flex-col items-center gap-[20px]"
              />
            </div>
            <div>
              <Button className="text-poppins text-[#31fced] bg-gradient-to-br from-[#8F51A2] to-[#BEE03F] rounded-md">
                Github
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
