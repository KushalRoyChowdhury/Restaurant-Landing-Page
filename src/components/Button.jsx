import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "relative overflow-hidden group px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer flex items-center justify-center active:scale-95";
    const variants = {
        primary: "bg-[#84cc16] text-[#0f291e] hover:bg-[#a3e635] hover:shadow-[0_0_20px_rgba(132,204,22,0.4)]",
        secondary: "bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white",
        outline: "border border-[#84cc16] text-[#84cc16] hover:bg-[#84cc16] hover:text-[#0f291e]",
        ghost: "text-white/80 hover:text-white"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-all duration-500 group-hover:left-full"></span>
            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default Button;
