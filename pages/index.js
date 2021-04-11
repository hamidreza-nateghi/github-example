import Head from "next/head";
import { useRouter } from "next/router";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

import styles from "../styles/Home.module.css";

const { Search } = Input;

const checkUsername = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.ok) {
      const user = await response.json();
      return user;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
};

export default function Home() {
  const router = useRouter();

  const handleSearch = async (value) => {
    try {
      const user = await checkUsername(value);

      if (user) {
        router.push(`/profile/${value}`);
      }

      // TODO: username false
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search prefix={<UserOutlined />} placeholder="Enter username" onSearch={handleSearch} enterButton allowClear />
    </div>
  );
}
