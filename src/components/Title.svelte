<script lang="ts">
  import { onMount } from 'svelte'
  import MetaButtons from './MetaButtons.svelte'

  export let words: string[]
  let bottomText = 'Welcome to NetSu'
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%$#'

  const newIndex = Math.floor(Math.random() * words.length)
  const newWord = words[newIndex]

  onMount(async () => {
    const elem = document.getElementById('owo')
    const gl = document.getElementById('glitch')

    console.log('owo')
    gl.addEventListener('mouseover', async () => {
      let iters = 0

      const interval = setInterval(() => {
        gl.innerText = gl.innerText
          .split('')
          .map((_letter, index) => {
            if (index < iters) {
              return (gl.dataset as any).value[index]
            }
            return alphabet[Math.floor(Math.random() * alphabet.length)]
          })
          .join('')

        if (iters > 7) clearInterval(interval)

        iters += 1 / 3
      }, 50)

      elem.style.opacity = '0'
      elem.textContent = newWord
      elem.style.opacity = '1'
    })
  })
</script>

<main class='h-screen w-screen'>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class='text-8xl text-white'>
      NetSu.<span class="text-lg font-bold" id="glitch" data-value="NETWORK">NETWORK</span
      >
    </h1>
    <MetaButtons />
    <div class="grid grid-flow-row-dense">
      <h2 class="text-white text-sm lg:text-lg" id="owo" style="opacity: 0;">{bottomText}</h2>
    </div>
  </div>
</main>

<style lang="scss">
  h1 {
    background: linear-gradient(to right, #b4d9ef, #f8c57c, #f8c57c);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    margin: 0;
  }

  h2 {
    color: white;

    opacity: 1;
    transition: opacity 2s ease-in-out;
  }
</style>
