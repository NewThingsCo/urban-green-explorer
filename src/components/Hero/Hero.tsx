import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import './Hero.css';

export default defineComponent({
  name: 'Hero',
  render(): VNode {
    return (
      <div
        class="hero"
        style='background-image: url("https://bgreen-project.eu/wp-content/uploads/2021/09/Sompasaari-overview-768x768.jpg");'
      >
        <div class="hero-overlay"></div>
        <div class="content">
          <div class="max-w-md">
            <h1 class="title">{this.$t('introduction.helloThere')}</h1>
            <p>{this.$t('introduction.bodyText')}</p>
            <RouterLink class="button" to={{ name: 'locations' }}>
              {this.$t('introduction.getStarted')}
            </RouterLink>
          </div>
        </div>
      </div>
    );
  },
});
