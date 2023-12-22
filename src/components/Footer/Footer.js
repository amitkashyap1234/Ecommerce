import Link from "next/link";
import { useRouter } from "next/router";

function Footer({ admin }) {
  
  return (
    <div className="bg-gray-800 py-8 px-6 text-gray-200  lg:text-base text-sm">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center lg:space-x-8 space-x-4">
            <Link href="/">
              <span className="cursor-pointer hover:text-white">Home</span>
            </Link>
            
          </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
