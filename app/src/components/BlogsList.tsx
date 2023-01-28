import styled from "styled-components";
import { ShowMoreBtn } from "./Elements/Buttons/ShowMoreBtn";
import { BlogCard } from "./Blog/BlogCard/BlogCard";

export const BlogsWrapper = styled.div`
  /* width: 100%; */
  margin: 48px 64px 0 24px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-content: space-between; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;
const blogs = [
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "12.12.2022",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "12.12.2022",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "12.12.2022",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "12.12.2022",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "12.12.2022",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
  {
    src: "",
    title: "AsalamaleikumBrat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non voluptas magnam libero totam numquam ducimus dolor earum quisquam beatae dignissimos, unde mollitia quasi provident architecto ipsum porro sapiente dolore molestiae ipsam nostrum accusantium vero odit incidunt. Culpa labore quaerat hic consequatur vero, quibusdam, perferendis minima dolores praesentium cupiditate iste magnam tenetur reiciendis nesciunt assumenda cumque alias quod placeat voluptate.",
    data: "",
  },
];
export const BlogsList = () => {
  // рендерим посты и задаём количество которое показать
  const postLengthChecked = (blogs: any[], countForShow = 6) => {
    blogs.splice(countForShow);
    return blogs.map((p, index) => {
      return <BlogCard {...p} key={index + "post"} />;
    });
  };

  return (
    <BlogsWrapper>
      {postLengthChecked(blogs)}
      <ShowMoreBtn />
    </BlogsWrapper>
  );
};
