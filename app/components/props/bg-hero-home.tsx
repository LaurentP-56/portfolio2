// app/components/BgHeroHome.tsx
import Image from 'next/image';
import React from 'react';

export default function BgHeroHome() {
  return (
<div className="relative w-full h-full -skew-x-12 opacity-50">
<Image
  src="/images/hero-bg.jpg"
  alt="Background Hero"
  fill
  style={{ objectFit: 'cover' }} // Remplace l'ancienne prop "layout"
/>
</div>
 );
}