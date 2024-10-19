import React from 'react'

export default function Footer(props) {
  return (
    

<footer class={`${props.mode ==="dark" ?"bg-gray-900":"bg-gray-200"}`}>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex items-center justify-center">
          <span class={`text-sm  sm:text-center  ${props.mode ==="dark" ?"text-gray-400":"text-gray-700"}`}>© 2024 <a href="https://flowbite.com/" class="hover:underline">Abhijith S™</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

  )
}
