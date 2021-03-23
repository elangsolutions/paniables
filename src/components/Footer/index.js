import React, {lazy} from "react";
import {Row, Col} from "antd";
import i18n from "i18next";
import {useLocation} from 'react-router-dom';
import {withTranslation} from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({t}) => {
    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    const location = useLocation();


    const isRoute =()=> (location.pathname === '/');

    const SocialLink = ({href, src}) => {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={src}
                aria-label={src}
            >
                <SvgIcon src={src} width="25px" height="25px"/>
            </a>
        );
    };

    return (
        <>
            {isRoute() ?
                <Fade bottom>
                    <S.Footer>
                        <Container>
                            <Row type="flex" justify="space-between">
                                <Col lg={10} md={10} sm={12} xs={24}>
                                    <S.Language>{t("Contact")}</S.Language>
                                    <S.Large to="/">{t("Contanos lo que quieras ")}</S.Large>
                                    <S.Para>
                                        {t(
                                            `Tenes alguna consulta respecto del proyecto?`
                                        )}
                                    </S.Para>
                                    <a href="mailto:sugerencias.paniables@gmail.com">
                                        <S.Chat>{t(`Hablemos`)}</S.Chat>
                                    </a>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={24}>
                                    <S.Select>
                                        <S.Label htmlFor="select-lang">{t("Idioma")}</S.Label>
                                        <S.LangSelect
                                            onChange={handleChange}
                                            value={i18n.language}
                                            id="select-lang"
                                        >
                                            <option value="es">Español</option>
                                            <option value="en">English</option>
                                        </S.LangSelect>
                                    </S.Select>
                                </Col>
                            </Row>
                        </Container>
                    </S.Footer>
                    <S.Extra>
                        <Container border="true">
                            <Row
                                type="flex"
                                justify="space-between"
                                align="middle"
                                style={{paddingTop: "1rem"}}
                            >
                                <S.NavLink to="/">
                                    <S.LogoContainer>
                                        <SvgIcon
                                            src="../icons/paniables_logo.png"
                                            aria-label="homepage"
                                            width="101px"
                                            height="101px"
                                        />
                                    </S.LogoContainer>
                                </S.NavLink>
                                <S.FooterContainer>
                                    <SocialLink
                                        href="https://github.com/Adrinlol/"
                                        src="instagram.svg"
                                    />
                                </S.FooterContainer>
                            </Row>
                        </Container>
                    </S.Extra>
                </Fade>
                : <></>}
        </>
    );
};

export default withTranslation()(Footer);
