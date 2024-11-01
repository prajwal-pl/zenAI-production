import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <div className="">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Access your interviews or create one.
        </p>
      </div>
      <div className="py-4">
        <Button>Add Interview</Button>
      </div>
    </div>
  );
};

const AddInterview = () => {
  return <div className="p-4"></div>;
};

export default Page;
