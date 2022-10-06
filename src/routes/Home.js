import React, { useState } from "react";
import { dbService } from "../fbase";

export const Home = () => {
  const [tweet, setTweet] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("tweets").add({
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
