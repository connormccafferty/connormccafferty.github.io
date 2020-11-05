window.addEventListener('DOMContentLoaded', async () => {
  let originalTitle = document.title;
  // add ">" to the beginning of document.title when the window is focused
  await fin.me.addListener('focused', () => document.title = `>${originalTitle}`);
  // remove ">" from the beginning of the title when window is blurred
  await fin.me.addListener('blurred', () => document.title = originalTitle);
})