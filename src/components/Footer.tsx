'use client';

export default function Footer() {
  return (
    <footer id="Footer" className="clearfix">
      <div className="footer_copy">
        <div className="container">
          <div className="column one">
            <a id="back_to_top" className="button button_js" href="#">
              <i className="icon-up-open-big"></i>
            </a>
            <div className="copyright">
              &copy; Fundación Mundo Puerto {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
