const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-12 py-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center text-sm text-gray-400">
        <div>© {currentYear} Techno Tim. Some rights reserved.</div>
        <div className="flex items-center gap-4">
          <span>👋 Help keep this free!</span>
          <span>👕 Check out the new merch shop!</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;