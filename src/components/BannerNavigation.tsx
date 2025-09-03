import "@css/bannernavigation.css";
import Link from "@components/Link";
import {Breadcrumbs, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

interface ImageProps {
    image?: string;
    alt?: string;
    mainText?: string;
}

function BannerNavigation({ image, alt, mainText }: ImageProps) {
    // const navigate = useNavigate();

    const [currentSection, setCurrentSection] = useState<string>('');
    const location = useLocation();

    useEffect(() => {

        const segments = location.pathname.split('/').filter(Boolean);
        const lastSegment = segments.length > 0 ? segments[segments.length - 1] : '';
        const current = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

        setCurrentSection(current);
    }, [location]);

    return (
        <div className={"image-container"} style={{backgroundImage: `url(${image})`}}>
            {/*<img src={image} alt={alt}/>*/}
            <h1 className={"mainText"}>{mainText}</h1>
            <p className={"secondaryText"}>
                <Breadcrumbs aria-label="breadcrumb" className={"breadcrumb"}>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                    text={"Home"}/>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/account"
                    text={"Account"}
                />
                <Typography sx={{ color: 'white' , fontWeight: 700}} className={"typography"}>{currentSection}</Typography>
            </Breadcrumbs>
            </p>
        </div>
    )
}

export default BannerNavigation
