"use client";

export default function Background() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#09090b]">
            <div 
                className="absolute inset-0 opacity-[0.03]" 
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/50 to-[#09090b]" />
        </div>
    );
}