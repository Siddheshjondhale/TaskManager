<template>
  <div style="font-family: 'Montserrat', sans-serif">
    <header
      class="flex bg-white border-b py-4 sm:px-8 px-6   min-h-[80px] tracking-wide relative z-50"
    >
      <div class="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
        <a href="javascript:void(0)">
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 1L1 1"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M19 9L1 9"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M14 17H1"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </a>

        <div
          id="collapseMenu"
          class="lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul
            class="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
          >
            <li class="hidden max-lg:block">
              <a href="javascript:void(0)"
                ><img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  class="w-36"
              /></a>
            </li>
            <li class="max-lg:border-b max-lg:py-1 px-3">
              <a
                href="javascript:void(0)"
                class="text-[#000] hover:text-[#007bff] text-[15px] block font-semibold"
                >Dashboard</a
              >
            </li>
            <li class="max-lg:border-b max-lg:py-1 px-3">
              <a
                href="/TaskManager"
                class="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                >Manage Task</a
              >
            </li>
            <li class="max-lg:border-b max-lg:py-1 px-3">
              <a
                href="javascript:void(0)"
                class="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                >Settings</a
              >
            </li>
          </ul>
        </div>

        <!-- Centered SVG Icon -->
        <div class="flex-1 flex justify-center items-center">
          <div>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="17.5"
                width="24.7487"
                height="24.7487"
                transform="rotate(45 17.5 0)"
                fill="#D9D9D9"
              />
              <path
                d="M17.75 17.5L17.75 0.603553L34.6464 17.5L17.75 34.3964V17.5Z"
                fill="black"
                stroke="#060606"
                stroke-width="0.5"
              />
            </svg>
          </div>
        </div>

        <!-- wishlist icon -->
        <div class="flex gap-x-6 gap-y-4 ml-auto">
          <div class="flex mx-8 overflow-hidden max-w-52 max-lg:hidden">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="black" />
              <path
                d="M27.8059 30.6943L27.7597 29.9458L27.8059 30.6943ZM22.3327 20.8244L22.2762 21.5723C22.4795 21.5877 22.6803 21.5196 22.8323 21.3838C22.9844 21.2479 23.0746 21.056 23.0822 20.8523L22.3327 20.8244ZM31.5254 27.3716L32.264 27.5015L31.5254 27.3716ZM27.7597 29.9458C26.1685 30.0438 24.5344 30.2341 22.9356 30.0486C21.3752 29.8676 19.933 29.3326 18.7594 28.0189L17.6408 29.0182C19.1263 30.6811 20.9523 31.3286 22.7627 31.5386C24.5347 31.7442 26.3739 31.534 27.852 31.4429L27.7597 29.9458ZM18.7594 28.0189C17.6168 26.7398 17.3858 25.0269 17.9646 23.7058C18.5225 22.4323 19.8968 21.3926 22.2762 21.5723L22.3892 20.0766C19.4577 19.8552 17.4361 21.1741 16.5907 23.1038C15.7661 24.9859 16.1242 27.3206 17.6408 29.0182L18.7594 28.0189ZM27.852 31.4429C28.3848 31.4101 28.9662 31.3726 29.4961 31.265C30.0257 31.1575 30.5862 30.9652 31.0342 30.565L30.0349 29.4464C29.8709 29.5929 29.6086 29.7116 29.1976 29.795C28.7869 29.8784 28.3101 29.9118 27.7597 29.9458L27.852 31.4429ZM32.264 27.5015C32.5206 26.043 32.936 24.239 32.9307 22.4552C32.9254 20.6326 32.4871 18.7454 31.0016 17.0825L29.8829 18.0818C31.0566 19.3956 31.4261 20.8887 31.4307 22.4596C31.4355 24.0691 31.0629 25.6715 30.7867 27.2417L32.264 27.5015ZM31.0016 17.0825C29.4851 15.3849 27.2054 14.7668 25.2426 15.3748C23.2301 15.9981 21.6924 17.8588 21.5832 20.7966L23.0822 20.8523C23.1708 18.4678 24.3584 17.219 25.6864 16.8076C27.0641 16.3809 28.7403 16.8028 29.8829 18.0818L31.0016 17.0825ZM30.7867 27.2417C30.6912 27.7847 30.6044 28.2548 30.4754 28.6535C30.3464 29.0525 30.199 29.2998 30.0349 29.4464L31.0342 30.565C31.4823 30.1647 31.7363 29.6293 31.9026 29.1152C32.069 28.6007 32.1716 28.0272 32.264 27.5015L30.7867 27.2417Z"
                fill="white"
              />
            </svg>
          </div>

          <div class="flex items-center space-x-8">

            <div class="flex">

              <button class="bg-black rounded-full py-3 px-6 text-white">
                Cart
              </button>
              
              <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25.6665" cy="25" r="25" fill="black"/>
              <circle cx="25.6665" cy="25" r="18.5185" fill="white"/>
              <path d="M19.5829 30.8256C20.515 32 22.25 32 25.7198 32H26.2802C29.75 32 31.485 32 32.4171 30.8256M19.5829 30.8256C18.6507 29.6511 18.9704 27.8681 19.6099 24.3021C20.0646 21.7662 20.292 20.4982 21.1552 19.7491M19.5829 30.8256C19.5829 30.8256 19.5829 30.8256 19.5829 30.8256ZM32.4171 30.8256C33.3493 29.6511 33.0296 27.8681 32.3901 24.3021C31.9354 21.7662 31.708 20.4982 30.8448 19.7491M32.4171 30.8256C32.4171 30.8256 32.4171 30.8256 32.4171 30.8256ZM30.8448 19.7491C29.9816 19 28.7478 19 26.2802 19H25.7198C23.2522 19 22.0184 19 21.1552 19.7491M30.8448 19.7491C30.8448 19.7491 30.8448 19.7491 30.8448 19.7491ZM21.1552 19.7491C21.1552 19.7491 21.1552 19.7491 21.1552 19.7491Z" stroke="black" stroke-width="1.5"/>
              <path d="M24 22C24.2911 23.1652 25.0766 24 26 24C26.9234 24 27.7089 23.1652 28 22" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
              </svg>

            </div>



       
          
           <button class="px-5 py-4 text-sm rounded-full text-white border-2 bg-black">
    <font-awesome-icon :icon="['fas', 'user']" />
  </button>

            <button id="toggleOpen" class="lg:hidden">
              <svg
                class="w-7 h-7"
                fill="#333"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
