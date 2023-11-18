import { content } from "@/data/content";
import Image from "next/image";

const GeneratedData = () => {
  return (
    <>
      {content.map((contentData, index) => {
        return (
          <section
            key={index}
            className="w-full mx-auto flex flex-col space-y-5 mb-4"
          >
            {contentData.map((individualData, index) => {
              switch (individualData.type) {
                case "h1":
                  return (
                    <h1 className="font-color-green text-[2em]" key={index}>
                      {individualData.content}
                    </h1>
                  );
                case "image":
                  return (
                    <div className="relative">
                      <Image
                        src={individualData.image!}
                        key={index}
                        alt="panaverse"
                      />
                    </div>
                  );
                case "h2":
                  return (
                    <h2
                      className={`font-color-green text-2xl leading-normal mt-4`}
                    >
                      {individualData.content}
                    </h2>
                  );
                case "link-lg":
                  return (
                    <a
                      href={individualData.link ?? "#"}
                      className="text-blue-800 text-2xl"
                    >
                      {individualData.content}
                    </a>
                  );
                case "link-sm":
                  return (
                    <a
                      href={individualData.link ?? "#"}
                      className="text-blue-800 text-lg"
                    >
                      {individualData.content}
                    </a>
                  );
                case "paragraph":
                  return (
                    <p className="text-[1.2rem]">{individualData.content}</p>
                  );
                case "links-sm": {
                  return individualData.links!.map((link, index) => {
                    return (
                      <a href="#" key={index} className="text-blue-800 text-lg">
                        {link}
                      </a>
                    );
                  });
                }
              }
            })}
          </section>
        );
      })}
    </>
  );
}

export default GeneratedData