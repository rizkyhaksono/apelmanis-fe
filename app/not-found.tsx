import { Button } from "@nextui-org/button";
import { title } from "@/components/primitives";
import NotFoundComponent from "@/components/404";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="items-center flex flex-col justify-center">
        <h1 className={title()}>404 - Page Not Found</h1>
        <NotFoundComponent />
        <Link href={"/"}>
          <Button className="mt-5" color="default">
            Back to Home
          </Button>
        </Link>
      </div>
    </>
  );
}
