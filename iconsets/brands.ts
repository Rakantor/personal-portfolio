import { h } from 'vue'
import type { IconSet, IconProps } from 'vuetify'
import apple from '~/components/svg/apple.vue'
import heroku from '~/components/svg/heroku.vue'

const customSvgNameToComponent: any = {
  apple,
  heroku,
}

const brands: IconSet = {
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon], { class: 'v-icon__svg' }),
}

export { brands }