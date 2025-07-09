import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Incredible experience. DevMotion truly understands design.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "The animations are smooth and eye-catching. Love it!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "This feels like the future of creative development.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4 backdrop-blur-md transition-all duration-300",
        // light styles
        "border-gray-300/30 bg-white/60 hover:bg-white/80",
        // dark styles
        "dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
      )}
    >
      <div className="flex items-center gap-3">
        <img
          className="rounded-full border border-white/20"
          width="36"
          height="36"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold dark:text-white text-gray-900">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-gray-700 dark:text-white/70">
        “{body}”
      </blockquote>
    </figure>
  );
};

export function TestinomialSection() {
  return (
    <section className="relative w-full px-4 py-16">
      <div className="mx-auto max-w-7xl w-full flex flex-col gap-6 overflow-hidden">
        {/* First Row */}
        <Marquee pauseOnHover className="[--duration:20s] gap-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Second Row */}
        <Marquee reverse pauseOnHover className="[--duration:20s] gap-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/70"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/70"></div>
    </section>
  );
}
