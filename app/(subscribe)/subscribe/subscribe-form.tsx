"use client";

import { useState, useRef } from "react";

export default function SubscribeForm() {
  const [url, setUrl] = useState<string>("https://cruip.com/podcast");

  const input = useRef<HTMLInputElement>(null);

  const copyUrl = () => {
    navigator.clipboard.writeText(url);
    input.current?.select();
  };

  return (
    <div className="max-w-[360px] mx-auto pb-8 lg:pb-0">
      <div className="text-xs text-white font-medium uppercase italic mb-8">
        Subscribe by RSS feed
      </div>
      <div className="w-full">
        <label className="sr-only" htmlFor="url">
          URL
        </label>
        <div className="relative flex items-center">
          <div
            className="absolute inset-0 opacity-60 bg-gradient-to-r from-gray-800 to-gray-900/50 rounded-full pointer-events-none -z-10"
            aria-hidden="true"
          />
          <input
            id="url"
            type="text"
            className="form-input w-full bg-transparent text-gray-100 border-white focus:ring-0 pr-24 text-sm"
            defaultValue="https://feeds.buzzsprout.com/2348768.rss"
            ref={input}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="absolute inset-0 left-auto text-sm pl-2 pr-3 font-medium text-white"
            onClick={copyUrl}
          >
            <span
              className="absolute inset-0 right-auto w-px -ml-px my-2 bg-white"
              aria-hidden="true"
            />
            <span>Copy URL</span>
          </button>
        </div>
      </div>
    </div>
  );
}
