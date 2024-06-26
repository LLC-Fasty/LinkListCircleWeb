"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '../../../../utils/supabaseClient';
import Image from 'next/image';
import Container from '@/app/components/container';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

interface BlogPost {
  id: number;
  date: string;
  domain: string;
  heading: string;
  short_description: string;
  content: string;
  creator_name: string;
  creator_designation: string;
  image_url?: string;
}

export default function Page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', params.id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setPost(data);
      }
    };

    fetchPost();
  }, [params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-[#F2ECBE]'>
    <Header />
    <Container>
      <div className='pt-[250px] pb-[100px]'>
      <div key={post.id}>
        <article className="flex flex-col items-start justify-between p-4 bg-[#9A3B3B] rounded-[30px]">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-[#E2C799]">
              {post.date}
            </time>
            <span className="relative z-0 rounded-full bg-[#C08261] px-3 py-1.5 font-medium text-[#F2ECBE] hover:bg-[#E2C799] hover:text-[#C08261]">
              {post.domain}
            </span>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-4xl tracking-wide font-black leading-10 text-[#F2ECBE] text-center">
              {post.heading}
            </h3>
            {post.image_url && (
              <Image src={post.image_url} alt="" className="mt-4 w-full object-cover rounded-lg" width={500} height={300} />
            )}
            <p className="mt-5 text-xl leading-6 text-[#E2C799]">{post.short_description}</p>
            <p className="mt-5 text-lg text-justify  leading-10 text-[#E2C799]">{post.content}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <Image src="/creator.png" alt="" className="h-10 w-10 rounded-full" width={50} height={50} />
            <div className="text-sm leading-6">
              <p className="font-semibold text-2xl text-[#F2ECBE]">
                {post.creator_name}
              </p>
              <p className="text-[#E2C799] font-medium text-lg">{post.creator_designation}</p>
            </div>
          </div>
        </article>
      </div>
      </div>
    </Container>
    <Footer />
    </div>
  );
}
