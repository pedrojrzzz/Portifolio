import styled from "styled-components";
import { fontSizeConfig, fontFamily } from "../../config/fonts";
import { LiaLinkedin, LiaGithub, LiaEnvelope } from "react-icons/lia";

export const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2.4fr;
  grid-template-rows: 30% 80%;
  height: 80vh;
  width: 60vw;
  background-color: transparent;
  position: relative;
  margin: 0 auto;
  top: 45%;
  transform: translateY(-50%);

  @media (max-width: 1538px) {
    margin: 0 auto;
    width: 70vw;
  }

  @media (max-width: 1280px) {
    width: 80vw;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .profile-image {
    height: 200px;
    width: 200px;
    border-radius: 115%;
    position: relative;
    box-shadow: 2px 1px 7px 0px black;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 115%;
    background-size: contain;
  }

  // Break layout
  @media (max-width: 1024px) {
    .profile-image {
      height: 185px;
      width: 185px;
      margin-bottom: 5px;
    }
  }
`;

export const PersonalInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  row-gap: 13px;

  .name {
    height: 50%;
    width: 100%;
    display: flex;
    align-items: end;

    p {
      margin-left: 20px;
      margin-bottom: 0;
      font-family: "Nunito Sans";
      font-size: ${fontSizeConfig.logoFontSize};
      font-weight: bolder;
      color: ${(props) => props.colorConfig.textColor};
    }
  }

  /** Quebra do layout para tablets */
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .name {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        margin: 0;
      }
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
  height: 100%;

  .social-media {
    height: 50%;
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 20px;
  }

  /** Quebra do layout para tablets */
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .social-media {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 15px;
      padding: 0;
    }
  }
`;

export const NavContainer = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: center;

  ul {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 150px;
    height: fit-content;
    padding: 0;
  }

  ul li {
    height: 25px;
    width: 100px;
    margin-top: 15px;
    position: relative;
    list-style-type: none;
    font-family: "Nunito Sans";
    color: ${(props) => props.colorConfig.textColor};
    font-weight: 500;
    cursor: pointer;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;

    &:hover {
      background-color: ${(props) => props.colorConfig.hoverIcon};
    }
  }

  .back {
    position: absolute;
    top: ${(props) => props.position};
    z-index: -1;
    height: 25px;
    width: 100px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    background-color: ${(props) => props.colorConfig.hoverIcon};
    transition: 0.2s ease-in-out;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 60px;
  height: fit-content;
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  border-radius: 10px;
  background-color: ${(props) => props.colorConfig.backgroundTextContent};
  border: 0.1px solid ${(props) => props.colorConfig.borderColor};

  .title-container {
    width: fit-content;
    height: fit-content;

    h2 {
      color: ${(props) => props.colorConfig.textColor};
      font-family: ${fontFamily.title};
      letter-spacing: 1px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 10px;
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    //padding-left: 10px;
    //padding-right: 10px;
  }
`;

export const GithubIcon = styled(LiaGithub)`
  height: 35px;
  width: 35px;
  color: ${(props) => props.colorConfig.textColor};
`;

export const LinkedinIcon = styled(LiaLinkedin)`
  height: 35px;
  width: 35px;
  color: #0067c7;
`;

export const EmailIcon = styled(LiaEnvelope)`
  height: 35px;
  width: 35px;
  color: ${(props) => props.colorConfig.textColor};
`;
