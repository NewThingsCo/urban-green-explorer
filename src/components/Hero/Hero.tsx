import type { VNode } from 'vue';
import { defineComponent } from 'vue';
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
            <h1 class="title">Hello there</h1>
            <p>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="button">Get Started</button>
          </div>
        </div>
      </div>
    );
  },
});
