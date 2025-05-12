import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

export default function ProjectPage() {
  return (
    <main>
      <section>
        <div>
          <h1 className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[30px] text-primary capitalize font-bold font-title text-center">
            Project Review Result
          </h1>
        </div>
      </section>
      <section>
        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center  gap-5">
          <div>
            <Card>
              <CardHeader>
                <h1>Frond End</h1>
              </CardHeader>
              <CardBody>
                <Image src="html-css-im.png" alt="Image" />
              </CardBody>
              <CardFooter>
                <p>Html + Css project build a user interface of website </p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h1>Frond End</h1>
              </CardHeader>
              <CardBody>
                <Image src="html-css-im.png" alt="Image" />
              </CardBody>
              <CardFooter>
                <p>Html + Css project build a user interface of website </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
