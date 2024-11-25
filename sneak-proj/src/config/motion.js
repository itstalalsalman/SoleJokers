const transition = { type: "spring", duration: 0.8 };
    
export const slideAnimation = (direction) => {
    return {
        hidden: {
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
            transition: { ...transition, delay: 0.5 },
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ...transition, delay: 0 },
        },
        exit: {
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            transition: { ...transition, delay: 0 },
        },
    };
};

export const mainAnimation = (opacity, scale) => {
    return {
        opacity: opacity,
        scale: scale
    }
}

export const transitionControls = (duration, type) => {
    return {
        duration: duration,
        type: type
    }
}

export const animationInitials = (x, opacity) => {
    return {
      x: x,
      opacity: opacity
    }
}