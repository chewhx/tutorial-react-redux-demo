import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/";

function UserContainer() {
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const userdata = useSelector((state) => state.user.users);

  const dispatch = useDispatch();

  return (
    <>
      <h1>User List</h1>
      <div>
        <ul style={{ listStyle: "none" }}>
          {userdata &&
            userdata.map(({ id, name, username }) => (
              <li>
                {id}) {name} / {username}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default UserContainer;
