<template>
          <div class="page_holder">
          <DBSHeader />
          <div class="recomm_container">
              <div class="recomm_inner container">
                <ItemDetText />

                <InfiniteLazy />

        </div>
        </div>
        </div>
</template>

<script>

import ItemBox from './ItemBox'
import DBSHeader from './DBSHeader'
import ItemDetText from './ItemDetText'
import InfiniteLazy from './InfiniteLazy'

export default
{
  components: {
           ItemBox,
           DBSHeader,
           ItemDetText,
           InfiniteLazy
       }
}

</script>

<style scoped>

</style>
