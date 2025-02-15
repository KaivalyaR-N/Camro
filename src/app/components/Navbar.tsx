import Link from "next/link"
import MaxWidthWrapper from "./MaxwidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowBigRight, ArrowRight } from "lucide-react"
const Navbar = () => {
    return(
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg translate-all ">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="z-14 font-semibold">
                    <span>Camro</span>

                    </Link>
                {/*todo:add mobile navbar*/}
                <div className="hidden items-center space-x-4 sm:flex">
                    <>
                        <Link href='/pricing'
                         className={buttonVariants({
                            variant: "ghost",
                            size: "sm",


                        })}>Pricing</Link>
                     <LoginLink className={buttonVariants({
                            variant: "ghost",
                            size: "sm",


                        })}>Sign in</LoginLink>

                    <RegisterLink className={buttonVariants({
                            size: "sm",


                        })}>Get Started <ArrowRight className="ml-5 h-5 w-5"/></RegisterLink>

                    </>
                </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )



}
export default Navbar