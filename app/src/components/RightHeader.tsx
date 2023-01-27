import { FC } from "react";
import styled from "styled-components";
import { nextPageIcon } from "../img/icons/IconsConstant";
import { SvgNextPageIcon } from "./Elements/Icons/SvgNextPageIcon";
import { Link } from "react-router-dom";
const HeaderNav = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-left: 24px;
  margin-top: 29px;
  border-bottom: 1px solid #dedbdc;
  padding-bottom: 7px;
  width: 100%;

  display: flex;
  align-items: center;
  /* Neutral Dark / -60 */

  color: #1a1718;
`;

const LinkHeader = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  /* Neutral Dark / -60 */
  color: #1a1718;
  padding: 5px 0 0 10px;
`;

type RightHeaderPropsType = {
  blogTitle?: string;
  headerTitle?: "Blogs" | "Posts";
};

export const RightHeader: FC<RightHeaderPropsType> = ({
  blogTitle,
  headerTitle,
}) => {
  const h1Text = () => (headerTitle ? headerTitle : "Blogs");

  const h1Link = () =>
    headerTitle ? `${"/" + headerTitle.toLowerCase()}` : "/ ";
  return (
    <HeaderNav>
      <Link to={h1Link()}>{h1Text()}</Link>
      {blogTitle && (
        <>
          <SvgNextPageIcon d={nextPageIcon} viewBox='0 0 4 8' fill='#797476' />
          <LinkHeader>
            <a href='#!'>{blogTitle}</a>
          </LinkHeader>
        </>
      )}
    </HeaderNav>
  );
};
