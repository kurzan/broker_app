import { View, Text } from "react-native";
import { useProfile } from "./useProfile";
import Layout from "../../layouts/Layout";
import Heading from "../../ui/heading";
import Padding from "../../ui/Padding";
import Field from "../../ui/field";
import Loader from "../../ui/loader";
import Button from "../../ui/button";
import { useAuth } from "../../../hooks/useAuth";


const Profile = () => {
  const {isLoading: isProfileLoading, name, setName} = useProfile();
  const { logout } = useAuth();

  return (
    <Layout>
      <Heading isCenter={true} text="Профиль"/>
      <Padding>
        {isProfileLoading ? <Loader/> : (
          <>
            <Field onChange={setName} val={name} placeholder={"Введите имя"} />
            <Button onPress={() => {}} title={'Обновить профиль'}></Button>
            <Button title='Выйти' onPress={logout} />
          </>
        )}
      </Padding>
    </Layout>
  )
};

export default Profile;