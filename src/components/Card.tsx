import type { FC } from 'react';

interface Props {
  title: string;
  body: string;
  href: string;
  className?: string;
}

const Card: FC<Props> = ({ href, title, body, className }) => {
  return (
    <div className={className}>
      <li className="list-none flex p-[1px] bg-[#23262d] bg-none bg-[length:400%] rounded-lg bg-[100%] transition-[background-position] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
        <a 
          href={href}
          className="w-full no-underline leading-[1.4] p-[calc(1.5rem-1px)] rounded-lg text-white bg-[#23262d] opacity-80 hover:bg-[image:var(--accent-gradient)] hover:bg-[0%] focus:bg-[image:var(--accent-gradient)] focus:bg-[0%]"
        >
          <h2 className="m-0 text-xl transition-colors duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[rgb(var(--accent-light))] focus:text-[rgb(var(--accent-light))]">
            {title}
            <span>&rarr;</span>
          </h2>
          <p className="mt-2 mb-0">
            {body}
          </p>
        </a>
      </li>
    </div>
  );
};

export default Card;
