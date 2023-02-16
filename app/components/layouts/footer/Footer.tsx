import { FC } from "react";
import tw from 'tailwind-rn';
import { TypeRootStackParamList } from "../../../navigation/types";
import Padding from "../../ui/Padding";
import { menu } from "./menu";
import NavItem from "./NavItem";

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void,
  currentRoute?: string, 
}

const Footer: FC<IFooter> = ({navigate, currentRoute}) => {

  return (
    <Padding style={{
      ...tw(
        'flex-row justify-between items-center w-full bg-gray-800 px-0 pb-10 pt-2'
      ),
      borderTopColor: '#2C2C2C',
      borderTopWidth: 1,
    }}>

      {menu.map(item => (
        <NavItem key={item.title} item={item} navigate={navigate} currentRoute={currentRoute}/>
      ))}

    </Padding>
  )
};

export default Footer;