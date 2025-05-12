import styled from "styled-components";
import { fontSizeConfig } from "../../config/fonts";
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

  .profile-image-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .profile-image {
      height: 195px;
      width: 172px;
      border-radius: 115%;
      background-color: red;
    }
  }

  .personal-info {
    display: flex;
    flex-direction: column;

    .name {
      height: 45%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      p {
        margin-left: 20px;
        font-family: "Nunito Sans";
        font-size: ${fontSizeConfig.titleSectionFontSizwe};
        font-weight: bolder;
        color: ${(props) => props.colorConfig.textColor};
      }
    }

    .social-media {
      height: 55%;
      width: fit-content;
      display: flex;
      flex-direction: row;
      gap: 15px;
      justify-content: space-between;
      align-items: flex-start;
      padding-left: 20px;

      .github-container {
        height: 40px;
        width: 40px;
        display: flex;
        overflow: hidden;
        transition: width 0.5s ease;
        background-color: ${(props) => props.colorConfig.backgroundIconColor};
        border-radius: 7px 7px 7px 7px;
        gap: 5px;
      }

      .github-container:hover {
        width: 100px;
      }

      .github-icon-container {
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .github-text-container {
        height: 40px;
        width: 80px;
        display: none;
      }

      .github-container:hover > .github-text-container {
        // display: inline;
        //justify-content: center;
        // align-items: center;
      }
    }

    .linkedin-container {
      height: 30px;
      width: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      padding-top: 3.2px;
      background-color: #1d2827;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #2f9c67;
      }
    }

    .email-container {
      padding: 2px;
      cursor: pointer;
      margin-left: 12px;

      &:hover {
        background-color: ${(props) => props.colorConfig.hoverIcon};
        border-radius: 5px;
      }
    }
  }

  .nav-container {
    margin-top: 55px;

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
  }

  .content-container {
    margin-top: 80px;
    height: fit-content;
    position: relative;
    overflow: hidden;
    padding-left: 20px;
    position: relative;
    border-radius: 10px;
    background-color: ${(props) => props.colorConfig.backgroundTextContent};
    //background-color: rgb(9, 15, 9);
    border: 0.1px solid ${(props) => props.colorConfig.borderColor};

    // & ::before {
    //content: "";
    //height: 100%; //You can change this if you want smaller/bigger borders
    //width: 1px;
    //position: absolute;
    //left: 0;
    //top: 0; // If you want to set a smaller height and center it, change this value
    //background-color: rgb(48, 51, 56); // The color of your border
    //animation: border-increase 1s ease forwards;
    // }

    @keyframes border-increase {
      from {
        height: 0%;
      }

      to {
        height: 50%;
      }
    }

    .title-container {
      width: fit-content;
      height: fit-content;

      h2 {
        color: ${(props) => props.colorConfig.textColor};
      }
    }
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
