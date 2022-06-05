import { defineComponent, KeepAlive } from 'vue';
import './App.css';

export default defineComponent({
  name: 'App',
  render() {
    return (
      <KeepAlive>
        <router-view />
      </KeepAlive>
    );
  },
});
