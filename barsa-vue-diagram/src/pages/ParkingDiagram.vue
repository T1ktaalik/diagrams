<template>
<div>
  <div>
     <h3>Парковка</h3>
  </div>
  <div>
    <pre class="mermaid">
        sequenceDiagram
          participant Заказчик
          participant ГИП
          participant Архитектор
          participant Конструктор
          participant Электрик
          participant Слаботочник
    </pre>
  </div>

</div>
  
</template>
<script lang="ts">
  import mermaid from 'mermaid';
    // Initialize mermaid with your desired configuration
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose', // Enable click events if needed
        });
</script>