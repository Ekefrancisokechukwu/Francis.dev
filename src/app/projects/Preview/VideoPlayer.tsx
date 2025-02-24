import { useEffect, useState } from "react";
import VideoPlayerSkeleton from "./VideoPlayerSkeleton";

type VideoProps = {
  video: string;
};

const VideoPlayer = ({ video }: VideoProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = video;
    videoElement.onloadeddata = () => setIsLoading(false);
  }, [video]);

  return (
    <>
      {isLoading ? (
        <VideoPlayerSkeleton />
      ) : (
        <div className="lg:h-[25rem] border h-auto w-full bg-gray-100 dark:bg-gray-600/50 p-1 rounded-xl ">
          <video
            autoPlay
            muted
            loop
            style={{ width: "100%" }}
            aria-label="lady wearing google vision and pressing a keyboard"
            className="rounded-xl h-full w-full"
          >
            <source src={video} type="video/mp4" />
            <source src={video} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
      )}
    </>
  );
};
export default VideoPlayer;
