"use client";

import { motion } from "framer-motion";

interface ShapeProps {
  type: "square" | "circle" | "diamond" | "blob";
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  delay?: number;
  rotate?: number;
  blur?: boolean;
}

export function GeometricShape({
  type,
  color = "bg-brand-blue/20",
  size = 32,
  top,
  left,
  delay = 0,
  rotate = 0,
  blur = false,
}: ShapeProps) {
  const variants = {
    square: "border-4 border-current rounded-lg",
    circle: "rounded-full bg-current",
    diamond: "border-4 border-current rotate-45 rounded-sm",
    blob: "rounded-[40%_60%_70%_30%/40%_50%_60%_40%] bg-current",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        y: [0, -20, 0],
        rotate: [rotate, rotate + 10, rotate],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={`absolute pointer-events-none ${color} ${blur ? 'blur-3xl' : ''} ${variants[type]}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        color: color.includes('border') ? 'inherit' : undefined
      }}
    />
  );
}

interface GeometricBackgroundProps {
  showGrid?: boolean;
  showMesh?: boolean;
  shapes?: ShapeProps[];
}

export default function GeometricBackground({
  showGrid = true,
  showMesh = true,
  shapes = []
}: GeometricBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Mesh Gradient */}
      {showMesh && (
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/10 blur-[120px]" />
        </div>
      )}

      {/* Dot Grid */}
      {showGrid && (
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(#1A56DB 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      )}

      {/* Abstract Shapes */}
      {shapes.map((shape, i) => (
        <GeometricShape key={i} {...shape} />
      ))}
    </div>
  );
}
