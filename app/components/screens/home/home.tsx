import { View, Text } from "react-native";
import Header from "./header";
import Button from "../../ui/button";
import Layout from "../../layouts/Layout";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect } from "react";


const Home = () => {
  const {user} = useAuth();

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <Layout>
      <Header />
      <Text>{user?.email}</Text>
    </Layout>
  )
};

export default Home;