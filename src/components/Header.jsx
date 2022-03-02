import CoverImage from '../images/cover-image.webp';
import ProfileImage from '../images/profile-image.webp';
import { FaGithub } from 'react-icons/fa';
import { SiQiita } from "react-icons/si";

export const Header = () => {
  return(
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
      {/* overlayはカバー画像の上に乗せる色 */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className="title-text">Sayaka Kikuchi</h1>
            <h3 className="title-text">Web Designer</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://qiita.com/usayamadausako/">
                    <SiQiita color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/KikuchiSayaka">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
