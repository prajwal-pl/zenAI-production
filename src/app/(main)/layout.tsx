import { ModeToggle } from "@/components/mode-toggle";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Input } from "@/components/ui/input";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full  backdrop-blur ">
      <div className="flex bg-primary-foreground h-16 items-center justify-between px-3 md:px-6">
        {/* Left section */}
        <div className="flex items-center gap-2 md:gap-4">
          <SidebarTrigger className="" />
          <Searchbar />
        </div>

        {/* Right section */}
        <div className="flex gap-3 items-center">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

const Searchbar = () => {
  return (
    <div className="relative w-48 md:w-64">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-primary-foreground h-10 text-xs pl-10 pr-4 rounded-lg border border-gray-500 focus:outline-none focus:border-blue-500"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  );
};

export default RootLayout;
