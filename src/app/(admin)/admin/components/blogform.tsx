"use client";
import React, { useState } from 'react';
import { supabase } from '../../../../../utils/supabaseClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogForm = () => {
  const [date, setDate] = useState('');
  const [domain, setDomain] = useState('');
  const [heading, setHeading] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [creatorName, setCreatorName] = useState('');
  const [creatorDesignation, setCreatorDesignation] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Handle image upload
    let imageUrl = '';
    if (imageFile) {
      const { data: imageData, error: imageError } = await supabase
        .storage
        .from('images') // Ensure this matches the bucket name in your Supabase project
        .upload(`public/${imageFile.name}`, imageFile);

      if (imageError) {
        console.error(imageError);
        toast.error('Error uploading image: ' + imageError.message);
        return;
      } else {
        imageUrl = supabase.storage.from('images').getPublicUrl(imageData.path).data.publicUrl;
      }
    }

    const { data, error } = await supabase
      .from('blogs')
      .insert([
        { date, domain, heading, short_description: shortDescription, content, creator_name: creatorName, creator_designation: creatorDesignation, image_url: imageUrl }
      ]);

    if (error) {
      console.error(error);
      toast.error('Error adding blog: ' + error.message);
    } else {
      console.log('Blog added:', data);
      toast.success('Blog added successfully!');
      // Optionally clear the form fields
      setDate('');
      setDomain('');
      setHeading('');
      setShortDescription('');
      setContent('');
      setCreatorName('');
      setCreatorDesignation('');
      setImageFile(null);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-gray-800 text-white rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Add a New Blog Post</h2>
        
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Date:</span>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Domain:</span>
            <input 
              type="text" 
              value={domain} 
              onChange={(e) => setDomain(e.target.value)} 
              placeholder="Marketing, AI, NLP, JavaScript" 
              required 
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Heading:</span>
            <input 
              type="text" 
              value={heading} 
              onChange={(e) => setHeading(e.target.value)} 
              required 
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Short Description:</span>
            <textarea 
              value={shortDescription} 
              onChange={(e) => setShortDescription(e.target.value)} 
              required 
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Content:</span>
            <textarea 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              required 
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Creator Name:</span>
            <input 
              type="text" 
              value={creatorName} 
              onChange={(e) => setCreatorName(e.target.value)} 
              required 
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Creator Designation:</span>
            <input 
              type="text" 
              value={creatorDesignation} 
              onChange={(e) => setCreatorDesignation(e.target.value)} 
              required 
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Image:</span>
            <input 
              type="file" 
              onChange={(e) => setImageFile(e.target.files?.[0] || null)} 
              className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
            />
          </label>
        </div>

        <button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
};

export default BlogForm;
