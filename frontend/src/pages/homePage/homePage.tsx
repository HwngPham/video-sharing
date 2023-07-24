import { useEffect } from "react";
import { Layout } from "../../components/layout/layout";
import { SharedVideo } from "../../components/sharedVideo/sharedVideo";
import { useStore } from "../../store";

export const HomePage = () => {
  const { videos, fetchVideos } = useStore();

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    const resetIframeStyle = () => {
      const iframes = document.querySelectorAll("iframe");
      iframes?.forEach((iframe) => {
        iframe?.setAttribute("style", "height: inherit; width: inherit");
      });
    };

    setTimeout(() => {
      resetIframeStyle();
    }, 1000);
  }, [videos]);

  return (
    <Layout>
      {(videos ?? []).map((video) => (
        <SharedVideo key={video.id} video={video} />
      ))}
    </Layout>
  );
};
