const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <div className={`img_container`}>
        <img src="/images/DH.png" alt="DH-logo" />
        <div className={`networks_contact`}>
          <img src="/images/ico-facebook.png" alt="" />
          <img src="/images/ico-instagram.png" alt="" />
          <img src="/images/ico-tiktok.png" alt="" />
          <img src="/images/ico-whatsapp.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
