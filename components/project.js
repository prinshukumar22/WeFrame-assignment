import { useMemo } from "react";

const Project = ({
  projectIcon,
  articles,
  newUpdates,
  propGap,
  propColor,
  propColor1,
}) => {
  const projectStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const articlesStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const newUpdatesStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className="flex-1 rounded-xl bg-background overflow-hidden flex flex-row items-start justify-start pt-[1.94rem] px-[1.56rem] pb-[1.89rem] box-border gap-[0.72rem] min-w-[12.61rem] max-w-full text-left text-[1.56rem] text-dark font-urbanist mq450:flex-wrap"
      style={projectStyle}
    >
      <img
        className="h-[4.31rem] w-[4.31rem] relative min-h-[4.33rem]"
        loading="eager"
        alt=""
        src={projectIcon}
      />
      <div className="flex flex-col items-start justify-start gap-[0.39rem]">
        <h2
          className="m-0 w-[5.22rem] h-[2.33rem] relative text-inherit leading-[150%] font-semibold font-inherit inline-block mq450:text-[1.22rem] mq450:leading-[1.89rem]"
          style={articlesStyle}
        >
          {articles}
        </h2>
        <div
          className="w-[8.17rem] h-[1.44rem] relative text-[0.94rem] leading-[150%] inline-block"
          style={newUpdatesStyle}
        >
          {newUpdates}
        </div>
      </div>
    </div>
  );
};

export default Project;
