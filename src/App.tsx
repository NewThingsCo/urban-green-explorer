import { defineComponent } from 'vue';
import './App.css';
import MainFooter from './components/MainFooter';
import MainHeader from './components/MainHeader';
import MainHome from './components/MainHome';

export default defineComponent({
  name: 'App',
  render() {
    return (
      <>
        <MainHeader />
        <MainHome />
        <MainFooter />
      </>
    );
  },
});
