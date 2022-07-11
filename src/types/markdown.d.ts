declare module '*.md' {
  const attributes: Record<string, unknown>;
  const toc: { level: string; content: string }[];
  const html: string;

  import { ComponentOptions, Component } from 'vue';

  const VueComponent: ComponentOptions;
  const VueComponentWith: (
    components: Record<string, Component>
  ) => ComponentOptions;

  export { attributes, html, toc, VueComponent, VueComponentWith };
}
