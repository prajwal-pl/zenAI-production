"use client";
import { Button } from "@/components/ui/button";
import { Video, VideoOff, WebcamIcon } from "lucide-react";
import React from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";

type Props = {
  questions: any[];
};

const VideoCam = ({ questions }: Props) => {
  const [enableWebcam, setEnableWebcam] = React.useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  return (
    <div className="">
      <div className="p-5 border rounded-lg">
        <div className="relative">
          {enableWebcam ? (
            <Webcam
              onUserMedia={() => {
                setEnableWebcam(true);
              }}
              onUserMediaError={() => {
                setEnableWebcam(false);
              }}
              audioConstraints={true}
              videoConstraints={true}
              className="rounded-lg"
              mirrored
            />
          ) : (
            <div className="flex items-center justify-center rounded-lg bg-secondary w-full h-[15rem] md:h-[25rem] ">
              <WebcamIcon className="w-24 h-24" />
            </div>
          )}

          <Button
            onClick={() => {
              setEnableWebcam(!enableWebcam);
            }}
            size={"icon"}
            className="absolute top-0 right-0 m-2"
          >
            {enableWebcam ? (
              <Video className="w-4 h-4" />
            ) : (
              <VideoOff className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoCam;
