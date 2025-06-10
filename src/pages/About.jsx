import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about capturing your best moments with the finest
            cameras available for rent. Our journey is built on family values,
            dedication, and the inspiration drawn from generations of hard work.
          </p>
        </div>

        {/* Owner Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Owner Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/personal/owner.jpg"
                  alt="Chandu - Owner and Founder"
                  className="w-80 h-96 object-cover hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 w-80 h-96 flex items-center justify-center shadow-inner"
                  style={{ display: "none" }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-gray-600 font-medium">Owner's Photo</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Add owner.jpg to public/personal/
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">💼</span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Meet the Owner
                </h2>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Chandu - Founder & Photography Enthusiast
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over a decade of experience in photography and videography,
                I started this camera rental business with a simple mission: to
                make professional-grade equipment accessible to everyone.
                Whether you're a budding photographer, a content creator, or
                planning a special event, I believe everyone deserves to capture
                their moments with the best tools available.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My journey began as a hobby photographer, and through years of
                learning and growing, I've built relationships with clients who
                trust me with their most precious moments. Every camera, lens,
                and piece of equipment in our collection has been carefully
                selected based on real-world experience and client needs.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-blue-800 font-medium italic">
                  "My goal is not just to rent equipment, but to help you tell
                  your story through the lens of excellence."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Family Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Family Content */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">👨‍👩‍👧‍👦</span>
                <h2 className="text-3xl font-bold text-gray-900">Our Family</h2>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                The Heart Behind Our Business
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This business is truly a family affair. My mom has been my
                constant support, managing the administrative side while I focus
                on the technical aspects. Her attention to detail ensures that
                every booking runs smoothly and every client feels valued and
                cared for.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My elder brother, Akhil Kumar Kolipaka, has been integral to
                this journey from the beginning. As the big brother, he
                naturally became a mentor and helper, eager to learn about
                photography and equipment maintenance. Akhil's keen eye for
                detail and genuine interest in the craft make him invaluable to
                our business. He understands that every piece of equipment
                carries someone's dreams and precious moments, reminding us
                daily that we're trusted guardians of people's most important
                memories.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Family gatherings often turn into photography sessions, teaching
                us that the best moments happen when people feel comfortable.
                This philosophy guides how we interact with clients - we're not
                just service providers, we're part of your special day.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <p className="text-green-800 font-medium italic">
                  "We understand the importance of family moments because we
                  cherish our own."
                </p>
              </div>
            </div>

            {/* Family Image */}
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/personal/family.jpg"
                  alt="Our Family"
                  className="w-96 h-80 object-cover hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-8 w-96 h-80 flex items-center justify-center shadow-inner"
                  style={{ display: "none" }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                    <p className="text-gray-600 font-medium">Family Photo</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Add family.jpg to public/personal/
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Father's Legacy Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Father's Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/personal/father.jpg"
                  alt="My Father - Our Inspiration"
                  className="w-80 h-96 object-cover hover:scale-110 transition-all duration-300 grayscale hover:grayscale-0"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-8 w-80 h-96 flex items-center justify-center shadow-inner"
                  style={{ display: "none" }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">🙏</div>
                    <p className="text-gray-600 font-medium">Father's Photo</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Add father.jpg to public/personal/
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Father's Legacy Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🌟</span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Inspiration
                </h2>
              </div>
              <h3 className="text-xl font-semibold text-amber-600 mb-4">
                In Memory of My Father
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Everything I am today, I owe to my father. Though he is no
                longer with us, his teachings and values continue to guide every
                decision I make in this business. He taught me that success
                isn't just about profit - it's about serving people with
                honesty, integrity, and genuine care.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My father was a man of few words but immense wisdom. He believed
                in the power of hard work, the importance of keeping promises,
                and treating every person with respect regardless of their
                background. These principles form the foundation of how we
                operate our camera rental business.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                He always said, "When you help others capture their happy
                moments, you create happiness for yourself." This philosophy
                drives our commitment to providing not just equipment, but peace
                of mind. Every time a client trusts us with their important
                event, I remember his words and strive to honor his memory.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                <p className="text-amber-800 font-medium italic">
                  "His legacy lives on in every smile we help capture and every
                  moment we help preserve."
                </p>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-500 text-sm">
                  🕊️ Forever in our hearts 🕊️
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              To provide exceptional camera equipment and service that helps our
              clients capture life's most precious moments, while building
              lasting relationships based on trust, quality, and the values
              passed down through generations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold mb-2">Quality First</h3>
                <p className="text-sm">
                  Premium equipment maintained to the highest standards
                </p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold mb-2">Personal Service</h3>
                <p className="text-sm">Treating every client like family</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-3xl mb-3">💫</div>
                <h3 className="font-bold mb-2">Legacy Values</h3>
                <p className="text-sm">
                  Honesty, integrity, and genuine care in everything we do
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Capture Your Story?
          </h3>
          <p className="text-gray-600 mb-6">
            Let us help you create memories that will last a lifetime
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}