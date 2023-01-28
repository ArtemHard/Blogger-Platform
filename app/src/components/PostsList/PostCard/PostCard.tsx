import { FC } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 300px;
  height: 268px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
type MainImgPropsType = {
  src: string;
};
const MainImg = styled.img.attrs<MainImgPropsType>((props) => ({
  src: props.src,
}))`
  height: 180px;
  width: 300px;
  background-image: black;
  margin-bottom: 18px;
  object-fit: cover;
`;

const Img = styled.img.attrs<MainImgPropsType>((props) => ({
  src: props.src,
}))`
  height: 48px;
  width: 48px;
  /* background-image: black; */
  border: 1px solid #dedbdc;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Neutral Dark / -60 */

  color: #1a1718;
`;
const Info = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  /* Neutral Dark/+30 */

  color: #797476;
`;

const CreationDate = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  letter-spacing: 0.02em;

  /* Neutral Light / -60 */

  color: #636262;
`;
type PostCardPropsType = {
  mainSrc: string;
  imgSrc: string;
  title: string;
  info: string;
  creationData: string;
};
export const PostCard: FC<PostCardPropsType> = ({
  mainSrc,
  imgSrc,
  title,
  info,
  creationData,
}) => {
  return (
    <Wrapper>
      <MainImg src={mainSrc} />
      <BottomWrapper>
        <Img src={imgSrc} />
        <InfoWrapper>
          <Title>{title}</Title>
          <Info>{info}</Info>
          <CreationDate>{creationData}</CreationDate>
        </InfoWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};
