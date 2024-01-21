const Footer = () => {
  return (
    <footer className="mt-12 footer p-10 bg-neutral text-neutral-content">
      <aside>
        <img src="/assets/icons/sm-icon.png" alt="icon" />
        <p>
          Saptarshi Majumdar
          <br />
          All Rights Reserved &copy;
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a href="#" className="grid-col-1 text-center cursor-pointer">
            <img src="/assets/icons/linkedin.svg" alt="linkedin-icon" />
          </a>
          <a href="#" className="grid-col-1 text-center cursor-pointer">
            <img src="/assets/icons/github-icon.svg" alt="github-icon" />
          </a>
          <a href="#" className="grid-col-1 text-center cursor-pointer">
            <img src="/assets/icons/twitterx-icon.svg" alt="twitterx-icon" />
          </a>
          <a href="#" className="grid-col-1 text-center cursor-pointer">
            <img src="/assets/icons/instagram-icon.svg" alt="instagram-icon" />
          </a>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
