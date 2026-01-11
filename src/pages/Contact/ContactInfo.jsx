import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* MAIN INFO CARD */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>

        <p className="text-gray-600 mb-10 leading-relaxed">
          Get in touch with our support team. We're here to help with orders,
          restaurants, delivery, or anything else!
        </p>

        <InfoRow
          icon={<Mail size={20} />}
          title="Email"
          value="support@fooddelivery.com"
        />

        <InfoRow
          icon={<Phone size={20} />}
          title="Phone"
          value="+1 (234) 567-890"
        />

        <InfoRow
          icon={<MapPin size={20} />}
          title="Location"
          value="123 Food Street, Delivery City, DC 12345"
        />

        <InfoRow
          icon={<Clock size={20} />}
          title="Support Hours"
          value={
            <>
              Mon – Fri: 9AM – 6PM <br />
              Sat – Sun: 10AM – 5PM
            </>
          }
        />
      </div>

      {/* SOCIAL CARD */}
      <div className="bg-gradient-to-r from-[#fff1e8] to-[#fff7f2] rounded-2xl shadow-xl p-6">
        <p className="font-semibold mb-4">Connect with us</p>

        <div className="flex gap-4">
          <SocialIcon>
            <Facebook size={18} />
          </SocialIcon>

          <SocialIcon>
            <Instagram size={18} />
          </SocialIcon>

          <SocialIcon>
            <Twitter size={18} />
          </SocialIcon>
        </div>
      </div>
    </div>
  );
}

/* INFO ROW */
function InfoRow({ icon, title, value }) {
  return (
    <div className="flex gap-5 mb-8">
      <div className="w-12 h-12 bg-[#fff1e8] text-[#F23827] rounded-xl flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="font-semibold mb-1">{title}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

/* SOCIAL ICON */
function SocialIcon({ children }) {
  return (
    <div className="w-12 h-12 bg-[#ffe6d5] text-[#F23827] rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#ff6a00] hover:text-white shadow-sm">
      {children}
    </div>
  );
}
