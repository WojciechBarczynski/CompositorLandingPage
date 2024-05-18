import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Contact us{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            LiveCompositor is free and open-source. It's created by Software Mansion - a software company that is specialized in building tools for developers.
            <br />
            At Software Mansion, we work on multiple multimedia projects, like Membrane Framework, Elixir WebRTC, FishJam, and more.
            <br />
            We also work on custom solutions for clients.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button size="contact" className="w-full md:mr-8 md:w-auto">Contact us</Button>
        </div>
      </div>
    </section>
  );
};
