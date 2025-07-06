<template>
    <div class="molecule-container">
      <div v-for="i in 10" :key="i" class="molecule" :style="randomPosition()">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="6" fill="#27628C" />
          <circle cx="15" cy="15" r="4" fill="#27628C" />
          <circle cx="45" cy="15" r="4" fill="#27628C" />
          <circle cx="15" cy="45" r="4" fill="#27628C" />
          <circle cx="45" cy="45" r="4" fill="#27628C" />
          <line x1="30" y1="30" x2="15" y2="15" stroke="#27628C" stroke-width="2" />
          <line x1="30" y1="30" x2="45" y2="15" stroke="#27628C" stroke-width="2" />
          <line x1="30" y1="30" x2="15" y2="45" stroke="#27628C" stroke-width="2" />
          <line x1="30" y1="30" x2="45" y2="45" stroke="#27628C" stroke-width="2" />
        </svg>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  function randomPosition() {
    return {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${10 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 5}s`,
      transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`,
    };
  }
  </script>
  
  <style scoped>
  .molecule-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .molecule {
    position: absolute;
    animation: float-molecule 20s ease-in-out infinite;
  }
  
  @keyframes float-molecule {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-20px) rotate(5deg);
    }
    50% {
      transform: translateY(-10px) rotate(10deg);
    }
    75% {
      transform: translateY(-30px) rotate(5deg);
    }
  }
  </style>
  
  