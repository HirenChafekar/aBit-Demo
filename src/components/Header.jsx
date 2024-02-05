import styles from "../assets/scss/header.module.scss";
import walletImage from "../assets/images/wallet.png";
import bellImage from "../assets/images/bell.png";
import profileImage from "../assets/images/profile_pic.png";
import downArrowImage from "../assets/images/down_arrow.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.header_main_title}>aBit</p>
      <div className={styles.header_sec_div}>
        <button>Share new video</button>
        <img src={walletImage} />
        <img src={bellImage} />
        <img src={profileImage} />
        <img src={downArrowImage} />
      </div>
    </div>
  );
};

export default Header;
