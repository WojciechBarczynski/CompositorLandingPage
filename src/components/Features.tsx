import { FaCogs } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaCode, FaPlay } from "react-icons/fa6";
import { GiPuzzle } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { SiVulkan } from "react-icons/si";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
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
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Features
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Simple, powerful, fast. Pick three.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
            <Card
              key={title}
              className="bg-muted/50"
            >
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  <IconContext.Provider value={{ size: "50", className: "fill-primary" }}>
                    {icon}
                  </IconContext.Provider>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
};
