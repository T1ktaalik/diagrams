<template>
  <div>
    <div>
      <h3 class="text-center uppercase">Парковка</h3>
    </div>
    
    <div id="sequence-diagram" ref="diagramContainer">
      <pre class="mermaid">{{ sequenceDiagram }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import mermaid from 'mermaid'

const sequenceDiagram = ref(`
  sequenceDiagram
    participant Заказчик
    participant ГИП
    participant Архитектор
    participant Конструктор
    participant Генпланист
    Архитектор ->> Конструктор: задание проемов, приямков, машиномест
    Генпланист ->> ГИП: Разбивочный план (координаты осей)
    Генпланист ->> ГИП: отметка 0.000
    ГИП ->> Заказчик: Задание на котлован и разбивку осей
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