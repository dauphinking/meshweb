"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, CheckCircle, Zap, Shield, Award, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog"

const faqItems = [
  {
    question: "What types of mining screen mesh does HWZ manufacture?",
    answer:
      "HWZ manufactures welded wire screens, woven wire mesh screens, polyurethane screen panels, perforated plate screens, dewatering screens and anti-clogging screens. All panels can be custom-manufactured to fit any vibrating screen machine.",
  },
  {
    question: "What mining industries are your screen mesh panels designed for?",
    answer:
      "Our screening media is engineered for coal mining, non-ferrous metal mining (copper, gold, silver, zinc, iron ore), hard rock mining (granite, basalt, quartzite), aggregate and sand production, and general mineral processing. We also supply screens for construction and recycling applications.",
  },
  {
    question: "Can you custom-manufacture screen mesh panels to match my vibrating screen?",
    answer:
      "Yes. All HWZ screen panels are made to order. Supply your vibrating screen model, deck dimensions, required aperture size and wire diameter, and our engineering team will produce panels that fit your machine precisely — including non-standard shapes and hook-strip or bolt-down fixing systems.",
  },
  {
    question: "What is the minimum order quantity and lead time for mining screen mesh?",
    answer:
      "We accept small sample orders for evaluation. Production lead time for standard orders is typically 7–15 working days. Bulk orders are quoted individually based on specifications and quantity.",
  },
  {
    question: "Do you supply mining screen mesh to Australia?",
    answer:
      "Yes. Australia is one of our primary export markets. We have established long-term partnerships with Australian mining operations across coal, gold, iron ore and hard rock sectors. All products are packaged and labelled to Australian import requirements.",
  },
  {
    question: "What is the difference between a welded wire screen and a woven wire screen?",
    answer:
      "A welded wire screen uses robotic resistance welding to fuse cross wires to longitudinal wires at each intersection, producing a rigid, high-open-area panel suited to heavy loads and coarse materials. A woven wire screen interlocks wires in a crimp pattern to achieve finer apertures and tighter tolerances, ideal for precision mineral classification and fine sizing.",
  },
  {
    question: "How long do HWZ mining screen panels last compared to standard mesh?",
    answer:
      "HWZ screens use robotic welding with controlled parameters and high-tensile wire, resulting in service life typically 2–3× longer than manually welded or conventional screens. The self-cleaning surface prevents clogging, reducing unplanned downtime and replacement frequency.",
  },
  {
    question: "What wire materials are available for mining screen mesh?",
    answer:
      "Standard panels use high-carbon steel wire. We also supply manganese steel, stainless steel 304/316 and polyurethane/polypropylene composite panels depending on the abrasion, corrosion and temperature requirements of your specific application.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function HomePage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("get-in-touch")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const openWhatsApp = () => {
    const phoneNumber = "00862154385286"
    const message =
      "Hello! I'm interested in your Mining Screen Mesh products and would like to learn more about your solutions."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/logo.jpg"
                alt="HWZ Industrial Technology – Mining Screen Mesh Manufacturer"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8" aria-label="Main navigation">
                <a href="#about" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  About
                </a>
                <a href="#industries" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  Industries
                </a>
                <a href="#products" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  Products
                </a>
                <a href="#process" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  Process
                </a>
                <a href="#faq" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  FAQ
                </a>
                <a href="#contact" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  Contact
                </a>
                <Link href="/blog" className="text-slate-700 hover:text-cyan-600 font-medium transition-colors">
                  Blog
                </Link>
              </nav>
              <div className="flex items-center space-x-2 text-right">
                <Mail className="h-5 w-5 text-cyan-500" />
                <div>
                  <div className="text-sm text-slate-600 font-semibold">Customer Service</div>
                  <div className="text-lg font-bold text-cyan-600">contact@biditech.cn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wire-mesh-hero.png"
            alt="HWZ High-Performance Mining Screen Mesh – Vibrating Screen Panels for Coal, Non-Ferrous and Hard Rock Mining"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mining Screen Mesh
            <span className="block text-cyan-400">Expert</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light text-slate-200">
            Vibrating Screen Panels for Coal, Non-Ferrous & Hard Rock Mining
          </p>
          <p className="text-lg mb-8 font-light text-slate-300">
            Robotic-welded screening media — custom manufactured for Australia, Southeast Asia & Africa
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            Request a Custom Quote
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>HWZ Industrial Technology</strong> is a leading manufacturer of mining screen mesh, vibrating
                screen panels and industrial screening media, proudly serving the Australian mining and construction
                sectors. With over 5,000 square metres of dedicated production space and state-of-the-art robotic
                welding equipment, we produce screens for coal mining, non-ferrous metal mining (copper, gold, silver,
                zinc, iron ore), hard rock mining and aggregate processing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We specialise in welded screens, woven screens, polypropylene screens and a wide range of mineral
                processing machinery. Our dedicated export team has established long-term partnerships with clients in
                Australia, Southeast Asia and Africa, supplying custom-made vibrating screen panels that extend
                equipment life and reduce total operating cost.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-700 mb-2">5000+</div>
                  <div className="text-gray-600">m² Production Area</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-700 mb-2">16+</div>
                  <div className="text-gray-600">Screen Products</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-700 mb-2">10+</div>
                  <div className="text-gray-600">Years Export</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/company-building.png"
                alt="HWZ Industrial Technology Manufacturing Facility – Mining Screen Mesh Production"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mining screen mesh and vibrating screen panels are engineered for the world's most demanding mining
              and mineral processing environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-amber-500" />,
                title: "Coal Mining",
                description:
                  "Heavy-duty welded wire screens and woven mesh panels for coal screening, sizing and dewatering. Engineered for high-tonnage run-of-mine coal processing with minimal maintenance.",
                applications: [
                  "Run-of-mine coal screening",
                  "Coal fines dewatering",
                  "Thermal coal sizing",
                  "Coking coal preparation",
                ],
              },
              {
                icon: <Award className="h-10 w-10 text-yellow-500" />,
                title: "Non-Ferrous Metal Mining",
                description:
                  "Precision screening media for copper, gold, silver, zinc and iron ore processing. Anti-clogging screens maximise recovery rates in wet and sticky ore conditions.",
                applications: [
                  "Copper ore screening",
                  "Gold mine classification",
                  "Iron ore processing",
                  "Zinc & lead ore sizing",
                ],
              },
              {
                icon: <Shield className="h-10 w-10 text-cyan-500" />,
                title: "Hard Rock Mining",
                description:
                  "Ultra wear-resistant screen panels for granite, basalt, quartzite and other hard rock applications. Robotic welding ensures consistent weld strength for extended service life.",
                applications: [
                  "Granite quarry screening",
                  "Basalt aggregate sizing",
                  "Quartzite processing",
                  "Hard rock primary scalping",
                ],
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-green-500" />,
                title: "Aggregate & Sand Production",
                description:
                  "Complete screening solutions from primary scalping screens to fine sand dewatering. Covers every stage of aggregate and manufactured sand production lines.",
                applications: [
                  "Sand production lines",
                  "Gravel sizing",
                  "Crushed stone screening",
                  "Fine sand recovery",
                ],
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.applications.map((app, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Screens Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Screens</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-lg shadow-xl">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Superior Quality & Wear Resistance</h3>
                    <p className="text-slate-200">
                      Robotic welding produces consistent weld parameters — high load capacity, long service life and
                      excellent wear resistance for coal, hard rock and non-ferrous metal mining applications. Panels
                      never delaminate under long-term alternating loads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Versatile Mining Applications</h3>
                    <p className="text-slate-200">
                      Wide range of aperture sizes and wire diameters, suitable for any type of vibrating screen —
                      linear, circular or elliptical motion. Custom panels made to match your machine dimensions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lower Total Cost of Ownership</h3>
                    <p className="text-slate-200">
                      Self-cleaning screen surface prevents blinding and clogging, maximising screening efficiency.
                      Longer panel life, faster delivery and minimal maintenance reduce total cost per tonne screened.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/premium-screens-robot.png"
                alt="HWZ Robotic Welding System – Automated Mining Screen Mesh Production for Superior Quality"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Robotic Welding Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Screen Production Process</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-slate-700">Robotic Welding </span>
              <span className="text-2xl font-bold text-cyan-600">Advantages</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/images/screen-process-hexagon.png"
                alt="Six-Step Mining Screen Mesh Production Process – From Wire Drawing to Finished Vibrating Screen Panels"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Automated Machinery</h3>
                  <p className="text-gray-600 text-sm">
                    Robotic welding ensures clear production cycles and easy output control. Fixed production rhythm
                    maximises efficiency and resource utilisation for consistent screen panel quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">High Productivity</h3>
                  <p className="text-gray-600 text-sm">
                    Robotic welding speed far exceeds manual welding. Robots operate continuously, enabling fast
                    turnaround on custom mining screen mesh orders.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Safe Production Environment</h3>
                  <p className="text-gray-600 text-sm">
                    Robotic welding operates in environments unsuitable for manual work, improving worker safety while
                    maintaining continuous, high-volume production.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Consistent Quality</h3>
                  <p className="text-gray-600 text-sm">
                    Stable welding parameters minimise human error. Every screen panel meets identical specifications,
                    ensuring predictable performance in your vibrating screen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Series */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">HWZ</span> Screen Series
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Full range of vibrating screen panels and screening media — welded, woven and polyurethane — custom-made
              for coal mining, non-ferrous metal mining and hard rock mining applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Anti-Clogging Screen",
                image: "/images/anti-clogging-screen.png",
                desc: "Self-cleaning screen mesh for wet, sticky ores — ideal for non-ferrous metal and coal mining",
              },
              {
                name: "Dewatering Screen",
                image: "/images/dewatering-screen.png",
                desc: "High-frequency dewatering panels for sand, coal fines and mineral tailings",
              },
              {
                name: "Welded Screen",
                image: "/images/welded-screen.png",
                desc: "Robotic-welded wire screen panels for heavy-duty hard rock and aggregate primary screening",
              },
              {
                name: "Woven Wire Screen",
                image: "/images/woven-wire-screen.png",
                desc: "Fine-aperture woven wire mesh for precision mineral classification and sizing",
              },
              {
                name: "Perforated Plate Screen",
                image: "/images/perforated-plate-screen.png",
                desc: "Heavy-duty perforated plate for scalping and coarse coal sizing in high-impact applications",
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-gray-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} – HWZ Mining Screen Mesh`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 text-center">{product.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sand Production Line Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">Sand Production Line</span>
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete integrated sand and aggregate production solution — advanced crushing, screening and fine sand
              recovery technology for quarry and mining operations
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image
                src="/images/sand-production-flow-complete.png"
                alt="Complete Sand and Aggregate Production Line Process Flow – Crushing, Screening and Fine Sand Recovery"
                width={1400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Features</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Fine Sand Recovery Device",
                    text: "Advanced recovery system ensures minimal sand loss and maximum yield from the production line",
                  },
                  {
                    title: "Flexible Finished Sand Grading",
                    text: "Adjustable fineness modulus meets various construction and concrete aggregate requirements",
                  },
                  {
                    title: "Premium Quality Standards",
                    text: "All finished sand indicators meet national standards, suitable as premium concrete aggregate",
                  },
                  {
                    title: "Economic Efficiency",
                    text: "Low production cost per tonne with high screening efficiency and minimal material loss",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">
                      <strong>{item.title}:</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-6">Production Line Advantages</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">High Automation</h4>
                    <p className="text-slate-200 text-sm">
                      Fully automated production line with minimal manual intervention, reducing labour cost
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Protection</h4>
                    <p className="text-slate-200 text-sm">
                      Dust suppression and noise reduction systems for compliant, eco-friendly operation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Flexible Configuration</h4>
                    <p className="text-slate-200 text-sm">
                      Customisable equipment configuration based on feed material, capacity and finished product
                      specifications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">HWZ</span> Machinery Product Series
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete range of mineral processing and aggregate production equipment — crushers, washers, feeders and
              vibrating screens for coal, non-ferrous metal and hard rock mining operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Spiral Sand Washer",
                image: "/images/spiral-sand-washer.png",
                desc: "Spiral classifier for sand washing and fine material grading",
              },
              {
                name: "Wheel Sand Washer",
                image: "/images/wheel-sand-washer.png",
                desc: "Bucket-wheel washer for removing clay and fine impurities from aggregate",
              },
              {
                name: "Fine Sand Recovery Device",
                image: "/images/fine-sand-recovery-device.png",
                desc: "Hydrocyclone recovery unit to reclaim fine sand lost in washing water",
              },
              {
                name: "Vibrating Feeder",
                image: "/images/vibrating-feeder.png",
                desc: "Electromagnetic vibrating feeder for continuous, controlled ore feed to crushers",
              },
              {
                name: "Circular Vibrating Screen",
                image: "/images/circular-vibrating-screen.png",
                desc: "Multi-deck circular vibrating screen for coal, aggregate and mineral sizing",
              },
              {
                name: "Jaw Crusher",
                image: "/images/jaw-crusher.png",
                desc: "Primary jaw crusher for hard rock, coal and mineral coarse crushing",
              },
              {
                name: "Multi-cylinder Hydraulic Cone Crusher",
                image: "/images/multi-cylinder-hydraulic-cone-crusher.png",
                desc: "High-efficiency cone crusher for secondary and tertiary hard rock and ore crushing",
              },
              {
                name: "Impact Crusher",
                image: "/images/impact-crusher.png",
                desc: "Impact crusher for medium-hard rock and aggregate shaping applications",
              },
              {
                name: "Mobile Jaw Crushing Station",
                image: "/images/mobile-jaw-crushing-station.png",
                desc: "Track-mounted mobile primary crusher for on-site hard rock and quarry operations",
              },
              {
                name: "Mobile Cone Crushing Station",
                image: "/images/mobile-cone-crushing-station.png",
                desc: "Track-mounted mobile secondary crusher for flexible, portable aggregate production",
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-gray-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} – HWZ Mining Machinery`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 text-center">{product.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our mining screen mesh, vibrating screen panels and mineral processing equipment
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-cyan-200 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Resources</h2>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical guides on mining screen mesh maintenance, clogging prevention and screen media selection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:border-cyan-300 hover:shadow-md transition-all duration-300">
                  <p className="text-xs text-gray-400 mb-3">
                    {new Date(post.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-600 mb-3 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">We Are Here Waiting for You</h2>
              <div className="w-16 h-1 bg-cyan-400 mb-8"></div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-200">Minhang, Shanghai</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <span className="text-lg text-slate-200">Phone: 0086-21-54385286</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <span className="text-lg text-slate-200">Email: contact@biditech.cn</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-lg shadow-xl">
              <Image
                src="/images/company-location-map.png"
                alt="HWZ Industrial Technology Location – Shanghai, China – Mining Screen Mesh Manufacturer"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Section */}
      <section id="get-in-touch" className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-8 h-1 bg-slate-800"></div>
              <div className="w-8 h-1 bg-cyan-500"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact us for custom mining screen mesh quotes, technical specifications or product samples
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
                <Image
                  src="/images/whatsapp-qr.png"
                  alt="WhatsApp QR Code – Contact HWZ Mining Screen Mesh Team"
                  width={250}
                  height={250}
                  className="w-60 h-60 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Scan QR Code</h3>
              <p className="text-gray-600">Quick access via WhatsApp</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">Instant messaging and voice calls</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Scan the QR code or click the WhatsApp button to contact us directly for mining screen mesh quotes,
                  technical support or order information.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyan-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">Professional business communication</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Send us detailed inquiries, technical specifications, vibrating screen dimensions or business
                  proposals via email.
                </p>
                <a
                  href="mailto:contact@biditech.cn"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contact@biditech.cn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Contact HWZ Mining Screen Mesh on WhatsApp"
        >
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/images/logo.jpg"
                alt="HWZ Industrial Technology – Mining Screen Mesh Manufacturer"
                width={200}
                height={80}
                className="h-16 w-auto mx-auto"
              />
            </div>
            <p className="text-gray-400 mb-2">
              Mining Screen Mesh Manufacturer | Vibrating Screen Panels | Screening Media
            </p>
            <p className="text-gray-400 mb-2">
              Coal Mining · Non-Ferrous Metal Mining · Hard Rock Mining · Aggregate Processing
            </p>
            <p className="text-gray-500 text-sm">© 2022–2025 Biditech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
