import { FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ShowMoreBtn } from "../Elements/Buttons/ShowMoreBtn";
const Wrapper = styled.div`
  min-height: 156px;
  margin-left: 24px;
  margin-right: 64px;
  display: flex;
  flex-wrap: nowrap;
  padding-top: 11px;
  padding-bottom: 11px;
  border-bottom: 1px solid #dedbdc;
`;

const ImgTitle = styled.img`
  width: 156px;
  height: 156px;
  background: #ffffff;
  border: 1px solid #dedbdc;
  border-radius: 50%;
  flex-shrink: 0;
`;

const InfoWrapper = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

type TitlePropsType = { creationDate?: string };
const Title = styled.h1<TitlePropsType>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  /* identical to box height, or 133% */

  /* Neutral Dark / -60 */

  color: #1a1718;
  margin-bottom: ${(props) => (props.creationDate ? "32px" : "")};
`;

const InfoCreation = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  letter-spacing: 0.02em;

  color: #797476;
`;

const WebsiteText = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #737067;
  padding-bottom: 20px;
`;

const MainText = styled.p`
  display: flex;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #1a1718;
`;

export type BlogPropsType = {
  title: string;
  website: string;
  text: string;
  img: string;
  showMoreBtn?: boolean;
  creationDate?: string;
};

export const Blog: FC<BlogPropsType> = ({
  title,
  website,
  text,
  img,
  showMoreBtn,
  creationDate,
}) => {
  const navigate = useNavigate();
  const onClickTitleHandler = () => navigate("/blog/" + title);
  return (
    <Wrapper>
      <ImgTitle />
      <InfoWrapper>
        <Title creationDate={creationDate} onClick={onClickTitleHandler}>
          {title}
        </Title>
        {creationDate && (
          <InfoCreation>
            Blog creation date:{" "}
            <span style={{ color: "black" }}>{creationDate}</span>
          </InfoCreation>
        )}
        <WebsiteText>
          Website:{" "}
          <a style={{ textDecoration: "underline" }} href='#!'>
            {` ${website}`}
          </a>
        </WebsiteText>
        <MainText>{text}</MainText>
        {showMoreBtn && <ShowMoreBtn noBorder={true} />}
      </InfoWrapper>
    </Wrapper>
  );
};
