import React, { useRef } from "react";
import { useInView } from "framer-motion";

function EnterAnim({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        className="   opacity-0"
        style={{
          transform: isInView ? "none" : "translatey(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>
        {children}
      </span>
    </section>
  );
}

export default EnterAnim;
