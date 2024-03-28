import Image from "next/image";

export default function page() {
  return (
    <section className="flex flex-col mx-auto container my-20 gap-4">
      <div className="text-4xl text-center font-bold text-viridian">
        Contact Us
      </div>

      <form
        action=""
        className="container grid max-w-3xl min-h-[600px] px-4 gap-8 py-12 justify-center-center mx-auto"
      >
        <div className="space-y-2">
          <p className="text-gray-500 dark:text-gray-400">
            Have questions? Want to schedule a tour? Fill out the form below and
            we'll be in touch.
          </p>
        </div>
        <div className="grid gap-8">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone">Phone</label>
            <input id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              className="min-h-[100px]"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <button className="bg-viridian rounded-md text-white p-2 w-1/2 mx-auto">
            Send message
          </button>
        </div>
      </form>

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
