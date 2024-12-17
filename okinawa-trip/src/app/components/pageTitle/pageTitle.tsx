import classes from "./pageTitle.module.scss";
export const PageTitle = ({
  params,
}: {
  params: {
    content: string;
    size: string;
    isUnderline: boolean;
  };
}) => {
  return <div className={classes.title_container}>{params.content}</div>;
};
