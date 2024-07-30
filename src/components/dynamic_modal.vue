<script setup>
import { onMounted, ref } from "vue";
defineProps({
  title: {
    type: String,
    default: "",
  },
});

</script>

<template>

<div class="modal fade" id="dynamicmodal" tabindex="-1" aria-labelledby=""
    aria-hidden="true" ref="dynamicmodal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>