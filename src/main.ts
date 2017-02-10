import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.npm_lifecycle_event === 'build' || process.env.ENV === 'build') {
  enableProdMode();
}

export function main() {
  const platform = platformBrowserDynamic();
  return platform.bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
