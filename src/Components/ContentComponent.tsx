import {useContext} from 'react';
import {MyContext} from "../Context/MyContext";
import Settings from "./Settings";
// noinspection ES6PreferShortImport
import {Menu} from "../react-app-env.d";
import Quiz from './Quiz';
import Result from './Result';

const ContentComponent = () => {
    const {menu} = useContext(MyContext);

    return (
        <>
            {menu === Menu.Settings && <Settings/>}

            {menu === Menu.Quiz && <Quiz/>}

            {menu === Menu.Result && <Result/>}
        </>
    );
}

export default ContentComponent;
