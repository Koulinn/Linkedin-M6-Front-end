import { useState } from "react";

const TextPost = (props) => {
  const [displayText, setDisplayText] = useState(false);

  const showText = (text) => {
    setDisplayText(text);
  };

  const shortText = props.post.text.slice(0,200);

  const completeText = props.post.text;

  return (
    <div>
      <p className="text-post">
        {!displayText && shortText}
        {!displayText && completeText.length > 150 && (
          <span
            className="mb-0 see-more"
            onClick={() => showText(completeText)}
          >
            ...see more
          </span>
        )}
        {displayText && displayText}
      </p>
    </div>
  );
};
export default TextPost;
