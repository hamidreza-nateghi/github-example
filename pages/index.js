import Head from "next/head";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

import styles from "../styles/Home.module.css";

const { Search } = Input;

export default function Home() {
  const handleSearch = (value) => console.log(value);

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
