"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEventHandler, useState } from "react";

const Page = () => {
  const [inputs, setInputs] = useState({
    jobRole: "",
    jobDescription: "",
    experience: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div className="p-4">
      <div className="">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Access your interviews or create one.
        </p>
      </div>
      <div className="py-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"} variant={"outline"}>
              <Plus className="w-4 h-4" />
              Add Interview
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Mock Interview</DialogTitle>
              <DialogDescription>
                Start by adding a new mock interview.
              </DialogDescription>
            </DialogHeader>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                action=""
              >
                <div>
                  <label className="text-sm font-bold">Job Role</label>
                  <input
                    value={inputs.jobRole}
                    onChange={(e) =>
                      setInputs({ ...inputs, jobRole: e.target.value })
                    }
                    type="text"
                    placeholder="Software Engineer"
                    className="w-full h-10 px-4 rounded-lg border border-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold">Job Description</label>
                  <input
                    value={inputs.jobDescription}
                    onChange={(e) =>
                      setInputs({ ...inputs, jobDescription: e.target.value })
                    }
                    type="text"
                    placeholder="React, Node, Express, Python, etc"
                    className="w-full h-10 px-4 rounded-lg border border-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold">Experience</label>
                  <input
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        experience: Number(e.target.value),
                      })
                    }
                    type="number"
                    placeholder="Enter the experience in years"
                    className="w-full h-10 px-4 rounded-lg border border-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const AddInterview = () => {
  return <div className="p-4"></div>;
};

export default Page;
