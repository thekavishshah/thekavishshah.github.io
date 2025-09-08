import { useEffect, useRef } from "react";

type Props = {
  src: string;
  width?: number;
  threshold?: number; // 0..1 similarity threshold
  keyColor?: { r: number; g: number; b: number };
  autoKeyFromCorners?: boolean; // if true, sample 4 corners to infer key color
  onMeasured?: (bounds: { width: number; height: number }) => void;
  className?: string;
  style?: React.CSSProperties;
};

// Simple client-side chroma key using canvas. Targets green backgrounds and makes them transparent.
// This is an approximation; providing a transparent PNG is preferable.
export default function ChromaKeyImage({
  src,
  width = 520,
  threshold = 0.35,
  keyColor = { r: 158, g: 193, b: 98 }, // default green
  autoKeyFromCorners = true,
  onMeasured,
  className,
  style,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const scale = width / img.width;
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      let kR = keyColor.r;
      let kG = keyColor.g;
      let kB = keyColor.b;

      // Optional: infer key color from the 4 corners to support purple/grey backgrounds
      if (autoKeyFromCorners) {
        const sample = (x: number, y: number) => {
          const idx = (y * w + x) * 4;
          return [data[idx], data[idx + 1], data[idx + 2]] as const;
        };
        const [r1, g1, b1] = sample(2, 2);
        const [r2, g2, b2] = sample(w - 3, 2);
        const [r3, g3, b3] = sample(2, h - 3);
        const [r4, g4, b4] = sample(w - 3, h - 3);
        kR = Math.round((r1 + r2 + r3 + r4) / 4);
        kG = Math.round((g1 + g2 + g3 + g4) / 4);
        kB = Math.round((b1 + b2 + b3 + b4) / 4);
      }

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        // Normalize colors and compute similarity to key using cosine similarity
        const dot = r * kR + g * kG + b * kB;
        const mag = Math.sqrt(r * r + g * g + b * b) * Math.sqrt(kR * kR + kG * kG + kB * kB);
        const sim = mag === 0 ? 0 : dot / mag; // 0..1
        if (sim > 0.95) {
          data[i + 3] = 0; // transparent
        }
        // Soften edges: if near threshold, reduce alpha proportionally
        else {
          const dist = Math.max(0, sim - 0.9);
          if (dist > threshold - 0.3) {
            data[i + 3] = Math.min(255, Math.max(0, data[i + 3] * 0.3));
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      // Measure content bounds (non-transparent area)
      let minX = w, minY = h, maxX = 0, maxY = 0;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4 + 3;
          if (data[idx] > 10) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }
      const contentWidth = Math.max(0, maxX - minX);
      const contentHeight = Math.max(0, maxY - minY);
      onMeasured?.({ width: contentWidth || w, height: contentHeight || h });
    };
  }, [src, width, keyColor.r, keyColor.g, keyColor.b, threshold, onMeasured, autoKeyFromCorners]);

  return <canvas ref={canvasRef} className={className} style={style} />;
}


