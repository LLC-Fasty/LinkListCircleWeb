"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabaseClient';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from "next/link";

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

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*');
      
      if (error) {
        console.error(error);
      } else {
        setPosts(data || []);
      }
    };

    fetchPosts();
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div id='blogs' className="py-24 sm:py-32 mt-[100px] z-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-full lg:mx-0 text-center">
          <h2 className="text-3xl font-black tracking-tight text-[#9A3B3B] sm:text-[44px]">Blog</h2>
          <p className="mt-2 text-xl font-medium leading-8 text-[#C08261]">
            Do you love blockchain, gaming, and emerging tech?
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl border-t border-[#9A3B3B] pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {posts.length > 3 ? (
            <Slider {...settings} >
              {posts.map((post) => (
                <div key={post.id}>
                  <Link href={`/blogs/${post.id}`}>
                    <article className="flex flex-col items-start justify-between p-4 bg-[#9A3B3B] rounded-[30px] m-2">
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.date} className="text-[#E2C799]">
                          {post.date}
                        </time>
                        <span className="relative z-10 rounded-full bg-[#C08261] px-3 py-1.5 font-medium text-[#F2ECBE] hover:bg-[#E2C799] hover:text-[#C08261]">
                          {post.domain}
                        </span>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-xl tracking-wide font-semibold leading-6 text-[#F2ECBE]">
                          {post.heading}
                        </h3>
                        {post.image_url && (
                          <Image src={post.image_url} alt="" className="mt-4 w-full h-48 object-cover rounded-lg" width={500} height={300} />
                        )}
                        <p className="mt-5 line-clamp-3 text-base leading-6 text-[#E2C799]">{post.short_description}</p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <Image src="/creator.png" alt="" className="h-10 w-10 rounded-full" width={50} height={50} />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-lg text-[#F2ECBE]">
                            {post.creator_name}
                          </p>
                          <p className="text-[#E2C799] font-medium text-base">{post.creator_designation}</p>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {posts.map((post) => (
                <Link href={`/blogs/${post.id}`}>
                  <article className="flex flex-col items-start justify-between p-4 bg-[#9A3B3B] rounded-[30px] m-2">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="text-[#E2C799]">
                        {post.date}
                      </time>
                      <span className="relative z-10 rounded-full bg-[#C08261] px-3 py-1.5 font-medium text-[#F2ECBE] hover:bg-[#E2C799] hover:text-[#C08261]">
                        {post.domain}
                      </span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 line-clamp-1 text-xl tracking-wide font-semibold leading-6 text-[#F2ECBE]">
                        {post.heading}
                      </h3>
                      {post.image_url && (
                        <Image src={post.image_url} alt="" className="mt-4 w-full h-48 object-cover rounded-lg" width={500} height={300} />
                      )}
                      <p className="mt-5 line-clamp-3 text-base leading-6 text-[#E2C799]">{post.short_description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <Image src="/creator.png" alt="" className="h-10 w-10 rounded-full" width={50} height={50} />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-lg text-[#F2ECBE]">
                          {post.creator_name}
                        </p>
                        <p className="text-[#E2C799] font-medium text-base">{post.creator_designation}</p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
