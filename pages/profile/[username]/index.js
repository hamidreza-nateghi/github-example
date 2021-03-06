import { useRouter } from "next/router";
import { TeamOutlined, EnvironmentOutlined, GlobalOutlined } from "@ant-design/icons";

import RepoList from "../../../components/RepoList";

import styles from "../../../styles/Profile.module.css";

export default function Profile({ user, repos }) {
  const router = useRouter();
  const page = router.query.page || 1;
  const { avatar_url, name, login, bio, followers, following, location, blog } = Object(user);

  return user ? (
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
              <span className={styles.username}>{login}</span>
            </h1>
          </div>
          <div className="d-flex flex-column">
            {bio && <div className={`${styles.bio} mb-3`}>{bio}</div>}
            <div className="mb-3">
              <TeamOutlined />
              <span className="text-bold"> {followers} </span>followers ·
              <span className="text-bold"> {following} </span>
              following
            </div>
            <ul className={styles.detail}>
              {location && (
                <li>
                  <EnvironmentOutlined />
                  &nbsp;{location}
                </li>
              )}
              {blog && (
                <li>
                  <GlobalOutlined />
                  &nbsp;{blog}
                </li>
              )}
            </ul>
          </div>
        </div>
        {repos?.length > 0 && (
          <div className="col-9 px-2">
            <RepoList repos={repos} />
            <div className={styles.btn}>
              <button onClick={() => router.push(`/profile/${login}/?page=${+page - 1}`)} disabled={page < 2}>
                Previous
              </button>
              <button onClick={() => router.push(`/profile/${login}/?page=${+page + 1}`)}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div>User not found</div>
  );
}

const getRepos = async (username, page = 1) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=6&page=${page}`);
    const repos = await response.json();

    return repos;
  } catch (error) {}
};

export const getServerSideProps = async (context) => {
  const { username, page } = context.query;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.ok) {
      const user = await response.json();
      try {
        const repos = await getRepos(username, page);

        return { props: { user, repos } };
      } catch (error) {
        return { props: { user } };
      }
    }
  } catch (error) {}

  return { props: {} };
};
