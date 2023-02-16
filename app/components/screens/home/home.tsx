import { View, Text } from "react-native";
import Header from "./header";
import Button from "../../ui/button";
import Layout from "../../layouts/Layout";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect } from "react";
import Padding from "../../ui/Padding";
import Stories from "./stories/Stories";


const Home = () => {
  const {user} = useAuth();

  return (
    <Layout>
      <Header />
      <Padding>
        <Stories />
        <Button onPress={() => {}} title='Открыть новый договор' />
      </Padding>
    </Layout>
  )
};

export default Home;