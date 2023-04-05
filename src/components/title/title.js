import styles from "./title.module.scss";
import Typed from "react-typed";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Title = ({
  underline = true,
  border = true,
  small,
  title,
  typed,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div ref={ref}>
      {isVisible && (
        <h2
          className={`${styles.title} ${underline && styles.underline} 
    ${small && styles.small} ${border && styles.border}`}
          {...props}
        >
          {typed ? (
            <Typed cursorChar="" strings={[title]} typeSpeed={100} />
          ) : (
            title
          )}
        </h2>
      )}
    </div>
  );
};

export default Title;
