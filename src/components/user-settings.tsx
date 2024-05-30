import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { User } from "lucide-react";

export const UserSettings = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center group justify-center cursor-pointer hover:bg-gray-300 transition-all">
          <User className="w-4 h-4 font-bold group-hover:text-btn " />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/login">Login</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/register">Register</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
