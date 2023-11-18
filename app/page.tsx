import Banner from "@/components/banner";
import GeneratedData from "@/components/generated";
import EmbeddedYTVideo from "@/components/youtube-video";

export default function Home() {
  return (
    <div>
      <Banner />

      <main className="w-[64rem] max-w-full mx-auto py-8 px-24 flex flex-col space-y-5">
        <GeneratedData />

        <hr />
        <p className="text-[1.2rem] text-center">
          And So on... For more info, visit the original{" "}
          <a href="https://www.panaverse.co" className="text-blue-900">
            panaverse.co
          </a>
        </p>
        <hr />

        <section className="w-full mx-auto flex flex-col space-y-5 mb-4">
          <h1 className="text-center text-2xl font-bold">Video from Youtube</h1>
          <EmbeddedYTVideo
            videoSlug="PKxSC4ZG3W0"
            width={"432"}
            height={"243"}
            className="mx-auto"
          />
        </section>
        <hr />

        {/* <section className="w-full mx-auto flex flex-col space-y-5 mb-4">
          <h1 className="text-center text-2xl font-bold">Video from Youtube</h1>
          <video width="320" height="240" controls>
            <source src="/assets/video/mov_bbb.mp4" type="video/mp4" />
            <source src="/assets/video/mov_bbb.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </section>
        <hr /> */}
      </main>
    </div>
  );
}
