import React from 'react';

export default function Contact() {
  const contactMethods = [
    {
      title: "Call Me Here",
      description: "Speak directly on +919948756262 for quick assistance",
      icon: "📞",
      action: "tel:+919948756262",
      buttonText: "Call Now",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Chat Me Here",
      description: "Quick responses via WhatsApp or live chat",
      icon: "💬",
      action: "https://wa.me/+919948756262",
      buttonText: "Start Chat",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Meet Me Here",
      description: "Visit our store or find us on Google Maps",
      icon: "📍",
      action: "https://www.google.com/maps/place/K.+BUCHAIAH+KIRANAM/@18.7672392,79.5063953,17z/data=!3m1!4b1!4m6!3m5!1s0x3a32cee6783de22b:0xdb64d716eb2ba876!8m2!3d18.7672392!4d79.5063953!16s%2Fg%2F11f29_9jh2?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D",
      buttonText: "View Location",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "Email Me Here",
      description: "Send detailed inquiries and booking requests",
      icon: "📧",
      action: "mailto:chandukolipaka6@gmail.com",
      buttonText: "Send Email",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    }
  ];

  const handleContactClick = (action, title) => {
    if (action.startsWith('tel:') || action.startsWith('mailto:') || action.startsWith('https:')) {
      window.open(action, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to capture your perfect moments? Choose your preferred way to connect with us
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`${method.bgColor} ${method.borderColor} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {method.description}
                </p>
                <button
                  onClick={() => handleContactClick(method.action, method.title)}
                  className={`${method.buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full`}
                >
                  {method.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Location Section - Using OpenStreetMap */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Location</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map - Using OpenStreetMap (No API Key Required) */}
            <div className="h-80 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.5040%2C18.7650%2C79.5090%2C18.7695&layer=mapnik&marker=18.7672392%2C79.5063953"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="K. BUCHAIAH KIRANAM Location"
              ></iframe>
            </div>
            
            {/* Address Details */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Store Address</h4>
                    <p className="text-gray-600">
                      K. BUCHAIAH KIRANAM<br/>
                      Near Shivalayam<br/>
                      Power House Colony<br/>
                      Godhavarikhani<br/>
                      Peddapalli District<br/>
                      Telangana, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🚗</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Parking</h4>
                    <p className="text-gray-600">Street parking available nearby</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🚌</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Public Transport</h4>
                    <p className="text-gray-600">Local bus routes available, auto-rickshaw accessible</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🏪</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Landmark</h4>
                    <p className="text-gray-600">Located near K. Buchaiah Kiranam store</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <a
                    href="https://www.google.com/maps/place/K.+BUCHAIAH+KIRANAM/@18.7672392,79.5063953,17z/data=!3m1!4b1!4m6!3m5!1s0x3a32cee6783de22b:0xdb64d716eb2ba876!8m2!3d18.7672392!4d79.5063953!16s%2Fg%2F11f29_9jh2?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block w-full text-center"
                  >
                    📍 Open in Google Maps
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=18.7672392,79.5063953`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block w-full text-center"
                  >
                    🧭 Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative: Static Map Card */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📍 Find Us Here</h3>
            <p className="text-gray-600 mb-6">Click below to open our location in your preferred map app</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://www.google.com/maps/place/K.+BUCHAIAH+KIRANAM/@18.7672392,79.5063953,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                🗺️ Google Maps
              </a>
              <a
                href={`https://maps.apple.com/?q=18.7672392,79.5063953`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                🍎 Apple Maps
              </a>
              <a
                href={`https://waze.com/ul?q=18.7672392,79.5063953`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                🚗 Waze
              </a>
            </div>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">12:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <span className="mr-3">📍</span>
                  <span>Available for on-location shoots</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">⚡</span>
                  <span>Same-day booking available</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">🎥</span>
                  <span>Professional equipment included</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">💰</span>
                  <span>Competitive pricing & packages</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 text-center bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Bookings</h3>
          <p className="text-red-600 mb-4">Need equipment urgently? We're here to help!</p>
          <a
            href="tel:+919133897338"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
          >
            Call Emergency Line
          </a>
        </div>
      </div>
    </div>
  );
}
