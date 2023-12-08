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
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const [newPost, setNewPost] = useState({
    id: null,
    name: "",
    text: "",
    img: "",
    liked: false,
  });

  const handleAddPost = () => {
    if (newPost.name && newPost.text) {
      const updatedPosts = [...posts, { ...newPost, id: posts.length + 1 }];
      setPosts(updatedPosts);
      setNewPost({
        id: null,
        name: "",
        text: "",
        img: "",
        liked: false,
      });
    }
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <div
        className="container"
        style={{ minWidth: "420px", maxWidth: "500px" }}
      >
        <div className="card mb-3 bg-light shadow">
          <div className="card-body">
            <h3 className="card-title mb-3">Новый пост</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Имя
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={newPost.name}
                onChange={(e) =>
                  setNewPost({ ...newPost, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Текст
              </label>
              <textarea
                className="form-control"
                id="text"
                value={newPost.text}
                onChange={(e) =>
                  setNewPost({ ...newPost, text: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="img" className="form-label">
                Изображение (cсылка на фото)
              </label>
              <input
                type="text"
                className="form-control"
                id="img"
                value={newPost.img}
                onChange={(e) =>
                  setNewPost({ ...newPost, img: e.target.value })
                }
              />
            </div>
            <button className="btn btn-primary" onClick={handleAddPost}>
              Добавить пост
            </button>
          </div>
        </div>
        <h1>
          <span
            className={
              "badge mt-5 mb-3 shadow bg-" +
              (posts.length > 0 ? "primary" : "danger")
            }
          >
            {posts.length > 0 ? "Новости" : "Новостей нет"}
          </span>
        </h1>
        {posts.map((post) => (
          <div key={post.id} className="card mb-3 bg-light shadow">
            <div className="card-body">
              <h3 className="card-title mb-3">{post.name}</h3>
              {post.img && (
                <img
                  src={post.img}
                  className="card-img mb-2 shadow"
                  style={{ width: "360px", height: "auto" }}
                  alt="image"
                />
              )}
              <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
                {post.text}
              </p>
              <button
                    className={
                      "btn rounded-pill btn-" +
                      (post.liked ? "danger " : "outline-primary")
                    }
                    onClick={() => handleLike(post.id)}
                  >
                    {post.liked ? (
                      <i class="bi bi-suit-heart-fill"></i>
                    ) : (
                      <i class="bi bi-suit-heart"></i>
                    )}
                  </button>
              <button
                className="btn btn-outline-danger mx-5 rounded-pill position-relative"
                onClick={() => handleDeletePost(post.id)}
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-x-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
