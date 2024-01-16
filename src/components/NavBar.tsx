"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Navbar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const router = useRouter();
  function triggerSearch() {
    router.push(`/search?text=${searchText}`);
  }

  return (
    <div className="fixed bg-black h-8  w-full top-0">
      <Link href="/" className=" text-white">
        Home
      </Link>

      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => triggerSearch()}
        className="text-white"
      >
        Go
      </button>
    </div>
  );
};

export default Navbar;
