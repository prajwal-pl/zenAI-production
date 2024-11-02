"use client";

import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import Link from "next/link";
import Webcam from "react-webcam";

type Props = {
  params: {
    interviewId: string;
  };
};

const Page = ({ params }: Props) => {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-3xl font-bold">Interview</h1>
        <p className="text-muted-foreground">
          Get started with your interview.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  my-10">
        <div>
          <div className="bg-yellow-50 p-4 rounded-lg md:h-[75%] mb-3">
            <div className="flex gap-2 text-yellow-500 ">
              <Lightbulb className="shrink-0 w-5 h-5 text-yellow-500" />
              <strong>Some Information before you start:</strong>
            </div>
            <p className="text-sm text-yellow-500">
              Make sure you are in a well lit room and your face is clearly
              visible. Position yourself centrally in front of the camera and
              ensure there are no distracting elements in the background.
              Maintain a professional appearance and check that your microphone
              is working properly before starting. Ensure you have a stable
              internet connection and close any unnecessary browser tabs or
              applications.
              <br />
              Find a quiet location where you {"won't"} be interrupted during
              the interview. Test your camera and microphone settings before the
              interview begins. Dress professionally and maintain good posture
              throughout the interview.
              <br /> Look directly into the camera when speaking to simulate eye
              contact. Speak clearly and at a moderate pace to ensure good audio
              quality.
              <br />
              <br />
              <strong>NOTE: We do not store your video information.</strong>
            </p>
          </div>
          <Link href={`/dashboard/interview/${params.interviewId}/questions`}>
            <Button className="w-full">Start Interview</Button>
          </Link>
        </div>
        <div>
          <Webcam
            audioConstraints={true}
            videoConstraints={true}
            className="rounded-lg"
            mirrored
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
