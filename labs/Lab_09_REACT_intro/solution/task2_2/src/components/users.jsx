import React, { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Александр Цой 🐺",
      text: "Где ВДВ ломает ноги, там ЖДВ кладет дороги!",
      img: "https://sun9-75.userapi.com/impg/PPMf46X-evqHOsSYXswl-Pk4xBxYe5zm4xxStQ/Ra2Nst5LQM8.jpg?size=402x604&quality=95&sign=a9ba1dba691bebb6fb988ea263128f42&c_uniq_tag=889UQnEVM8KeIAM-EOUH2HLXR-SAdsCedzTHj9BCxD4&type=album",
      liked: false,
    },
    {
      id: 2,
      name: "Яна Смирнова 🐱",
      text: "Не успеваю успевать 🤷‍♀️",
      img: "https://sun9-77.userapi.com/impg/5tAxLrTk_xkFCqU_J7z5HnhI8CIcYHmYeDoM7Q/rgdbqjebaiA.jpg?size=320x481&quality=95&sign=41370835dfe9a87382e2017c5c403297&c_uniq_tag=dgKwYW2OAmdUCGJMYOrizoZtnFYVfD-Gf6r9mOsALgE&type=album",
      liked: false,
    },
    {
      id: 3,
      name: "Виктор Цой 🎸🔥",
      text: "Группа крови – на рукаве,\
      \nМой порядковый номер – на рукаве,\
      \nПожелай мне удачи в бою,\
      \nПожелай мне:\
      \nНе остаться в этой траве,\
      \nНе остаться в этой траве.\
      \nПожелай мне удачи,\
      \nПожелай мне удачи!",
      img: "https://sun9-26.userapi.com/impg/lwVJukPHKAi4GJdFeQlCp_VHzVI-rB6OMB4kgg/KJyKIPLAMpk.jpg?size=873x1080&quality=96&sign=f535e49a47244cff8f0bbb0f09322cc0&type=album",
      liked: false,
    },
  ]);

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, liked: !post.liked };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="container">
      <h1>
        <span className="badge bg-primary mb-3 shadow">Новости</span>
      </h1>
      {posts.map((post) => (
        <div key={post.id} className="card mb-3 bg-light shadow">
          <div className="card-body">
            <h4 className="card-title">{post.name}</h4>
            <img
              src={post.img}
              className="card-img mb-2 shadow"
              style={{ width: "270px", height: "auto" }}
              alt="image"
            ></img>
            <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
              {post.text}
            </p>
            <button
              className={
                post.liked
                  ? "btn btn-danger rounded-pill"
                  : "btn btn-outline-primary rounded-pill"
              }
              onClick={() => handleLike(post.id)}
            >
              {post.liked ? (
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-suit-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-suit-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
