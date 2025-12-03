"use client";

import Image from "next/image";

function Sidebar() {
  return (
    <div className="w-15 h-screen bg-neutral-800 rounded-xl">
      <div className="w-full h-[95%] flex justify-center pt-3">
        <div className="w-8 h-8 flex items-center justify-center bg-black rounded-lg">
          <Image
            src="/images/png/logo.png"
            alt="Katharsis Logo"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
