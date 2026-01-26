import { Link } from "next/link";


//Clerk componetns for UI
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";


export default function Header(){
    return (
        <><SignedOut>
            <SignInButton/>
            <SignUpButton/>

        </SignedOut>
        
        <SignedIn>
            <UserButton/>
        </SignedIn>
        </>
    )
};