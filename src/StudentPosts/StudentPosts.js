import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../slices/postsSlice";
//Usually in React we are using some parent element to wrap our components like <div>
//We can use React.Fragment to wrap our components without using <div>
//React.Fragment is a component that does not render anything, it is a placeholder
//Shorthand syntax for <React.Fragment> is <></
// export const StudentPosts = ({isAdmin}) => {
export const StudentPosts = () => {
  //const navigate = useNavigate();
  //const [posts, setPosts] = useState([]);
  const posts = useSelector(state => state.posts.list);
  const status = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();

  //If dependency array is empty, useEffect will run only once
  //if dependency array is not empty, useEffect will run every time the values in dependency array are changing
  //if there is no dependency array, useEffect will run on every render
  useEffect(() => {
    //fetch("https://jsonplaceholder.typicode.com/posts")
    //  .then((response) => response.json())
    //  .then((json) => setPosts(json))
    //  .catch((error) => console.log(error));
    //return () => {
    //  "Cleanup codes";
    //};
    if (status === "idle") {
      dispatch(fetchPosts())
    }
  }, [dispatch, status]);

  // if (!isAdmin || error) {
  //   return null;
  // }

  if (!token || token.length === 0 || error) {
    return <div>Please login to see student posts</div>;
  }
  return (
    <>
      <h2>What students are thinking:</h2>
      <table>
        <thead>
          <tr>
            <th>Titles</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.slice(0, 10).map(({ index, title, body }) => (
            <tr key={index}>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={() => navigate('/')}>
        Login
      </button> */}
    </>
  );
};