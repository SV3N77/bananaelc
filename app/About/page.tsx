import Image from "next/image";

export default function page() {
  return (
    <section className="flex flex-col mx-auto container my-20 gap-4">
      <div className="text-4xl text-center font-bold text-viridian">
        About Us
      </div>
      <div className="flex gap-4">
        <Image
          src="/images/childrentable.jpg"
          width={600}
          height={900}
          alt="placeholder"
          className="rounded-md shadow-md"
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
          molestias accusamus quibusdam tenetur, incidunt amet expedita odio
          corporis hic tempora doloremque magni assumenda suscipit totam atque
          animi facilis officiis! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Facere beatae voluptas omnis tenetur debitis dolore
          quas modi quo consequuntur repudiandae illo error nisi, deleniti,
          dignissimos vero, dolor cum rerum asperiores!
        </div>
      </div>
      <div className="text-4xl text-center font-bold text-viridian">
        Our Team
      </div>
      <div className="flex  gap-4">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
          molestias accusamus quibusdam tenetur, incidunt amet expedita odio
          corporis hic tempora doloremque magni assumenda suscipit totam atque
          animi facilis officiis! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Facere beatae voluptas omnis tenetur debitis dolore
          quas modi quo consequuntur repudiandae illo error nisi, deleniti,
          dignissimos vero, dolor cum rerum asperiores!
        </div>
        <Image
          src="/images/childrentable.jpg"
          width={600}
          height={900}
          alt="placeholder"
          className="rounded-md shadow-md"
        />
      </div>
    </section>
  );
}
