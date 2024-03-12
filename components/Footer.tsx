import Image from "next/image";
function Footer() {
  return (
    <footer className="p-5 bg-viridian">
      <div className="container mx-auto flex justify-evenly">
        <div className="flex gap-4 items-center">
          <Image
            src="/images/location_icon.svg"
            width={30}
            height={30}
            alt="locationicon"
          />
          <div className="">140 Parramatta Road, Auburn, NSW 2144</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Tel: </div>
          <div>Fax:</div>
          <div>Email:</div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
