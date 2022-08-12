console.log('html ts');

const btn1ElQ: HTMLButtonElement | null = document.querySelector('button');
const btn1El = document.getElementById('btn1') as HTMLButtonElement | null;

if (btn1El === null) throw new Error('btn1El not found');

btn1El?.addEventListener('click', (): void => {
  console.log('clicked');
});
