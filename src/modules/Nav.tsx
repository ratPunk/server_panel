import "@css/nav.css";
import Link from "@components/Link";
import {FaHandsHelping, FaHome} from "react-icons/fa";
import {ImBooks} from "react-icons/im";


function Nav() {

    return (
        <>
            <nav id={"Nav"}>
                <Link href="/" text={"На главную"} icon={<FaHome />}/>
                <Link href="/" text={"Помощь"} icon={<FaHandsHelping/>}/>
                <Link href="/" text={"База знаний"} icon={<ImBooks/>}/>
            </nav>
        </>
    )
}

export default Nav
