import { computed, defineComponent, VNode } from 'vue';
import { useI18n } from 'vue-i18n';
import { getSeason } from '../../utils';

export default defineComponent({
  name: 'FeedbackThanks',
  setup() {
    const { t } = useI18n();
    const seasonGreetings = computed(() => {
      switch (getSeason()) {
        case 'autumn':
          return t('seasonGreetingsAutumn');
        case 'spring':
          return t('seasonGreetingsSpring');
        case 'winter':
          return t('seasonGreetingsWinter');
        default:
          return t('seasonGreetingsSummer');
      }
    });
    return { seasonGreetings };
  },
  render(): VNode {
    const greetingsFrom = this.$t('greetingsFrom');
    return (
      <div class="feedback-thanks">
        <h2 class="title">{this.$t('feedbackThanksTitle')}</h2>
        <p class="my-4 text-lg">{this.seasonGreetings}</p>
        <p>
          {greetingsFrom}
          <span class={greetingsFrom && 'ml-2'}>{this.$t('theTeam')}</span>
        </p>
      </div>
    );
  },
});
