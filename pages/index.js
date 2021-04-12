import Head from "next/head";
import { useRouter } from "next/router";
import { Form, Input } from "antd";

const checkUsername = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.ok) {
      const user = await response.json();
      return user;
    }
  } catch (error) {}

  return false;
};

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (values) => {
    const { username } = values;

    try {
      const user = await checkUsername(username);

      if (user) {
        router.push(`/profile/${username}`);
      }

      // TODO: no such user
    } catch (error) {}
  };

  return (
    <div className="container">
      <Head>
        <title>Github Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form className="p-3" autoComplete="off" onFinish={handleSubmit}>
        <label>Find people on GitHub:</label>
        <Form.Item name="username">
          <div className="d-flex">
            <Input className="flex-auto mr-2" required />
            <button type="submit">Search</button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
