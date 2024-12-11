import footerLogo from "../assets/footer.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
        </div>
        <ul className="flex gap-6 mb-4 md:mb-0">
          <a href="#terms" className="hover:text-primary">
            Desarrollado por Alexander Puma
          </a>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
