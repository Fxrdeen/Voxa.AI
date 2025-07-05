import { StreamTheme, useCall } from "@stream-io/video-react-sdk";
import { useState } from "react";

interface Props {
  meetingName: string;
}

export const CallUI = ({ meetingName }: Props) => {
  const call = useCall();
  const [show, setShow] = useState<"lobby" | "call" | "ended">("lobby");
  return (
    <div>
      <h1>{meetingName}</h1>
    </div>
  );
};
