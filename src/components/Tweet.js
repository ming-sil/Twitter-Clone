import React from "react";

export const Tweet = ({ tweetObj, isOwner }) => {
  <div>
    <h4>{tweetObj.text}</h4>
    {isOwner && (
      <>
        <button>Delete</button>
        <button>Edit</button>
      </>
    )}
  </div>;
};
