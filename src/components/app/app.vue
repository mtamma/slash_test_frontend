<template>
   <div id="app" class="text-gray-800">
      <component :is="layout">
          <router-view  />
      </component>
  </div>
</template>

<script src="./app.ts"></script>