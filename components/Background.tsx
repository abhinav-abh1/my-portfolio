"use client";
import { useEffect, useRef } from "react";

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let W = (canvas.width = window.innerWidth);
        let H = (canvas.height = window.innerHeight);

        const stars = Array.from({ length: 220 }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.5 + 0.3,
            speed: Math.random() * 0.15 + 0.05,
            opacity: Math.random() * 0.7 + 0.2,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinkleOffset: Math.random() * Math.PI * 2,
        }));

        let frame = 0;
        let raf: number;

        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            frame++;

            stars.forEach((s) => {
                const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
                const alpha = s.opacity * (0.6 + 0.4 * twinkle);
                const glow = s.r * (1 + 0.3 * twinkle);

                const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glow * 3);
                gradient.addColorStop(0, `rgba(0,245,255,${alpha})`);
                gradient.addColorStop(0.5, `rgba(180,240,255,${alpha * 0.3})`);
                gradient.addColorStop(1, "transparent");

                ctx.beginPath();
                ctx.arc(s.x, s.y, glow * 3, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                s.y -= s.speed;
                if (s.y < -5) {
                    s.y = H + 5;
                    s.x = Math.random() * W;
                }
            });

            raf = requestAnimationFrame(draw);
        };

        draw();

        const onResize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <>
            {/* Starfield canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
                style={{ opacity: 0.9 }}
            />

            {/* Perspective grid */}
            <div className="grid-overlay" />

            {/* Nebula blobs */}
            <div className="nebula-1" />
            <div className="nebula-2" />
            <div className="nebula-3" />

            {/* Scanlines */}
            <div className="scanlines fixed inset-0 pointer-events-none z-0" />
        </>
    );
}