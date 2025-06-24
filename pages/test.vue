<template>
    <div class="bg-red-500">
      <!-- Some content before the parallax section -->
      <section class="intro-section">
        <div class="container">
          <h1>Welcome to Our Company</h1>
          <p>Scroll down to see our amazing parallax animation</p>
        </div>
      </section>
      
      <!-- The parallax animation component -->
      <ParallaxSection />
      
      <!-- Content after the parallax section -->
      <section class="outro-section">
        <div class="container">
          <h2>Continue Reading</h2>
          <p>The animation is now complete. Here's more content...</p>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  // Page setup
  useHead({
    title: 'Parallax Animation Demo',
    meta: [
      { name: 'description', content: 'Beautiful parallax scroll animation with sliding text and image reveal' }
    ]
  })
  </script>
  
  <style scoped>
  .intro-section,
  .outro-section {
    padding: 4rem 2rem;
    text-align: center;
  }
  
  .intro-section {
    background: #f8fafc;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .outro-section {
    background: #ffffff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .intro-section h1 {
    font-size: 3rem;
    color: #1e40af;
    margin-bottom: 1rem;
  }
  
  .intro-section p,
  .outro-section p {
    font-size: 1.2rem;
    color: #64748b;
  }
  
  .outro-section h2 {
    font-size: 2.5rem;
    color: #1e40af;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    .intro-section h1 {
      font-size: 2rem;
    }
    
    .outro-section h2 {
      font-size: 2rem;
    }
    
    .intro-section,
    .outro-section {
      padding: 2rem 1rem;
    }
  }
  </style>