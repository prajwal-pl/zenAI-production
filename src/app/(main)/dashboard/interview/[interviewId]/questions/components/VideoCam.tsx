"use client";
import { Button } from "@/components/ui/button";
import { MicIcon, MicOff, Video, VideoOff, WebcamIcon } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

type Props = {
  questions: any[];
};

const VideoCam = ({ questions }: Props) => {
  const [enableWebcam, setEnableWebcam] = React.useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcripts, setTranscripts] = useState<string[]>([]);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setTranscripts((prev) => [...prev, transcript]);
      console.log(transcripts);
    }
  }, [transcript]);

  const handleRecording = useCallback(() => {
    if (!isRecording) {
      setIsRecording(true);
      SpeechRecognition.startListening({ continuous: true });
    } else {
      setIsRecording(false);
      SpeechRecognition.stopListening();
    }
  }, [isRecording]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="flex items-center justify-center flex-col">
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
            <div className="flex items-center justify-center rounded-lg bg-secondary md:w-[35rem] w-[18rem] h-[15rem] md:h-[24rem] ">
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
      <Button onClick={handleRecording} className=" m-2">
        {listening ? (
          <div className="flex items-center gap-2">
            <MicOff className="w-4 h-4" />
            Stop Recording
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <MicIcon className="w-4 h-4" />
            Start Recording
          </div>
        )}
      </Button>
      <p>{transcript}</p>
    </div>
  );
};

export default VideoCam;
