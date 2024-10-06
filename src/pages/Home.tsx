import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to PSD Market</h1>
        <p className="text-xl text-gray-600 mb-8">Discover high-quality Photoshop PSD files for your next project</p>
        <Link to="/shop" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 inline-flex items-center">
          Browse Files <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
          <p className="text-gray-600">Browse through our extensive collection of PSD files for various design needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">High Quality</h3>
          <p className="text-gray-600">All our PSD files are crafted by professional designers to ensure top-notch quality.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Instant Download</h3>
          <p className="text-gray-600">Get immediate access to your purchased files and start working right away.</p>
        </div>
      </section>

      <section className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured PSD Files</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Add featured PSD file cards here */}
        </div>
      </section>
    </div>
  )
}

export default Home