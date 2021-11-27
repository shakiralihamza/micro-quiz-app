import React, {useContext} from 'react';
import {MyContext} from "../Context/MyContext";
import Settings from "./Settings";
// noinspection ES6PreferShortImport
import {Menu} from "../react-app-env.d";
import Quiz from './Quiz';
import Result from './Result';

const RightComponent = () => {
    const {menu} = useContext(MyContext);

    return (
        <>
            {
                menu === Menu.Settings ?
                    <Settings/>
                    :
                    null
            }
            {
                menu === Menu.Quiz ?
                    <Quiz/>
                    :
                    null
            }
            {
                menu === Menu.Result ?
                    <Result/>
                    :
                    null
            }
        </>
    );
}

export default RightComponent;