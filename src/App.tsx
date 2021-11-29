import { defineComponent } from 'vue';
import './App.css';
import CoverImage from './assets/cover-image.webp';
import HelloWorld from './components/HelloWorld';

export default defineComponent({
  name: 'App',
  render() {
    return (
      <>
        <figure>
          <img alt="Cover image" class="cover-image" src={CoverImage} />
        </figure>
        <main class="main">
          <HelloWorld msg="Contentful integration with Vue 3" />
        </main>
      </>
    );
  },
});
