import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { SiX } from "react-icons/si"; // Twitter X logo
import { QRCodeCanvas } from "qrcode.react"; // Use QRCodeCanvas instead of QRCode

const Footer: React.FC = () => {
  // Define your social media links here
  const socialLinks = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/share/16HeEWft59/" },
    {
      Icon: SiX,
      url: "https:https://x.com/yohannes_f52782?t=ruesQOiyIv5RHubtlB3ohQ&s=35",
    },
    {
      Icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/yohannes-fikre-420822345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    { Icon: FaGithub, url: "https://github.com/Yohannesdeveloper" },
    {
      Icon: FaInstagram,
      url: "https://www.instagram.com/yohannesfk321?utm_source=qr&igsh=MTk4OXJ5dnpndmdxcg==",
    },
    { Icon: FaTelegramPlane, url: "https://t.me/JONMOON" },
  ];

  return (
    <footer className="bg-gradient-to-tr from-black via-gray-900 to-black dark:from-white dark:via-gray-100 dark:to-white text-white dark:text-black pt-16 pb-6 relative overflow-hidden">
      {/* Glowing line top */}
      <div className="absolute top-0 left-1/2 w-[80%] h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform -translate-x-1/2 blur-md animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        <h3 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-blue-500 text-transparent bg-clip-text">
          Let’s Create Something Epic
        </h3>

        <div className="flex justify-center gap-6 text-xl">
          {socialLinks.map(({ Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-black text-black dark:text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white dark:hover:from-cyan-400 dark:hover:to-blue-500"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-sm opacity-70 tracking-wide">
          © {new Date().getFullYear()} Yohannes Fikre — All rights reserved.
        </p>
      </div>

      {/* QR Code bottom right */}
      <div className="absolute bottom-14 right-10 bg-white dark:bg-black p-2 rounded-lg shadow-lg">
        <QRCodeCanvas
          value="https://yohannesfikre.com"
          size={120}
          bgColor="#FFFFFF"
          fgColor="#000000"
          includeMargin={true}
        />
      </div>

      {/* Decorative blurred glow bottom */}
      <div className="absolute -bottom-10 left-1/2 w-[60%] h-[100px] bg-gradient-to-r from-purple-600 to-pink-500 dark:from-cyan-400 dark:to-blue-500 blur-2xl opacity-20 transform -translate-x-1/2 pointer-events-none" />
    </footer>
  );
};

export default Footer;
