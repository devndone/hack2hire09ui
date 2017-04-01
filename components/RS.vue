<template>
          <div class="page_holder">
          <DBSHeader />
          <div class="recomm_container">
              <div class="recomm_inner container">
                <ItemDetText />

          <ItemBox />
                    <ItemBox />
                              <ItemBox />
                                        <ItemBox />
                                                  <ItemBox />
                                                            <ItemBox />
        </div>
        </div>
        </div>
</template>

<script>

import ItemBox from './ItemBox'
import DBSHeader from './DBSHeader'
import ItemDetText from './ItemDetText'

export default
{
  components: {
           ItemBox,
           DBSHeader,
           ItemDetText
       }
}

</script>

<style scoped>

</style>
