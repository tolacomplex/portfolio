import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title} from "@/components/primitives";

export default function Home() {
  return (
    <main>
      <h1 className={title()}>Home page</h1>
    </main>
  );
}
