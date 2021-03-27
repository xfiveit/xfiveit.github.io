import Link from '../Link'
import Icon from '../Icon'

import styles from './Hero.module.css'

const data = [
  {
    name: 'upwork',
    url: 'https://www.upwork.com/freelancers/~019df0d142b971dff7',
    title: 'My page on Upwork'
  },
  {
    name: 'github',
    url: 'https://github.com/slavamak',
    title: 'My page on GitHub'
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/slavamak.dev',
    title: 'My page on Instagram'
  },
  {
    name: 'telegram',
    url: 'https://t.me/slavamak_dev',
    title: 'Click to chat Telegram'
  }
]

function HeroLinks() {
  return (
    <div className={styles['hero-content__links']}>
      {data.map((item, i) => (
          <Link key={ i } url={ item.url } title={ item.title } target="_blank" className={styles['hero-content__links-item']} unLink>
            <Icon name={ item.name } />
          </Link>
        )
      )}
    </div>
  )
}

export default HeroLinks