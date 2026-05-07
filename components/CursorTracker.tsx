"use client";
import { useEffect, useRef } from "react";

export default function CursorTracker() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mx = 0, my = 0;
        let rx = 0, ry = 0;

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            dot.style.left = mx + "px";
            dot.style.top = my + "px";
        };

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        let raf: number;
        const animate = () => {
            rx = lerp(rx, mx, 0.12);
            ry = lerp(ry, my, 0.12);
            ring.style.left = rx + "px";
            ring.style.top = ry + "px";
            raf = requestAnimationFrame(animate);
        };
        animate();

        const onEnter = () => ring.classList.add("hover");
        const onLeave = () => ring.classList.remove("hover");

        const interactables = document.querySelectorAll("a, button, [data-cursor]");
        interactables.forEach((el) => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        window.addEventListener("mousemove", onMove);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            interactables.forEach((el) => {
                el.removeEventListener("mouseenter", onEnter);
                el.removeEventListener("mouseleave", onLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}