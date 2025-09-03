import "@css/header.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Nav from "@/modules/Nav";

import {FaAddressCard, FaServer} from "react-icons/fa";
import {FaSquarePlus} from "react-icons/fa6";
import {IoMenu} from "react-icons/io5";
import {RiOmega} from "react-icons/ri";

function Header() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const navigate = useNavigate();

    const handleClose = (path: string) => {
        setAnchorEl(null);
        navigate(path);
    };


    return (
        <div id={"Header"}>
            <div className="header-container">

                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    onMouseEnter={handleClick}
                >
                    <IoMenu size={24}/>
                    Меню
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    // onMouseLeave={handleClose}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'basic-button',
                        },
                    }}
                >
                    <div onMouseLeave={handleClose}>
                        <MenuItem onClick={() => handleClose('/account/profile')} className={"menuItem"}><span
                            className={"letter"}><FaAddressCard/> Профиль</span></MenuItem>
                        <MenuItem onClick={() => handleClose('/account/buyserver')} className={"menuItem"}><span
                            className={"letter"}><FaSquarePlus/> Создать сервер</span></MenuItem>
                        <MenuItem onClick={() => handleClose('/account/myserver')} className={"menuItem"}><span
                            className={"letter"}><FaServer/> Мои сервера</span></MenuItem>
                    </div>
                </Menu>
                <div className={"logo"}>
                    <RiOmega size={54} color="#ffa726"/>
                    <div className={"logo-text"}>
                        <span className={"logo-name"}>Omega</span>
                        <span className={"logo-secondary-text"}>Лучший майнкрафт хостинг</span>
                    </div>
                </div>
            </div>
            <Nav/>
        </div>
    )
}

export default Header
