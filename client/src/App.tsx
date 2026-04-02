/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";

// Assets
import TimberHouse from "./assets/TimberHouse.jpeg";
import Volumes from "./assets/volumes.jpeg";
import Percussion from "./assets/percussion.jpeg";
import Urban from "./assets/urban.jpeg";
import MusicTherapy1 from "./assets/musicTherapy1.jpeg";
import MusicTherapy2 from "./assets/musicTherapy2.jpeg";

// Components
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Quote from "./components/Quote";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import FAB from "./components/FAB";

const projects = [
  {
    title: "Timber House",
    category: "Gallery",
    image: TimberHouse,
    description: "A study of acoustic resonance and visual harmony."
  },
  {
    title: "Passion Volumes",
    category: "Gallery",
    image: Volumes,
    description: "Capturing the raw energy of rhythmic expression."
  },
  {
    title: "Percussions",
    category: "Gallery",
    image: Percussion,
    description: "The heartbeat of visual storytelling."
  },
  {
    title: "Urban Structures",
    category: "Gallery",
    image: Urban,
    description: "Finding rhythm in the architectural landscape."
  }
];

const services = [
  {
    title: "Music therapy",
    category: "Hobbies",
    description: [
      "Making music for both commercial and personal purposes",
      "Showcasing the therapeutic side of music"
    ],
    images: [
      MusicTherapy1,
      MusicTherapy2
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Portfolio");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id.charAt(0).toUpperCase() + id.slice(1));
    }
  };

  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white">
      <Hero />
      <Portfolio projects={projects} />
      <Services services={services} />
      <Quote />
      <Contacts />
      <Footer activeTab={activeTab} scrollToSection={scrollToSection} />
      <FAB scrollToSection={scrollToSection} />
    </div>
  );
}
