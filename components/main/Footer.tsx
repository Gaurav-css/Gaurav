import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxGithubLogo className="mr-2" />
              Github
            </a>

            <a
              href="https://discord.com/invite/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxDiscordLogo className="mr-2" />
              Discord
            </a>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxInstagramLogo className="mr-2" />
              Instagram
            </a>

            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxTwitterLogo className="mr-2" />
              Twitter
            </a>

            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              <RxLinkedinLogo className="mr-2" />
              LinkedIn
            </a>
          </div>

          {/* About */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <a
              href="/about"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              Learn more about me
            </a>

            <a
              href="mailto:gky89552@gmail.com"
              className="flex items-center my-[15px] text-[15px] hover:underline"
            >
              gky89552@gmail.com
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {new Date().getFullYear()} Gaurav Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
