import { async } from "@firebase/util";
import { dbService } from "fbase";
import React, { useState } from "react";

export const Tweet = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweeet] = useState(tweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this tweet?");
    if (ok) {
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
    }
  };
  const toggleEditing = () => {
    setEditing((prev) => !prev);
    const onSubmit = async (e) => {
      e.preventDefault();
      await dbService.doc(`tweets/${tweetObj}`).update({
        text: newTweet,
      });
      setEditing(false);
    };
    const onChange = (e) => {
      const {
        target: { value },
      } = e;
      setNewTweeet(value);
    };
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your tweet"
              value={newTweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Tweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{tweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete</button>
              <button onClick={toggleEditing}>Edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
};
