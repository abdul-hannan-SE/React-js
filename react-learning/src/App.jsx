// import "./App.css";
function LandingPage() {
  return (
    <>
      <nav class="bg-purple-400 flex justify-between h-16 items-center px-4">
        <span class="font-bold flex text-white mx-2">Phonemalenia</span>
        <ul class="hidden md:flex text-white items-center space-x-4">
          <li class="cursor-pointer hover:text-purple-600">Home</li>
          <li class="cursor-pointer hover:text-purple-600">About</li>
          <li class="cursor-pointer hover:text-purple-600">Contact</li>
          <li class="cursor-pointer hover:text-purple-600">Blogs</li>
        </ul>
        <ul class="md:hidden flex text-white items-center space-x-4">
          <li class="cursor-pointer hover:text-purple-600">Menu</li>{" "}
        </ul>
      </nav>
      <main class="bg-purple-200 main flex flex-col md:flex-row justify-evenly p-4">
        <div class="mx-4 py-7 md:w-1/2">
          <div class="text-4xl font-bold ">Best Phones to find here</div>
          <p class="py-5 w-full md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi
            voluptates natus. Omnis ea reiciendis molestiae impedit sint,
            voluptatibus corrupti dolorem, eaque sequi esse voluptate numquam
            quis, nisi eos. Id et provident soluta voluptas!
          </p>
          <div class="space-x-2 flex justify-center md:justify-start">
            <button class="bg-purple-950 p-3 rounded-full text-white hover:scale-90 hover:bg-purple-600 hover:outline-double hover:outline-cyan-400">
              Buy phone
            </button>
            <button class="bg-purple-950 p-3 rounded-full text-white hover:scale-90 hover:bg-purple-600 hover:outline-double hover:outline-cyan-400">
              Contact us
            </button>
          </div>
        </div>
        <div class="content-center mx-10 w-full md:w-1/2">
          <img
            class="bg-transparent"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_nspOdbomQBC24U0gxa5wnqy6zPnBi8sH9lPITG68aVM-v5HoJes3FAFHXWZ80_0clk&usqp=CAU"
            alt=""
          />
        </div>
      </main>
    </>
  );
}

export default LandingPage;
