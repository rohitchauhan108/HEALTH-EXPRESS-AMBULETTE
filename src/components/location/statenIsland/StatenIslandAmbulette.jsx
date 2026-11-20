"use client";

import React from "react";
import { MapPin } from "lucide-react";

const statenIslandAreas = [
  "St George", "West New Brighton", "Mariners Harbor", "Westerleigh",
  "Castleton Corners", "Arrochar", "Todt Hills", "Old Place", "Bulls Head",
  "Heartland village", "New Springville", "New Dorp", "South Beach",
  "Fresh Kills Park", "Bay Terrace", "Great Kills", "Eltingville",
  "Annandale", "Rossville", "Pleasant Plains", "Toltonville",
  "Midland Beach", "Dongan Hills"
];

const queries = [
  "ambulette service staten island", "Health Express Ambulette Inc. ", "ambulette service",
  "ambulette service near me", "primary care ambulance", "staten island ny",
  "ambulette transportation", "act transportation", "ambulette services",
  "affordable medical transportation", "ambulette"
];

const StatenIslandAmbulette = () => {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">
            Ambulette Service in Staten Island, NY
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Looking for <span className="text-[#0E8A94] font-semibold">"ambulette service near me"</span>? We’ve got you covered.
          </p>
        </div>

        {/* Map + Areas */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Location List */}
          <div className="bg-[#EAF6F6] rounded-xl p-5 shadow-sm border border-[#EAF6F6]">
            <h3 className="text-lg font-semibold text-[#0A2540] mb-3">Service Areas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {statenIslandAreas.map((area, idx) => (
                <div key={idx} className="flex items-start text-sm text-gray-800">
                  <MapPin className="w-4 h-4 text-[#0E8A94] mt-0.5 mr-2 shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-[#EAF6F6]">
            <iframe
              title="Staten Island Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.461894318041!2d-73.99014965818375!3d40.70333776171919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae236ed06f%3A0xa1c4b2b8792699be!2sHealth%20Express%20Ambulette!5e1!3m2!1sen!2sin!4v1793077839976!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-[320px]"
            ></iframe>
          </div>
        </div>

        {/* SEO Queries */}
        <div className="mt-8">
          <p className="text-sm text-[#0A2540] font-semibold mb-2">Queries We Service:</p>
          <div className="flex flex-wrap gap-2">
            {queries.map((q, idx) => (
              <span
                key={idx}
                className="bg-[#EAF6F6] text-[#0E8A94] px-3 py-1 text-xs rounded-full border border-[#EAF6F6]"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatenIslandAmbulette;
