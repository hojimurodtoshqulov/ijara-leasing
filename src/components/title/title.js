import styles from "./title.module.scss";
// import Typed from "react-typed";
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
  const [typedState, setTypedState] = useState([title]);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  console.log(title);

  useEffect(() => {
    setTypedState((prev) => [...prev, title]);
  }, [title]);
  return (
    <div ref={ref}>
      {isVisible && (
        <h2
          className={`${styles.title} ${underline && styles.underline} 
    ${small && styles.small} ${border && styles.border}`}
          {...props}
        >
          {/* {typedState ? (
            <>
              <Typed cursorChar="" strings={typedState} typeSpeed={100} />
            </>
          ) : ( */}
          {title}
          {/* )} */}
        </h2>
      )}
    </div>
  );
};

export default Title;
