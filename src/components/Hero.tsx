import { FaBook } from "react-icons/fa6";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { Video } from "./Video";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import TypewriterComponent from "typewriter-effect";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Mix video and audio
            </span>{" "}
          </h1>{" "}
          <br />
          <h2 className="inline">
            <TypewriterComponent
                options={{
                  strings: ["in real-time.", "using code.", "with low-latency."],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 60,
                  delay: 80,
                }}
            />
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Open-source media server for real-time, low-latency, programmable video and audio mixing.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a 
            rel="noreferrer noopener"
            href="https://compositor.live/docs/intro"
            target="_blank"
          >
            <Button className="w-full md:w-1/3">
              Docs
              <FaBook className="ml-2 w-5 h-5" />
            </Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="https://github.com/membraneframework/live_compositor"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            View on GitHub
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <Video />

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
