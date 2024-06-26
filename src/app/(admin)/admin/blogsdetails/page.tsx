"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../../../../../utils/supabaseClient';

interface Blog {
  id: number;
  date: string;
  domain: string;
  heading: string;
  short_description: string;
  content: string;
  creator_name: string;
  creator_designation: string;
  image_url: string;
}

export default function BlogsDetails() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editBlog, setEditBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setBlogs(data as Blog[]);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleUpdate = (blog: Blog) => {
    setEditBlog(blog);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editBlog) {
      const { id, date, domain, heading, short_description, content, creator_name, creator_designation, image_url } = editBlog;
      try {
        const { error } = await supabase
          .from('blogs')
          .update({ date, domain, heading, short_description, content, creator_name, creator_designation, image_url })
          .eq('id', id);

        if (error) {
          throw error;
        }

        setBlogs(blogs.map(b => b.id === id ? editBlog : b));
        setEditBlog(null);
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-[24px] text-center mb-4">Blog Management</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog.heading}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <strong>Date:</strong> {blog.date}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <strong>Domain:</strong> {blog.domain}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <strong>Short Description:</strong> {blog.short_description}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <strong>Content:</strong> {blog.content}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <strong>Creator Name:</strong> {blog.creator_name}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <strong>Creator Designation:</strong> {blog.creator_designation}
              </p>
              <div className="mt-4 flex space-x-2">
                <button 
                  onClick={() => handleUpdate(blog)} 
                  className="text-blue-600 hover:text-blue-900"
                >
                  Update
                </button>
                <button 
                  onClick={() => handleDelete(blog.id)} 
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {editBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Update Blog</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={editBlog.date}
                  onChange={(e) => setEditBlog({ ...editBlog, date: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domain">
                  Domain
                </label>
                <input
                  type="text"
                  id="domain"
                  value={editBlog.domain}
                  onChange={(e) => setEditBlog({ ...editBlog, domain: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="heading">
                  Heading
                </label>
                <input
                  type="text"
                  id="heading"
                  value={editBlog.heading}
                  onChange={(e) => setEditBlog({ ...editBlog, heading: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="short_description">
                  Short Description
                </label>
                <textarea
                  id="short_description"
                  value={editBlog.short_description}
                  onChange={(e) => setEditBlog({ ...editBlog, short_description: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                  Content
                </label>
                <textarea
                  id="content"
                  value={editBlog.content}
                  onChange={(e) => setEditBlog({ ...editBlog, content: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creator_name">
                  Creator Name
                </label>
                <input
                  type="text"
                  id="creator_name"
                  value={editBlog.creator_name}
                  onChange={(e) => setEditBlog({ ...editBlog, creator_name: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creator_designation">
                  Creator Designation
                </label>
                <input
                  type="text"
                  id="creator_designation"
                  value={editBlog.creator_designation}
                  onChange={(e) => setEditBlog({ ...editBlog, creator_designation: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image_url">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image_url"
                  value={editBlog.image_url}
                  onChange={(e) => setEditBlog({ ...editBlog, image_url: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditBlog(null)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
