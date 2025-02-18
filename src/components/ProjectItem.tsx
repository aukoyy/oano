import type { FC } from 'react';
import type { ProjectItemProps } from '../types/cv';


const ProjectItem: FC<ProjectItemProps> = ({ title, startMonth, endMonth, techStack, description, organization, url, image }) => {
  return (
    <li className="bg-stone-900 px-4 py-8 rounded">
      <a 
        href={url}
        className=""
      >
        <h2 className="text-2xl">
          {title}
        </h2>
        <p>{startMonth} - {endMonth ?  endMonth : 'now'}</p>
        <p>{organization}</p>
        <p className="mt-2 mb-0">
          {description}
        </p>
        <div className='mt-4'>
          <span>Tech stack: </span>
          {techStack.map((tech: string) => <span>{tech}, </span>)}
        </div>
      </a>
    </li>
  );
};

export default ProjectItem;
