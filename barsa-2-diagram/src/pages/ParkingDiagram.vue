<template>
  <div>
    <div>
      <h3 class="text-center uppercase">Календарный план работ</h3>
    </div>
    
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
    excludes weekends
    dateFormat  YYYY-MM-DD
    axisFormat %Y-%m-%d
    tickInterval 1week
    section Заказчик
      Захватки каркаса: 2026-04-01, 14d
      Временные дороги и краны: 2026-04-01, 14d
      Планировки первых этажей: 2026-04-01, 7d
    section ГИП
      Полный перечень наружных сетей:g1, 2026-04-01, 3d
      Полный перечень внутренних сетей: 2026-04-01, 3d
      Коридоры наружных сетей: after g1, 3d
      Задание на лифт:g4, after a1, 4d
      Выдача котлована: after k1, 2d
    section Генплан
      Предварительная вертикальная планировка:m1, 2026-04-01, 5d
      Определение отм. 0.000: 2026-04-06, 2d
    section Архитектура
      Определение требований к лифту:a1, 2026-04-01, 3d
      Размещение машиномест: after a1, 4d
    section Конструктив
      Опалубочная модель:k1, after g4, 7d
      Предв. УСС ж/б: after k1, 4d
      Расчет СК: after k1, 14d
    section Электроснабжение
    section Водопровод и канализация
      Модель с отверстиями: after k1, 7d
    section Вентиляция
    section Сети связи
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