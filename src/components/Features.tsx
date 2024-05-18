import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import cubeLeg from "../assets/cube-leg.png";
import { FaCode, FaPlay } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { SiVulkan } from "react-icons/si";
import { GiPuzzle } from "react-icons/gi";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { IconContext } from "react-icons/lib";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Built-in components",
    description:
      "LiveCompositor comes with many built-in components. Mix live streams, MP4s, images, GIFs, text, and backgrounds with high-level API.",
    icon: <GiPuzzle />,
  },
  {
    title: "High-level composition API",
    description:
      "Layout all components with HTML inspired API, leave low-level details to the LiveCompositor.",
    icon: <FaCode />,
  },
  {
    title: "Real-time processing",
    description:
      "Process live streams in real-time with low-latency.",
    icon: <FaPlay />,
  },
  {
    title: "Multi-platform support",
    description:
      "It can run on Vulkan, Metal, DX12 and OpenGL. For devices without GPU, software renderering is available.",
    icon: <SiVulkan />,
  },
  {
    title: "Dynamic composition, smooth transitions",
    description:
      "Composition can be changed on-the-fly with smooth transitions.",
    icon: <MdOutlineDynamicFeed />,
  },
  {
    title: "Customizable",
    description:
      "If you need some custom effects, you can easily extend the LiveCompositor by registering your own WGSL shaders.",
    icon: <FaCogs />,
  }
];

export const Features = () => {
  return (
    <section 
      id="features"
      className="container py-24 sm:py-32"
    >
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Features
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="p-1 rounded-2xl">
                    <IconContext.Provider value={{ size: "50", className: "fill-primary" }}>
                      {icon}
                    </IconContext.Provider>
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
