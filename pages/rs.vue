<template>
  <RSUi />
</template>

<script>
import { getg, ax } from '~plugins/axios'
import RSUi from '../components/RSUi'

export default {
  asyncData () {
  },
  head () {
    return {
      title: 'Users'
    }
  },
  components: {
    RSUi
  }
}
</script>
