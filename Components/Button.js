

const Button = () => {
  return (
    /* From Uiverse.io by elijahgummer */ 
<button
class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-cyanLight backdrop-blur-lg px-6 py-2 text-base font-semibold text-veryDarkBlue transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20"
>
<span class="text-lg">Hire Me</span>
<div
  class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
>
  <div class="relative h-full w-10 bg-white/30"></div>
</div>
</button>

  )
}

export default Button
