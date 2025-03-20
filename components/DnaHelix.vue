<template>
    <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 0C60 0 20 40 20 100C20 160 60 200 60 200" stroke="#27628C" stroke-width="4" stroke-linecap="round" class="animate-dna-strand" />
      <path d="M60 0C60 0 100 40 100 100C100 160 60 200 60 200" stroke="#27628C" stroke-width="4" stroke-linecap="round" class="animate-dna-strand-delay" />
      
      <!-- DNA rungs -->
      <line x1="30" y1="20" x2="90" y2="20" stroke="#27628C" stroke-width="3" class="animate-dna-rung" />
      <line x1="25" y1="40" x2="95" y2="40" stroke="#27628C" stroke-width="3" class="animate-dna-rung" />
      <line x1="22" y1="60" x2="98" y2="60" stroke="#27628C" stroke-width="3" class="animate-dna-rung" />
      <line x1="20" y1="80" x2="100" y2="80" stroke="#27628C" stroke-width="3" class="animate-dna-rung" />
      <line x1="20" y1="100" x2="100" y2="100" stroke="#27628C" stroke-width="3" class="animate-dna-rung" />
      <line x1="22" y1="120" x2="98" y2="120" stroke="#27628C" stroke-width="3" class="animate-dna-rung" />
      <line x1="25" y1="140" x2="95" y2="140" stroke="#27628C" stroke-width="3" class="animate-dna-rung" />
      <line x1="30" y1="160" x2="90" y2="160" stroke="#27628C" stroke-width="3" class="animate-dna-rung" />
      <line x1="35" y1="180" x2="85" y2="180" stroke="#27628C" stroke-width="3" class="animate-dna-rung" />
    </svg>
  </template>
  
  <style scoped>
  @keyframes dnaStrand {
    0%, 100% {
      stroke-dasharray: 240;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 240;
      stroke-dashoffset: 120;
    }
  }
  
  @keyframes dnaRung {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
  
  .animate-dna-strand {
    animation: dnaStrand 15s linear infinite;
  }
  
  .animate-dna-strand-delay {
    animation: dnaStrand 15s linear infinite reverse;
  }
  
  .animate-dna-rung {
    animation: dnaRung 5s ease-in-out infinite;
    animation-delay: calc(var(--index, 0) * 0.5s);
  }
  
  .animate-dna-rung:nth-child(3) { --index: 1; }
  .animate-dna-rung:nth-child(4) { --index: 2; }
  .animate-dna-rung:nth-child(5) { --index: 3; }
  .animate-dna-rung:nth-child(6) { --index: 4; }
  .animate-dna-rung:nth-child(7) { --index: 5; }
  .animate-dna-rung:nth-child(8) { --index: 6; }
  .animate-dna-rung:nth-child(9) { --index: 7; }
  .animate-dna-rung:nth-child(10) { --index: 8; }
  .animate-dna-rung:nth-child(11) { --index: 9; }
  </style>
  
  