import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/ricapi96" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="GitHub" />
        </a>
        <a href="https://open.spotify.com/user/31phfowqlgmbprr6qtzpwnlhph5y" target="_blank" rel="noopener noreferrer">
          <img src="/images/spotify.png" alt="Spotify" />
        </a>
        <a href="https://www.instagram.com/rica.dev100" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.svg" alt="Instagram" />
        </a>
        <span className="year">2023</span>
      </div>
    </footer>
  );
}

export default Footer;
