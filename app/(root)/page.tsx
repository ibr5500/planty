// import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="flex flex-col w-fit justify-center mx-auto my-16">
      <h3>Hello Admin Dashboard ..!</h3>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default SetupPage
