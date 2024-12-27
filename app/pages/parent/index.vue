<script setup lang='ts'>
definePageMeta({
  middleware: [
    function () {
      return navigateTo(
        '/parent/child-a',
        { redirectCode: 301 },
      );
    },
  ],
});
</script>
