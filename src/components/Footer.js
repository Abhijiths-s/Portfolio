import React from 'react'

export default function Footer(props) {
  return (
    

<footer class={`${props.mode ==="dark" ?"bg-gray-900":"bg-[#fff7f7] border-none"}`}>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 border-none">
        
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex items-center justify-center">
          <span class={`text-sm  sm:text-center  ${props.mode ==="dark" ?"text-gray-400":"text-gray-700"}`}>© 2024 <a class="hover:underline">Abhijith S™</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

  )
}
