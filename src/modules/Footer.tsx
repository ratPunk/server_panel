import "@css/footer.css";
import Link from "@components/Link";
import {FaDiscord, FaTelegram} from "react-icons/fa";
import {MdLocalPostOffice} from "react-icons/md";


function Footer() {

    return (
        <div id={"Footer"}>
            <div className={"footer-container"}>
                <div className={"footer-navigation"}>
                    <p className={"div-title"}>Навигация</p>
                    <Link href={"/"} text={"Главная"}/>
                    <Link href={"/account/myserver"} text={"Панель управления"}/>
                    <Link href={"/account/myserver"} text={"База знаний"}/>
                </div>
                <div className={"footer-contact-us"}>
                    <p className={"div-title"}>Связаться с нами</p>
                    <Link href={""} text={"Telegram"} icon={<FaTelegram color={"#ffa726"} size={34}/>}/>
                    <Link text={"Discord"} icon={<FaDiscord color={"#ffa726"} size={34}/>}/>
                </div>
                <div className={"footer-documents"}>
                    <p className={"div-title"}>Документы</p>
                    <Link text={"Оферта"}/>
                    <Link text={"Политика конфиденциальности"}/>
                </div>

                <div className={"footer-about-us"}>
                    <p className={"div-title"}>О нас</p>
                    <p style={{color: "#fff"}}>Omega - это игровой хостинг для серверов Minecraft Java и Minecraft
                        Bedrock edition. Подбираем оптимальные мощбности для ваших задач и не тратим ресурсы в
                        пустую</p>
                </div>
            </div>
            <div className={"footer-legal-information"}>
                <div className={"footer-legal-text"}>
                    <span>© Omega (Омега) 2025-2026.</span>
                    <span>Индивидуальный Предприниматель Иличкин А.М.</span>
                    <span>ИИН: XXXXXXXXXXXX</span>
                    <span>Весь контент на сайте защищен DMCA. Копирование страниц, а также их содержимого без согласия Администрации запрещается!</span>
                    <span>Мы никак не связаны с Minecraft®, Mojang Studios® или Microsoft®.</span>
                </div>
                <div className={"footer-legal-help"}>
                    <h3 style={{color: "#fff"}}><MdLocalPostOffice color={"#fff"}/> help@omega.com</h3>
                </div>
                </div>
            </div>
            )
            }

            export default Footer
