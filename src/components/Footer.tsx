import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="#"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">LiveCompositor</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/membraneframework/live_compositor"
              className="opacity-60 hover:opacity-100"
            >
              GitHub
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://compositor.live/docs/intro"
              className="opacity-60 hover:opacity-100"
            >
              Docs
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://discord.gg/J9B3S5c2"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://x.com/ElixirMembrane"
              className="opacity-60 hover:opacity-100"
            >
              Twitter/X
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Company</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://swmansion.com/rtc-video-streaming"
              className="opacity-60 hover:opacity-100"
            >
              Website
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://membrane.stream/contact"
              className="opacity-60 hover:opacity-100"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
