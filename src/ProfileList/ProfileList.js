import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfiles } from "../slices/profilesSlice";
//Usually in React we are using some parent element to wrap our components like <div>
//We can use React.Fragment to wrap our components without using <div>
//React.Fragment is a component that does not render anything, it is a placeholder
//Shorthand syntax for <React.Fragment> is <></
export const StudentProfiles = () => { //Remember to add "<StudentProfiles/>" in App !!!!!!!!!!!!!!!!                             !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const profiles = useSelector(state => state.profiles.list);
  const status = useSelector(state => state.profiles.status);
  const error = useSelector(state => state.profiles.error);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };
  const filtered = !search
  ? profiles: profiles.filter((person) =>
      person.email.toLowerCase().includes(search.toLowerCase())
    );
  
  //If dependency array is empty, useEffect will run only once
  //if dependency array is not empty, useEffect will run every time the values in dependency array are changing
  //if there is no dependency array, useEffect will run on every render
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProfiles());
    }
  }, [dispatch, status]);
  
  if (!token || token.length === 0 || error) {
    return <div>Please login to see student profiles</div>;
  }
  return (
    <>
      <h2>Students profiles:</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {/* {profiles.map(({ index, first_name, last_name, email, avatar }) => (
            <tr key={index}> */}
          {profiles.map(({ key, first_name, last_name, email, avatar }) => (
            <tr key={key}>
              <td>{first_name} {last_name}</td>
              <td>{email}</td>
              <img key={avatar} src={avatar}/>
            </tr>
          ))}
        </tbody>

        <>
          <h2>Filter</h2>
          Filter persons:{" "}  
          <input type="text" value={search} onChange={handleSearchChange} />
          <h2>Emails:</h2>
          {filtered.map((person) => {
            return (
              <p key={person.email}>
                {person.email}
              </p>
            );
          })}
        </>
        
      </table>
    </>
  );
};