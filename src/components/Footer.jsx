import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaWhatsapp, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const socialLinks = [
  { href: "", icon: <FaWhatsapp /> },
  { href: "https://www.instagram.com/gewentz/#", icon: <FaInstagram /> },
  { href: "https://www.facebook.com/gewentz", icon: <FaFacebook /> },
  { href: "https://github.com/gewentz", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-br from-blue-700 to-purple-800 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-base text-blue-100">
          ©Wentz.Dev 2025. Todos os direitos reservados.
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 transition-colors duration-500 ease-in-out hover:text-blue-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
