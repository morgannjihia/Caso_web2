export default function Mission() {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        <img
          src="/mission.jpg"
          alt=""
          className="rounded-3xl"
        />

        <div>

          <h2 className="text-5xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 text-gray-600">
            To proclaim the everlasting gospel
            in the context of the Three Angels'
            Messages.
          </p>

          <div className="mt-10 p-6 bg-blue-50 rounded-xl">

            <h3 className="font-bold text-xl">
              Vision
            </h3>

            <p>
              Spiritually alive, active and
              prepared for heaven.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}