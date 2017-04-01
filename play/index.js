import { play } from 'vue-play'
import DBSFooter from '../components/DBSFooter'

play('MyButton')
  .add('with text', {
    template: `<button @click="$log('123')">Hello</button>`
  })

  play('Footer')
    .add('Normal', h => h(DBSFooter))
