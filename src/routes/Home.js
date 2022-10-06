import React, { useState } from "react";
import { dbService } from "../fbase";
import { addDoc, collection } from "firebase/firestore";

export const Home = () => {
  const [tweet, setTweet] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, "tweets"), {
      tweet,
      createdAt: Date.now(),
    });
    setTweet("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setTweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="tweet" />
      </form>
    </div>
  );
};
