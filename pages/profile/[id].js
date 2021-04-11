import { TeamOutlined, EnvironmentOutlined, GlobalOutlined } from "@ant-design/icons";

import RepoList from "../../components/RepoList";

import styles from "../../styles/Profile.module.css";

const repos = [
  {
    key: 1,
    name: "facebook/react",
    description: `A declarative, efficient, and flexible JavaScript library for building user interfaces.`,
  },
  { key: 2, name: "facebook/create-react-app", description: `Set up a modern web app by running one command.` },
  { key: 3, name: "paularmstrong/normalizr", description: `Normalizes nested JSON according to a schema` },
];

const user = {
  avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4",
  name: "Dan Abramov",
  bio: "Frontend Web Developer",
  followers: 63,
  following: 171,
  location: "Iran",
  blog: "virgool.io/@nateghi",
};

export default function Profile() {
  const { avatar_url, name, bio, followers, following, location, blog } = user;

  return (
    <div className="container">
      <div className="d-flex py-3">
        <div className="col-3 px-2">
          <img
            className={`${styles.avatar} width-full overflow-hidden`}
            alt="Avatar"
            width="260"
            height="260"
            src={avatar_url}
          />
          <div className="py-3">
            <h1>
              <span className={`${styles.name} d-block`}>{name}</span>
              <span className={styles.username}>gaearon</span>
            </h1>
          </div>
          <div className="d-flex flex-column">
            <div className={`${styles.bio} mb-3`}>{bio}</div>
            <div className="mb-3">
              <TeamOutlined />
              <span className="text-bold"> {followers} </span>followers ·
              <span className="text-bold"> {following} </span>
              following
            </div>
            <ul className={styles.detail}>
              <li>
                <EnvironmentOutlined />
                &nbsp;{location}
              </li>
              <li>
                <GlobalOutlined />
                &nbsp;{blog}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-9 px-2">
          <RepoList repos={repos} />
          <div className={styles.btn}>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
