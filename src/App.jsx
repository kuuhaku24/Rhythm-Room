import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <body class="bg-black relative overflow-x-hidden">
      <img alt="Black and white photo of a building with visible windows and balconies, used as background" class="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" height="600" src="https://storage.googleapis.com/a1aa/image/501dfb3a-7f24-4381-1da6-52438f45dd16.jpg" width="1920" />
      <div class="relative z-10 max-w-full mx-auto p-4 flex flex-col md:flex-row gap-6 md:gap-8">
        {/* <!-- Top folders bar --> */}
        <div class="flex items-center gap-6 bg-gray-400 bg-opacity-50 rounded-xl px-6 py-4 max-w-full md:max-w-[600px] flex-wrap">
          <div class="font-poppins font-bold text-black uppercase text-sm tracking-wide px-4 py-2 rounded-lg bg-gray-400 bg-opacity-70">
            FOLDERS
          </div>
          <div class="flex gap-6 flex-wrap">
            <div class="flex flex-col items-center text-xs text-black">
              <img alt="Black folder icon" class="w-12 h-9" height="36" src="https://storage.googleapis.com/a1aa/image/3b030ae1-e8b4-4bf3-5b96-dd19cb9c19ba.jpg" width="48" />
              <span>
                Albums
              </span>
            </div>
            <div class="flex flex-col items-center text-xs text-black">
              <img alt="Black folder icon" class="w-12 h-9" height="36" src="https://storage.googleapis.com/a1aa/image/3b030ae1-e8b4-4bf3-5b96-dd19cb9c19ba.jpg" width="48" />
              <span>
                Albums
              </span>
            </div>
            <div class="flex flex-col items-center text-xs text-black">
              <img alt="Black folder icon" class="w-12 h-9" height="36" src="https://storage.googleapis.com/a1aa/image/3b030ae1-e8b4-4bf3-5b96-dd19cb9c19ba.jpg" width="48" />
              <span>
                Albums
              </span>
            </div>
            <div class="flex flex-col items-center text-xs text-black">
              <img alt="Black folder icon" class="w-12 h-9" height="36" src="https://storage.googleapis.com/a1aa/image/3b030ae1-e8b4-4bf3-5b96-dd19cb9c19ba.jpg" width="48" />
              <span>
                Albums
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Right top icons --> */}
        <div class="flex items-center gap-4 ml-auto">
          <div class="bg-gray-400 bg-opacity-50 rounded-full p-3 cursor-pointer">
            <img alt="Icon of a person with headset representing agent" class="w-8 h-8" height="32" src="https://storage.googleapis.com/a1aa/image/1dc4da9e-9888-4730-5663-729e0a5c9334.jpg" width="32" />
          </div>
          <div class="bg-gray-400 bg-opacity-50 rounded-2xl px-6 py-3 font-poppins font-bold text-black text-xl">
            11.55
          </div>
          <div class="bg-gray-400 bg-opacity-50 rounded-full p-3 cursor-pointer flex items-center justify-center">
            <i class="fas fa-shopping-cart text-black text-lg">
            </i>
          </div>
          <div class="bg-gray-400 bg-opacity-50 rounded-full p-3 cursor-pointer flex items-center justify-center">
            <i class="fas fa-plus text-black text-lg">
            </i>
          </div>
          <div class="bg-gray-400 bg-opacity-50 rounded-full p-3 cursor-pointer flex items-center justify-center">
            <i class="fab fa-youtube text-black text-lg">
            </i>
          </div>
        </div>
      </div>
      <div class="relative z-10 max-w-full mx-auto p-4 flex flex-col md:flex-row gap-6 md:gap-8">
        {/* <!-- Left main container --> */}
        <div class="bg-gray-400 bg-opacity-50 rounded-2xl p-6 flex flex-col gap-4 max-w-full md:max-w-[600px]">
          {/* <!-- Search bar --> */}
          <form class="flex items-center bg-gray-300 rounded-full px-4 py-2 gap-2 max-w-full" onsubmit="event.preventDefault()">
            <input class="bg-transparent flex-grow text-black text-sm outline-none" placeholder="Search" type="search" />
            <button aria-label="Search" type="submit">
              <i class="fas fa-sync-alt text-black text-sm">
              </i>
            </button>
            <button aria-label="Search icon" type="button">
              <i class="fas fa-search text-black text-sm">
              </i>
            </button>
          </form>
          {/* <!-- Playlist with play buttons --> */}
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <button aria-label="Play first track" class="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-play">
                </i>
              </button>
              <input aria-label="Track 1 name" class="flex-grow rounded-lg px-4 py-2 text-black bg-gray-300 outline-none" type="text" value="" />
              <button aria-label="Add track 1" class="bg-gray-400 bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-plus text-black">
                </i>
              </button>
            </div>
            <div class="flex items-center gap-3">
              <button aria-label="Play second track" class="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-play">
                </i>
              </button>
              <input aria-label="Track 2 name" class="flex-grow rounded-lg px-4 py-2 text-black bg-gray-300 outline-none" type="text" value="" />
              <button aria-label="Add track 2" class="bg-gray-400 bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-plus text-black">
                </i>
              </button>
            </div>
            <div class="flex items-center gap-3">
              <button aria-label="Play third track" class="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-play">
                </i>
              </button>
              <input aria-label="Track 3 name" class="flex-grow rounded-lg px-4 py-2 text-black bg-gray-300 outline-none" type="text" value="" />
              <button aria-label="Add track 3" class="bg-gray-400 bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-plus text-black">
                </i>
              </button>
            </div>
            <div class="flex items-center gap-3">
              <button aria-label="Play fourth track" class="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-play">
                </i>
              </button>
              <input aria-label="Track 4 name" class="flex-grow rounded-lg px-4 py-2 text-black bg-gray-300 outline-none" type="text" value="" />
              <button aria-label="Add track 4" class="bg-gray-400 bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-plus text-black">
                </i>
              </button>
            </div>
            <div class="flex items-center gap-3">
              <button aria-label="Play fifth track" class="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-play">
                </i>
              </button>
              <input aria-label="Track 5 name" class="flex-grow rounded-lg px-4 py-2 text-black bg-gray-300 outline-none" type="text" value="" />
              <button aria-label="Add track 5" class="bg-gray-400 bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center">
                <i class="fas fa-plus text-black">
                </i>
              </button>
            </div>
          </div>
          {/* <!-- Bottom controls --> */}
          <div class="flex justify-center gap-4 mt-4">
            <button aria-label="Previous track" class="bg-gray-400 bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center">
              <i class="fas fa-backward text-black">
              </i>
            </button>
            <button aria-label="Next track" class="bg-gray-400 bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center">
              <i class="fas fa-forward text-black">
              </i>
            </button>
          </div>
        </div>
        {/* <!-- Middle vertical album list --> */}
        <div class="bg-gray-400 bg-opacity-50 rounded-2xl p-2 flex flex-col gap-4 max-w-[100px]">
          <div class="flex flex-col items-center gap-1">
            <img alt="Photo of two hands holding each other, album cover" class="rounded-2xl w-18 h-18 object-cover" height="72" src="https://storage.googleapis.com/a1aa/image/295c7355-23ea-4496-5ba2-84f6a232c126.jpg" width="72" />
            <span class="text-xs text-black">
              Albums
            </span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <img alt="Photo of a man smiling, album cover" class="rounded-2xl w-18 h-18 object-cover" height="72" src="https://storage.googleapis.com/a1aa/image/df6ea56a-90b9-4cb7-1b56-a2848a0d18aa.jpg" width="72" />
            <span class="text-xs text-black">
              Albums
            </span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <img alt="Photo of a black car front, album cover" class="rounded-2xl w-18 h-18 object-cover" height="72" src="https://storage.googleapis.com/a1aa/image/383c5c98-7ba1-4a22-30b9-cefee4fad522.jpg" width="72" />
            <span class="text-xs text-black">
              Albums
            </span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <img alt="Photo of a man with hands up, album cover" class="rounded-2xl w-18 h-18 object-cover" height="72" src="https://storage.googleapis.com/a1aa/image/2b208281-fc5a-40b6-d9f9-544f361996cd.jpg" width="72" />
            <span class="text-xs text-black">
              Albums
            </span>
          </div>
        </div>
        {/* <!-- Right container with playlist and music control --> */}
        <div class="flex flex-col gap-6 max-w-[320px] w-full">
          {/* <!-- Playlist --> */}
          <div class="bg-gray-400 bg-opacity-50 rounded-2xl p-6 flex flex-col gap-4">
            <h2 class="font-poppins font-bold text-black text-center text-lg uppercase">
              PLAY LIST
            </h2>
            <div class="flex flex-col gap-3">
              <div class="flex items-center bg-gray-300 rounded-lg px-4 py-2 gap-2">
                <button aria-label="Move playlist item up" class="bg-gray-400 bg-opacity-50 rounded-md p-1">
                  <i class="fas fa-angle-double-up text-black">
                  </i>
                </button>
                <span class="flex-grow text-black">
                </span>
                <button aria-label="Delete playlist item" class="bg-gray-400 bg-opacity-50 rounded-md px-2 py-1 text-xs font-bold text-black">
                  DEL
                </button>
              </div>
              <div class="flex items-center bg-gray-300 rounded-lg px-4 py-2 gap-2">
                <button aria-label="Move playlist item up" class="bg-gray-400 bg-opacity-50 rounded-md p-1">
                  <i class="fas fa-angle-double-up text-black">
                  </i>
                </button>
                <span class="flex-grow text-black">
                </span>
                <button aria-label="Delete playlist item" class="bg-gray-400 bg-opacity-50 rounded-md px-2 py-1 text-xs font-bold text-black">
                  DEL
                </button>
              </div>
              <div class="flex items-center bg-gray-300 rounded-lg px-4 py-2 gap-2">
                <button aria-label="Move playlist item up" class="bg-gray-400 bg-opacity-50 rounded-md p-1">
                  <i class="fas fa-angle-double-up text-black">
                  </i>
                </button>
                <span class="flex-grow text-black">
                </span>
                <button aria-label="Delete playlist item" class="bg-gray-400 bg-opacity-50 rounded-md px-2 py-1 text-xs font-bold text-black">
                  DEL
                </button>
              </div>
            </div>
          </div>

          <div class="bg-gray-400 bg-opacity-50 rounded-2xl p-6 flex flex-col gap-4">
            <h2 class="font-poppins font-bold text-black text-center text-lg uppercase">
              MUSIC CONTROL
            </h2>
            <div class="flex justify-center gap-6 text-black text-2xl">
              <button aria-label="Repeat" class="cursor-pointer">
                <i class="fas fa-sync-alt">
                </i>
              </button>
              <button aria-label="Microphone" class="cursor-pointer">
                <i class="fas fa-microphone">
                </i>
              </button>
              <button aria-label="Play" class="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                <i class="fas fa-play">
                </i>
              </button>
              <button aria-label="Next" class="cursor-pointer">
                <i class="fas fa-forward">
                </i>
              </button>
              <button aria-label="Mute" class="cursor-pointer">
                <i class="fas fa-volume-mute">
                </i>
              </button>
            </div>
            <div class="flex justify-between text-black text-xs font-bold">
              <div class="flex items-center gap-1">
                <button aria-label="Volume down" class="bg-gray-400 bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center">
                  <i class="fas fa-chevron-left text-black text-xs">
                  </i>
                </button>
                <span>
                  VOL
                </span>
                <button aria-label="Volume up" class="bg-gray-400 bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center">
                  <i class="fas fa-chevron-right text-black text-xs">
                  </i>
                </button>
              </div>
              <div class="flex items-center gap-1">
                <button aria-label="Pitch down" class="bg-gray-400 bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center">
                  <i class="fas fa-chevron-left text-black text-xs">
                  </i>
                </button>
                <span>
                  PITCH
                </span>
                <button aria-label="Pitch up" class="bg-gray-400 bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center">
                  <i class="fas fa-chevron-right text-black text-xs">
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>

  )
}

export default App
