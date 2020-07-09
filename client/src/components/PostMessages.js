import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../actions/postMessage";

const PostMessages = () => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAll());
  }, []);

  return <div>PostMessages</div>;
};

export default PostMessages;
