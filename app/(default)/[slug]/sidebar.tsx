import Image from "next/image";
import Mike from "@/public/images/mike.png";
import Jeff from "@/public/images/jeff.png";
import Link from "next/link";

export default function Sidebar({
  apple,
  spotify,
  amazon,
  guestName,
  guestHandle,
  guestImage,
}: {
  apple: string;
  spotify: string;
  amazon: string;
  guestName: string;
  guestHandle: string;
  guestImage: string;
}) {
  return (
    <aside className="md:w-72 md:shrink-0">
      <div className="relative bg-gray-100 rounded-3xl p-6">
        <div
          className="absolute top-0 right-0 -mt-8 mr-14 pointer-events-none"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50">
            <path
              fill="#ef3047"
              d="M.71 13.283A22.888 22.888 0 0 0 12.205.206c.125-.345 2.162 11.236 9.026 13.47 0 0-8.305 3.98-10.272 11.862.008.11-.47-6.26-10.249-12.255ZM48 36.768a24 24 0 0 0 12.06-13.76c.13-.36 2.26 11.8 9.5 14.14 0 0-8.71 4.18-10.78 12.45-.03.11-.53-6.57-10.78-12.83Z"
            />
          </svg>
        </div>
        <h4 className="font-hkgrotesk font-extrabold text-lg text-gray-800 mb-4">
          {guestName ? "Hosts & Guests" : "Hosts"}
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center">
            <Image
              className="shrink-0 rounded-full object-cover mr-3"
              src={Mike}
              width={44}
              height={44}
              alt="Mike Blumenthal profile picture"
            />
            <div>
              <div className="font-hkgrotesk font-extrabold text-gray-800">
                Mike Blumenthal
              </div>
              <div>
                <a
                  className="block font-hkgrotesk font-medium text-red-500 text-xs hover:underline"
                  href="https://twitter.com/MichaelScottBlu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @MichaelScottBlu
                </a>
              </div>
            </div>
          </li>
          <li className="flex items-center">
            <Image
              className="shrink-0 rounded-full mr-3"
              src={Jeff}
              width={44}
              height={44}
              alt="Jeff Jakinovich profile picture"
            />
            <div>
              <div className="font-hkgrotesk font-extrabold text-gray-800">
                Jeff Jakinovich
              </div>
              <div>
                <a
                  className="block font-hkgrotesk font-medium text-red-500 text-xs hover:underline"
                  href="https://twitter.com/jeffbuildstech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @JeffBuildsTech
                </a>
              </div>
            </div>
          </li>
          {guestName && (
            <li className="flex items-center">
              <Image
                className="shrink-0 rounded-full mr-3"
                src={guestImage}
                width={44}
                height={44}
                alt={guestName}
              />
              <div>
                <div className="font-hkgrotesk font-extrabold text-gray-800">
                  {guestName}
                </div>
                <div>
                  <a
                    className="block font-hkgrotesk font-medium text-red-500 text-xs hover:underline"
                    href={`https://twitter.com/${guestHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{guestHandle}
                  </a>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
      <div className="my-8 flex flex-col gap-4">
        <h4 className="font-hkgrotesk font-extrabold text-gray-800">
          {" "}
          Listen on{" "}
        </h4>
        <a href={apple} target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/Apple.svg"
            alt="Apple Podcasts button"
            width={200}
            height={80}
          />
        </a>

        <a href={spotify} target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/Spotify.svg"
            alt="Spotify Podcasts button"
            width={200}
            height={80}
          />
        </a>

        <a href={amazon} target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/amazon.png"
            alt="Amazon Podcasts button"
            width={200}
            height={80}
          />
        </a>
      </div>
    </aside>
  );
}
