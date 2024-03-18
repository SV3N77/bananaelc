import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="text-viridian">
      <div className="text-center text-5xl font-bold text-viridian py-5 bg-lemonchiffon">
        Banana Early Learning Centre
      </div>
      <nav className="flex flex-col items-center justify-center gap-8 text-lg md:flex-row bg-lemonchiffon">
        <Image
          src="/images/Banana.jpg"
          width={90}
          height={170}
          alt="Bananaelc Logo"
        />
        <Link href="/" className="hover:opacity-70">
          Home
        </Link>
        <Dropdown dropMenu={["About", "Gallery"]} />
        <Link href="/" className="hover:opacity-70">
          Enrolment
        </Link>
        <Dropdown
          dropMenu={[
            "Curriculum",
            "Caterpillar Room",
            "Butterfly Room",
            "School Readiness",
          ]}
        />
        <Link href="/" className="hover:opacity-70">
          Before & After School Care
        </Link>
        <Link href="/" className="hover:opacity-70">
          FAQs
        </Link>
        <Link href="/" className="hover:opacity-70">
          Contact
        </Link>
      </nav>
    </header>
  );
}
export default Header;

//Internal components

type dropdownProps = {
  dropMenu: string[];
};

function Dropdown({ dropMenu }: dropdownProps) {
  return (
    <div id="bouton" className="relative group/bouton">
      <button className="py-3 relative min-w-36 hover:opacity-70">
        <Link href={`/${dropMenu[0]}`}>{dropMenu[0]}</Link>
      </button>
      <div className="absolute opacity-0 min-w-36 hidden rounded-lg flex-col bg-lemonchiffon group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
        {dropMenu.slice(1).map((menu) => (
          <div
            key={menu}
            className="relative flex justify-center hover:opacity-70 "
          >
            <div className="flex items-center gap-3">
              <div className="mb-0 block flex-col ">
                <Link href={`/${menu}`}>{menu}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
