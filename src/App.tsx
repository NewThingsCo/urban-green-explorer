import { defineComponent } from 'vue';
import './App.css';
import Logo from './assets/logo.png';
import HelloWorld from './components/HelloWorld';

export default defineComponent({
  name: 'App',
  render() {
    return (
      <>
        <img alt="Vue logo" class="logo" src={Logo} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </>
    );
  },
});
