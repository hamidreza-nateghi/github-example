import RepoBox from "./RepoBox";

const RepoList = ({ repos }) => (
  <ol className="d-flex flex-wrap">
    {repos.map((repo) => (
      <RepoBox {...repo} />
    ))}
  </ol>
);

export default RepoList;
