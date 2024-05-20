export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          How it works?
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Send input video and audio streams using RTP.
        <br />
        Provide a configuration with HTTP.
        <br />
        Get composed output stream via RTP.
      </p>
    </section>
  );
};
