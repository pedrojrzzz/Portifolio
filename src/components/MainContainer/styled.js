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
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 20px;

      .github-container {
        padding: 2px;
        cursor: pointer;

        &:hover {
          background-color: ${(props) => props.colorConfig.hoverIcon};
          border-radius: 5px;
        }
      }

      .linkedin-container {
        padding: 2px;
        cursor: pointer;
        margin-left: 12px;

        &:hover {
          background-color: ${(props) => props.colorConfig.hoverIcon};
          border-radius: 5px;
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
  }

  .nav-container {
    padding-top: 90px;

    ul li {
      list-style-type: none;
      margin: 15px;
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

    .active {
      background-color: ${(props) => props.colorConfig.hoverIcon};
      transition: 0.1s;
    }
  }

  .content-container {
    margin-top: 80px;
    height: fit-content;
    margin-left: 23px;
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
  }

  .title-container {
    width: fit-content;
    height: fit-content;

    h2 {
      color: ${(props) => props.colorConfig.textColor};
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
