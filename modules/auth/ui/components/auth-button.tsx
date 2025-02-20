import { Button } from "@/components/ui/button"
import { UserCircle2Icon } from "lucide-react"

export const AuthButton = () => {
  // TODE: Add different auth states
  return (
    <Button
      variant={"outline"}
      className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue500/20 rounded-full shadow-none"
    >
      <UserCircle2Icon />
      Sign in
    </Button>
  )
}
