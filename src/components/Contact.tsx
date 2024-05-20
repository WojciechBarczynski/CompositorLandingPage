import swmLogo from "../assets/company_logo.svg";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={swmLogo}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Contact{" "}
                </span>
                us
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                LiveCompositor is free and open-source. 
                It's created by Software Mansion - a software company that is specialized in building tools for developers.
                At Software Mansion, we work on multiple multimedia projects, like Membrane Framework, Elixir WebRTC, FishJam, and more.
                We also work on custom solutions for clients. Contact us and create something together. 
              </p>
            </div>
          </div>
        </div>
        <div className="container text-center">
            <Button size="contact" className="w-full md:w-auto">Contact us</Button>
        </div>
      </div>
    </section>
  );
};
