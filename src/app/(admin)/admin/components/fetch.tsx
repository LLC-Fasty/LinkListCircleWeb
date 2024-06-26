"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../../../../../utils/supabaseClient';

interface Detail {
  id: number;
  name: string;
  email: string;
  message: string;
}

export default function Fetch() {
  const [details, setDetails] = useState<Detail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editDetail, setEditDetail] = useState<Detail | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const { data, error } = await supabase
        .from('detail')
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setDetails(data as Detail[]);
      }
      setLoading(false);
    };

    fetchDetails();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase
        .from('detail')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setDetails(details.filter(detail => detail.id !== id));
    } catch (error:any) {
      setError(error.message);
    }
  };

  const handleUpdate = (detail: Detail) => {
    setEditDetail(detail);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editDetail) {
      const { id, name, email, message } = editDetail;
      try {
        const { error } = await supabase
          .from('detail')
          .update({ name, email, message })
          .eq('id', id);

        if (error) {
          throw error;
        }

        setDetails(details.map(d => d.id === id ? editDetail : d));
        setEditDetail(null);
      } catch (error:any) {
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
      <h2 className="text-[24px] text-center mb-4">Contact Us Details</h2>
      {details.length === 0 ? (
        <p>No details found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.map((detail) => (
            <div 
              key={detail.id} 
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {detail.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <strong>Email:</strong> {detail.email}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <strong>Message:</strong> {detail.message}
              </p>
              <div className="mt-4 flex space-x-2">
                <button 
                  onClick={() => handleUpdate(detail)} 
                  className="text-blue-600 hover:text-blue-900"
                >
                  Update
                </button>
                <button 
                  onClick={() => handleDelete(detail.id)} 
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {editDetail && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Update Detail</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={editDetail.name}
                  onChange={(e) => setEditDetail({ ...editDetail, name: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={editDetail.email}
                  onChange={(e) => setEditDetail({ ...editDetail, email: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={editDetail.message}
                  onChange={(e) => setEditDetail({ ...editDetail, message: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
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
                  onClick={() => setEditDetail(null)}
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