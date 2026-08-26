"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiDownload,
  FiMaximize2,
  FiCalendar,
  FiMapPin
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_URL } from "@/app/ui/baceurl";

interface EventImage {
  id: number;
  image: string;
}

interface EventDetail {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  images?: EventImage[];
}

const defaultHighlightImages = [
  "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505373633562-b13b72393047?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591115711421-311693f175b2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1000&auto=format&fit=crop"
];

export default function EventGalleryClient({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/events/${id}/`);
        if (res.ok) {
          const data = await res.json();
          setEvent(data);
        }
      } catch (err) {
        console.error("Failed to fetch event detail:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
    } catch (e) {
      return dateString;
    }
  };

  const handleDownload = (imgUrl: string) => {
    window.open(imgUrl, "_blank");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#00b14f] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-xs font-black uppercase tracking-widest text-white/40">Loading Gallery...</p>
        </div>
      </main>
    );
  }

  if (!event) {
    return (
      <main className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold uppercase tracking-widest text-white/40 mb-6">Event Not Found</h1>
        <Link href="/activity-hub/events" className="text-[#00b14f] hover:underline uppercase text-xs font-bold tracking-widest">
          Back to Events
        </Link>
      </main>
    );
  }

  const featuredImg = event.image ? (event.image.startsWith('http') ? event.image : `${BASE_URL}${event.image.startsWith('/') ? '' : '/'}${event.image}`) : "";
  const galleryImages = event.images && event.images.length > 0
    ? [featuredImg, ...event.images.map(imgObj => imgObj.image.startsWith('http') ? imgObj.image : `${BASE_URL}${imgObj.image.startsWith('/') ? '' : '/'}${imgObj.image}`)]
    : [featuredImg, ...defaultHighlightImages];

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Gallery Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#00b14f10] to-[#080808] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/activity-hub/events"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#00b14f] transition-colors text-[10px] font-black uppercase tracking-[0.3em] mb-8 group"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Events
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase mb-6"
          >
            {event.title} <br />
            <span className="text-[#00b14f]">GALLERY.</span>
          </motion.h1>

          <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-white/30 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-[#00b14f]" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-4 h-4 text-[#00b14f]" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Masonry Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 6) * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid group relative rounded-sm overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer mb-8"
            >
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`${event.title} Image ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>

              {/* Overlay Actions */}
              {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button
                  onClick={() => setSelectedImage(img)}
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#00b14f] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                >
                  <FiMaximize2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDownload(img)}
                  className="w-12 h-12 rounded-full bg-[#00b14f] text-white flex items-center justify-center hover:bg-white hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                >
                  <FiDownload className="w-5 h-5" />
                </button>
              </div> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox / Fullscreen View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-10 right-10 text-white hover:text-[#00b14f] transition-all z-20"
            >
              <FiArrowLeft className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full">
              <img
                src={selectedImage}
                alt="Fullscreen view"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
              <button
                onClick={() => handleDownload(selectedImage)}
                className="flex items-center gap-2 bg-[#00b14f] text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl"
              >
                <FiDownload className="w-4 h-4" /> Download Original
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
