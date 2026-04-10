<template>
  <div>
    <div>
      <h3 class="text-center uppercase">Календарный план работ</h3>
    </div>
    
    <div id="sequence-diagram" ref="diagramContainer" class="overflow-auto">
      <pre class="mermaid overflow-auto">{{ parkingGantt }}</pre>
    </div>
    <div id="kanban-diagram"  class="overflow-auto">
      <pre class="mermaid overflow-auto">{{ parkingKanban }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import mermaid from 'mermaid'
// Import markdown file as raw string
import parkingGanttRaw from '../data/parking-gantt.md?raw'

let parkingKanbanRaw = `
  kanban
  [ГИП]
    [Согласование ТСМ]
    [Захватки, временные дороги]
    [Перспектива 1 эт.]
    [Перечень инженерных систем наружных]
    [Перечень инженерных систем внутренних]
    [Коридоры наружных сетей]
  [АР]
    [Разработка ТСМ]
    [АР/ТХ ред. 1.1: Задание ОВ, ВК ]
    [АР/ТХ ред. 1.2: Задание ЭОМ, АПС и СОУЭ, СС ]
    [АР/ТХ ред. 1.3: Модель АР ]
    [АР/ТХ ред. 2]
    [АР/ТХ оф. 1]
    [АР/ТХ_П_ред.2 оф. 1]
    [АР/ТХ оф. 2]
  [ГП]
    [ГП ред.1 разбивочный и вертикалка]
    [ГП благоустройство ред. 1]     
    [ГП сводный ред. 1]
    [ГП оформление 1]
  [КЖ]
    [Модель-опалубка ред. 1]
    [Подготовка задание на расчет]
    [Расчет СК]
    [Уточнение модели]
    [УСС предварит.]
    [Оформление документации нулевой цикл]
    [Оформление документации наземный цикл]
    [УСС РД]
  [ВК]  
    [Принципиальное моделирование]
    [Деталировка модели]  
    [Оформление чертежей]
    [УСС]
  [НВК]
    [План сетей]  
    [Профили]  
    [УСС]
    [Оформление чертежей]  
  [Вентиляция]
    [Расчеты и принципиальное моделирование]
    [Деталировка модели]
    [УСС]
    [Оформление чертежей]
  [ЭОМ]
  [НЭС]
  [АПС, СОУЭ, АК]
    [Задание на отверстия]
    [Оформление документации]
  [Сети связи]    
    [Задание на отверстия]
    [Оформление документации]
  [НСС]
     [План сетей с согласованием трассы]
     [Оформление документации]  
`

const parkingGantt = ref(parkingGanttRaw)
const parkingKanban = ref(parkingKanbanRaw)


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