import { View, Text, Pressable } from "react-native";
import { styleCenter } from "../../layouts/Layout";
import tw from 'tailwind-rn';
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";

interface IData {
  email: string,
  password: string
}

const Auth = () => {
  const { isLoading, login, register } = useAuth();

  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData)

  const authHandler = async () => {
    const {email, password } = data;

    if (isReg) await register(email, password)
    else await login(email, password)

    setData({} as IData)
  };

  return (
    <View style={styleCenter} >
      <View style={tw('mx-5 justify-center items-center h-full')} >
        <View style={tw('w-9/12')}>
          <Text style={tw('text-center text-gray-800 text-2xl font-bold mb-2')}>
            {!isReg ? 'Войти' : 'Открыть счет'}
          </Text>

          {isLoading ? <Loader /> : <>

            <Field val={data.email} placeholder='Введите e-mail' onChange={val => setData({ ...data, email: val })} />
            <Field val={data.password} placeholder='Введите пароль' isSecure={true} onChange={val => setData({ ...data, password: val })} />
            <Button onPress={authHandler} title={!isReg ? 'Войти' : 'Открыть счет'}/>

            <Pressable onPress={() => setIsReg(!isReg)}>
              <Text style={tw('text-gray-800 opacity-30 text-right text-sm')} >
                {!isReg ? 'Зарегистрироваться' : 'Войти'}
              </Text>
            </Pressable>  

          </>}


        </View>
      </View>
    </View>
  )
};

export default Auth;
