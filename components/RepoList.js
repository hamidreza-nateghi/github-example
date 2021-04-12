import RepoBox from "./RepoBox";

const RepoList = ({ repos }) => (
  <ol className="d-flex flex-wrap">
    {repos.map((repo) => (
      <RepoBox {...repo} key={repo.id} />
    ))}
  </ol>
);

export default RepoList;
