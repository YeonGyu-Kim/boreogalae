import React, { memo } from "react";
import ContentContainer from "../contents/content_container";
import ContentScreen from "../contents/content_screen";

const KidsLatest = memo(({ kidsLatest: { results } }) => {
  return (
    <ContentContainer
      title='최근 키즈'
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

export default KidsLatest;
