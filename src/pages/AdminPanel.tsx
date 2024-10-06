import React, { useState } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface PSDFile {
  id: number
  title: string
  price: number
  driveLink: string
  hasOffer: boolean
  offerPrice: number | null
}

const AdminPanel: React.FC = () => {
  const [psdFiles, setPsdFiles] = useState<PSDFile[]>([
    { id: 1, title: 'Modern Website Template', price: 29.99, driveLink: 'https://drive.google.com/file/d/example1', hasOffer: true, offerPrice: 24.99 },
    { id: 2, title: 'E-commerce App UI Kit', price: 39.99, driveLink: 'https://drive.google.com/file/d/example2', hasOffer: false, offerPrice: null },
    { id: 3, title: 'Social Media Pack', price: 19.99, driveLink: 'https://drive.google.com/file/d/example3', hasOffer: false, offerPrice: null },
  ])

  const [newFile, setNewFile] = useState<PSDFile>({
    id: 0,
    title: '',
    price: 0,
    driveLink: '',
    hasOffer: false,
    offerPrice: null
  })

  const handleAddFile = (e: React.FormEvent) => {
    e.preventDefault()
    const id = psdFiles.length + 1
    setPsdFiles([...psdFiles, { ...newFile, id }])
    setNewFile({
      id: 0,
      title: '',
      price: 0,
      driveLink: '',
      hasOffer: false,
      offerPrice: null
    })
  }

  const handleDeleteFile = (id: number) => {
    setPsdFiles(psdFiles.filter(file => file.id !== id))
  }

  const handleEditFile = (id: number) => {
    const fileToEdit = psdFiles.find(file => file.id === id)
    if (fileToEdit) {
      setNewFile(fileToEdit)
      handleDeleteFile(id)
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add/Edit PSD File</h2>
        <form onSubmit={handleAddFile} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={newFile.title}
              onChange={(e) => setNewFile({ ...newFile, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              value={newFile.price}
              onChange={(e) => setNewFile({ ...newFile, price: parseFloat(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="driveLink" className="block text-sm font-medium text-gray-700">Drive Link</label>
            <input
              type="text"
              id="driveLink"
              value={newFile.driveLink}
              onChange={(e) => setNewFile({ ...newFile, driveLink: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="hasOffer"
              checked={newFile.hasOffer}
              onChange={(e) => setNewFile({ ...newFile, hasOffer: e.target.checked, offerPrice: e.target.checked ? newFile.offerPrice : null })}
              className="mr-2"
            />
            <label htmlFor="hasOffer" className="text-sm font-medium text-gray-700">Has Offer</label>
          </div>
          {newFile.hasOffer && (
            <div>
              <label htmlFor="offerPrice" className="block text-sm font-medium text-gray-700">Offer Price</label>
              <input
                type="number"
                id="offerPrice"
                value={newFile.offerPrice ?? ''}
                onChange={(e) => setNewFile({ ...newFile, offerPrice: parseFloat(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          )}
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 inline-flex items-center">
            <Plus size={20} className="mr-2" /> {newFile.id ? 'Update' : 'Add'} File
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Manage PSD Files</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drive Link</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Offer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {psdFiles.map((file) => (
              <tr key={file.id}>
                <td className="px-6 py-4 whitespace-nowrap">{file.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">${file.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={file.driveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900">
                    View
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {file.hasOffer ? `$${file.offerPrice?.toFixed(2)}` : 'No offer'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => handleEditFile(file.id)}>
                    <Edit size={20} />
                  </button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteFile(file.id)}>
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPanel