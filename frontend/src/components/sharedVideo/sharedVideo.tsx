import { useEffect, useState } from "react";
import { Video } from "../../store/constants";
import { getVideoDetail } from "../../services";

export interface SharedVideoProps {
  video: Video;
}
export const SharedVideo = ({ video }: SharedVideoProps) => {
  const [state, setState] = useState<Video>(video);

  useEffect(() => {
    const syncVideoDetail = async () => {
      const detail = await getVideoDetail(video.src);
      setState(detail);
    };

    !video?.version && syncVideoDetail();
  }, [video]);

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex border border-blue-200 lg:border-0 lg:mb-4 bg-blue-100 mx-auto lg:mx-4">
      <div
        className="h-48 w-full lg:w-80 lg:h-full flex-none text-center overflow-hidden"
        dangerouslySetInnerHTML={{ __html: state.html ?? "" }}
      ></div>
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {state.title}
          </div>
          <p className="text-gray-700 text-base">{state.author_name}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            {/* @ts-ignore */}
            <p className="text-gray-900 leading-none">
              shared by {state.user_id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
