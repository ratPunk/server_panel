import * as React from 'react';
import "@css/profile.css";
import Card from "@components/Card";
import {FaRegUserCircle} from "react-icons/fa";
import {useEffect, useState} from 'react';
import {fetchRandomUser} from '@api/getUserData';
import Button from "@components/Button";
import Banner from "@components/Banner";
import {CircularProgress} from "@mui/material";
import BannerNavigation from "@components/BannerNavigation";
import server from "@images/minecraft-cherry-blossom.jpg";

type User = {
    id: string;
    type: string;
    attributes: object;
};


function Profile() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userData = await fetchRandomUser();
                console.log(userData.data);
                setUser(userData.data);
            } catch (error) {
                console.error('Ошибка в компоненте:', error);
            } finally {
            }
        };

        loadUser();
    }, []);


    const handleCopy = async (text: string) => {
        console.log(text);
        navigator.clipboard.writeText(text);
    }


    return (
        <div id={"Profile"}>
            <BannerNavigation image={server} mainText={"Профиль"}/>
            <div className={"container"}>
                {user ? <Card title="profile-card">
                    <>
                        <h2>{user.type}</h2>
                        <FaRegUserCircle color={"#ffa726"} size={126}/>
                        <p>{user.id}</p>
                    </>
                </Card> : <Card title="profile-card"><CircularProgress/></Card>}


                {user ? <Card title="profile-card">
                    <>
                        <h2>Основная информация</h2>
                        <table className="profile-table">
                            <tbody>
                            <tr>
                                <td className="label">ID</td>
                                <td className="value">{user.id}</td>
                                <td className={"copy"}><Banner onClick={() => handleCopy(user.id)}/></td>
                            </tr>
                            <tr>
                                <td className="label">Email</td>
                                <td className="value">{user.attributes.name}</td>
                                <td className={"copy"}><Banner onClick={() => handleCopy(user.attributes.name)}/></td>
                            </tr>
                            <tr>
                                <td className="label">Password</td>
                                <td className="value">{user.attributes.description}</td>
                                <td className={"copy"}><Banner onClick={() => handleCopy(user.attributes.description)}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </>
                </Card> : <Card title="profile-card"><CircularProgress/></Card>}

                {user ? <Card title="profile-card">
                    <>
                        <h2>Действия</h2>
                        <div className={"button-container"}>
                            <Button text={"Пополнить баланс"}/>
                            <Button text={"Редактировать профиль"}/>
                        </div>
                    </>
                </Card> : <Card title="profile-card" ><CircularProgress/></Card>}

            </div>
        </div>
    )
}

export default Profile
