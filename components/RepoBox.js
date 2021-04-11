import { GithubOutlined } from "@ant-design/icons";

import styles from "../styles/Profile.module.css";

const RepoBox = ({ name, description }) => (
  <li className="col-6 mb-3 px-2">
    <div className={`${styles.box} p-3 d-flex flex-column`}>
      <span>
        <GithubOutlined />
        &nbsp;{name}
      </span>
      <p className="text-small">{description}</p>
    </div>
  </li>
);

export default RepoBox;
