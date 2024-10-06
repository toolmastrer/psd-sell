import React from 'react'
import { Tag } from 'lucide-react'

interface PSDFile {
  id: number
  title: string
  price: number
  driveLink: string
  image: string
  hasOffer?: boolean
  offerPrice?: number
}

const Shop: React.FC = () => {
  const psdFiles: PSDFile[] = [
    { 
      id: 1, 
      title: 'Modern Website Template', 
      price: 29.99, 
      driveLink: 'https://drive.google.com/file/d/example1',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      hasOffer: true,
      offerPrice: 24.99
    },
    { 
      id: 2, 
      title: 'E-commerce App UI Kit', 
      price: 39.99, 
      driveLink: 'https://drive.google.com/file/d/example2',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { 
      id: 3, 
      title: 'Social Media Pack', 
      price: 19.99, 
      driveLink: 'https://drive.google.com/file/d/example3',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ]

  const handlePayment = (file: PSDFile) => {
    // Implement PhonePe payment logic here
    console.log(`Initiating payment for ${file.title}`)
    // After successful payment, provide the drive link
    alert(`Payment successful! Download your PSD file here: ${file.driveLink}`)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Shop PSD Files</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {psdFiles.map((file) => (
          <div key={file.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
            {file.hasOffer && (
              <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg">
                <Tag size={16} className="inline-block mr-1" />
                Offer
              </div>
            )}
            <img src={file.image} alt={file.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{file.title}</h3>
              <p className="text-gray-600 mb-4">
                {file.hasOffer ? (
                  <>
                    <span className="line-through mr-2">${file.price.toFixed(2)}</span>
                    <span className="text-red-500">${file.offerPrice?.toFixed(2)}</span>
                  </>
                ) : (
                  `$${file.price.toFixed(2)}`
                )}
              </p>
              <button 
                onClick={() => handlePayment(file)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-full"
              >
                Buy with PhonePe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop