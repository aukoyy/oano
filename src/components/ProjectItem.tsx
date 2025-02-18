import type { FC } from 'react';
import type { ProjectItemProps } from '../types/cv';


const ProjectItem: FC<ProjectItemProps> = ({ title, startMonth, endMonth, techStack, description, organization, url, image }) => {
  return (
    <li className="">
      <a 
        href={url}
        className=""
      >
        <h2 className="text-xl">
          {title}
        </h2>
        <p className="mt-2 mb-0">
          {description}
        </p>
      </a>
    </li>
  );
};

export default ProjectItem;
