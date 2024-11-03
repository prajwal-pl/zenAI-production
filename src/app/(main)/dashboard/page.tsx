"use client";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { InterviewGeneration, saveQuestions } from "./actions";
import { useRouter } from "next/navigation";

const Page = () => {
  const [inputs, setInputs] = useState({
    jobRole: "",
    jobDescription: "",
    experience: 0,
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log(inputs);

    if (!inputs.jobRole || !inputs.jobDescription || !inputs.experience) {
      return;
    }

    setInputs({
      jobRole: "",
      jobDescription: "",
      experience: 0,
    });

    const data = await InterviewGeneration({ inputs });
    // console.log(data.response);
    if (data.error) {
      console.error(data.error);
      setLoading(false);
      return;
    } else if (data.response) {
      const mockId = await saveQuestions(data.response, inputs);
      console.log(mockId);
      setLoading(false);
      router.push(`/dashboard/interview/${mockId?.response?.[0]?.mockId}`);
    }
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
                    required
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
                    required
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
                    value={inputs.experience === 0 ? "" : inputs.experience}
                    required
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
                <Button type="submit">
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating
                    </div>
                  ) : (
                    "Generate AI Interview"
                  )}
                </Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Page;
