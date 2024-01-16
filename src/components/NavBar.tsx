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
    <div className="fixed bg-black h-16 w-full top-0 flex items-center justify-between p-4 text-white">
      <Link href="/" className=" text-white">
        Home
      </Link>

      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="ml-4 p-2 border border-white rounded text-black"
        />
        <button
          type="button"
          onClick={() => triggerSearch()}
          className={`ml-2 p-2 ${
            Boolean(searchText.length) ? "bg-blue-500" : "bg-gray-500"
          } rounded text-black`}
          disabled={!Boolean(searchText.length)}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Navbar;
