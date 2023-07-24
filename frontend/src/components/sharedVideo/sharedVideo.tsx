import { Video } from "../../store/constants";

export interface SharedVideoProps {
  video: Video;
}
export const SharedVideo = ({ video }: SharedVideoProps) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex border border-blue-200 lg:border-0 lg:mb-4 bg-blue-100 mx-auto lg:mx-4">
      <div
        className="h-48 w-full lg:w-80 lg:h-full flex-none text-center overflow-hidden"
        dangerouslySetInnerHTML={{ __html: video.html_text }}
      ></div>
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {video.title}
          </div>
          <p className="text-gray-700 text-base">{video.desc}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-600 leading-none">
              Shared by {video.shared_by}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
