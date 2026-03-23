"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";

import "./Dock.css";

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  isVisible = true,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: isVisible ? 1 : 0,
        marginLeft: isVisible ? 0 : -12,
        scale: isVisible ? 1 : 0.85,
      }}
      transition={{
        width: { duration: 0.24, ease: "easeOut" },
        height: { duration: 0.24, ease: "easeOut" },
        opacity: { duration: 0.18, ease: "easeOut" },
        marginLeft: { duration: 0.24, ease: "easeOut" },
        scale: { duration: 0.24, ease: "easeOut" },
      }}
      style={{
        width: isVisible ? size : 0,
        height: isVisible ? size : 0,
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
    >
      {Children.map(children, (child) =>
        cloneElement(child, { isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{
            x: "-50%",
            pointerEvents: "none",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  baseItemSize = 50,
  collapsedVisibleCount,
  collapseDelay = 700,
  activationPadding = 34,
}) {
  const mouseX = useMotionValue(Infinity);
  const [isExpanded, setIsExpanded] = useState(false);
  const collapseTimeoutRef = useRef(null);

  const openDock = () => {
    if (collapseTimeoutRef.current) {
      window.clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }
    setIsExpanded(true);
  };

  const scheduleCloseDock = () => {
    if (!collapsedVisibleCount) {
      return;
    }
    if (collapseTimeoutRef.current) {
      window.clearTimeout(collapseTimeoutRef.current);
    }
    collapseTimeoutRef.current = window.setTimeout(() => {
      setIsExpanded(false);
      mouseX.set(Infinity);
    }, collapseDelay);
  };

  useEffect(() => {
    return () => {
      if (collapseTimeoutRef.current) {
        window.clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="dock-outer"
      style={{
        overflow: "visible",
        padding: `${activationPadding}px`,
        margin: `-${activationPadding}px`,
      }}
      onMouseEnter={openDock}
      onMouseLeave={scheduleCloseDock}
      onFocusCapture={openDock}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          scheduleCloseDock();
        }
      }}
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          openDock();
          mouseX.set(pageX);
        }}
        className={`dock-panel ${className}`}
        style={{
          height: panelHeight, // tinggi tetap
          overflow: "visible", // icon bisa keluar area
        }}
        role="toolbar"
      >
        {items.map((item, index) => (
          <DockItem
            key={item.label ?? index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            isVisible={!collapsedVisibleCount || isExpanded || index < collapsedVisibleCount}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
