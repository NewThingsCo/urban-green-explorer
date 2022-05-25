import type { VNode } from 'vue';
import { defineComponent } from 'vue';
import './Hero.css';
import Button from '@/components/Button';
import { router } from '@/router';

export default defineComponent({
  name: 'Hero',
  setup() {
    function pushToLocation() {
      router.push({ name: 'locations' });
    }
    return {
      pushToLocation,
    };
  },
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
            <Button class="button" onClick={this.pushToLocation}>
              {this.$t('introduction.getStarted')}
            </Button>
          </div>
        </div>
      </div>
    );
  },
});
