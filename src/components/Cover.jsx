import coverImage from "../assets/images/cover.png";
import bandImage from "../assets/images/band.png";
import styles from "../assets/scss/cover.module.scss";
import cx from "classnames";
const Cover = () => {
  return (
    <div>
      <div className={styles.cover_div}>
        <img
          src={bandImage}
          className={cx(styles.cover_img, styles.cover_img_sec)}
        />
        <img src={coverImage} className={styles.cover_img} />
      </div>
    </div>
  );
};

export default Cover;
