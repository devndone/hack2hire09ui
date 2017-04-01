import { play } from 'vue-play'
import Star from '../components/Star'
import ItemBox from '../components/ItemBox'
import DBSHeader from '../components/DBSHeader'
import RSUi from '../components/RSUi'


play('MyButton')
  .add('with text', {
    template: `<button @click="$log('123')">Hello</button>`
  })

  play('Star')
    .add('Normal', h => h(Star))

    play('Star')
      .add('Normal', h => h(Star))

    play('ItemBox')
      .add('Normal', h => h(ItemBox))


    play('DBSHeader')
    .add('Normal',h=>h(DBSHeader))

        play('HOME')
        .add('Normal',h=>h(RSUi))
