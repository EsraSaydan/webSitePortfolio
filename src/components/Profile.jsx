import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import m from "../assets/m.jpeg";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function Profile() {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div
      className={`${
        darkMode ? "bg-customDarkBlue" : "bg-customBlue"
      } flex justify-center py-10`}
    >
      <div className="w-full max-w-screen-lg">
        <h2 className=" border-none font-bold text-4xl md:text-4xl  ml-[6rem] md:ml-[7rem] mb-5 text-customLightGreen">
          {t(`profile`)}
        </h2>
        <CardGroup className="h-auto mb-12 flex flex-col lg:flex-row">
          <Card className="text-customWhite md:p-6 border-none bg-transparent w-full lg:w-1/3">
            <CardBody className="ml-[5rem] md:ml-[70px]">
              <CardTitle tag="h5" className="text-[22px] font-bold mb-3 ">
                {t(`information`)}
              </CardTitle>
              <div className="mb-2 flex text-[16px] items-center">
                <CardSubtitle className=" text-customLightGreen " tag="h6">
                  {t(`date`)}
                </CardSubtitle>
                <CardText className=" translate-x-[2rem] md:translate-x-7 mb-1">
                  {" "}
                  {t(`birthDate`)}
                </CardText>
              </div>
              <div className="mb-2 flex text-[16px] items-center ">
                <CardSubtitle className=" text-customLightGreen " tag="h6">
                  {t(`residence`)}
                </CardSubtitle>
                <CardText className="translate-x-[55px] md:translate-x-[49px] mb-1">
                  {" "}
                  {t(`hometown`)}
                </CardText>
              </div>
              <div className="mb-2 flex text-[16px] items-center ">
                <CardSubtitle className=" text-customLightGreen " tag="h6">
                  {t(`education`)}
                </CardSubtitle>
                <CardText className="ml-[55px] md:ml-5 mb-1 text-[13px] md:translate-x-8">
                  {t(`uni`)}
                  <br /> {t(`uni1`)}
                </CardText>
              </div>
              <div className="mb-2 flex text-[16px] items-center">
                <CardSubtitle className=" text-customLightGreen mb-0 " tag="h6">
                  {t(`role1`)}
                </CardSubtitle>
                <CardText className="translate-x-6 mb-2 ">
                  {t(`role2`)}
                </CardText>
              </div>
            </CardBody>
          </Card>
          <Card className="flex items-center justify-center p-6 bg-transparent border-none w-full lg:w-1/3 md:-translate-x-2">
            <CardImg
              alt="Profile Image"
              src={m}
              className="h-72 w-80 lg:h-60  lg:w-60 hover:scale-105 duration-300 object-cover md:-translate-y-[30px] rounded-lg"
            />
          </Card>
          <Card className="text-white p-6 border-none bg-transparent w-full lg:w-1/3 lg:ml-[-1rem] md:-translate-x-11">
            <CardBody>
              <CardTitle
                tag="h5"
                className="text-[22px] font-bold mb-4  ml-[95px] md:-translate-x-[85px]  "
              >
                {t(`about`)}
              </CardTitle>
              <CardText className="mb-4 px-4 md:-translate-x-3 text-[14px] ">
                {t(`abouttext`)}
                <br />
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Profile;
