"use client"
import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  async function handleSubmit() {
    if (!form.firstName) return toast.error("First name required");
    if (!form.email.includes("@")) return toast.error("Valid email required");
    if (!form.message) return toast.error("Message required");

    try {
      setLoading(true);

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setSent(true);

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => setSent(false), 3000);
      } else {
        toast.error("Failed to send message");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer id="contact">
      <div className="grid md:grid-cols-2 min-h-[60vh]">
        {/* Left Info */}
        <div className="bg-[#1E1C18] text-white p-12 lg:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-xs font-medium opacity-50 tracking-widest uppercase mb-6">Contact us</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 leading-tight">
              Let's Build a Brighter<br />Future Together
            </h2>

            <div className="mb-10">
              <h4 className="text-sm font-semibold opacity-50 uppercase tracking-wider mb-3">Contact Information</h4>
              <p className="text-md opacity-70 leading-relaxed cursor-pointer mb-4"><a href="https://maps.app.goo.gl/bpZjq5Vaa5KqYb5WA" target="_blank" rel="noopener noreferrer"><span className="font-semibold">Office Address:</span> 609-610, Rajvi Icon, Nikol, <br className="hidden md:inline" />Ahmedabad, India</a></p>
              <p className="text-md opacity-70 leading-relaxed cursor-pointer my-1 mb-4"><a href="https://maps.app.goo.gl/d5bv9k5J7QA1zbkT9" target="_blank" rel="noopener noreferrer"><span className="font-semibold">Branch Address:</span> Pragati Empire IT park B-414, Mota Varachha<br />Surat, India</a></p>
              <p className="text-md opacity-70 leading-relaxed cursor-default my-1 mb-4"><span className="font-semibold">Our Branches:</span> Vadodara, Bhavnagar, Amreli, Rajkot, Junagadh, Jamnagar, Banaskantha, Mehesana, Sabar Kantha, Mahisagar, Panch Mahal</p>
              <p className="text-md opacity-70 leading-relaxed cursor-pointer my-1 mb-4"><a href="https://maps.app.goo.gl/vdzw1jbRoU7ePiVv7" target="_blank" rel="noopener noreferrer"><span className="font-semibold">Warehouse Address:</span> Ashwamegh Shopping, Vivekandnagar, Hathijan<br />Ahmedabad, India</a></p>
              <p className="text-md opacity-70 mt-2 mb-4"><a href="tel:+919925590208"><span className="font-semibold">Phone:</span> +91 99255 90208</a><a href="tel:+919727097421"><span> , +91 97270 97421</span></a></p>
              <p className="text-md opacity-70 mt-2 mb-4"><a href="mailto:kkenterprise0410@gmail.com" target="_blank" rel="noopener noreferrer"><span className="font-semibold">Email:</span> kkenterprise0410@gmail.com</a></p>
            </div>

            <div>
              <h4 className="text-sm font-semibold opacity-50 uppercase tracking-wider mb-3">Quick links</h4>
              <div className="flex gap-6 flex-wrap">
                <a href="/" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Home</a>
                <a href="/services" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Services</a>
                <a href="/projects" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Projects</a>
                <a href="/about" className="text-sm opacity-60 hover:opacity-100 transition-opacity">About</a>
              </div>
            </div>
          </div>

          {/* Decorative SVG */}
          <svg className="absolute bottom-6 md:bottom-8 right-8 w-20 md:w-48 opacity-20" viewBox="0 0 200 160" fill="none">
            <rect x="10" y="20" width="180" height="110" rx="4" stroke="#fff" strokeWidth="1.5" />
            <line x1="10" y1="57" x2="190" y2="57" stroke="#fff" strokeWidth="1" />
            <line x1="10" y1="94" x2="190" y2="94" stroke="#fff" strokeWidth="1" />
            <line x1="70" y1="20" x2="70" y2="130" stroke="#fff" strokeWidth="1" />
            <line x1="130" y1="20" x2="130" y2="130" stroke="#fff" strokeWidth="1" />
            <line x1="70" y1="135" x2="70" y2="155" stroke="#fff" strokeWidth="1.5" />
            <line x1="130" y1="135" x2="130" y2="155" stroke="#fff" strokeWidth="1.5" />
            <line x1="40" y1="155" x2="160" y2="155" stroke="#fff" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="bg-[#EDE8DF] p-12 lg:p-20">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500 font-medium">
                First name*
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className="bg-black/5 border-none p-3 rounded text-sm focus:bg-black/10 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500 font-medium">
                Last name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
                className="bg-black/5 border-none p-3 rounded text-sm focus:bg-black/10 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="text-xs text-gray-500 font-medium">
              Email address*
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="bg-black/5 border-none p-3 rounded text-sm focus:bg-black/10 outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="text-xs text-gray-500 font-medium">
              Phone number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="bg-black/5 border-none p-3 rounded text-sm focus:bg-black/10 outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xs text-gray-500 font-medium">
              Message*{" "}
              <span className="opacity-50 text-[10px]">
                (How can we help you?)
              </span>
            </label>
            <textarea
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="bg-black/5 border-none p-3 rounded text-sm focus:bg-black/10 outline-none transition-colors min-h-60 resize-y font-medium"
              placeholder="Lightbill Amount & (kW) needed."
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-3 rounded text-sm font-medium text-white transition-all flex items-center justify-center gap-2 ${sent
              ? "bg-green-700"
              : "bg-[#2A2620] hover:bg-gray-800"
              }`}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : sent ? (
              "Message Sent ✓"
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1E1C18] border-t border-white/10 px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="text-xs opacity-45">© 2026 KK ENTERPRISE. All Rights Reserved.</div>
        <div className="flex gap-8">
          <div className="text-xs opacity-45">Terms & conditions</div>
          <div className="text-xs opacity-45">Privacy Policy</div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-xs opacity-45 hover:opacity-100 transition-opacity border border-white/20 px-4 cursor-pointer py-1.5 rounded-full"
        >
          Let's go top ↑
        </button>
      </div>
      <div className="bg-yellow-50 flex justify-center p-4">
        <a href="https://www.linkedin.com/in/harshalpatel-nov4"
          target="_blank"
          className="opacity-55 hover:opacity-100 transition-opacity font-bold cursor-pointer">
          <h1 className="text-sm">Made  ❤️ by Harshal Patel</h1></a>
      </div>
    </footer>
  );
};

export default Footer;