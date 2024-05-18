import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaCode, FaLink, FaMicrochip } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <FaCode />,
    title: "Simple declarative API",
    description:
      "Simple Web-like component tree. Easy to pick up for anyone familiar with web development.",
  },
  {
    icon: <FaLink />,
    title: "Language Agnostic",
    description:
      "You can leverage technology of your choice and easily integrate it with your own solutions.",
  },
  {
    icon: <FaMicrochip />,
    title: "Hardware accelerated",
    description:
      "Rendering is GPU accelerated using wgpu library, which implements API based on the WebGPU standard.",
  }
];

export const Vision = () => {
  return (
    <section
      id="vision"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Vision
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
