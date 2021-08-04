import React from "react";
import { memo } from "react";
import ContentContainer from "../contents/content_container";
import ContentScreen from "../contents/content_screen";

const KidsPopular = memo(({ popularKids: { results } }) => {
  return (
    <ContentContainer
      title='인기 키즈'
      children={
        results &&
        results.map((content) => (
          <ContentScreen
            id={content?.id}
            key={content?.id}
            title={content?.name}
            poster={content?.poster_path}
          />
        ))
      }
    />
  );
});

export default KidsPopular;
