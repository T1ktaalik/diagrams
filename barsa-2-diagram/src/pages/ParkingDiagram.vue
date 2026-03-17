<template>
  <div>
  <!--   <div>
      <h3 class="text-center uppercase">Парковка</h3>
    </div>
     -->
    <div id="sequence-diagram" ref="diagramContainer" class="overflow-auto">
      <pre class="mermaid overflow-auto">{{ parkingGantt }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import mermaid from 'mermaid'

const parkingGantt = ref(`
  ---
  title: Парковка
  ---
   gantt
    
    dateFormat  YYYY-MM-DD
    tickInterval 4w
    axisFormat %m
    section Заказчик
      Таня, привет: 2026-04-01, 14d
      Временные дороги и краны: 2026-04-15, 14d
    
`)


onMounted(async () => {
  try {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
    })
    
    // Небольшая задержка для гарантии рендеринга DOM
    setTimeout(() => {
      mermaid.run()
        .then(() => console.log('Mermaid rendered'))
        .catch(err => console.error('Mermaid error:', err))
    }, 100)
  } catch (error) {
    console.error('Mermaid initialization error:', error)
  }
})
</script>