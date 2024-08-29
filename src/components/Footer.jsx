// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer>
    <ul className="">
    <li className="footer-item">
        <a
          href="mailto:hestrain@gmail.com"
        >
          Email
        </a>
      </li>
      <li className="footer-item">
        <a
          href="www.linkedin.com/hestrtain"
        >
          LinkedIn
        </a>
      </li>
      <li className="footer-item">
        <a
          href="www.github.com/hestrtain"
        >
          Github
        </a>
      </li>
    </ul>
    </footer>
  );
}

export default Footer;
