import React from 'react';
import Card from "@components/Card";
import Link from "@components/Link";

function Account() {
    return (
        <div id={"Account"}>
            <div className="container">
                <Card>
                    <img src="" alt=""/>
                    <Link text={"Профиль"}/>
                    <Link text={"Создать сервер"}/>
                    <Link text={"Мои сервера"}/>
                </Card>
            </div>
        </div>
    );
}

export default Account;