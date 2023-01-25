import styled from "styled-components";
import { ShowMoreBtn } from "./Elements/Buttons/ShowMoreBtn";
import { Post } from "./Post/Post";

const PostsWrapper = styled.div`
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
const posts = [
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
export const PostsList = () => {
  // рендерим посты и задаём количество которое показать
  const postLengthChecked = (posts: any[], countForShow = 6) => {
    posts.splice(countForShow);
    return posts.map((p, index) => {
      return <Post {...p} key={index + "post"} />;
    });
  };

  return (
    <PostsWrapper>
      {postLengthChecked(posts)}
      <ShowMoreBtn />
    </PostsWrapper>
  );
};
