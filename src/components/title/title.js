import styles from "./title.module.scss";

const Title = ({
  children,
  underline = true,
  border = true,
  small,
  ...props
}) => {
  return (
    <h2
      className={`${styles.title} ${underline && styles.underline} 
      ${small && styles.small} ${border && styles.border}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Title;
